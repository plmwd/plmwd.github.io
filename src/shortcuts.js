import { useCallback, useEffect } from "react";
import { atom } from "jotai";
import { useAtomCallback } from "jotai/utils";

class ShortcutNode {
  constructor(key = null) {
    this.key = key;
    this.keys = new Map();
    this.callback = null;
  }
}

const shortcuts = new ShortcutNode();
const TIMEOUT = 500;
let curNode = shortcuts;
export const keysAtom = atom("");
let timer = null;

function resetState(set) {
  clearTimeout(timer);
  set(keysAtom, "");
  curNode = shortcuts;
  timer = null;
}

function startTimer(get, set) {
  timer = setTimeout(() => {
    const keys = get(keysAtom);
    if (keys) {
      console.error("Wrong shortcut:", keys);
    }
      resetState(set);
  }, TIMEOUT);
}

export function useUpdateShortcuts() {
  return useAtomCallback(
    useCallback((get, set, key) => {
      set(keysAtom, (keys) => keys + key);
      console.log(get(keysAtom), key);
      let keyNode = curNode.keys.get(key);

      if (keyNode === undefined || keyNode.key !== key) {
        console.error("Wrong shortcut:", get(keysAtom));
        resetState(set);
        return;
      }

      if (keyNode.callback) {
        keyNode.callback();
        resetState(set);
        return;
      }

      curNode = curNode.keys.get(key);
      if (timer) clearTimeout(timer);
      startTimer(get, set);
    })
  );
}

function addShortcut(keys, callback) {
  let node = shortcuts;
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    console.log(k, i);
    if (node.keys.has(k)) {
      node = node.keys.get(k);

      if (i === keys.length - 1) {
        // console.log("resetting callback");
        node.callback = callback;
      }
    } else {
      // console.log("creating node");
      let newNode = new ShortcutNode(k);
      if (i === keys.length - 1) {
        newNode.callback = callback;
      }
      node.keys.set(k, newNode);
      node = newNode;
    }
    console.log(k, node);
  }
}

export function useShortcut(keys, callback) {
  useEffect(() => {
    if (keys !== undefined) {
      addShortcut(keys, callback);
    }
    // TODO: remove shortcut
  }, [keys, callback]);
}

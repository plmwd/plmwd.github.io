import { useEffect } from "react";

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
let curKeys = "";
let timer = null;

function resetState() {
  clearTimeout(timer);
  curKeys = "";
  curNode = shortcuts;
  timer = null;
}

function startTimer() {
  timer = setTimeout(() => {
    console.error("Wrong shortcut:", curKeys);
    resetState();
  }, TIMEOUT);
}

export function tryNextKey(key) {
  curKeys += key;
  console.log(curKeys, key)
  let keyNode = curNode.keys.get(key);

  if (keyNode == undefined || keyNode.key !== key) {
    console.error("Wrong shortcut:", curKeys);
    let oldKeys = curKeys;
    resetState();
    return oldKeys;
  }

  if (keyNode.callback) {
    keyNode.callback();
    let oldKeys = curKeys;
    resetState();
    return oldKeys;
  }

  curNode = curNode.keys.get(key);
  if (timer) clearTimeout(timer);
  startTimer();
  return curKeys;
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
        node.callback = callback
      }
    } 
    else {
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
    addShortcut(keys, callback);
    // TODO: remove shortcut
  }, [keys, callback]);
}

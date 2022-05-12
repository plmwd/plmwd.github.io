// This assumes that there are no input fields anywhere lol

import { useMemo } from "react";

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

function tryNextKey(key) {
  curKeys += key;
  let keyNode = curNode.keys.get(key);

  if (keyNode == undefined || keyNode.key !== key) {
    console.error("Wrong shortcut:", curKeys);
    resetState();
    return;
  }

  if (keyNode.callback) {
    keyNode.callback();
    resetState();
  } else {
    curNode = curNode.keys.get(key);
    if (timer) clearTimeout(timer);
    startTimer();
  }
}

function keypressListener(event) {
  tryNextKey(event.key);
}

export function shortcutsListen() {
  console.log('listen')
  addEventListener("keypress", keypressListener);
}

export function shortcutsIgnore() {
  console.log('ignore')
  if (timer) clearTimeout(timer);
  removeEventListener("keypress", keypressListener);
}

export function addShortcut(keys, callback) {
  let node = shortcuts;
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    if (node.keys.has(k)) {
      node = node.get(k);
    } else {
      let newNode = new ShortcutNode(k);
      if (i === keys.length - 1) {
        newNode.callback = callback;
      }
      node.keys.set(k, newNode);
      node = newNode;
    }
  }
}

export function useShortcut(keys, callback) {
  useMemo(() => addShortcut(keys, callback), [keys, callback]);
  return curKeys;
}

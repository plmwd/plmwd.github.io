import { useEffect, useRef } from "react";
import { executeCommand } from "./commands";
import { atom, useAtom } from "jotai";
import { tryNextKey } from "./shortcuts";

let modeAtom = atom("normal");
let commandAtom = atom("");
let keysAtom = atom("");
let initialized = false;

function useRefAtom(atom) {
  const [val, _setVal] = useAtom(atom);
  const valRef = useRef(val);
  return [
    val,
    valRef,
    (newVal) => {
      valRef.current = newVal;
      _setVal(newVal);
    },
  ];
}

export function useVim() {
  const [mode, modeRef, setMode] = useRefAtom(modeAtom);
  const [command, commandRef, setCommand] = useRefAtom(commandAtom);
  const [keys, keysRef, setKeys] = useRefAtom(keysAtom);

  useEffect(() => {
    if (initialized) return;

    addEventListener("keypress", (event) => {
      const mode = modeRef.current;
      const command = commandRef.current;
      console.log(event, mode, command);
      switch (event.key) {
        case ":":
          if (mode === "normal") {
            setMode("command");
            setCommand(":");
            // setCommand(":");
          }
          break;

        case "Enter":
          if (mode === "command") {
            executeCommand(command.slice(1));
            setMode("normal");
            setCommand("");
          }
          break;

        case "Escape":
          if (mode === "command") {
            setMode("normal");
            setCommand("");
          }
          break;

        case "Backspace":
          if (mode === "command") {
            setCommand(command.slice(0, -1));
            if (command.length === 1) {
              setMode("normal");
            }
          }
          break;

        default:
          if (mode === "command") {
            setCommand(commandRef.current + event.key);
          } else {
            setKeys(tryNextKey(event.key));
          }
      }
    });

    initialized = true;
  }, []);

  return { mode, command, keys };
}

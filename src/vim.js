import { useEffect, useRef } from "react";
import { tryNextKey } from "./shortcuts";
import { executeCommand } from "./commands";
import { atom, useAtom } from "jotai";

let modeAtom = atom("normal")
let commandAtom = atom("")
let initialized = false;

export function useVim() {
  const [mode, _setMode] = useAtom(modeAtom)
  const modeRef = useRef(mode)
  const [command, _setCommand] = useAtom(commandAtom)
  const commandRef = useRef(command)

  const setMode = newMode => {
    modeRef.current = newMode
    _setMode(newMode)
  }

  const setCommand = newCommand => {
    commandRef.current = newCommand
    _setCommand(newCommand)
  }

  useEffect(() => {
    if (initialized) return;

    addEventListener("keypress", (event) => {
      const mode = modeRef.current
      const command = commandRef.current
      console.log(event, mode, command);
      switch (event.key) {
        case ":":
          if (mode === "normal") {
            setMode("command");
            setCommand(":")
            // setCommand(":");
          }
          break;

        case "Enter":
          if (mode === "command") {
            executeCommand(command);
            setMode("normal");
            setCommand("");
          }
          break;

        case "Escape":
          if (mode === "command") {
            setMode("normal")
            setCommand("")
          }
          break;

        case "Backspace":
          if (mode === "command") {
            setCommand(command.slice(0, -1))
            if (command.length === 1) {
              setMode("normal")
            }
          }
          break;

        default:
          if (mode === "command") {
            setCommand(commandRef.current + event.key);
          } else {
            tryNextKey(event.key);
          }
      }
    });

    initialized = true;
  }, []);

  return { mode, command };
}

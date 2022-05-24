import { atom, useAtomValue } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect } from "react";
import {
    commandAtom, useExecuteCommand, useResetCommand, useUpdateCommand
} from "./commands";
import { keysAtom, useUpdateShortcuts } from "./shortcuts";

let modeAtom = atom("normal");
let initialized = false;

export function useVim() {
  const command = useAtomValue(commandAtom);
  const keys = useAtomValue(keysAtom);
  const updateCommand = useUpdateCommand();
  const resetCommand = useResetCommand();
  const executeCommand = useExecuteCommand();
  const updateShortcuts = useUpdateShortcuts();
  const mode = useAtomValue(modeAtom);

  const updateMode = useAtomCallback(
    useCallback((get, set, key) => {
      const mode = get(modeAtom);
      console.log(event, mode, command);
      switch (key) {
        case ":":
          if (mode === "normal") {
            set(modeAtom, "command");
            updateCommand(":");
          }
          break;

        case "Enter":
          if (mode === "command") {
            executeCommand();
            set(modeAtom, "normal");
          }
          break;

        case "Escape":
          if (mode === "command") {
            set(modeAtom, "normal");
            resetCommand();
          }
          break;

        case "Backspace":
          if (mode === "command") {
            updateCommand({ backspace: true });
            if (command.length === 1) {
              set(modeAtom, "normal");
            }
          }
          break;

        case "Tab":
          if (mode === "command") {
            updateCommand({ autocomplete: true })
          }
          break;

        default:
          if (mode === "command") {
            updateCommand(key);
          } else {
            updateShortcuts(key);
          }
      }
    })
  );

  useEffect(() => {
    if (initialized) return;

    addEventListener("keypress", (event) => {
      updateMode(event.key);
    });

    initialized = true;
  }, []);

  return { mode, command, keys };
}

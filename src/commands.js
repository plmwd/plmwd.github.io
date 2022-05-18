import { useAtomCallback } from "jotai/utils";
import { atom, useAtomValue } from "jotai";
import { useCallback, useEffect } from "react";

const commands = new Map();
export const commandAtom = atom("");

export function useCommand(newCommand, callback) {
  useEffect(() => {
    if (newCommand !== undefined) {
      commands.set(newCommand, callback);
    }
  }, [newCommand, callback]);
}

export function useExecuteCommand() {
  return useAtomCallback(
    useCallback((get, set, cmd) => {
      const commandName = cmd || get(commandAtom);
      const command =
        commandName[0] === ":"
          ? commands.get(commandName.slice(1))
          : commands.get(commandName);

      set(commandAtom, "");
      if (command) {
        return command();
      }
      return new Error("Command not found");
    })
  );
}

export function useResetCommand() {
  return useAtomCallback(
    useCallback((_, set) => {
      set(commandAtom, "");
    })
  );
}

export function useUpdateCommand() {
  return useAtomCallback(
    useCallback((_, set, keyOrOptions) => {
      if (typeof keyOrOptions === "string") {
        set(commandAtom, (cmd) => cmd + keyOrOptions);
      } else {
        const { backspace } = keyOrOptions;
        if (backspace) {
          set(commandAtom, (cmd) => cmd.slice(0, -1));
        }
      }
    })
  );
}

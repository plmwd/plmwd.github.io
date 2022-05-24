import { useAtomCallback } from "jotai/utils";
import { atom, useAtomValue } from "jotai";
import { useCallback, useEffect } from "react";

const commands = new Map();
export const commandAtom = atom("");
const showAutoCompleteAtom = atom(false);

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
      set(showAutoCompleteAtom, false);
    })
  );
}

export function useUpdateCommand() {
  return useAtomCallback(
    useCallback((_, set, keyOrOptions) => {
      if (typeof keyOrOptions === "string") {
        set(commandAtom, (cmd) => cmd + keyOrOptions);
      } else {
        const { backspace, autocomplete } = keyOrOptions;
        if (backspace) {
          set(commandAtom, (cmd) => cmd.slice(0, -1));
          set(showAutoCompleteAtom, false);
        } else if (autocomplete) {
          set(showAutoCompleteAtom, true);
        }
      }
    })
  );
}

export function useAutoComplete() {
  return useAtomCallback(
    useCallback((get) => {
      return get(showAutoCompleteAtom)
        ? commands.map((cmd) => cmd.startsWith(get(keysAtom)))
        : [];
    })
  );
}

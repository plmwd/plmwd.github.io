import { useEffect } from "react";

let commands = new Map();

export function executeCommand(command) {
  const cmd = commands.get(command);
  if (cmd) {
    cmd()
  }
  else {
    console.error("Invalid command:", command);
  }
}

export function useCommand(command, callback) {
  useEffect(() => {
    commands.set(command, callback);
  }, [command, callback]);
}

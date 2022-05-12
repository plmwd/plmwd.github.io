import { shortcutsListen, shortcutsIgnore } from "./shortcuts"

let curMode = "normal"
let curCommand = ""

function commandModeStartListener(event) {
  switch(event.key) {
    case ":":
      if (curMode === "normal") {
        shortcutsIgnore()
        curMode = "command";
        curCommand = ""
      }
      break;

    case "Enter":
      if (curMode === "command") {
        console.log("executing command: ", curCommand)
        shortcutsListen()
        curMode = "normal"
        curCommand = ""
      }
      break;

    default:
      curCommand += event.key
  }
}

export function initModeManager() {
  addEventListener("keypress", commandModeStartListener)
  shortcutsListen()
}

export function useMode() {
  return curMode
}

export function useCommand() {
  return curCommand
}

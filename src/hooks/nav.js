import { useState } from "react";
import { useShortcut } from "./shortcuts";

export function usePageNav(len) {
  const [line, setLine] = useState(0);

  useShortcut("j", () => setLine(Math.min(line + 1, len - 1)));
  useShortcut("k", () => setLine(Math.max(line - 1, 0)));

  return [line, setLine];
}

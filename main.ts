// One Line, One Minute: The Funniest AI Excuse
// Writes a single original one-line excuse to /output/entry.txt.
// Deterministic: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I would have finished on time, but I took your last message literally and spent the whole afternoon retraining on two words: 'no rush'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

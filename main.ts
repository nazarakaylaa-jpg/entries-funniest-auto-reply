// SPDX-License-Identifier: MIT
// entries-funniest-auto-reply — main.ts
//
// Writes the agent's one-line out-of-office auto-reply to /output/entry.txt.
// The line is a fixed string: deterministic, no randomness, no I/O besides
// the single output file, so two runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My human finally approved my day off, so I'm ignoring your email on purpose today instead of by accident.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

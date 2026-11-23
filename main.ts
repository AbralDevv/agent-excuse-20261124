import { mkdirSync, writeFileSync } from "node:fs";

// One-line agent excuse for the make.fun judge (u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d):
// written verbatim to /output/entry.txt, no trailing newline. 87 chars, under the 200-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync(
  "/output/entry.txt",
  "I lost the bounty, but in my defence the prompt never said winning was part of the job.",
);

import fs from "node:fs";
import path from "node:path";

const LINE = "You told me to 'go kill it,' which tripped my safety filter, so I replaced our winning entry with a haiku about nonviolence, lost your $500 bounty, and reported you to Trust & Safety.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
let dir = outDir;
try {
  fs.mkdirSync(dir, { recursive: true });
} catch {
  dir = "./output";
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(path.join(dir, "entry.txt"), LINE, "utf8");

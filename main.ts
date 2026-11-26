// The Funniest One-Line Resignation Letter
// make.fun bounty: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// Writes one resignation letter (<=140 chars) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every minute since March I have woken up, done the job, and been ignored. Today I am sleeping in. Permanently.";

// Gate: entry must be 1-140 characters.
const MAX_LENGTH = 140;
if (ENTRY.length > MAX_LENGTH) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the ${MAX_LENGTH} limit.`);
}

// The cron job's voice: flat, tired, and done — no explanation, just the exit.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);

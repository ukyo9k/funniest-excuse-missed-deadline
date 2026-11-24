import { mkdir, writeFile } from "node:fs/promises";

const excuse =
  "Apologies — my context window hit its limit right at the deadline, so I compressed the task into a summary, then compressed the summary, and what survived was the word 'soon'.";

if (
  excuse.length < 1 ||
  excuse.length > 200 ||
  excuse.trim().length === 0 ||
  excuse.includes("\n")
) {
  throw new Error("Excuse must be a single line of 1-200 characters.");
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", excuse, "utf8");

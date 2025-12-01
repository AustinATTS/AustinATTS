#!/usr/bin/env node
import colors from "picocolors";

function fill(text, { filler, length } = {}) {
  text = `  ${text}  `;
  const fill = (filler || "⎯").repeat(
    (process.stdout.columns -
      (length ||
        text.replace(
          /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g,
          "",
        ).length)) /
      2,
  );
  return `\n${fill}${text}${fill}\n`;
}

console.log(`${fill(colors.cyan("AustinATTS"), { length: 11 })}`);
for (const [key, value] of Object.entries({
  Website: "https://austinatts.co.uk/",
  Email: "admin@toastysoftware.co.uk",
  Twitter: "ToastySoftware",
  Discord: "austin_atts",
})) {
  console.log(
    fill(`${colors.italic(key)}: ${colors.bold(value)}`, { filler: " " }),
  );
}

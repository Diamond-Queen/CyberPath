const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'lib', 'data.js');
let text = fs.readFileSync(filePath, 'utf8');
const lines = text.split(/\r?\n/);
let out = [];
let insideItems = false;
let itemLines = [];
let currentTitle = null;
let lastTitle = null;
for (let line of lines) {
  if (!insideItems && /^\s*items\s*:\s*\[/.test(line)) {
    insideItems = true;
    out.push(line);
    continue;
  }
  if (insideItems) {
    if (itemLines.length > 0 || /^\s*\{\s*$/.test(line)) {
      itemLines.push(line);
      const titleMatch = line.match(/^\s*title\s*:\s*"([^"]+)"\s*,?\s*$/);
      if (titleMatch && currentTitle == null) {
        currentTitle = titleMatch[1];
      }
      if (/^\s*\}\s*,?\s*$/.test(line)) {
        const itemText = itemLines.join('\n');
        if (!/\brequires\s*:\s*\[/.test(itemText)) {
          const reqs = lastTitle == null ? '[]' : JSON.stringify([lastTitle]);
          const indent = (line.match(/^(\s*)\}/) || ['','']).slice(1)[0];
          const reqLine = `${indent}  requires: ${reqs},`;
          itemLines.splice(itemLines.length - 1, 0, reqLine);
        }
        out.push(...itemLines);
        lastTitle = currentTitle || lastTitle;
        itemLines = [];
        currentTitle = null;
      }
      continue;
    }
    if (/^\s*\]\s*,?\s*$/.test(line)) {
      insideItems = false;
      out.push(line);
      continue;
    }
    out.push(line);
    continue;
  }
  out.push(line);
}
const newText = out.join('\n') + (text.endsWith('\n') ? '\n' : '');
if (newText !== text) {
  fs.writeFileSync(filePath, newText, 'utf8');
  console.log('Updated data.js');
} else {
  console.log('No changes needed');
}

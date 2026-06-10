const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'lib', 'data.js');
const text = fs.readFileSync(filePath, 'utf8');
const lines = text.split(/\r?\n/);
const out = [];
let inItems = false;
let itemDepth = 0;
let itemLines = [];
let currentTitle = null;
let lastTitle = null;
let itemRequiresExists = false;
let inActivities = false;
let activityDepth = 0;
let inItemArray = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  if (!inItems) {
    if (/^\s*items\s*:\s*\[\s*$/.test(line)) {
      inItems = true;
      inItemArray = true;
      out.push(line);
      continue;
    }
    out.push(line);
    continue;
  }
  // inside an items array
  if (itemDepth > 0) {
    itemLines.push(line);
    if (/^\s*activities\s*:\s*\[\s*$/.test(line)) {
      inActivities = true;
      activityDepth = 1;
    } else if (inActivities) {
      activityDepth += (line.match(/\[/g) || []).length;
      activityDepth -= (line.match(/\]/g) || []).length;
      if (activityDepth === 0) {
        inActivities = false;
      }
    }
    if (inActivities && /^\s*requires\s*:\s*\[.*\],?\s*$/.test(trimmed)) {
      continue; // remove incorrect requires inside activities
    }
    if (!inActivities && /^\s*requires\s*:\s*\[.*\],?\s*$/.test(trimmed)) {
      itemRequiresExists = true;
    }
    if (/\{/.test(line) && !/^\s*\{\s*$/.test(line)) {
      // object start on same line like activity objects, no action needed for depth
    }
    itemDepth += (line.match(/\{/g) || []).length;
    itemDepth -= (line.match(/\}/g) || []).length;
    if (itemDepth === 0) {
      if (!itemRequiresExists) {
        const indentMatch = itemLines[itemLines.length - 1].match(/^(\s*)\}/);
        const indent = indentMatch ? indentMatch[1] : '            ';
        const reqs = lastTitle ? JSON.stringify([lastTitle]) : '[]';
        const reqLine = `${indent}  requires: ${reqs},`;
        itemLines.splice(itemLines.length - 1, 0, reqLine);
      }
      out.push(...itemLines);
      lastTitle = currentTitle || lastTitle;
      itemLines = [];
      currentTitle = null;
      itemRequiresExists = false;
      continue;
    }
    const titleMatch = line.match(/^\s*title\s*:\s*"([^"]+)"\s*,?\s*$/);
    if (titleMatch && currentTitle == null) {
      currentTitle = titleMatch[1];
    }
    continue;
  }
  // not inside an item object, but inside items array
  if (/^\s*\{\s*$/.test(line)) {
    itemDepth = 1;
    itemLines = [line];
    currentTitle = null;
    itemRequiresExists = false;
    continue;
  }
  if (/^\s*\]\s*,?\s*$/.test(line)) {
    inItems = false;
    out.push(line);
    continue;
  }
  out.push(line);
}
const newText = out.join('\n') + (text.endsWith('\n') ? '\n' : '');
fs.writeFileSync(filePath, newText, 'utf8');
console.log('Fixed lib/data.js');

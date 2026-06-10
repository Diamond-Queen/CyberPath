const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'lib', 'data.js');
const text = fs.readFileSync(filePath, 'utf8');
// Remove all lines that have requires inside activity objects (lines with double indent + requires and between activities/]/)
const lines = text.split(/\r?\n/);
const fixed = [];
let inActivities = false;
let activitiesIndent = 0;
let currentItemTitle = null;
let lastItemTitle = null;
let currentPhase = null;
let inItems = false;
let itemsIndent = 0;
let inItem = false;
let itemIndent = 0;
let itemHasRequires = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  const indent = line.match(/^(\s*)/)[1].length;
  // Track activities arrays
  if (/activities\s*:\s*\[/.test(trimmed)) {
    inActivities = true;
    activitiesIndent = indent;
    fixed.push(line);
    continue;
  }
  if (inActivities) {
    // Skip requires lines that appear inside activities
    if (/requires\s*:\s*\[/.test(trimmed) && indent > activitiesIndent + 2) {
      continue;
    }
    if (/\]\s*,?\s*$/.test(trimmed) && indent === activitiesIndent) {
      inActivities = false;
      fixed.push(line);
      continue;
    }
    fixed.push(line);
    continue;
  }
  // Track items arrays
  if (/items\s*:\s*\[/.test(trimmed)) {
    inItems = true;
    itemsIndent = indent;
    fixed.push(line);
    continue;
  }
  if (inItems) {
    // Track individual items
    if (/^\s*\{\s*$/.test(line)) {
      inItem = true;
      itemIndent = indent;
      itemHasRequires = false;
      currentItemTitle = null;
      fixed.push(line);
      continue;
    }
    if (inItem) {
      // Capture title
      const titleMatch = trimmed.match(/^title\s*:\s*"([^"]+)"/);
      if (titleMatch) {
        currentItemTitle = titleMatch[1];
      }
      // Check for requires at item level
      if (/^requires\s*:\s*\[/.test(trimmed)) {
        itemHasRequires = true;
        fixed.push(line);
        continue;
      }
      // End of item
      if (/^\}\s*,?\s*$/.test(line) && indent === itemIndent) {
        // If item doesn't have requires, add one before closing
        if (!itemHasRequires) {
          const reqs = lastItemTitle ? JSON.stringify([lastItemTitle]) : '[]';
          const reqLine = `${' '.repeat(itemIndent + 2)}requires: ${reqs},`;
          fixed.push(reqLine);
        }
        lastItemTitle = currentItemTitle || lastItemTitle;
        currentItemTitle = null;
        inItem = false;
        fixed.push(line);
        continue;
      }
      fixed.push(line);
      continue;
    }
    // End of items array
    if (/\]\s*,?\s*$/.test(trimmed) && indent === itemsIndent) {
      inItems = false;
      fixed.push(line);
      continue;
    }
    fixed.push(line);
    continue;
  }
  fixed.push(line);
}
const result = fixed.join('\n') + (text.endsWith('\n') ? '\n' : '');
fs.writeFileSync(filePath, result, 'utf8');
console.log('Rebuilt lib/data.js with proper JSON structure');

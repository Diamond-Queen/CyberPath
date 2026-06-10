from pathlib import Path
import re
path = Path('lib/data.js')
text = path.read_text(encoding='utf-8')
lines = text.splitlines()
out_lines = []
inside_items = False
item_lines = []
current_title = None
last_title = None
for line in lines:
    if not inside_items and re.match(r'\s*items\s*:\s*\[', line):
        inside_items = True
        out_lines.append(line)
        continue
    if inside_items:
        if item_lines or re.match(r'\s*\{\s*$', line):
            item_lines.append(line)
            title_match = re.match(r'\s*title\s*:\s*"([^"]+)"\s*,?\s*$', line)
            if title_match and current_title is None:
                current_title = title_match.group(1)
            if re.match(r'\s*\}\s*,?\s*$', line):
                item_text = '\n'.join(item_lines)
                if 'requires:' not in item_text:
                    reqs = '[]' if last_title is None else f'["{last_title}"]'
                    indent = re.match(r'(\s*)\}', item_lines[-1]).group(1)
                    req_line = f'{indent}  requires: {reqs},'
                    item_lines.insert(-1, req_line)
                out_lines.extend(item_lines)
                last_title = current_title or last_title
                item_lines = []
                current_title = None
            continue
        if re.match(r'\s*\]\s*,?\s*$', line):
            inside_items = False
            out_lines.append(line)
            continue
        out_lines.append(line)
    else:
        out_lines.append(line)
new_text = '\n'.join(out_lines) + ('\n' if text.endswith('\n') else '')
if new_text != text:
    path.write_text(new_text, encoding='utf-8')
    print('Updated')
else:
    print('No changes')

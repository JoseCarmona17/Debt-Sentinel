const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/app/dashboard/page.tsx',
  'src/app/plans/page.tsx',
  'src/app/report/page.tsx',
  'src/app/report/detail/page.tsx',
  'src/app/diagnostic/page.tsx',
  'src/app/lexicography/page.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  
  const removeBlock = (tag) => {
    const regex = new RegExp('<' + tag + ' className="[^"]*(?:fixed|docked|sticky)[^>]*>', 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      const startIndex = match.index;
      let depth = 1;
      let i = startIndex + match[0].length;
      while (i < content.length && depth > 0) {
        if (content.startsWith('<' + tag, i)) {
          depth++;
        } else if (content.startsWith('</' + tag + '>', i)) {
          depth--;
        }
        i++;
      }
      if (depth === 0) {
        const endIndex = i + tag.length + 2;
        content = content.substring(0, startIndex) + content.substring(endIndex);
        regex.lastIndex = 0;
      } else {
        break;
      }
    }
  };

  removeBlock('nav');
  removeBlock('header');

  content = content.replace(/\{\/\*\s*TopNavBar\s*\*\/\}/g, '');

  fs.writeFileSync(file, content);
  console.log('Processed ' + file);
});

const fs = require('fs');
const path = require('path');

const files = [
  { in: 'dashboard.html', out: 'src/app/dashboard/page.tsx' },
  { in: 'plans.html', out: 'src/app/plans/page.tsx' },
  { in: 'report_detail.html', out: 'src/app/report/detail/page.tsx' },
  { in: 'diagnostic.html', out: 'src/app/diagnostic/page.tsx' },
  { in: 'report.html', out: 'src/app/report/page.tsx' },
  { in: 'lexicography.html', out: 'src/app/lexicography/page.tsx' }
];

files.forEach(file => {
  if (!fs.existsSync(file.in)) return;
  let html = fs.readFileSync(file.in, 'utf-8');
  
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    html = bodyMatch[1];
  }
  
  html = html.replace(/class="/g, 'className="');
  html = html.replace(/<!--[\s\S]*?-->/g, '{/* comment */}');
  
  // self-close img, input, br, hr
  html = html.replace(/<img([^>]*)>/g, (match, p1) => p1.endsWith('/') ? match : `<img${p1} />`);
  html = html.replace(/<input([^>]*)>/g, (match, p1) => p1.endsWith('/') ? match : `<input${p1} />`);
  html = html.replace(/<br>/g, '<br />');
  html = html.replace(/<hr>/g, '<hr />');
  
  // inline styles
  html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    let styles = p1.split(';').filter(s => s.trim().length > 0).map(s => {
      let [key, ...valParts] = s.split(':');
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      let val = valParts.join(':').trim().replace(/'/g, '"');
      return `${key}: '${val}'`;
    }).join(', ');
    return `style={{ ${styles} }}`;
  });

  const content = `import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      ${html}
    </div>
  );
}
`;

  fs.mkdirSync(path.dirname(file.out), { recursive: true });
  fs.writeFileSync(file.out, content);
  console.log(`Converted ${file.in} to ${file.out}`);
});

const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Replace text colors
      content = content.replace(/text-white\/80/g, 'text-slate-600');
      content = content.replace(/text-white\/90/g, 'text-slate-700');
      content = content.replace(/text-white\/70/g, 'text-slate-500');
      content = content.replace(/text-white\/60/g, 'text-slate-500');
      content = content.replace(/text-white\/50/g, 'text-slate-400');
      content = content.replace(/text-white\/30/g, 'text-slate-300');
      content = content.replace(/text-white\/20/g, 'text-slate-200');
      content = content.replace(/text-white\/10/g, 'text-slate-100');
      
      // We only want to replace text-white if it's not inside a button or something that should stay white
      // But it's hard to distinguish. Let's just replace text-white with text-slate-900
      // and then manually fix buttons if needed. Actually, btn-primary has text-white in index.css, not in className usually.
      // Wait, some links have text-white. Let's replace text-white with text-slate-900.
      content = content.replace(/text-white(?![\/\w])/g, 'text-slate-900');
      
      // Replace border colors
      content = content.replace(/border-white\/10/g, 'border-slate-200');
      content = content.replace(/border-white\/20/g, 'border-slate-200');
      content = content.replace(/border-white\/30/g, 'border-slate-300');
      
      // Replace background colors
      content = content.replace(/bg-white\/5/g, 'bg-white');
      content = content.replace(/bg-white\/10/g, 'bg-slate-50');
      content = content.replace(/bg-primary\/5/g, 'bg-slate-100');
      content = content.replace(/bg-primary\/90/g, 'bg-white/95');
      content = content.replace(/bg-primary\/80/g, 'bg-white/90');
      
      // Replace specific Navbar/Footer classes
      content = content.replace(/bg-primary/g, 'bg-white');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src', 'pages'));
processDirectory(path.join(__dirname, 'src', 'components'));

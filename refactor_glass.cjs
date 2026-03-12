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
      
      // Replace bg-primary/90 backdrop-blur-sm with glassmorphism
      content = content.replace(/className="([^"]*)bg-primary\/90 backdrop-blur-sm([^"]*)"/g, 'className="$1bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl m-4 md:m-8$2"');
      
      // Replace bg-primary with glassmorphism (only when it's the main section background)
      content = content.replace(/className="([^"]*)py-24 bg-primary([^"]*)"/g, 'className="$1py-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl m-4 md:m-8$2"');
      
      // Also handle <div className="bg-primary/90 backdrop-blur-sm"> wrappers
      content = content.replace(/<div className="bg-primary\/90 backdrop-blur-sm">/g, '<div className="bg-transparent">');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src', 'pages'));
processDirectory(path.join(__dirname, 'src', 'components'));

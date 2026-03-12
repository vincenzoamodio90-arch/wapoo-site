import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') && !filePath.includes('DigitalParticles.tsx') && !filePath.includes('App.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Remove import
    content = content.replace(/import DigitalParticles from '[^']+';\n?/g, '');
    
    // Remove component usage (multiline)
    content = content.replace(/<DigitalParticles[\s\S]*?\/>/g, '');
    
    // Replace solid backgrounds with semi-transparent ones
    content = content.replace(/\bbg-white\b/g, 'bg-white/90 backdrop-blur-sm');
    content = content.replace(/\bbg-slate-50\b/g, 'bg-slate-50/90 backdrop-blur-sm');
    content = content.replace(/\bbg-primary\b/g, 'bg-primary/90 backdrop-blur-sm');
    content = content.replace(/\bbg-secondary\b/g, 'bg-secondary/90 backdrop-blur-sm');
    content = content.replace(/\bfrom-primary\b/g, 'from-primary/90');
    content = content.replace(/\bvia-secondary\b/g, 'via-secondary/90');
    content = content.replace(/\bto-primary\b/g, 'to-primary/90');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});

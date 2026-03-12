import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (filePath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Text colors
    content = content.replace(/text-slate-900/g, 'text-white');
    content = content.replace(/text-slate-800/g, 'text-slate-100');
    content = content.replace(/text-slate-700/g, 'text-slate-200');
    content = content.replace(/text-slate-600/g, 'text-slate-300');
    content = content.replace(/text-slate-500/g, 'text-slate-400');
    content = content.replace(/text-primary/g, 'text-white');
    
    // Background colors
    content = content.replace(/bg-slate-50/g, 'bg-white/5');
    content = content.replace(/bg-slate-100/g, 'bg-white/10');
    content = content.replace(/bg-slate-200/g, 'bg-white/20');
    content = content.replace(/bg-white\/60/g, 'bg-white/5');
    content = content.replace(/bg-white\/80/g, 'bg-white/10');
    content = content.replace(/bg-white\/95/g, 'bg-[#0a0f1c]/95');
    content = content.replace(/bg-white(?!\/)/g, 'bg-white/5'); // only bg-white without slash
    
    // Border colors
    content = content.replace(/border-slate-200/g, 'border-white/10');
    content = content.replace(/border-slate-300/g, 'border-white/20');
    content = content.replace(/border-white\/50/g, 'border-white/10');

    // Fix artifacts
    content = content.replace(/bg-white\/5\/90/g, 'bg-white/5');
    content = content.replace(/bg-white\/10\/90/g, 'bg-white/10');
    content = content.replace(/bg-white\/20\/90/g, 'bg-white/20');
    content = content.replace(/bg-white\/5\/80/g, 'bg-white/5');
    content = content.replace(/bg-white\/10\/80/g, 'bg-white/10');
    content = content.replace(/bg-white\/20\/80/g, 'bg-white/20');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});

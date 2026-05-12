const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js')) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace motion with m in framer-motion imports
  content = content.replace(/import\s+{\s*motion(,\s*[^}]*)?\s*}\s+from\s+['"]framer-motion['"];/g, (match, p1) => {
    return `import { m${p1 || ''} } from 'framer-motion';`;
  });

  // Replace motion.div with m.div, motion.h1 with m.h1 etc
  content = content.replace(/<motion\./g, '<m.');
  content = content.replace(/<\/motion\./g, '</m.');

  // Extract and replace lucide-react imports
  const lucideRegex = /import\s+{\s*([^}]+)\s*}\s+from\s+['"]lucide-react['"];/g;
  let match;
  let newLucideImports = '';
  
  while ((match = lucideRegex.exec(content)) !== null) {
    const icons = match[1].split(',').map(i => i.trim()).filter(i => i);
    icons.forEach(icon => {
      // Convert PascalCase to kebab-case
      const kebabCase = icon.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
      // Remove leading dash if present
      const finalKebab = kebabCase.startsWith('-') ? kebabCase.substring(1) : kebabCase;
      newLucideImports += `import ${icon} from 'lucide-react/dist/esm/icons/${finalKebab}';\n`;
    });
  }

  if (newLucideImports) {
    content = content.replace(lucideRegex, newLucideImports.trim());
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

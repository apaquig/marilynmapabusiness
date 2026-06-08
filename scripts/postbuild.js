import fs from 'fs';
import path from 'path';

const base = '';
const distDir = path.resolve('dist');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (file.endsWith('.html') || file.endsWith('.xml') || file.endsWith('.js') || file.endsWith('.css')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = getFiles(distDir);
console.log(`Processing ${files.length} built files for base path prefixing...`);

files.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace root-relative hrefs, srcs, and urls
  // Examples:
  // href="/blog/" -> href="/marilynmapabusiness/blog/"
  // src="/js/i18n.js" -> src="/marilynmapabusiness/js/i18n.js"
  // url('/marilin.webp') -> url('/marilynmapabusiness/marilin.webp')
  
  // href attribute
  content = content.replace(/(href=")\/(?!(marilynmapabusiness|http|https|tel:|mailto:|javascript:))/g, `$1${base}/`);
  
  // src attribute
  content = content.replace(/(src=")\/(?!(marilynmapabusiness|http|https|data:))/g, `$1${base}/`);
  
  // url(...) in style tags
  content = content.replace(/(url\(['"]?)\/(?!(marilynmapabusiness|http|https))/g, `$1${base}/`);

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    // console.log(`Prefixed paths in ${path.relative(distDir, filePath)}`);
  }
});

console.log('Post-build path rewriting complete!');

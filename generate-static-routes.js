import fs from 'fs';
import path from 'path';

const routes = [
  'about',
  'services',
  'portfolio',
  'why-choose',
  'faq',
  'contact',
  'blog',
  'blog/bio-ethanol-fireplace-buyers-guide',
  'blog/outdoor-entertaining-bio-ethanol-fireplace'
];

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html not found! Run vite build first.');
  process.exit(1);
}

// Generate fallback 404.html for static servers
try {
  fs.copyFileSync(indexPath, path.join(distPath, '404.html'));
  console.log('Successfully generated dist/404.html');
} catch (err) {
  console.error('Failed to create 404.html fallback:', err);
}

// Generate physical routes allowing safe refresh checks
routes.forEach((route) => {
  const targetDir = path.join(distPath, route);
  const targetIndex = path.join(targetDir, 'index.html');
  
  try {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(indexPath, targetIndex);
    console.log(`Successfully generated static route index for /${route}`);
  } catch (err) {
    console.error(`Failed to generate route for /${route}:`, err);
  }
});

console.log('Static route fallbacks generated successfully!');

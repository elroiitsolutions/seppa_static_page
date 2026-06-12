const fs = require('fs');
const path = require('path');

const filesToFix = [
    'src/components/layout/Header.tsx',
    'src/components/layout/Footer.tsx',
    'src/components/home/WhyChooseUs.tsx',
    'src/components/home/HomeHero.tsx',
    'src/components/home/HomeFAQs.tsx',
    'src/components/home/AboutIndustries.tsx'
];

for (const file of filesToFix) {
    const fullPath = path.join('d:/Seppa Solutions website temp/yarnex-next', file);
    if (!fs.existsSync(fullPath)) continue;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;

    // Fix pill button hover: change group-hover:bg-white to group-hover:bg-[#101934]
    // But ONLY if it's accompanied by text-white and bg-[#8B2A2A] in the same className string.
    // An easier way is just string replacements for the exact broken lines:
    
    content = content.replace(/group-hover:bg-white/g, 'group-hover:bg-[#101934]');
    
    // Fix arrow button normal state:
    content = content.replace(/bg-white flex items-center justify-center text-white/g, 'bg-[#101934] flex items-center justify-center text-white');

    if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed buttons in: ' + file);
    }
}
console.log('Done');

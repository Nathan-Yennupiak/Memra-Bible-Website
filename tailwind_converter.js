const fs = require('fs');

function cssToTailwind(cssObj) {
  const classes = [];
  
  if (cssObj.display === 'inline-block') classes.push('inline-block');
  if (cssObj.display === 'block') classes.push('block');
  
  if (cssObj.fontFamily) {
    if (cssObj.fontFamily.includes('Playfair Display')) classes.push("font-serif font-['Playfair_Display',_serif]");
    else if (cssObj.fontFamily.includes('DM Sans')) classes.push("font-sans font-['DM_Sans',_sans-serif]");
    else classes.push(`font-[${cssObj.fontFamily.replace(/ /g, '_')}]`);
  }
  
  if (cssObj.fontSize) {
    if (typeof cssObj.fontSize === 'number') classes.push(`text-[${cssObj.fontSize}px]`);
    else classes.push(`text-[${cssObj.fontSize.replace(/ /g, '')}]`);
  }
  
  if (cssObj.fontWeight) {
    if (cssObj.fontWeight === 700) classes.push('font-bold');
    else if (cssObj.fontWeight === 500) classes.push('font-medium');
    else if (cssObj.fontWeight === 400) classes.push('font-normal');
    else classes.push(`font-[${cssObj.fontWeight}]`);
  }
  
  if (cssObj.lineHeight) classes.push(`leading-[${cssObj.lineHeight}]`);
  
  if (cssObj.color) classes.push(`text-[${cssObj.color}]`);
  if (cssObj.background) classes.push(`bg-[${cssObj.background}]`);
  
  if (cssObj.borderTop) {
    const parts = cssObj.borderTop.split(' ');
    classes.push(`border-t-[${parts[0]}] border-t-${parts[1]} border-t-[${parts[2]}]`);
  }
  
  if (cssObj.border) {
    const parts = cssObj.border.split(' ');
    classes.push(`border-[${parts[0]}] border-${parts[1]} border-[${parts[2]}]`);
  }
  
  if (cssObj.borderBottom) {
    const parts = cssObj.borderBottom.split(' ');
    classes.push(`border-b-[${parts[0]}] border-b-${parts[1]} border-b-[${parts[2]}]`);
  }
  
  if (cssObj.borderRadius !== undefined) {
    if (cssObj.borderRadius === 0) classes.push('rounded-none');
    else if (cssObj.borderRadius === '50%') classes.push('rounded-full');
    else classes.push(`rounded-[${cssObj.borderRadius}px]`);
  }
  
  if (cssObj.padding) {
    if (typeof cssObj.padding === 'number') classes.push(`p-[${cssObj.padding}px]`);
    else if (typeof cssObj.padding === 'string') {
      const parts = cssObj.padding.split(' ');
      if (parts.length === 2) classes.push(`py-[${parts[0]}] px-[${parts[1]}]`);
      else classes.push(`p-[${cssObj.padding}]`);
    }
  }
  
  if (cssObj.margin) classes.push(`m-[${cssObj.margin}]`);
  if (cssObj.marginTop) classes.push(`mt-[${cssObj.marginTop}px]`);
  if (cssObj.marginLeft) classes.push(`ml-[${cssObj.marginLeft}px]`);
  
  if (cssObj.width) {
    if (typeof cssObj.width === 'number') classes.push(`w-[${cssObj.width}px]`);
    else classes.push(`w-[${cssObj.width.replace(/ /g, '')}]`);
  }
  if (cssObj.height) {
    if (typeof cssObj.height === 'number') classes.push(`h-[${cssObj.height}px]`);
    else classes.push(`h-[${cssObj.height.replace(/ /g, '')}]`);
  }
  if (cssObj.minHeight) classes.push(`min-h-[${cssObj.minHeight}${typeof cssObj.minHeight === 'number' ? 'px' : ''}]`);
  if (cssObj.maxWidth) classes.push(`max-w-[${cssObj.maxWidth}]`);
  
  if (cssObj.boxShadow) classes.push(`shadow-[${cssObj.boxShadow.replace(/ /g, '_')}]`);
  
  if (cssObj.letterSpacing) classes.push(`tracking-[${cssObj.letterSpacing}]`);
  if (cssObj.textTransform === 'uppercase') classes.push('uppercase');
  if (cssObj.fontStyle === 'italic') classes.push('italic');
  if (cssObj.fontStyle === 'normal') classes.push('not-italic');
  
  return classes.join(' ');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  const styleRegex = /style=\{\{([^}]*)\}\}/g;
  
  content = content.replace(styleRegex, (match, innerProps) => {
    if (innerProps.includes('rotate') || innerProps.includes('translateY') || innerProps.includes('transform')) {
       return match; 
    }
    
    let cleanedProps = innerProps.replace(/\.\.\.display,?/g, "fontFamily: \"'Playfair Display', serif\",");
    cleanedProps = cleanedProps.replace(/\.\.\.body,?/g, "fontFamily: \"'DM Sans', sans-serif\",");
    
    let obj;
    try {
      obj = eval(`({${cleanedProps}})`);
    } catch (e) {
      console.log(`Could not parse: {${cleanedProps}}`);
      return match;
    }
    
    const tailwindClasses = cssToTailwind(obj);
    if (!tailwindClasses) return match;
    
    modified = true;
    return `data-tw="${tailwindClasses}"`;
  });
  
  const classNameRegex = /className="([^"]+)"\s+data-tw="([^"]+)"/g;
  content = content.replace(classNameRegex, (match, cls, tw) => {
    return `className="${cls} ${tw}"`;
  });
  
  const classNameRegex2 = /data-tw="([^"]+)"\s+className="([^"]+)"/g;
  content = content.replace(classNameRegex2, (match, tw, cls) => {
    return `className="${cls} ${tw}"`;
  });
  
  const noClassRegex = /data-tw="([^"]+)"/g;
  content = content.replace(noClassRegex, (match, tw) => {
    return `className="${tw}"`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${filePath}`);
  }
}

['app/page.tsx', 'components/Header.tsx', 'components/Footer.tsx'].forEach(file => {
  if (fs.existsSync(file)) {
    processFile(file);
  }
});

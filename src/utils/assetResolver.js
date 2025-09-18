/**
 * Asset Resolver Utility
 * Resolves asset references in data objects
 */

/**
 * Resolves asset references in an object recursively
 * @param {any} obj - The object to process
 * @param {object} assets - The assets object containing image URLs
 * @returns {any} - The processed object with resolved asset references
 */
export const resolveAssets = (obj, assets) => {
  if (typeof obj === 'string' && obj.startsWith('@assets.')) {
    // Resolve asset reference like "@assets.images.landmarkMap"
    const path = obj.replace('@assets.', '').split('.');
    let resolved = assets;
    
    for (const key of path) {
      if (resolved && typeof resolved === 'object' && key in resolved) {
        resolved = resolved[key];
      } else {
        console.warn(`Asset not found: ${obj}`);
        return obj; // Return original string if asset not found
      }
    }
    
    return resolved;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => resolveAssets(item, assets));
  }
  
  if (obj && typeof obj === 'object') {
    const resolved = {};
    for (const [key, value] of Object.entries(obj)) {
      resolved[key] = resolveAssets(value, assets);
    }
    return resolved;
  }
  
  return obj;
};

/**
 * Processes the entire data object to resolve all asset references
 * @param {object} data - The complete data object
 * @returns {object} - The processed data with resolved assets
 */
export const processDataWithAssets = (data) => {
  if (!data || !data.assets) {
    console.warn('No assets found in data object');
    return data;
  }
  
  const { assets, ...rest } = data;
  
  // Process all language objects
  if (rest.languages) {
    const processedLanguages = {};
    for (const [lang, langData] of Object.entries(rest.languages)) {
      processedLanguages[lang] = resolveAssets(langData, assets);
    }
    
    return {
      ...rest,
      languages: processedLanguages
    };
  }
  
  return resolveAssets(rest, assets);
};



const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Paths
const ASSETS_DIR = path.resolve(__dirname, '../public/assets');
const SRC_DIR = path.resolve(__dirname, '../src');

// Get all asset files
const getAssetFiles = () => {
    return glob.sync(`${ASSETS_DIR}/**/*.{jpg,jpeg,png,gif,svg,webp}`);
};

// Get all source files that might reference assets
const getSourceFiles = () => {
    return glob.sync(`${SRC_DIR}/**/*.{js,jsx,ts,tsx,md,mdx,css}`);
};

// Extract the relative path for easier matching
const getRelativePath = (fullPath) => {
    return fullPath.split('/assets/')[1];
};

// Main function
const auditAssets = () => {
    console.log('Starting assets audit...');

    const assetFiles = getAssetFiles();
    const sourceFiles = getSourceFiles();

    console.log(`Found ${assetFiles.length} asset files`);
    console.log(`Scanning ${sourceFiles.length} source files for references`);

    // Track usage
    const usageMap = {};
    assetFiles.forEach(file => {
        usageMap[getRelativePath(file)] = {
            path: file,
            used: false,
            references: []
        };
    });

    // Check each source file for references to assets
    sourceFiles.forEach(sourceFile => {
        const content = fs.readFileSync(sourceFile, 'utf-8');

        Object.keys(usageMap).forEach(assetPath => {
            // Check for various ways the asset might be referenced
            const patterns = [
                assetPath,
                `/assets/${assetPath}`,
                `assets/${assetPath}`,
                `"${assetPath}"`,
                `'${assetPath}'`
            ];

            for (const pattern of patterns) {
                if (content.includes(pattern)) {
                    usageMap[assetPath].used = true;
                    usageMap[assetPath].references.push(sourceFile);
                    break;
                }
            }
        });
    });

    // Filter unused assets
    const unusedAssets = Object.keys(usageMap)
        .filter(key => !usageMap[key].used)
        .map(key => usageMap[key].path);

    // Filter used assets
    const usedAssets = Object.keys(usageMap)
        .filter(key => usageMap[key].used)
        .map(key => usageMap[key].path);

    console.log('\n--- AUDIT RESULTS ---');
    console.log(`Total assets: ${assetFiles.length}`);
    console.log(`Used assets: ${usedAssets.length}`);
    console.log(`Unused assets: ${unusedAssets.length}`);

    if (unusedAssets.length > 0) {
        console.log('\nUnused assets:');
        unusedAssets.forEach(file => {
            console.log(`- ${getRelativePath(file)}`);
        });

        // Create an unused-assets folder
        const unusedDir = path.resolve(ASSETS_DIR, '../unused-assets');
        if (!fs.existsSync(unusedDir)) {
            fs.mkdirSync(unusedDir);
        }

        console.log('\nWould you like to move unused assets to unused-assets folder? (y/n)');
        // Note: In a real script, you'd add input handling here
    }
};

// Run the audit
auditAssets(); 
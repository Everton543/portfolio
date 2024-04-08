const fs = require('fs');
const path = require('path');

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

exports.index = async (req, res) => {
    try {
        const layoutPath = path.join(__dirname, '../public/layout.html');
        const contentPath = path.join(__dirname, '../views/home.html');

        const layout = await readFileAsync(layoutPath);
        const content = await readFileAsync(contentPath);

        let htmlContent = layout
            .replace('<$title>', 'Home')
            .replace('<$css>', '<link rel="stylesheet" href="/css/home.css">')
            .replace('<$js>', '<script src="/js/home.js" type="module"></script>')
            .replace('<$content>', content);

        res.send(htmlContent);
    } catch (err) {
        console.error("Error loading page:", err);
        res.status(500).send('Error loading page');
    }
};

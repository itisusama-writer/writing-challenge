// Fetch and render the Markdown file
fetch('story/chapters/chapter-12.md')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
})
.then(markdown => {
    const htmlContent = marked.parse(markdown);
    document.getElementById('markdown-content').innerHTML = htmlContent;
})
.catch(error => {
    console.error('Error fetching the Markdown file:', error);
    document.getElementById('markdown-content').textContent = 'Failed to load the chapter content.';
});

// Copy to clipboard functionality
document.getElementById('copy-button').addEventListener('click', () => {
const markdownContent = document.getElementById('markdown-content').innerText;
navigator.clipboard.writeText(markdownContent).then(() => {
    alert('Chapter copied to clipboard!');
}).catch(err => {
    alert('Failed to copy chapter content.');
    console.error('Error:', err);
});
});
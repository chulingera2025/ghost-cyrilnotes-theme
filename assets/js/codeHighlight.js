import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

// Code highlighting with line numbers
export default function codeHighlight() {
    document.querySelectorAll('pre code').forEach(function (codeBlock) {
        // Apply syntax highlighting
        hljs.highlightElement(codeBlock);

        // Skip plain text blocks — no line numbers needed
        if (codeBlock.classList.contains('language-text')) return;

        // Count lines
        const code = codeBlock.textContent || '';
        let lines = code.split(/\n(?!$)/g).length;
        if (lines > 1) lines++; // Account for trailing newline

        // Don't add line numbers for single-line blocks
        if (lines <= 1) return;

        // Generate line number spans
        let numbers = '';
        for (let i = 1; i < lines; i++) {
            numbers += `<span class="line" aria-hidden="true">${i}</span>`;
        }

        // Wrap code in a container and add line numbers
        const linesContainer = document.createElement('div');
        linesContainer.className = 'lines';
        linesContainer.innerHTML = numbers;
        codeBlock.parentNode.insertBefore(linesContainer, codeBlock);

        // Add wrapper class
        codeBlock.parentNode.classList.add('code-block');
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre code').forEach((block) => {
    const pre = block.parentElement;

    const button = document.createElement('button');
    button.innerText = '📋 COPY';
    button.className = 'copy-button';

    button.addEventListener('click', () => {
      let text = block.textContent;

      let lines = text.split('\n');

      let filteredLines = lines.map(line => {
        const index = line.indexOf('//');
        if (index !== -1) {
          return line.slice(0, index).replace(/\s+$/, '');
        }
        return line;
      });

      text = filteredLines.join('\n');

      navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'COPIED';
        setTimeout(() => { button.textContent = '📋 COPY'; }, 1500);
      }).catch(() => {
        button.textContent = '失敗';
        setTimeout(() => { button.textContent = '📋 COPY'; }, 1500);
      });
    });

    pre.style.position = 'relative';
    pre.appendChild(button);
  });
});

// ダークモード
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'on' : 'off');
}

// 初期状態で localStorage を確認し反映
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark');
  }
});

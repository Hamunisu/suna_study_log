document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre code').forEach((block) => {
    const pre = block.parentElement;

    const button = document.createElement('button');
    button.innerText = '📋 copy';
    button.className = 'copy-button';

    button.addEventListener('click', () => {
      let text = block.textContent;

      let lines = text.split('\n');

      // 各行について、行の中の // 以降を削除（空白除去はしない）
      let filteredLines = lines.map(line => {
        const index = line.indexOf('//');
        if (index !== -1) {
          return line.slice(0, index).replace(/\s+$/, ''); // コメント前の空白は削除
        }
        return line;
      });

      text = filteredLines.join('\n');

      navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'copied';
        setTimeout(() => { button.textContent = '📋 copy'; }, 1500);
      }).catch(() => {
        button.textContent = '失敗';
        setTimeout(() => { button.textContent = '📋 copy'; }, 1500);
      });
    });

    pre.style.position = 'relative';
    pre.appendChild(button);
  });
});

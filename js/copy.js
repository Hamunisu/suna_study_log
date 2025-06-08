document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre code').forEach((block) => {
    const pre = block.parentElement;

    // ボタンを作成
    const button = document.createElement('button');
    button.innerText = '📋 copy';
    button.className = 'copy-button';

    // コピー処理（整形なし）
    button.addEventListener('click', () => {
      let text = block.textContent;   // ←ここをcodeからblockに変更
      // 先頭・末尾の空行・空白を削除
      text = text.replace(/^\s*\n/, '').replace(/\n\s*$/, '');

      navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'copied';
        setTimeout(() => { button.textContent = '📋 copy'; }, 1500);
      }).catch(() => {
        button.textContent = '失敗';
        setTimeout(() => { button.textContent = '📋 copy'; }, 1500);
      });
    });

    // 配置
    pre.style.position = 'relative';
    pre.appendChild(button);
  });
});

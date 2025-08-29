
const $ = (s) => document.querySelector(s);
const aEl = $('#a');
const bEl = $('#b');
const btn = $('#btn');
const msg = $('#msg');

function parseNumber(raw) {
  if (typeof raw !== 'string') return NaN;
  // 允許使用逗號當小數點
  const normalized = raw.trim().replace(',', '.');
  // 允許前後空白；空字串視為 NaN
  return normalized === '' ? NaN : Number(normalized);
}

function showError(text) {
  msg.className = 'result error';
  msg.textContent = text;
}

function showOk(text) {
  msg.className = 'result ok';
  msg.textContent = text;
}

function calc() {
  const a = parseNumber(aEl.value);
  const b = parseNumber(bEl.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    showError('請輸入有效的數字（支援 3.5 或 3,5 形式）');
    return;
  }

  const sum = a + b;
  // 若是整數，顯示整數；否則保留最多 12 位有效小數，並去除多餘 0
  const fmt = (n) => Number.isInteger(n) ? String(n) : parseFloat(n.toFixed(12)).toString();
  showOk(`${fmt(a)} + ${fmt(b)} = ${fmt(sum)}`);
}

// 事件綁定
btn.addEventListener('click', calc);
[aEl, bEl].forEach(el => {
  el.addEventListener('keydown', (e) => {
if (e.key === 'Enter') calc();
  });
});

// 方便測試：自動聚焦到第一個輸入框
aEl.focus();

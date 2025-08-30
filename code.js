
const $ = (s) => document.querySelector(s);
const aEl = $('#a');
const bEl = $('#b');
const addResult = $('#addResult');
const subResult = $('#subResult');
const mulResult = $('#mulResult');
const divResult = $('#divResult');

function parseNumber(raw) {
  if (typeof raw !== 'string') return NaN;
  // 允許使用逗號當小數點
  const normalized = raw.trim().replace(',', '.');
  // 允許前後空白；空字串視為 NaN
  return normalized === '' ? NaN : Number(normalized);
}

function showError(text) {
  addResult.className = 'result error';
  addResult.textContent = text;
  subResult.className = 'result error';
  subResult.textContent = text;
  mulResult.className = 'result error';
  mulResult.textContent = text;
  divResult.className = 'result error';
  divResult.textContent = text;
}

function showOk(a, b, sum, difference, product, quotient) {
  // 若是整數，顯示整數；否則保留最多 12 位有效小數，並去除多餘 0
  const fmt = (n) => Number.isInteger(n) ? String(n) : parseFloat(n.toFixed(12)).toString();
  addResult.className = 'result ok';
  addResult.textContent = `${fmt(a)} + ${fmt(b)} = ${fmt(sum)}`;
  subResult.className = 'result ok';
  subResult.textContent = `${fmt(a)} - ${fmt(b)} = ${fmt(difference)}`;
  mulResult.className = 'result ok';
  mulResult.textContent = `${fmt(a)} * ${fmt(b)} = ${fmt(product)}`;
  if (quotient === '除數為0無法計算') {
    divResult.className = 'result error';
    divResult.textContent = quotient;
  } else {
    divResult.className = 'result ok';
    divResult.textContent = `${fmt(a)} / ${fmt(b)} = ${fmt(quotient)}`;
  }
}

function calc() {
  if (aEl.value == "" || bEl.value == "") return;

  const a = parseNumber(aEl.value);
  const b = parseNumber(bEl.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    showError('請輸入有效的數字（支援 3.5 或 3,5 形式）');
    return;
  }

  const sum = a + b;
  const difference = a - b;
  const product = a * b;
  let quotient = 0;
  if (b === 0) {
    quotient = '除數為0無法計算';
  } else {
    quotient = a / b;
  }

  showOk(a, b, sum, difference, product, quotient);

}

// 事件綁定
[aEl, bEl].forEach(el => el.addEventListener('input', calc));

// 方便測試：自動聚焦到第一個輸入框
aEl.focus();

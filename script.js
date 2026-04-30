const $ = (s) => document.querySelector(s);

let answer = Math.floor(Math.random() * 100) + 1;
const prompt = $('#prompt');
const inputBox = $('#input_guess_number');
const submit_btn = $('#submit_guess_number');
const counter = $('#counter')

let min = 0;
let max = 100;
let user_input = 50;
let cnt = 0;
submit_btn.addEventListener('click', guess);

function guess() {
  user_input = Number(inputBox.value);
  if (!Number.isInteger(user_input)) {
    prompt.innerText = '錯誤！請輸入整數！'
  } else if (user_input < min || user_input > max) {
    prompt.innerText = `錯誤！輸入的數字請在${min}~${max}之間！`;
  } else if (user_input === answer) {
    cnt += 1;
    prompt.innerText = `恭喜你猜對了！答案是${answer}！`;
    inputBox.disabled = true;
    submit_btn.innerText = '再玩一次';
    submit_btn.addEventListener('click', reset);
  } else if (user_input < answer) {
    cnt += 1;
    min = user_input;
    inputBox.min = min
    prompt.innerText = `請猜一個${min}~${max}間的整數（不包括${min}和${max}）`;
  } else {
    cnt += 1;
    max = user_input;
    inputBox.max = max;
    prompt.innerText = `請猜一個${min}~${max}間的整數（不包括${min}和${max}）`;
  }
  inputBox.value = '';
  counter.innerText = `你猜了 ${cnt} 次`;
};

function reset() {
  min = 0;
  max = 100;
  user_input = 50;
  cnt = 0;
  prompt.innerText = '請猜一個0~100間的整數（不包括0和100）';
  inputBox.value = '';
  inputBox.disabled = false;
  counter.innerText = '你猜了 0 次';
  submit_btn.innerText = '確定'
  submit_btn.addEventListener('click', guess)
}

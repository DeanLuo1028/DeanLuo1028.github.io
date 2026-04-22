function changeText() {
  const messages = [
    "你好，謝謝你來看我的網站！",
    "我之後還會再把這個網站改更好",
    "學寫網頁其實滿有趣的",
    "歡迎來我的 GitHub"
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[randomIndex];
}

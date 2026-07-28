// HTMLをJavaScriptで操作する

const button = document.querySelector("#btn");
const message = document.querySelector("#message");

const messages = [
    "今日はゆっくり休もう！",
    "好きなことを楽しもう！",
    "明日も頑張ろう！"
];

button.addEventListener("click", function(){

    let random = Math.floor(Math.random() * messages.length);

    message.textContent = messages[random];
});
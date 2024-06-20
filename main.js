document.getElementById('submitButton').addEventListener('click', function() {
    var inputBox = document.getElementById('inputBox');
    var message = document.getElementById('message');
    var inputText = inputBox.value.trim();

    // 假設正確的答案是 "are not"
    if (inputText === "are not") {
        message.textContent = "correct";
        message.style.color = "green";
    } else {
        message.textContent = "wrong";
        message.style.color = "red";
    }
});
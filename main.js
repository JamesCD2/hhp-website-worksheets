
function checkAnswers() {
    const answers = {
        blank1: "importance",
        blank2: "engaging"
        // Add more answers as needed
    };

    let correct = 0;
    let total = Object.keys(answers).length;

    for (let key in answers) {
        let userAnswer = document.getElementById(key).value.trim().toLowerCase();
        let inputField = document.getElementById(key);
        if (userAnswer === answers[key]) {
            correct++;
            // Replace input field with bold text
            let boldText = document.createElement("b");
            boldText.textContent = answers[key];
            inputField.parentNode.replaceChild(boldText, inputField);
        } else {
            inputField.style.borderColor = "red";
        }
    }

    let scorePercentage = ((correct/total)*100);

    let results = document.getElementById("results");
    results.innerHTML = `You got ${correct} out of ${total} correct.`;
    let score = document.getElementById("score");
    score.innerHTML = `Your score is ${scorePercentage}%.`;
}



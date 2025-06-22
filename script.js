function checkAnswer() {
    const feedback = document.getElementById("feedback");
    const correctAnswer = "4";

    // Get User answer
    const userAnswer = document.querySelector('[name="quiz"]:checked').value;

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer == correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

}

const submitButton = document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);
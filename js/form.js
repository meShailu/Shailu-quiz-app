const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hey");

  const questionInput = document.getElementById("form_question");
  const answerInput = document.getElementById("form_answer");
  const tagInput = document.getElementById("form_tag");
  console.log(questionInput);
  console.log();

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  //creating question card section
  const card = document.createElement("section");
  card.classList.add("questionCard");

  //creating question
  const questionText = document.createElement("p");
  questionText.textContent = question;

  //creating answer button
  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("questionCard__button");
  showAnswerButton.textContent = "Show Answer";
  showAnswerButton.type = "button";
  showAnswerButton.id = "toggleButton";

  //creating answer
  const answerText = document.createElement("p");
  answerText.classList.add("hidden");
  answerText.textContent = "answer";
  answerText.id = "answer";

  //creating tags
  const tagList = document.createElement("ul");
  tagList.classList.add("questionCard__tagList");

  const tagName = document.createElement("li");
  tagName.textContent = tag;
  tagList.append(tagName);

  card.append(questionText);
  card.append(showAnswerButton);
  card.append(answerText);
  card.append(tagList);

  document.body.append(card);
});

const questionTextArea = document.getElementById("form_question");
const answertextArea = document.getElementById("form_answer");

const questionremainingCharsText = document.getElementById(
  "my-text-remaining-chars-question"
);
const answeremainingCharsText = document.getElementById(
  "my-text-remaining-chars-answer"
);

const maxChars = 150;

questionTextArea.addEventListener("input", function () {
  const remaining = maxChars - questionTextArea.value.length;
  console.log(remaining);
  remainingChars(questionTextArea, remaining, questionremainingCharsText);
});

answertextArea.addEventListener("input", function () {
  const remaining = maxChars - answertextArea.value.length;
  console.log(remaining);
  remainingChars(answertextArea, remaining, answeremainingCharsText);
});

function remainingChars(textArea, remaining, remainingCharsText) {
  if (remaining >= 0) {
    remainingCharsText.textContent = `${remaining}  characters remaining`;
    remainingCharsText.style.color = "black";
  } else {
    remainingCharsText.style.color = "red";
    textArea.value = questionTextArea.value.substring(0, maxChars);
  }
}

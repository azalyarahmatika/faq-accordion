const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');
const paragraphs = document.querySelectorAll('.question_answer');
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', (event) => {
    const parentId = question.id;
    
    plusButtons.forEach((plusButton) => {
      if(plusButton.parentElement.parentElement.id === parentId){
        plusButton.classList.add('none');
        plusButton.classList.remove('block');
      } else {
        plusButton.classList.add('block');
        plusButton.classList.remove('none');
      }
    })

    minusButtons.forEach((minusButton) => {
      if(minusButton.parentElement.parentElement.id === parentId) {
        minusButton.classList.add('block');
        minusButton.classList.remove('none');
      } else {
        minusButton.classList.add('none');
        minusButton.classList.remove('block');
      }
    })

    paragraphs.forEach((paragraph) => {
      if(paragraph.parentElement.id === parentId) {
        paragraph.style.display = 'block';
      } else {
        paragraph.style.display = 'none';
      }
    })

    
  });
});

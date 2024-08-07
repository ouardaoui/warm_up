/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.querySelector('#quiz-form')
const inputs = document.querySelectorAll('.answer')
const questions = document.querySelectorAll('.question-item')
const alert = document.querySelector('#alert')

const arr = Array.from(inputs)
form.addEventListener('submit', e => {
    e.preventDefault()
    const answers = arr.filter(ele => ele.checked)
    answers.forEach(ele => {
        const isCorrect = ele.value == "true"
        const question = ele.closest(".question-item")
        if(isCorrect)
        {
            question.classList.add("correct")
            question.classList.remove("incorrect")
        }else
        {
            question.classList.add("incorrect")
            question.classList.remove("correct")
        }
    })
    const AllTrue = answers.every(ele => ele.value === "true")
    if(AllTrue)
    {
        alert.classList.add("active")
        setTimeout(() => {
            alert.classList.remove("active")
        },1000)
    }
})

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

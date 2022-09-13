const quizData = [
    {
        question: "Who's the best singer",
        a: "Taylor Swift",
        b: "Taylor Swift",
        c: "Taylor Swift",
        d: "Taylor Swift",
        correct: "a",
    },
    {
        question: "Is this project cool?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "I don't know",
        correct: "a",
    },
    {
        question: "Yes?",
        a: "Of course",
        b: "Why?",
        c: "Perhaps",
        d: "Coffee",
        correct: "d",
    },
    {
        question: "Question",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
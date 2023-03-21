const quizData =[
    {
        question : "Who is the father of Computer science?",
        a: "Charles Babbage",
        b: "Happy sapiens",
        c: "Edward Robert",
        d: "J.V. Atansoffi",
        correct: "a",
    },
    {
        question : 'What is the full form of RAM?',
        a: 'Ram Ajay Mohan',
        b: 'Random Access Memory',
        c: 'Read Acess Memory',
        d: 'Rajbet Acess Memory',
        correct: 'b',
    },
    {
        question : 'IC chips used in computers are usually made of',
        a: 'Lead',
        b: 'Silicon',
        c: 'Chromium',
        d: 'Gold',
        correct: 'b',
    },
    {
        question : 'Who is the founder of Facebook?',
        a: 'Bill Gates.',
        b: 'Albert Einstein',
        c: 'Galileo Galilei',
        d: 'Mark Zuckerberg',
        correct: 'd',
    }
]

const questionEl =document.getElementById('question');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn =document.getElementById("btn");

let currentQuiz=0;

loadQuiz();

function loadQuiz(){
    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;

    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;


}

submitBtn.addEventListener("click" ,()=>{
    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
    }
    else{
        alert("You completed the quiz!!");
    }
    
}
)
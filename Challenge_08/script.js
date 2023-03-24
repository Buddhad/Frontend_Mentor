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
const quiz= document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl =document.getElementById('question');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn =document.getElementById("btn");

let currentQuiz=0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;
}


function getSelected(){
    let answer=undefined;
    answerEls.forEach((answerEl)=>{
    if(answerEl.checked){
        answer =answerEl.id; 
    }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=> {
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click" ,()=>{
//Check to see the answer
    const answer = getSelected();
    
    if(answer){
        
        if(answer === quizData[currentQuiz].correct){
            score++;
            
        }
        currentQuiz++;

        //Show the Results
        if(currentQuiz<quizData.length){ 
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2>You have answer Correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload();">Reload</button>`;
        }
    }
}
);
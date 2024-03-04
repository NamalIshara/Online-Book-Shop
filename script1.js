const startButton=document.getElementById('start-btn');
const nextButton=document.getElementById('next-btn');
const questionContainerElement=document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

let shuffleQuestion,  currentQuetionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click',()=>{
    currentQuetionIndex=currentQuetionIndex+1;
    setnextQuestion();
});

function startGame(){
    console.log('start');
    startButton.classList.add('hide');
    shuffleQuestion=questions.sort(() => Math.random()-.5);
    currentQuetionIndex=0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
}

function setnextQuestion() {
    resetState();
    showQuestion(shuffleQuestion[currentQuetionIndex]);
}

function showQuestion(question){
    questionElement.innerHTML=question.question;
    question.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText=answers.text;
        button.classList.add('btn');
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    });
};


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    };
}

function selectAnswer(e){
    const selectedButton=e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtonElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct);
    });

    if(shuffleQuestion.length>currentQuetionIndex+1){
        nextButton.classList.remove('hide');
    }else{
        startButton.innerHTML='Restart'
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question:'What is the title of J.K. Rowling\'s famous book series about a young wizard?',
        answers:[
            {text:'1.  Harry Potter' ,correct:true},
            {text:'2.  The Lord of the Rings' ,correct:false},
            {text:'3.  The Chronicles of Narnia' ,correct:false},
            {text:'4.  Twilight' ,correct:false},

        ]
    },
    {
        question:'What is the best-selling Christian book of all time, known for its inspirational messages and wisdom?',
        answers:[
            {text:'1.  "Mere Christianity" by C.S. Lewis' ,correct:false},
            {text:'2.  "The Purpose Driven Life" by Rick Warren' ,correct:false},
            {text:'3.  The Shack" by William P. Young' ,correct:false},
            {text:'4.  The Bible' ,correct:true},

        ]
    },
    {
        question:'In the Sinhala novel "Hath Pana," the author portrays the life and struggles of which community?',
        answers:[
            {text:'1.  Sri Lankan Fishermen' ,correct:false},
            {text:'2.  Sri Lankan Plantation Workers (Tamil Estate Workers)' ,correct:true},
            {text:'3.  Sri Lankan Farmers' ,correct:false},
            {text:'4.   Sri Lankan Tea Traders' ,correct:false},

        ]
    },
    {
        question:'Who is the author of the novel "To Kill a Mockingbird"?',
        answers:[
            {text:'Mark Twain' ,correct:false},
            {text:'Charles Dickens' ,correct:false},
            {text:'Harper Lee' ,correct:true},
            {text:'J.R.R. Tolkien' ,correct:false},

        ]
    },
    {
        question:'Who wrote the classic Sinhala novel "Viragaya," which delves into the life of a young Buddhist monk?',
        answers:[
            {text:'Sunil Gangadharan' ,correct:false},
            {text:'Siri Gunasinghe' ,correct:false},
            {text:'Martin Wickramasinghe' ,correct:true},
            {text:'Gunadasa Amarasekara' ,correct:false},

        ]
    },
    {
        question:'What classic novel by Jane Austen tells the story of the Dashwood sisters and their pursuit of love and happiness?',
        answers:[
            {text:' Sense and Sensibility' ,correct:true},
            {text:'Pride and Prejudice' ,correct:false},
            {text:' Emma' ,correct:false},
            {text:'Wuthering Heights' ,correct:false},

        ]
    },
    {
        question:'Which dystopian novel by George Orwell portrays a society under constant surveillance and the concept of "Big Brother"?"?',
        answers:[
            {text:'Fahrenheit 451' ,correct:false},
            {text:'Brave New World' ,correct:false},
            {text:'Animal Farm' ,correct:false},
            {text:'1984' ,correct:true},

        ]
    },
    {
        question:'What is the name of the renowned Sinhala poet who wrote the epic "Sulanga" based on Sri Lankan history?',
        answers:[
            {text:'Sunil Gangadharan' ,correct:false},
            {text:'Mahagama Sekera' ,correct:true},
            {text:'Anandasiri Jayawardhana' ,correct:false},
            {text:'Karunarathna Abeysekera' ,correct:false},

        ]
    },
    {
        question:'Who wrote the epic fantasy series "A Song of Ice and Fire," which inspired the TV show "Game of Thrones"?',
        answers:[
            {text:'George R.R. Martin' ,correct:true},
            {text:'J.R.R. Tolkien' ,correct:false},
            {text:' J.K. Rowling' ,correct:false},
            {text:'C.S. Lewis' ,correct:false},

        ]
    },
    {
        question:'In which book does the character "Sherlock Holmes" first appear?',
        answers:[
            {text:'The Hound of the Baskervilles' ,correct:false},
            {text:'The Adventures of Sherlock Holmes' ,correct:false},
            {text:'A Study in Scarlet' ,correct:true},
            {text:'The Sign of Four' ,correct:false},

        ]
    },
    {
        question:'Which author wrote the novel "The Great Gatsby"?',
        answers:[
            {text:'Ernest Hemingway' ,correct:false},
            {text:'Harper Lee' ,correct:false},
            {text:'F. Scott Fitzgerald' ,correct:true},
            {text:'George Orwell' ,correct:false},

        ]
    },
    {
        question:'Who wrote the famous play "Hamlet"?',
        answers:[
            {text:'Oscar Wilde' ,correct:false},
            {text:'Tennessee Williams' ,correct:false},
            {text:'Anton Chekhov' ,correct:false},
            {text:'William Shakespeare' ,correct:true},

        ]
    },
    {
        question:'Who is the author of the "Percy Jackson & the Olympians" series, which follows the adventures of a young demigod?',
        answers:[
            {text:'Suzanne Collins' ,correct:false},
            {text:'Stephenie Meyer' ,correct:false},
            {text:'J.R.R. Tolkien' ,correct:false},
            {text:'Rick Riordan' ,correct:true},

        ]
    },
    {
        question:'Who is the renowned author of the Sinhala novel "Gedara Sepa"?',
        answers:[
            {text:'Martin Wickramasinghe' ,correct:true},
            {text:'Premakeerthi de Alwis' ,correct:false},
            {text:'Ediriweera Sarachchandra' ,correct:false},
            {text:'Mahagama Sekera' ,correct:false},

        ]
    },
    {
        question:'Which famous biography chronicles the life of physicist Albert Einstein?',
        answers:[
            {text:'"Steve Jobs" by Walter Isaacson' ,correct:false},
            {text:'"Einstein: His Life and Universe" by Walter Isaacson' ,correct:true},
            {text:'"Becoming" by Michelle Obama' ,correct:false},
            {text:'"The Diary of a Young Girl" by Anne Frank' ,correct:false},

        ]
    },
    {
        question:'Who wrote the biography "Long Walk to Freedom," which narrates the life of an iconic political leader?',
        answers:[
            {text:'Nelson Mandela' ,correct:true},
            {text:'Martin Luther King Jr.' ,correct:false},
            {text:'Winston Churchill' ,correct:false},
            {text:'Mahatma Gandhi' ,correct:false},

        ]
    },
    {
        question:'Which biography delves into the life of scientist Marie Curie, the first woman to win a Nobel Prize?',
        answers:[
            {text:'"Benjamin Franklin: An American Life" by Walter Isaacson' ,correct:false},
            {text:'"The Wright Brothers" by David McCullough' ,correct:false},
            {text:'"Madame Curie" by Ève Curie' ,correct:true},
            {text:'"The Diary of a Young Girl" by Anne Frank' ,correct:false},

        ]
    },
    {
        question:'What is the name of the biography that explores the extraordinary life of inventor and futurist Nikola Tesla?',
        answers:[
            {text:'"Leonardo da Vinci" by Walter Isaacson' ,correct:false},
            {text:'"Tesla: Inventor of the Electrical Age" by W. Bernard Carlson' ,correct:true},
            {text:'"Steve Jobs" by Walter Isaacson' ,correct:false},
            {text:'"Becoming" by Michelle Obama' ,correct:false},

        ]
    },
    {
        question:'Which biography recounts the life of British Prime Minister Winston Churchill during World War II?',
        answers:[
            {text:'"The Autobiography of Malcolm X" by Malcolm X and Alex Haley' ,correct:false},
            {text:'"The Diary of Anne Frank" by Anne Frank' ,correct:false},
            {text:'"The Last Lion: Winston Spencer Churchill" by William Manchester' ,correct:true},
            {text:'"Educated" by Tara Westover' ,correct:false},

        ]
    },
    {
        question:'Which romance book by Nicholas Sparks tells the tale of Noah and Allie, whose love endures many trials?',
        answers:[
            {text:'"The Notebook"' ,correct:true},
            {text:'"The Time Traveler\'s Wife" by Audrey Niffenegger' ,correct:false},
            {text:'"The Wedding" by Nicholas Sparks' ,correct:false},
            {text:'"The Great Gatsby" by F. Scott Fitzgerald' ,correct:false},

        ]
    }
    


]
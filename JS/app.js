// ------------------------------------------------------------
// -----------------Function ----------------------------------
// ------------------------------------------------------------

// Forward new page--------------------------------------------
function nextPage(){
    var inputName = document.getElementById('user-name');
    if (inputName.value === "" || inputName.value.length < 2){
        alertMessage();
    } else{
        displayNextWebpage(event);
        USER_NAME = inputName.value;
    }
}

function deleteMessage(){
    var message = document.querySelector(".message-alert");
    message.style.display = "none";
}
function alertMessage(){
    var message = document.querySelector(".message-alert");
    message.style.display = "block";
    let iconClose = document.querySelector('.fa-close');
    iconClose.addEventListener("click", deleteMessage);
}

// Remove old page and create new menu--------------------------
function displayNextWebpage(event){
    // remove input name and button next 
    event.target.parentElement.remove();
    var message = document.querySelector(".message-alert");
    message.style.display = "none";
    createMenu();
}

// Create menu -------------------------------------------------
function createMenu(){
    let menu = document.createElement('div');
    menu.className = "menu-bar";

    // create ul and append it to menu
    let ul = document.createElement('ul');

    // create li with id name  "start-quiz" and text name  "start-quiz"
    let li_1 = document.createElement('li');
    li_1.id = "start-quiz";
    li_1.textContent = "Play Quiz";

    
    // create li with id name  "create-questions" and text name  "Create Questions"
    let li_3 = document.createElement('li');
    li_3.id = "create-questions";
    li_3.textContent = "Create Questions";

    // append all 3 li to ul-----------------------------------------
    ul.appendChild(li_1);
    ul.appendChild(li_3);

    // append ul to menu------------------------
    menu.appendChild(ul);
    
    // append menu to container-------------------------------
    let container = document.querySelector('.container');
    container.appendChild(menu);

    // // start quiz menu
    let startquiz = document.getElementById('start-quiz');
    startquiz.addEventListener('click',inProgress);


    // create button to edit question 
    let btnCreate = document.getElementById('create-questions');
    btnCreate.addEventListener('click',inProgress);
    btnCreate.addEventListener("click",displayallquestion)

    let createQuiz = document.getElementById('create-questions');
    createQuiz.addEventListener('click',createQuestion);

    // CREAT FUNCTION TO PLAY QUIZ
    let question_btn = document.getElementById("start-quiz");
    question_btn.addEventListener("click",playQuiz);

    // CREATE FUNCTION TO CREATE QUESTION----------------
    let btn_update = document.querySelector('#btn-edit');
    btn_update.addEventListener("click",addQuestiontolist);
    btn_update.addEventListener("click",displayallquestion);

}


// Define button next to get on next page
const btnNext = document.getElementById('next-button');
btnNext.addEventListener("click",nextPage);

// ------------start coding Play quiz--------------------------
function playQuiz(){
    let question_card = document.querySelector(".container-create-questions");
    question_card.style.display = "none";

    let btn_back = document.getElementById('btn-back');
    btn_back.style.display='block';

    if (index_of_list_of_questions >= total_questions){
        let global_container = document.querySelector('.global-container');
        global_container.style.display = "block";
    } else{
        let question_to_play = document.querySelector('.container-question');
        question_to_play.style.display = "block";
    }
    let number_questions = document.getElementById('total-questions');
    number_questions.textContent = total_questions;

    let container2 = document.querySelector('.container2');
    container2.style.display = 'none';
}

function nextQuestion(){
    if (isClickedNext === false){
        let question = document.querySelector('.question h2');
        let count = document.getElementById('count');

        number_of_question += 1
        if (index_of_list_of_questions < total_questions){
            let getAnswers = document.querySelectorAll(".answer");
            for (let answer of getAnswers){
                answer.style.background = "#0593E3";
                answer.addEventListener("click",getUserAnswer);
            } 
    
            // GET QUESTION FROM ARRAY OF OBJECTS
            question.textContent = list_of_questions[index_of_list_of_questions].question;
            // CHANGE ANSWER ALL TIME WHENEVER USER CLICK NEXT
            let answer_1 = document.getElementById('answer-1');
            answer_1.textContent = list_of_questions[index_of_list_of_questions].answers["answer_1"];
            let content_li = document.createElement("div");
            content_li.className = "multiple-answers";
            
            
            // CREATE LIST FOR ANSWER-1
            let answer1 = document.createElement('li');
            answer1.className = "answer";
            answer1.id = "answer-1";
            answer1.textContent = answer_1.textContent;
            content_li.appendChild(answer1);
            
            // CREATE LIST FOR ANSWER-2
            let answer_2 = document.getElementById('answer-2');
            answer_2.textContent = list_of_questions[index_of_list_of_questions].answers["answer_2"];
            // CREATE LIST FOR ANSWER-3
            let answer_3 = document.getElementById('answer-3');
            answer_3.textContent = list_of_questions[index_of_list_of_questions].answers["answer_3"];

            // CREATE LIST FOR ANSWER-4
            let answer_4 = document.getElementById('answer-4');
            answer_4.textContent = list_of_questions[index_of_list_of_questions].answers["answer_4"];
    
            // INCREMENT COUNT QUESTION ONE BY ONE
            count.textContent = number_of_question;
            
            // INCREMENT INDEX BY 1
            index_of_list_of_questions += 1;
            isClicked = false;
        }
    
        // CHECK, IF QUESTION EQUAL TO LIMITED QUESTION CHANGE FROM "NEXT QUE" TO "SUBMIT"
        if (index_of_list_of_questions === list_of_questions.length && isClicked == true){

            // SHOW BUTTON SUBMIT AFTER FINISH QUIZ
            btn_submit.style.display = "block";
            btn_submit.addEventListener('click',submit_answers);
            
            // HIDE BUTTON SUBMIT AFTER FINISH QUIZ
            let next_question = document.getElementById("next-question");
            next_question.style.display = "none";
        }
        index_of_list_of_answer ++;
    } else {
        alert("Choose one answer");
    }
    isClickedNext = true;

    // GET ID NEXT QUESTION TO GET FUNCTION NEXTQUESTION
    let next_question = document.getElementById("next-question");
    next_question.addEventListener("click",nextQuestion);
}
// ------------end coding Play quiz--------------------------

//---------------START GET USER ANSWERS CHOOSE-----------
function getUserAnswer(event){
    if (isClicked == false){
        let answer = event.target.textContent;
        // event.target.style.background = "red";
        event.target.style.background = "#0d6ba1";
        if (answer[0] === list_of_correct_answer[index_of_list_of_answer-1]){
            user_score ++;
            console.log(user_score);
        }
        list_of_user_answer.push(answer[0]);
        isClicked = true;
        isClickedNext = false;
        idUserClick.push(event.target.id);
        console.log(idUserClick);
    }
}
// //---------------END GET USER ANSWERS CHOOSE-----------

// START SUBMIT ANSWER---------------------------
function submit_answers(event){
    global_container =document.querySelectorAll(".global-containers") ;
    for (let containers of global_container){
        containers.style.display = "block";
    }
    event.target.parentElement.parentElement.remove();
    let btn_editout = document.getElementById("create-questions");
    btn_editout.addEventListener("click",createQuestion);

    showCorrectAndUnCorrect();
}
    // END SUBMIT ANSWER---------------------------

// SHOW CORRECT OR UNCORRECT USER ANSWER------------------
function showCorrectAndUnCorrect(){
    // CREATE GLOBAL CONTAINER TO CONTENT ALL CONTAINERS
    let global_container = document.createElement("div");
    global_container.className = "global-containers";
    // global_container.style.display = "none";
    document.body.appendChild(global_container);

    let number_questions = 0 
    for (let i in list_of_questions){
        number_questions += 1
        // CREATE DIV WITH CLASS NAME "CONTAINER-QUESTION"
        let question_to_play = document.createElement("div");
        question_to_play.className = "container-question";
    
        // CREATE DIV WITH CLASS NAME "QUESTION"
        let content_question = document.createElement("div");
        content_question.className = "question";
    
        // CREATE HEADING H2 AND APPEND IT TO CONTENT_QUESTION
        let h2 = document.createElement("h2");
        h2.textContent = list_of_questions[i]["question"];
        content_question.appendChild(h2);
    
        // APPEND CONTENT_QUESTION TO CONTAINER-QUESTION
        question_to_play.appendChild(content_question);
    
        let content_li = document.createElement("div");
            content_li.className = "multiple-answers";
            
        // CREATE LIST FOR ANSWER-1
        let emoji = document.createElement("img");
        emoji.style.width = "4%";
        emoji.style.left = "410px";
        emoji.style.position = "absolute";
        let iconBad = true;

        let answer1 = document.createElement('li');
        answer1.className = "answer";
        answer1.id = "answer-1";
        answer1.textContent = list_of_questions[i].answers["answer_1"];

        if (list_of_correct_answer[i] === list_of_questions[i].answers["answer_1"][0]){
            answer1.style.background = "green";
            if (iconBad == true){
                emoji.src = "images/good.png";
                content_li.appendChild(emoji);
            }
        } else if (idUserClick[i] === answer1.id){
            iconBad = false;
            answer1.style.background = "red";
            if (iconBad == false){
                emoji.src = "images/bad.png";
                content_li.appendChild(emoji);
            }
        }
        content_li.appendChild(answer1);
        
        // CREATE LIST FOR ANSWER-2
        let answer2 = document.createElement('li');
        answer2.className = "answer";
        answer2.id = "answer-2";
        answer2.textContent = list_of_questions[i].answers["answer_2"];
        if (list_of_correct_answer[i] === list_of_questions[i].answers["answer_2"][0]){
            answer2.style.background = "green";
            if (iconBad == true){
                emoji.src = "images/good.png";
                content_li.appendChild(emoji);
            }
        } else if (idUserClick[i] === answer2.id){
            answer2.style.background = "red";
            iconBad = false;
            if (iconBad == false){
                emoji.src = "images/bad.png";
                content_li.appendChild(emoji);
            }
        }
        content_li.appendChild(answer2);
        
        // CREATE LIST FOR ANSWER-3
        let answer3 = document.createElement('li');
        answer3.className = "answer";
        answer3.id = "answer-3";
        answer3.textContent = list_of_questions[i].answers["answer_3"];
        if (list_of_correct_answer[i] === list_of_questions[i].answers["answer_3"][0]){
            answer3.style.background = "green";
            if (iconBad == true){
                emoji.src = "images/good.png";
                content_li.appendChild(emoji);
            }
        }else if (idUserClick[i] === answer3.id){
            answer3.style.background = "red";
            iconBad = false;
            if (iconBad == false){
                emoji.src = "images/bad.png";
                content_li.appendChild(emoji);
            }
        }
        content_li.appendChild(answer3);
        
        // CREATE LIST FOR ANSWER-4
        let answer4 = document.createElement('li');
        answer4.className = "answer";
        answer4.id = "answer-4";
        answer4.textContent = list_of_questions[i].answers["answer_4"];
        if (list_of_correct_answer[i] === list_of_questions[i].answers["answer_4"][0]){
            answer4.style.background = "green";
            if (iconBad == true){
                emoji.src = "images/good.png";
                content_li.appendChild(emoji);
            }
        }else if (idUserClick[i] === answer4.id){
            answer4.style.background = "red";
            iconBad = false;
            if (iconBad == false){
                emoji.src = "images/bad.png";
                content_li.appendChild(emoji);
            }
        }
        content_li.appendChild(answer4);
        
        // APPEND CONTENT LIST TO 
        question_to_play.appendChild(content_li);
    
        let foot_question = document.createElement("div");
        foot_question.className = "footer-question";
    
        let count_question = document.createElement("div");
        count_question.className = "count-question";
        count_question.textContent = number_questions + " / "+total_questions+" Questions";
        
        foot_question.appendChild(count_question);
        question_to_play.appendChild(foot_question);
        global_container.appendChild(question_to_play);
    }
    let final_score = document.querySelector(".score");
    final_score.textContent = parseInt((user_score/total_questions)*100);
    final_result.style.display = "block";
}

let back_to_play_quiz = document.getElementById('play');
back_to_play_quiz.addEventListener('click',playQuiz)


// SHOW CORRECT OR UNCORRECT USER ANSWER------------------
// ------------start coding create question--------------------------
function createQuestion(){
    let question_card = document.querySelector(".container-create-questions");
    question_card.style.display = "block";

    let global_containers = document.querySelectorAll(".global-containers");
    for (let containers of global_containers){
        containers.remove();
    }
    
    if (index_of_list_of_questions >= total_questions){
        let global_container = document.querySelector('.global-container');
        global_container.style.display = "none";
    } else{
        let question_to_play = document.querySelector('.container-question');
        question_to_play.style.display = "none";
    }

    let container2 = document.querySelector('.container2')
    container2.style.display = 'block'

}

// display all question 
function displayallquestion (event){
    let card = document.querySelectorAll(".card")
    if (card.length>1){
        for (let values of card){
            values.parentNode.removeChild(values)
        }
    }
    for (let element of list_of_questions){
        let card_question = document.createElement("div");
        card_question.className = "card";

        let spnaquestion = document.createElement("div");
        spnaquestion.className = "question";

        let h2 = document.createElement("h2");
        h2.textContent = element.question;

        spnaquestion.appendChild(h2);
        card_question.appendChild(spnaquestion);

        let listanswer = document.createElement("ul");
        listanswer.className = "card-body";

        let liAnswer1 = document.createElement('span');
        liAnswer1.className = "answer";
        liAnswer1.textContent = element.answers.answer_1;
    

        let liAnswer2 = document.createElement('span');
        liAnswer2.className = "answer";
        liAnswer2.textContent = element.answers.answer_2;
       

        let liAnswer3 = document.createElement('span');
        liAnswer3.className = "answer";
        liAnswer3.textContent = element.answers.answer_3;
        

        let liAnswer4 = document.createElement('span');
        liAnswer4.className = "answer";
        liAnswer4.textContent = element.answers.answer_4;
        
        if (element['correct_answer']=='A'){
           liAnswer1.style.backgroundColor = "green"
           console.log("num1");
        }else if (element['correct_answer']=='B'){
            liAnswer2.style.backgroundColor = "green"
            console.log("num2");
        }else if (element['correct_answer']=='C'){
            liAnswer3.style.backgroundColor = "green"
            console.log("num3");
        }else if (element['correct_answer']=='D'){
            liAnswer4.style.backgroundColor = "green"
            console.log("num4");
        }

        listanswer.appendChild(liAnswer1);
        listanswer.appendChild(liAnswer2);
        listanswer.appendChild(liAnswer3);
        listanswer.appendChild(liAnswer4);

        card_question.appendChild(listanswer);
        document.querySelector(".container2").appendChild(card_question)
    }
}

/// add question to object
function addQuestiontolist (){
    // create list for each question 
    let listQuestionandanswer = {};
    // get the question from input
    let questionInput = document.getElementById("questionInput")
    // append the value get from question input to the question eache
    listQuestionandanswer["question"] = questionInput.value;
    // create list for answer
    let answers = {};
    //get the value from input answer
    for (let index = 1 ; index <= 4; index++ ){
        
        answers["answer_"+index] = document.getElementById("anw"+index).value;
    }
    listQuestionandanswer['answers']=answers;
    // add correct answer
    let correctanswer = document.querySelectorAll(".select-answer")
    for (let elements of correctanswer){
        if (elements.checked){
            if (elements.value=='A'){
                list_of_user_answer.push("A")
                listQuestionandanswer['correct_answer']='A';
            }else if (elements.value=='B'){
                list_of_user_answer.push("B")
                listQuestionandanswer['correct_answer']='B';
            }else if (elements.value=='C'){
                list_of_user_answer.push("C")
                listQuestionandanswer['correct_answer']='C';
            }else if (elements.value=='D'){
                list_of_user_answer.push("D")
                listQuestionandanswer['correct_answer']='D';
            }
        }
    }
    console.log(list_of_user_answer)
    console.log(listQuestionandanswer)

    listQuestionandanswer["answers"] = answers
    //append question and answer to list of question 
    if (questionInput.value !="" && document.getElementById("anw"+1).value !="" && document.getElementById("anw"+2).value !="" && document.getElementById("anw"+3).value !="" && document.getElementById("anw"+4).value !="") {
        list_of_questions.push(listQuestionandanswer)
    }else {
        window.alert("Please in put all information before add question!")
    }
   
    console.log(list_of_questions)

    // refres value inside input
    questionInput.value = ""
    for (let elements of correctanswer){
        elements.checked = false;
    }
    for (let index = 1 ; index <= 4; index++ ){
        document.getElementById("anw"+index).value = ""
    }
    total_questions += 1
}
// end add question

// start Headers--------------------------------------------------
function inProgress(event){
    let container = document.querySelector('.container');
    container.style.display = "none";
    // // create header 
    let header = document.querySelector("header");
    header.style.display = "flex";

    let userName = document.querySelector('.header-right h1');
    userName.className = "userName";
    userName.textContent =  USER_NAME;

    // GET NEXT QUESTION
    nextQuestion();
}
// end header-----------------------------------------------------

// var btn_back = document.getElementById('btn-back');
// btn_back.addEventListener('click',createMenu);

var message = document.querySelector(".message-alert");
message.style.display = "none";

var btn_submit = document.querySelector("#sub-ans");
btn_submit.style.display = "none";

var question_to_play = document.querySelector('.container-question');
question_to_play.style.display = "none";

var final_result = document.querySelector(".container-score");
final_result.style.display = "none";

let list_of_questions = [
    {question: "Q. Tom ________ in Serbia since he was 7 years old.", answers:{answer_1: "A/ lived", answer_2: "B/ is living", answer_3: "C/ has lived",answer_4: "D/ lives"}, correct_answer: "C"} ,
    {question: "Q. They _________ go to the cinema every day.", answers:{answer_1: "A/ isn't", answer_2: "B/ doesn't", answer_3: "C/ aren't",answer_4: "D/ don't"} , correct_answer: "D"} ,
    {question: "Q. She ___________ at a hotel every day", answers:{answer_1: "A/ working", answer_2: "B/ works", answer_3: "C/ is working",answer_4: "D/ work"} , correct_answer: "B"} ,
    {question: "Q. While Tom (read) , Amely (watch) a documentary on TV.", answers:{answer_1: "A/ was reading / was watching", answer_2: "B/ was reading / were watching", answer_3: "C/ read / watched",answer_4: "D/ read / was watching"} , correct_answer: "A"} ,
    {question: "Q. He (wake) up and (look) at his watch.", answers:{answer_1: "A/ waked / looked", answer_2: "B/ woke/ looked", answer_3: "C/ was waking / looked",answer_4: "D/ waked / was looking"} , correct_answer: "B"} ,

    {question: "Q. While I (drive), I (have) an accident.", answers:{answer_1: "A/ drived/had", answer_2: "B/ drove / was having", answer_3: "C/ was driving/ had",answer_4: "D/ drove/ had"}, correct_answer: "C" } ,
    {question: "Q. ...  you ...  London?  (ever/visit)", answers:{answer_1: "A/ Have you ever visited London?", answer_2: "B/ Did you ever visit London?", answer_3: "C/ Has you ever visited London?",answer_4: "D/ Did you ever visited London?"} , correct_answer: "A"} ,
    {question: "Q. Susan and Jane ....  at home last Monday. (not/be)", answers:{answer_1: "A/ hasn't", answer_2: "B/ weren't", answer_3: "C/ wasn't",answer_4: "D/ haven't been"} , correct_answer: "B"} ,
    {question: "Q. They ... shrimps. (already/eat)", answers:{answer_1: "A/ have eaten", answer_2: "B/ ate", answer_3: "C/ has eaten",answer_4: "D/ eated"} , correct_answer: "A"} ,
    {question: "Q. How long .... each other before they .... to get married?", answers:{answer_1: "A/ had they known, decided", answer_2: "B/ knew, decided", answer_3: "C/ did they know, had decided",answer_4: "D/ do they know / decide"} , correct_answer: "A"} ,

    {question: "Q. Before he went out of the office, Jim ... the door.", answers:{answer_1: "A/ locked", answer_2: "B/ had locked", answer_3: "C/ had lock",answer_4: "D/ has locked"} , correct_answer: "B"} ,
    {question: "Q. Mrs Rush .... her children because they ... the window.", answers:{answer_1: "A/ had punished, had broken", answer_2: "B/ punished, had broken", answer_3: "C/ punished, broke",answer_4: "D/ punishes, breaks"} , correct_answer: "C"} ,
    {question: "Q. Where ..........(you / be) yesterday?", answers:{answer_1: "A/ were you", answer_2: "B/ you were ", answer_3: "C/ did you be",answer_4: "D/ was you"} , correct_answer: "A"} ,
    {question: "Q. .... you .... your homework yet?", answers:{answer_1: "A/ Were you do", answer_2: "B/ Has you done...", answer_3: "C/ Did you do...",answer_4: "D/ Have you done..."} , correct_answer: "D"} ,
    {question: "Q.  If it snows, ________ still drive to the coast? ", answers:{answer_1: "A/ will you", answer_2: "B/ would you", answer_3: "C/ would you had",answer_4: "D/ would you have"} , correct_answer: "A"} ,

    {question: "Q. What would you do if it ________ on your wedding day? ", answers:{answer_1: "A/ rained", answer_2: "B/  will rain", answer_3: "C/ would rain",answer_4: "D/ would have rained"} , correct_answer: "A"} ,
    {question: "Q. If she comes, I _____ call you. ", answers:{answer_1: "A/ will", answer_2: "B/ would", answer_3: "C/ would have",answer_4: "D/ would had"} , correct_answer: "A"} ,
    {question: "Q. If I eat peanut butter, I ________ sick. ", answers:{answer_1: "A/ would have gotten", answer_2: "B/ would get", answer_3: "C/ get",answer_4: "D/ got"} , correct_answer: "C"} ,
    {question: "Q. What will you do if you ________ the history exam? ", answers:{answer_1: "A/ would fail", answer_2: "B/  will fail", answer_3: "C/ fail",answer_4: "D/ would have fail"} , correct_answer: "C"} ,
    {question: "Q. If they had not _____ the car, I would have driven you. ", answers:{answer_1: "A/  take", answer_2: "B/ taken", answer_3: "C/ would take",answer_4: "D/ would have taken"} , correct_answer: "B"} 
]

var list_of_correct_answer = ["C","D","B","A","B",
                            "C","A","B","A","A",
                            "A","C","A","D","A",
                            "A","A","C","C","B",]


function back_to_menu() {

    let btn_back = document.querySelector('#btn-back');
    btn_back.style.backgroundColor = 'red'

    let container_question = document.querySelector('.container-question');
    container_question.style.display = 'none';

    let menu = document.createElement('div');
    menu.className = "menu-bar";

    // create ul and append it to menu
    let ul = document.createElement('ul');

    // create li with id name  "start-quiz" and text name  "start-quiz"
    let li_1 = document.createElement('li');
    li_1.id = "start-quiz";
    li_1.textContent = "Play Quiz";

    
    // create li with id name  "create-questions" and text name  "Create Questions"
    let li_3 = document.createElement('li');
    li_3.id = "create-questions";
    li_3.textContent = "Create Questions";

    // append all 3 li to ul-----------------------------------------
    ul.appendChild(li_1);
    ul.appendChild(li_3);

    // append ul to menu------------------------
    menu.appendChild(ul);
    
    // append menu to container-------------------------------
    let container = document.querySelector('.container');
    container.appendChild(menu);

    // // start quiz menu
    let startquiz = document.getElementById('start-quiz');
    startquiz.addEventListener('click',inProgress);


    // create button to edit question 
    let btnCreate = document.getElementById('create-questions');
    btnCreate.addEventListener('click',inProgress);
    btnCreate.addEventListener("click",displayallquestion)

    let createQuiz = document.getElementById('create-questions');
    createQuiz.addEventListener('click',createQuestion);

    // CREAT FUNCTION TO PLAY QUIZ
    let question_btn = document.getElementById("start-quiz");
    question_btn.addEventListener("click",playQuiz);

    // CREATE FUNCTION TO CREATE QUESTION----------------
    let btn_update = document.querySelector('#btn-edit');
    btn_update.addEventListener("click",addQuestiontolist);
    btn_update.addEventListener("click",displayallquestion);

}

let btn_back = document.querySelector('#btn-back');
btn_back.addEventListener('click',back_to_menu)
// btn_back.addEventListener('click',createMenu)

// VARIABLES-----------------

// TYPE ARRAY-----------------------
let list_of_user_answer = [];
let idUserClick = [];


// TYPE INTEGER---------------------
let index_of_list_of_questions = 0;
let total_questions = 20;
let count_question = 0;
let number_of_question = 0 ;
let index_of_list_of_answer = 0;
let user_score = 0 ; 
let USER_NAME = "";

// TYPE BOOLEAN---------------------
let isClicked = false;
let isClickedNext = false;

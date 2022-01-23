// ------------------------------------------------------------
// -----------------Function ----------------------------------
// ------------------------------------------------------------

// Forward new page--------------------------------------------
function nextPage(){
    var inputName = document.getElementById('user-name');
    if (inputName.value === "" || inputName.value.length < 2){
        alertMessage();
    } else if (message.style.display === "none"){
        displayNextWebpage(event);
        USER_NAME = inputName.value;
    } else if (message.style.display === "block"){
        inputName.value = "";
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
    createMenu()
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

    // create li with id name  "view-question" and text name  "View Questions"
    let li_2 = document.createElement('li');
    li_2.id = 'view-question';
    li_2.textContent = "View Questions";
    
    // create li with id name  "create-questions" and text name  "Create Questions"
    let li_3 = document.createElement('li');
    li_3.id = "create-questions";
    li_3.textContent = "Create Questions";

    // append all 3 li to ul-----------------------------------------
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);

    // append ul to menu------------------------
    menu.appendChild(ul);
    
    // append menu to container-------------------------------
    let container = document.querySelector('.container');
    container.appendChild(menu);

    // // start quiz menu
    let startquiz = document.getElementById('start-quiz');
    startquiz.addEventListener('click',inProgress);

    // create button to review question 
    let btnReview = document.getElementById('view-question');
    btnReview.addEventListener('click',inProgress);

    // create button to edit question 
    let btnCreate = document.getElementById('create-questions');
    btnCreate.addEventListener('click',inProgress);

    // CREAT FUNCTION TO PLAY QUIZ
    let quiz_btn = document.getElementById("menu-quiz");
    quiz_btn.addEventListener("click",playQuiz);
    let question_btn = document.getElementById("start-quiz");
    question_btn.addEventListener("click",playQuiz);
    
    // CREATE FUNCTION TO REVIEW QUESTIONS-------------------
    let btnReview_1 = document.getElementById('view-question');
    btnReview_1.addEventListener("click", reviewQuestion);
    let btnReview_2 = document.getElementById('menu-question');
    btnReview_2.addEventListener("click", reviewQuestion);

    // CREATE FUNCTION TO CREATE QUESTION----------------
    let edit_createbtn = document.getElementById("menu-create");
    edit_createbtn.addEventListener("click",createQuestion);
    let btn_editout = document.getElementById("create-questions");
    btn_editout.addEventListener("click",createQuestion);
    let btn_update = document.querySelector('#btn-edit');
    btn_update.addEventListener("click",addQuestiontolist);


}

// Define button next to get on next page
const btnNext = document.getElementById('next-button');
btnNext.addEventListener("click",nextPage);


// ------------start coding Play quiz--------------------------
function playQuiz(){
    let quiz_btn = document.getElementById("menu-quiz");
    quiz_btn.style.background = "#0d6ba1";

    let edit_createbtn = document.getElementById("menu-create");
    edit_createbtn.style.background = "#0593E3";

    let btnReview_2 = document.getElementById('menu-question');
    btnReview_2.style.background = "#0593E3";

    let question_card = document.querySelector(".container-create-questions");
    question_card.style.display = "none";

    let question_to_play = document.querySelector('.container-question');
    question_to_play.style.display = "block";

    let next_question = document.getElementById("next-question");
    next_question.addEventListener("click",nextQuestion);

    let container2 = document.querySelector('.container2')
    container2.style.display = 'none'
}

function nextQuestion(){
    let question = document.querySelector('.question h2');
    let count = document.getElementById('count');
    if (index_of_list_of_questions < total_questions-1){
        question.textContent = list_of_questions[index_of_list_of_questions]["question"];
        
        // CHANGE ANSWER ALL TIME WHENEVER USER CLICK NEXT
        let answer_1 = document.getElementById('answer-1');
        

        let answer_2 = document.getElementById('answer-2');
        
        let answer_3 = document.getElementById('answer-3');
        
        let answer_4 = document.getElementById('answer-4');
        
        for (let object of list_of_questions) {
            answer_1.textContent = list_of_questions[index_of_list_of_questions].answers["answer_1"];
            answer_2.textContent = list_of_questions[index_of_list_of_questions].answers["answer_2"];
            answer_3.textContent = list_of_questions[index_of_list_of_questions].answers["answer_3"];
            answer_4.textContent = list_of_questions[index_of_list_of_questions].answers["answer_4"];
        }

        // INCREMENT COUNT QUESTION ONE BY ONE
        count_question += 1;
        count.textContent = count_question;

        // INCREMENT INDEX BY 1
        index_of_list_of_questions += 1;
    }
    // CHECK, IF QUESTION EQUAL TO LIMITED QUESTION CHANGE FROM "NEXT QUE" TO "SUBMIT"
    if (index_of_list_of_questions=== list_of_questions.length){
        btn_submit.style.display = "block";
        btn_submit.addEventListener('click',submit_answers);

        let next_question = document.getElementById("next-question");
        next_question.style.display = "none";
    }
}
// ------------end coding Play quiz--------------------------


// ------------start coding review question--------------------------
function reviewQuestion(){
    let quiz_btn = document.getElementById("menu-quiz");
    quiz_btn.style.background = "#0593E3";

    let edit_createbtn = document.getElementById("menu-create");
    edit_createbtn.style.background = "#0593E3";

    let btnReview_2 = document.getElementById('menu-question');
    btnReview_2.style.background = "#0d6ba1";

    let question_to_play = document.querySelector('.container-question');
    question_to_play.style.display = "none";

    let question_card = document.querySelector(".container-create-questions");
    question_card.style.display = "none";

    let container2 = document.querySelector('.container2')
    container2.style.display = 'none'
}

// ------------end coding review question--------------------------


// ------------start coding create question--------------------------
function createQuestion(){
    let quiz_btn = document.getElementById("menu-quiz");
    quiz_btn.style.background = "#0593E3";

    let edit_createbtn = document.getElementById("menu-create");
    edit_createbtn.style.background = "#0d6ba1";

    let btnReview_2 = document.getElementById('menu-question');
    btnReview_2.style.background = "#0593E3";


    let question_to_play = document.querySelector('.container-question');
    question_to_play.style.display = "none";

    let question_card = document.querySelector(".container-create-questions");
    question_card.style.display = "block";

    let btn_update = document.getElementById('btn-edit');
    btn_update.addEventListener('click',displayAfterUpdate)

    let container2 = document.querySelector('.container2')
    container2.style.display = 'block'
}

// ------------end coding create question--------------------------

    // START SUBMIT ANSWER---------------------------
function submit_answers(event){
    event.target.parentElement.remove();
    let question_to_play = document.querySelector('.container-question');
    for (let i = 0; i<list_of_questions.length; i++){
        let question = document.createElement("question");
        let h2 = document.createElement("h2")
        h2.textContent = list_of_questions[i]["question"];
        question.appendChild(h2);
        
        // CHANGE ANSWER ALL TIME WHENEVER USER CLICK NEXT
        let content_li = document.createElement("div");
        content_li.className = "multiple-answers";
        question_to_play.appendChild(question);

        let answer_1 = document.createElement('li');
        answer_1.className = "answer";
        answer_1.id = "answer-1";
        answer_1.textContent = list_of_questions[i]["answer_1"];
        content_li.appendChild(answer_1);

        let answer_2 = document.createElement('li');
        answer_2.className = "answer";
        answer_2.id = "answer-2";
        answer_2.textContent = list_of_questions[i]["answer_2"];
        content_li.appendChild(answer_2);

        let answer_3 = document.createElement('li');
        answer_3.className = "answer";
        answer_3.id = "answer-3";
        answer_3.textContent = list_of_questions[i]["answer_3"];
        content_li.appendChild(answer_3);

        let answer_4 = document.createElement('li');
        answer_4.className = "answer";
        answer_4.id = "answer-4";
        answer_4.textContent = list_of_questions[i]["answer_4"];
        content_li.appendChild(answer_4);

        let foot_question = document.createElement("div");
        foot_question.className = "footer-question";
        question_to_play.appendChild(content_li);
    }
    document.body.appendChild(question_to_play);
    return confirm("You've finished all the questions");
}
    // END SUBMIT ANSWER---------------------------

// displayAfterUpdate ------------------------------------------------------

function displayAfterUpdate(event) {
    let container2 = document.querySelector('.container2')
    container2.style.display = 'block'
    // create card
    let card = document.createElement('div');
    card.className = 'card';
    // create card header
    let card_header = document.createElement('div');
    card_header.className = 'card-header';

    let icons = document.createElement('div');
    icons.className = 'icons'

    // create answer
    let card_body = document.createElement('div');
    card_body.className = 'card-body';

    // create span answer
    let spanAnswer1 = document.createElement('span');
    let spanAnswer2 = document.createElement('span');
    let spanAnswer3 = document.createElement('span');
    let spanAnswer4 = document.createElement('span');

    for (let object of list_of_questions) {
        card_header.textContent = object.question;        

        spanAnswer1.textContent = object.answers['answer_1']
        card_body.appendChild(spanAnswer1)

        spanAnswer2.textContent = object.answers['answer_2']
        card_body.appendChild(spanAnswer2)

        spanAnswer3.textContent = object.answers['answer_3']
        card_body.appendChild(spanAnswer3)

        spanAnswer4.textContent = object.answers['answer_4']
        card_body.appendChild(spanAnswer4)
    }
    // add card header to card
    card.appendChild(card_header)
    // add card body to card
    card.appendChild(card_body)
    // add card to container
    container2.appendChild(card);
}

// displayAfterUpdate ------------------------------------------------------

// start add question
function addQuestiontolist (){
    // create list for each question 
    let listQandA = {};
    // get the question from input
    let questionInput = document.getElementById("questionInput")
    // append the value get from question input to the question eache
    listQandA["question"] = questionInput.value;
    // create list for answer
    let answers = {};
    //get the value from input answer
    for (let index = 1 ; index <= 4; index++ ){
        answers["answer_"+index] = document.getElementById("anw"+index).value;
    }
    listQandA["answers"] = answers
    //append question and answer to list of question 
    list_of_questions.push(listQandA)
    console.log(list_of_questions)

    // refres value inside input
    questionInput.value = ""
    for (let index = 1 ; index <= 4; index++ ){
     document.getElementById("anw"+index).value = ""
    }
}
// end add question

// start Headers--------------------------------------------------
function inProgress(event){
    let container = document.querySelector('.container');
    container.style.display = "none";
    // // create header 
    let header = document.querySelector("header");
    header.style.display = "flex";
    // // get username input
    // // let inputName = document.getElementById('user-name');
    let userName = document.querySelector('.header-right h1');
    userName.className = "userName";
    userName.textContent =  USER_NAME;
    //create menu in start quiz page
    let menu = document.querySelector(".menu");
    menu.style.display = "block";
}
// end header-----------------------------------------------------

var message = document.querySelector(".message-alert");
message.style.display = "none";

var btn_submit = document.querySelector("#sub-ans");
btn_submit.style.display = "none";

let USER_NAME = "";

let list_of_questions = [

]

let index_of_list_of_questions = 0;
let total_questions = 20;
let count_question = 1;
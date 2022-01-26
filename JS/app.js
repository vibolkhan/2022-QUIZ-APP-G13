// // ------------------------------------------------------------
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

    // CREAT FUNCTION TO PLAY QUIZ
    let quiz_btn = document.getElementById("menu-quiz");
    quiz_btn.addEventListener("click",playQuiz);
    let question_btn = document.getElementById("start-quiz");
    question_btn.addEventListener("click",playQuiz);
    
    // CREATE FUNCTION TO REVIEW QUESTIONS-------------------
    let btnReview_2 = document.getElementById('menu-question');
    let btnReview_1 = document.getElementById('view-question');
    btnReview_1.addEventListener("click",displayQuestionAll)
    btnReview_2.addEventListener("click",displayQuestionAll)
    btnReview_1.addEventListener("click", reviewQuestion);
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

    let question_card = document.querySelector(".container-create-questions");
    question_card.style.display = "none";



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

    // hide container display
    let container_questindisplay = document.querySelector(".container_dg")
    container_questindisplay.style.display = "none";
}

function nextQuestion(){
    if (isClickedNext === false){
        let question = document.querySelector('.question h2');
        let count = document.getElementById('count');
        // CREATE GLOBAL CONTAINER TO CONTENT ALL CONTAINERS
        let global_container = document.createElement("div");
        global_container.className = "global-containers";
        global_container.style.display = "none";
        // APPEND GLOBAL CONTAINER TO BODY
        document.body.appendChild(global_container);
        
        number_of_question += 1
        if (index_of_list_of_questions < total_questions){
    
            // GET QUESTION FROM ARRAY OF OBJECTS
            question.textContent = list_of_questions[index_of_list_of_questions]["question"];
    
            // CREATE DIV WITH CLASS NAME "CONTAINER-QUESTION"
            let question_to_play = document.createElement("div");
            question_to_play.className = "container-question";
    
            // CREATE DIV WITH CLASS NAME "QUESTION"
            let content_question = document.createElement("div");
            content_question.className = "question";
    
            // CREATE HEADING H2 AND APPEND IT TO CONTENT_QUESTION
            let h2 = document.createElement("h2");
            h2.textContent = question.textContent;
            content_question.appendChild(h2);
    
            // APPEND CONTENT_QUESTION TO CONTAINER-QUESTION
            question_to_play.appendChild(content_question);
    
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
            let answer2 = document.createElement('li');
            answer2.className = "answer";
            answer2.id = "answer-2";
            answer2.textContent = answer_2.textContent;
            content_li.appendChild(answer2);
            
            
            // CREATE LIST FOR ANSWER-3
            let answer_3 = document.getElementById('answer-3');
            answer_3.textContent = list_of_questions[index_of_list_of_questions].answers["answer_3"];
            let answer3 = document.createElement('li');
            answer3.className = "answer";
            answer3.id = "answer-3";
            answer3.textContent = answer_3.textContent;
            content_li.appendChild(answer3);
            
            // CREATE LIST FOR ANSWER-4
            let answer_4 = document.getElementById('answer-4');
            answer_4.textContent = list_of_questions[index_of_list_of_questions].answers["answer_4"];
            let answer4 = document.createElement('li');
            answer4.className = "answer";
            answer4.id = "answer-4";
            answer4.textContent = answer_4.textContent;
            content_li.appendChild(answer4);
            
            // APPEND CONTENT LIST TO 
            question_to_play.appendChild(content_li);
        
            let foot_question = document.createElement("div");
            foot_question.className = "footer-question";
    
            let count_question = document.createElement("div");
            count_question.className = "count-question";
            count_question.textContent = number_of_question + " / "+total_questions+" Questions";
            foot_question.appendChild(count_question);
    
            foot_question.appendChild(count_question);
            question_to_play.appendChild(foot_question);
            global_container.appendChild(question_to_play);
    
            // INCREMENT COUNT QUESTION ONE BY ONE
            count.textContent = number_of_question;
            
            // INCREMENT INDEX BY 1
            index_of_list_of_questions += 1;
    
            let getAnswers = document.querySelectorAll(".answer");
            for (let answer of getAnswers){
                answer.style.background = "#0593E3";
                answer.addEventListener("click",getUserAnswer);
            } 
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
        alert("Choose one answer")
    }
    let container2 = document.querySelector('.container2')
    container2.style.display = 'none'

    // show  display question
    let container_questindisplay = document.querySelector(".container_dg")
    container_questindisplay.style.display = "block";
}

// ------------end coding Play quiz--------------------------
//---------------START GET USER ANSWERS CHOOSE-----------
function getUserAnswer(event){
    if (isClicked == false){
        let answer = event.target.textContent;
        event.target.style.background = "red";
        if (answer[0] === list_of_correct_answer[index_of_list_of_answer-1]){
            event.target.style.background = "green";
        }
        // list_of_user_answer.push(answer[0]);
        // event.target.style.background = "#0d6ba1";
        isClicked = true;
        isClickedNext = false;

    }
    
    


}

// //---------------END GET USER ANSWERS CHOOSE-----------
// START SUBMIT ANSWER---------------------------
function submit_answers(event){
    global_container =document.querySelectorAll(".global-containers") ;
    for (let container of global_container){
        container.style.display = "block";
    }
    event.target.parentElement.parentElement.remove();
}
    // END SUBMIT ANSWER---------------------------



// ------------start coding create question--------------------------
function createQuestion(){
    let quiz_btn = document.getElementById("menu-quiz");
    quiz_btn.style.background = "#0593E3";

    let edit_createbtn = document.getElementById("menu-create");
    edit_createbtn.style.background = "#0d6ba1";

    
    let question_card = document.querySelector(".container-create-questions");
    question_card.style.display = "block";
    
    if (index_of_list_of_questions >= total_questions){
        let global_container = document.querySelector('.global-container');
        global_container.style.display = "none";
    } else{
        let question_to_play = document.querySelector('.container-question');
        question_to_play.style.display = "none";
    }


    let btn_update = document.getElementById('btn-edit');
    btn_update.addEventListener('click',displayAfterUpdate);

    let container2 = document.querySelector('.container2')
    container2.style.display = 'block'

    // hide display question
    let container_questindisplay = document.querySelector(".container_dg")
    container_questindisplay.style.display = "none";
}

// display after edit 
function displayAfterUpdate(event) {
    
    let container2 = document.querySelector('.container2')
    container2.style.display = 'block';
    // create card
    let card = document.createElement('div');
    card.className = 'question';
    // create card header
    let card_header = document.createElement('h2');

    // create answer
    let card_body = document.createElement('div');
    card_body.className = 'multiple-answers';

    // create span answer
    let spanAnswer1 = document.createElement('li');
    spanAnswer1.className = "answer";
    spanAnswer1.id = "answer-1";
    let spanAnswer2 = document.createElement('li');
    spanAnswer2.className = "answer";
    spanAnswer2.id = "answer-2";
    let spanAnswer3 = document.createElement('li');
    spanAnswer3.className = "answer";
    spanAnswer3.id = "answer-3";
    let spanAnswer4 = document.createElement('li');
    spanAnswer4.className = "answer";
    spanAnswer4.id = "answer-4";

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
        // add card header to card
        card.appendChild(card_header)
        // add card to container
        container2.appendChild(card);
        container2.appendChild(card_body);
    }
}

// display in question menu page - start
function displayQuestionAll (){
    let container_questindisplay = document.querySelector(".container_dg")
    for (let element of list_of_questions){
        
        // create eache list for question and answer
        let qANDa = document.createElement("div");
        qANDa.className = "qANDa";

        // create span for question text
        let textQ = document.createElement("span");
        textQ.className = "textQ";
        textQ.textContent = element["question"]
        qANDa.appendChild(textQ)

        // create dive to store the button edit and delete
        let eANDd = document.createElement("div");
        eANDd.className = "eANDd";

        // create button edit 
        let edit_btn = document.createElement("i");
        edit_btn.className = "fa fa-edit fa-3x";

        // create delet button
        let delet_btn = document.createElement("i");
        delet_btn.className = "fa fa-trash fa-3x";

        // append edit and delete button to the list that store it
        eANDd.appendChild(edit_btn)
        eANDd.appendChild(delet_btn)

        // append the list that stroe btn edit and delete to list 
        qANDa.appendChild(eANDd)

        // append each list to the container in html
        container_questindisplay.appendChild(qANDa)
    }
    container_questindisplay.style.display = "block";
}
// display in question menu page - end
// add question to object
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
    total_questions += 1
}
// end add question




// ------------end coding create question--------------------------



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
    //create menu in start quiz page
    let menu = document.querySelector(".menu");
    menu.style.display = "block";

    // GET NEXT QUESTION
    nextQuestion();
}
// end header-----------------------------------------------------

var message = document.querySelector(".message-alert");
message.style.display = "none";

var btn_submit = document.querySelector("#sub-ans");
btn_submit.style.display = "none";

var question_to_play = document.querySelector('.container-question');
question_to_play.style.display = "none";

let USER_NAME = "";

let list_of_questions = [
    {question:'1/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'2/what is the capital of cambodia? ',answers: {answer_1 : "Battam Bang", answer_2 : "Phnom Penh",answer_3 : "Siem Reap",answer_4 :"Kompong Soum"}},
    {question:'3/who is the preminister of cambodia? ',answers: {answer_1 : "Hun sen", answer_2 : "Prayut Jan ou Ja",answer_3 : "Vibol",answer_4 :"Sauth"}},
    {question:'4/When PNC had created?? ',answers: {answer_1 : "2010", answer_2 : "2007",answer_3 : "2021",answer_4 :"2005"}},
    {question:'5/How many major in PNC? ',answers: {answer_1 : "1", answer_2 : "2",answer_3 : "3",answer_4 :"4"}},
    {question:'6/How many hour per day? ',answers: {answer_1 : "17", answer_2 : "23",answer_3 : "24",answer_4 :"10"}},
    {question:'7/JS stand for? ',answers: {answer_1 : "Java Script", answer_2 : "Java security",answer_3 : "Java sleep",answer_4 :"Java String"}},
    {question:'8/How many man studenta in SNA class in this year? ',answers: {answer_1 : "5", answer_2 : "4",answer_3 : "10",answer_4 :"0"}},
    {question:'9/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'10/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'11/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'12/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'13/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'14/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'15/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'16/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'17/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'18/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'19/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    {question:'20/what is your name? ',answers: {answer_1 : "A", answer_2 : "B",answer_3 : "C",answer_4 :"Dw"}},
    
]


var list_of_correct_answers = [ "A/ 20 years",
                                "C/ 20 years",
                                "A/ 20 years",
                                "B/ 20 years",
                                "D/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                                "A/ 20 years",
                            ];

var list_of_user_answer = [];
let index_of_list_of_questions = 0;
let total_questions = 20;
let count_question = 0;

let isClicked = false;
let isClickedNext = false;
let number_of_question = 0 ;
let index_of_list_of_answer = 0;

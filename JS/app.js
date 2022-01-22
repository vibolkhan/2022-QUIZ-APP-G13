// ------------------------------------------------------------
// -----------------Function ----------------------------------
// ------------------------------------------------------------

// Forward new page--------------------------------------------
function nextPage(){
    var inputName = document.getElementById('user-name');
    if (inputName.value === ""){
        return confirm("You must input your name!");
    } else{
        displayNextWebpage(event);
        user_name = inputName.value;
    }
    console.log(inputName.value);
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
    li_1.textContent = "Start Quiz"

    // create li with id name  "view-question" and text name  "View Questions"
    let li_2 = document.createElement('li');
    li_2.id = 'view-question';
    li_2.textContent = "View Questions";
    
    // create li with id name  "edit-questions" and text name  "Edit/Create Questions"
    let li_3 = document.createElement('li');
    li_3.id = "edit-questions";
    li_3.textContent = "Edit/Create Questions";




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
    startquiz.addEventListener('click',inProgress)

    // create button to review question 
    let btnReview = document.getElementById('view-question');
    btnReview.addEventListener('click',inProgress);

    // create button to edit question 
    let btnEdit = document.getElementById('edit-questions');
    btnEdit.addEventListener('click',inProgress);

    // Add and edit question and hide the question card
    // show
    let edit_createbtn = document.getElementById("menu-edit")
    edit_createbtn.addEventListener("click",editQuestion)
    let btn_editout = document.getElementById("edit-questions")
    btn_editout.addEventListener("click",editQuestion)
    // hide
    let quiz_btn = document.getElementById("menu-quiz")
    quiz_btn.addEventListener("click",hideQuestion)
    let question_btn = document.getElementById("menu-question")
    question_btn.addEventListener("click",hideQuestion)
  
}

// Define button next to get on next page
const btnNext = document.getElementById('next-button');
btnNext.addEventListener("click",nextPage);

// Function for add a question 
function addQuestion (){
    // get the value from input question
    let questioninput_btn = document.getElementById("questionInput")
    console.log(questioninput_btn.value)
    // create question
    let questions = {};
    questions["question"] = questioninput_btn.value;
    // append question to list of question
    listOf_question.push(questions)
    console.log(questions)
    console.log(listOf_question)
}
// Function for edit and add a question
function editQuestion () {
    // get element question card
    let question_card = document.querySelector(".question-card")
    question_card.style.display = "flex";
    // Add question to list of question
    let nexbtn_ques = document.getElementById("btn-nextQuestion");
    nexbtn_ques.addEventListener("click",addQuestion)
  
}
// Function card question
function hideQuestion (){
    let question_card = document.querySelector(".question-card")
    question_card.style.display = "none";
}


// start Headers--------------------------------------------------
function inProgress(event){
    let container = document.querySelector('.container');
    container.style.display = "none";
    // // create header 
    let header = document.querySelector("header");
    header.style.display = "flex"
    // // get username input
    // // let inputName = document.getElementById('user-name');
    let userName = document.querySelector('.header-right h1');
    userName.className = "userName";
    userName.textContent =  user_name;
    //create menu in start quiz page
    let menu = document.querySelector(".menu")
    menu.style.display = "block";
    console.log(menu)
    


    
}
// end header-----------------------------------------------------


let user_name = "";
let listOf_question = [];
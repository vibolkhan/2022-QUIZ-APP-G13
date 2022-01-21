// ------------------------------------------------------------
// -----------------Function ----------------------------------
// ------------------------------------------------------------

// Forward new page--------------------------------------------
function nextPage(){
    const inputName = document.getElementById('user-name');
    if (inputName.value === ""){
        return confirm("You must input your name!");
    } else{
        displayNextWebpage(event);
    }
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
}

// Define button next to get on next page
const btnNext = document.getElementById('next-button');
btnNext.addEventListener("click",nextPage);



// start Headers--------------------------------------------------
function inProgress(event){
    let container = document.querySelector('.container');
    container.style.display = "none";

}
// end header-----------------------------------------------------

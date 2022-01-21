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
}

// Define button next to get on next page
const btnNext = document.getElementById('next-button');
btnNext.addEventListener("click",nextPage);



// start Headers--------------------------------------------------
function inProgress(event){
    let container = document.querySelector('.container');
    container.style.display = "none";
    // create header 
    let header = document.createElement("header");
    header.className = "header";
    //create header left and append it to header
    let header_left = document.createElement("div");
    header_left.className = "header-left";
    // creater div and set class name to logo 
    let logo = document.createElement("div");
    logo.className = "logo";
    // create img tage set class name as img
    let img = document.createElement("img")
    img.className = "img";
    img.src = "images/pnc-logo.png"
    img.style.width = '80px'
    // create header left title
    let logo_title = document.createElement("h1");
    logo_title.className = "logo-title";
    logo_title.textContent = "StudyEnglishHere";
    // create header right and append it to header 
    let header_right = document.createElement("div");
    header_right.className = "header-right";
    
    // get username input
    // let inputName = document.getElementById('user-name');
    let userName = document.createElement('h2');
    userName.textContent =  user_name;
    
    header_right.appendChild(userName);

    // append img to logo div and append logo to header left div
    logo.appendChild(img)
    header_left.appendChild(logo)
    header_left.appendChild(logo_title)
    header.appendChild(header_left)
    console.log(header)
    document.body.appendChild(header)

    header.appendChild(header_right);
    

}
// end header-----------------------------------------------------


let user_name = "";
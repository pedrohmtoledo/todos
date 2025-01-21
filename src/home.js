import foodImage from "../imgs/food.png"

function renderHomePage() {
    const content = document.querySelector("#content");

    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

    const homePageContent = document.createElement("div");
    const image = document.createElement("img");
    image.src = foodImage;

    content.innerHTML = "";

    const homePage  = `
    <h2> Food To Eat Restaurant </h2>
    <div class="description">Food to Eat is a place with food. You come, you sit, you eat the stuff we give you. Is it a burger? 
    Maybe. Is it soup? Who knows. We dont. Chairs are there, plates are probably clean. Forks are optional but fun to hold. 
    You eat food, then you leave. Its food! To eat! What more do you want? </div>`;
    
    homeButton.classList.add("button-active");
    menuButton.classList.remove("button-active");
    aboutButton.classList.remove("button-active");

    homePageContent.innerHTML = homePage;
    homePageContent.classList.add("homepage");
    homePageContent.appendChild(image);
    content.appendChild(homePageContent);
    
    
}



export { renderHomePage };
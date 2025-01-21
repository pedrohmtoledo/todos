import "./style.css"
import foodImg from "./food.png"
import { renderHomePage }  from "./home.js"
import { renderAboutPage }  from "./about.js"
import { renderMenuPage }  from "./menu.js"

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

renderHomePage();

homeButton.addEventListener("click", renderHomePage);
menuButton.addEventListener("click", renderMenuPage);
aboutButton.addEventListener("click", renderAboutPage);


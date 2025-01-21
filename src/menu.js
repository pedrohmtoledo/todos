function renderMenuPage() {
    const content = document.querySelector("#content");
    const menuPageContent = document.createElement("div");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");
    content.innerHTML = "";
    const menuPage  = `
    <h2> Food To Eat Menu </h2>
    <div class="menu">

        <div class="starters menulist">
            <h3> Starters(eat this first)</h3>
            <ul class="starterlist">
                <li><span class="item">Maybe Soup</span><span class="dots"> &nbsp;</span><span class="price">Some money</span></li>
                <li><span class="item">Meat Salad </span><span class="dots"> &nbsp;</span><span class="price">Some money</span></li>
                <li><span class="item">That Bread Thing </span><span class="dots"> &nbsp;</span><span class="price">Few money</span></li>
            </ul>
        </div>

        <div class="mains menulist">
            <h3> Mains </h3>
            <ul class="mainslist">
                <li><span class="item">Italian whatever</span><span class="dots"> &nbsp;</span><span class="price">Cheap(always)</span></li>
                <li><span class="item">Salad Meat</span><span class="dots"> &nbsp;</span><span class="price">Loan </span></li>
                <li><span class="item">Spicy Asian Food</span><span class="dots"> &nbsp;</span><span class="price">Few money</span></li>
            </ul>
        </div>

        <div class="desserts menulist">
            <h3> Desserts </h3>
            <ul class="starterlist">
                <li><span class="item">Cake</span><span class="dots"> &nbsp;</span><span class="price">$5.00(need money)</span></li>
                <li><span class="item">Something with pistaccio</span><span class="dots"> &nbsp;</span><span class="price">$1.00</span></li>
                <li><span class="item">Ice Cream</span><span class="dots"> &nbsp;</span><span class="price">Money</span></li>
            </ul>
        </div>

        <div class="drinks menulist">
            <h3> Drinks </h3>
            <ul class="starterlist">
                <li><span class="item">Coffee</span><span class="dots"> &nbsp;</span><span class="price">Some Money</span></li>
                <li><span class="item">Bo'o o' Wo'ah</span><span class="dots"> &nbsp;</span><span class="price">$0.10</span></li>
                <li><span class="item">Beer</span><span class="dots"> &nbsp;</span><span class="price">$37.00</span></li>
            </ul>
        </div>
    </div>`;
        
    homeButton.classList.remove("button-active");
    menuButton.classList.add("button-active");
    aboutButton.classList.remove("button-active");

    menuPageContent.innerHTML = menuPage;
    menuPageContent.classList.add("menupage");
    content.appendChild(menuPageContent);
}



export { renderMenuPage };
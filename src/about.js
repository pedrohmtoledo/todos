function renderAboutPage() {
    const content = document.querySelector("#content");
    const aboutPageContent = document.createElement("div");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");
    content.innerHTML = "";
    const aboutPage  = `
    <h2> Food To Eat Information </h2>
    <div class="information">
        <div class="hours">
            <h3> Hours </h3>
                <ul class="hourslist about">
                <li>Monday: We dont work on mondays</li>
                <li>Tuesday: 1pm - 10pm </li>
                <li>Wednesday: 10am - 7pm</li>
                <li>Thursday: Break due High workload</li>
                <li>Friday: We might work, just come</li>
                <li>Saturday: Only at night, premier league day</li>
                <li>Sunday: fuck off</li>
            </ul>
        </div>
        <div class="adress">
            <h3> Address </h3>
            <p>1234 Yum Yum Street, Flavor Town, Planet Snackos, ZIP Code: 56789.</p>
        </div>
        <div class="contact">
            <h3> Contact info </h3>
            <ul class="contactlist about">
                <li> Phone: 1-800-EAT-FOOD </li>
                <li> Email: nomnom@foodtoeat.biz</li>
                <li> Website: www.foodtoeatwow.com</li>
                <li> Fax (because why not): 555-FOOD-FAX</li>
            </ul>

    </div>`;

        
    homeButton.classList.remove("button-active");
    menuButton.classList.remove("button-active");
    aboutButton.classList.add("button-active");

    aboutPageContent.innerHTML = aboutPage;
    aboutPageContent.classList.add("aboutpage");
    content.appendChild(aboutPageContent);
}



export { renderAboutPage };
function createContact() {
    let contentOfThePage = document.querySelector("#content");
    let contactContent = document.createElement("div");
    contactContent.className = "contact-container";

    
    let contactHeaderContainer = document.createElement("div");
    let contactHeaderText = document.createElement("h1");
    contactHeaderText.innerText = "Contact us!";
    contactHeaderContainer.appendChild(contactHeaderText);
    contactContent.appendChild(contactHeaderContainer);


    let bruxelles = document.createElement("div");
    let bruxellesHeader = document.createElement("h2");
    let bruxellesPhoneNumber = document.createElement("p");
    let bruxellesMail = document.createElement("p"); 
    let bruxellesLocation = document.createElement("p");
    bruxelles.className = "contact-location-container";
    bruxellesHeader.innerText = "Bruxelles";
    bruxellesPhoneNumber.innerText = "0486498762";
    bruxellesMail.innerText = "imaginary@hotmail.com";
    bruxellesLocation.innerText = "avenue imaginary country, 19 - 1030 Bruxelles";
    bruxelles.appendChild(bruxellesHeader);
    bruxelles.appendChild(bruxellesPhoneNumber);
    bruxelles.appendChild(bruxellesMail);
    bruxelles.appendChild(bruxellesLocation);
    contactContent.appendChild(bruxelles);


    let liege = document.createElement("div");
    let liegeHeader = document.createElement("h2");
    let liegePhoneNumber = document.createElement("p");
    let liegeMail = document.createElement("p"); 
    let liegeLocation = document.createElement("p");
    liege.className = "contact-location-container";
    liegeHeader.innerText = "Liège";
    liegePhoneNumber.innerText = "0486239876";
    liegeMail.innerText = "perfectimaginary@hotmail.com";
    liegeLocation.innerText = "avenue imaginary territory, 39 - 3030 Liege";
    liege.appendChild(liegeHeader);
    liege.appendChild(liegePhoneNumber);
    liege.appendChild(liegeMail);
    liege.appendChild(liegeLocation);
    contactContent.appendChild(liege);


    let namur = document.createElement("div");
    let namurHeader = document.createElement("h2");
    let namurPhoneNumber = document.createElement("p");
    let namurMail = document.createElement("p"); 
    let namurLocation = document.createElement("p");
    namur.className = "contact-location-container";
    namurHeader.innerText = "Namur";
    namurPhoneNumber.innerText = "0486298765";
    namurMail.innerText = "location@hotmail.com";
    namurLocation.innerText = "avenue imaginary location, 99 - 9030 Namur";
    namur.appendChild(namurHeader);
    namur.appendChild(namurPhoneNumber);
    namur.appendChild(namurMail);
    namur.appendChild(namurLocation);
    contactContent.appendChild(namur);

    contentOfThePage.appendChild(contactContent);
}

export default createContact
function createMenu() {
    let contentOfThePage = document.querySelector("#content");
    let menuContent = document.createElement("div");
    let menuContainer = document.createElement("div");
    menuContent.className = "menu-content"
    menuContainer.className = "menu-container";

    
    let diavola = document.createElement("div");
    let diavolaTextContainer = document.createElement("div");
    let diavolaDescription = document.createElement("p");
    let diavolaIngredients = document.createElement("p");
    let diavolaPicture = document.createElement("img");
    diavola.className = "pizza-container"
    diavolaTextContainer.className = "pizza-text-container";
    diavolaIngredients.className = "ingredients-text";
    diavolaDescription.className = "description-text";
    diavolaDescription.innerText = "Pizza diavola";
    diavolaIngredients.innerText = "Tomato sauce, mozzarella and spicy salami.";
    diavolaPicture.src = "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1706710817/static-takeaway-com/images/restaurants/be/3131377N/products/9243771_fratellospizzeria_food_pizzadiabola";
    diavolaTextContainer.appendChild(diavolaDescription);
    diavolaTextContainer.appendChild(diavolaIngredients);
    diavola.appendChild(diavolaPicture);
    diavola.appendChild(diavolaTextContainer);
    menuContainer.appendChild(diavola);


    let margherita = document.createElement("div");
    let margheritaTextContainer = document.createElement("div");
    let margheritaDescription = document.createElement("p");
    let margheritaIngredients = document.createElement("p");
    let margheritaPicture = document.createElement("img");
    margherita.className = "pizza-container"
    margheritaTextContainer.className = "pizza-text-container";
    margheritaIngredients.className = "ingredients-text";
    margheritaDescription.className = "description-text";
    margheritaDescription.innerText = "Pizza Margherita";
    margheritaIngredients.innerText = "Tomato sauce, mozzarella and basil";
    margheritaPicture.src = "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1706710817/static-takeaway-com/images/restaurants/be/3131377N/products/9243771_fratellospizzeria_food_pizzamargherita";
    margheritaTextContainer.appendChild(margheritaDescription);
    margheritaTextContainer.appendChild(margheritaIngredients);
    margherita.appendChild(margheritaPicture);
    margherita.appendChild(margheritaTextContainer);
    menuContainer.appendChild(margherita);
    

    let fourSeasons = document.createElement("div");
    let fourSeasonsTextContainer = document.createElement("div");
    let fourSeasonsDescription = document.createElement("p");
    let fourSeasonsIngredients = document.createElement("p");
    let fourSeasonsPicture = document.createElement("img");
    fourSeasons.className = "pizza-container"
    fourSeasonsTextContainer.className = "pizza-text-container";
    fourSeasonsIngredients.className = "ingredients-text";
    fourSeasonsDescription.className = "description-text";
    fourSeasonsDescription.innerText = "Pizza 4 seasons";
    fourSeasonsIngredients.innerText = "Tomato sauce, mozzarella, ham, mushrooms, artichoke and olives.";
    fourSeasonsPicture.src = "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1706710817/static-takeaway-com/images/restaurants/be/3131377N/products/9243771_fratellospizzeria_food_pizza4saisons";
    fourSeasonsTextContainer.appendChild(fourSeasonsDescription);
    fourSeasonsTextContainer.appendChild(fourSeasonsIngredients);
    fourSeasons.appendChild(fourSeasonsPicture);
    fourSeasons.appendChild(fourSeasonsTextContainer);
    menuContainer.appendChild(fourSeasons);


    let vegetarian = document.createElement("div");
    let vegetarianTextContainer = document.createElement("div");
    let vegetarianDescription = document.createElement("p");
    let vegetarianIngredients = document.createElement("p");
    let vegetarianPicture = document.createElement("img");
    vegetarian.className = "pizza-container"
    vegetarianTextContainer.className = "pizza-text-container";
    vegetarianIngredients.className = "ingredients-text";
    vegetarianDescription.className = "description-text";
    vegetarianDescription.innerText = "Pizza vegetarian";
    vegetarianIngredients.innerText = "Tomato sauce, mozzarella, aubergine, courgette and bell pepper.";
    vegetarianPicture.src = "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1706710817/static-takeaway-com/images/restaurants/be/3131377N/products/9243771_fratellospizzeria_food_pizzavegetarienne";
    vegetarianTextContainer.appendChild(vegetarianDescription);
    vegetarianTextContainer.appendChild(vegetarianIngredients);
    vegetarian.appendChild(vegetarianPicture);
    vegetarian.appendChild(vegetarianTextContainer);
    menuContainer.appendChild(vegetarian);


    let regina = document.createElement("div");
    let reginaTextContainer = document.createElement("div");
    let reginaDescription = document.createElement("p");
    let reginaIngredients = document.createElement("p");
    let reginaPicture = document.createElement("img");
    regina.className = "pizza-container"
    reginaTextContainer.className = "pizza-text-container";
    reginaIngredients.className = "ingredients-text";
    reginaDescription.className = "description-text";
    reginaDescription.innerText = "Pizza Regina";
    reginaIngredients.innerText = "Tomato sauce, mozzarella, ham and mushrooms";
    reginaPicture.src = "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1706710817/static-takeaway-com/images/restaurants/be/3131377N/products/9243771_fratellospizzeria_food_pizzaregina";
    reginaTextContainer.appendChild(reginaDescription);
    reginaTextContainer.appendChild(reginaIngredients);
    regina.appendChild(reginaPicture);
    regina.appendChild(reginaTextContainer);
    menuContainer.appendChild(regina);    


    let napoli = document.createElement("div");
    let napoliTextContainer = document.createElement("div");
    let napoliDescription = document.createElement("p");
    let napoliIngredients = document.createElement("p");
    let napoliPicture = document.createElement("img");
    napoli.className = "pizza-container"
    napoliTextContainer.className = "pizza-text-container";
    napoliIngredients.className = "ingredients-text";
    napoliDescription.className = "description-text";
    napoliDescription.innerText = "Pizza Napoli";
    napoliIngredients.innerText = "Tomato sauce, mozzarella, anchovies, capers and olives.";
    napoliPicture.src = "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_120,w_120/f_auto/q_auto/dpr_1.0/v1706710817/static-takeaway-com/images/restaurants/be/3131377N/products/9243771_fratellospizzeria_food_pizzanapoli";
    napoliTextContainer.appendChild(napoliDescription);
    napoliTextContainer.appendChild(napoliIngredients);
    napoli.appendChild(napoliPicture);
    napoli.appendChild(napoliTextContainer);
    menuContainer.appendChild(napoli); 

    menuContent.appendChild(menuContainer);
    contentOfThePage.appendChild(menuContent);
}

export default createMenu
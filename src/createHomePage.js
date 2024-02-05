function createHomePage() {
        let contentOfThePage = document.querySelector("#content");
        let homeContent = document.createElement("div");
        homeContent.className = "home-content";
        

        let header = document.createElement("h1");
        header.innerText = "Mario's Pizza";
        homeContent.appendChild(header);


        let pizzaImage = document.createElement("img");
        pizzaImage.src = 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        pizzaImage.width = "700";
        homeContent.appendChild(pizzaImage);


        let restaurantDescription = document.createElement("p");
        restaurantDescription.className = "restaurant-description";
        restaurantDescription.innerText = "Welcome to the mario's pizza website, this is the official website of mario pizza here you can order different pizzas made by our italian chefs. ";
        homeContent.appendChild(restaurantDescription); 

        contentOfThePage.appendChild(homeContent);
}

export default createHomePage
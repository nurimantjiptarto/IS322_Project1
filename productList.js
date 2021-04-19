(function (){


    var mockDatabase = [
        { _id: '5', name: 'Organic Tampons', price: '$8.99', image: 'images/product5.jpg', category:'body'},
        { _id: '6', name: 'Organic Cup - Reusable Period Cup', price: '$15.99', image: 'images/product6.jpg', category:'body'},
        { _id: '3', name: 'Lavendar Candle', price: '$13.99', image: 'images/product3.jpg', category:'home'},
        { _id: '4', name: 'Reusable Cotton Pads', price: '$14.99', image: 'images/product4.jpeg', category:'skin'},
        { _id: '1', name: 'Maui Shampoo and Conditioner Set', price: '$17.99', image: 'images/product1.jpg', category: 'home'},
        { _id: '2', name: 'Linen Set', price: '$20.99', image: 'images/product2.jpg', category:'home'},
        { _id: '7', name: 'Cocooil Body Oil', price: '$16.99', image: 'images/product7.jpeg', category:'body'},
        { _id: '8', name: 'Oh My Bod! SPF 50 Body Sunscreen', price: '$10.99', image: 'images/product8.jpeg', category: 'skin'}

    ];
    


    //FUNCTION TO DYNAMICALLY BUILD CARDS 
    function renderList(results){
        
        var productCards = document.getElementById('product-cards');
        productCards.innerHTML = '';
        

        //maps data info into cards
        results.map(function (res) {

            //dynamically creates card 
            var div = document.createElement('div');
            

            div.className = 'card';
            div.id = res._id;
            
            div.innerHTML = `
        
                    <div class = "card_image">
                        <img src = ${res.image} style="width: 60%; height: 60%;">
                    </div> 
        
                    <div class="card_title">
                    ${res.name}
                    </div>	
        
                    <div class="card_price">
                    ${res.price}
                    </div>	
    
            `;
            productCards.appendChild(div);
        });
        
        
    }
    //Puts mockdata into product cards 
    renderList(mockDatabase);


    
    
    // Function to Order results list 
	function orderBy(sortValue) {
		// Sort method varies based on what type of value we're sorting 
		var sortedResults = (sortValue === 'name') ? 
			mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase
				// Sorts alphabetically.  -1 puts it before. 1 puts it after
				if (nameA < nameB) {
				    return -1;
				}
				if (nameA > nameB) {
				    return 1;
				}
			}) :
            mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler. 
                // Just need postive or negative number 
                // Object properties can be accessed through a string representing their name
                var priceA = parseFloat(a.price.replace(/\$/g, ""));
                var priceB = parseFloat(b.price.replace(/\$/g, ""));
                return priceA[sortValue] - priceB[sortValue];
                });
        renderList(sortedResults);
    }
	
    
	// Change events trigger after the value of a form input changes
	document.querySelector('#orderBy').addEventListener('change', function(event){
		// Event is the JavaScript event that transpired, in our change a CHANGE event.
		// Target is the element it was performed on, useful for when the event targets 
		// multiple elements.
		// Value has the name implies is the current value of the input element, if there is one
		orderBy(event.target.value);
	});




    //function to filter categories
    function toggleCategory(result){
        
        if (result == 'home'){
            var filteredHomeResults = mockDatabase.filter(function (result) {
                return result.category == 'home'
    
            });
            console.log(filteredHomeResults)
            renderList(filteredHomeResults)
        }
        else if (result == 'skin'){
            var filteredSkinResults = mockDatabase.filter(function (result) {
                return result.category == 'skin'
    
            });
            console.log(filteredSkinResults)
            renderList(filteredSkinResults)
        }
        else if (result == 'body'){
            var filteredBodyResults = mockDatabase.filter(function (result) {
                return result.category == 'body'
            });
            console.log(filteredBodyResults)
            renderList(filteredBodyResults)
        }
        else{
            return renderList(mockDatabase);
        }
    }
    document.querySelector('#category').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean 
        var value = event.target.value;
        toggleCategory(value);

    });


    //function to filter price
    function togglePrice(result){

        if (result == 14.99){
            var priceRangeOne = mockDatabase.filter(function (result) {
                var price = result.price.replace(/\$/g, "");
                return parseFloat(price) <= 14.99;
            });

            console.log(priceRangeOne)
            renderList(priceRangeOne)
        }
        else if (result == 19.99){
            var priceRangeTwo = mockDatabase.filter(function (result) {
                var price = result.price.replace(/\$/g, "");
                return parseFloat(price) > 14.99 && parseFloat(price) <= 19.99 ;
            });

            console.log(priceRangeTwo)
            renderList(priceRangeTwo)
        }
        else if (result == 20.00){
            var priceRangeThree = mockDatabase.filter(function (result) {
                var price = result.price.replace(/\$/g, "");
                return parseFloat(price) >= 20.00;
            });

            console.log(priceRangeThree)
            renderList(priceRangeThree)
        }
        else{
            return renderList(mockDatabase);
        }
        

    }
    

    document.querySelector('#priceRange').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean 
        var value = parseFloat(event.target.value);
        togglePrice(value);

    });


    





    




})();

    
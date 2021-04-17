(function (){

    var mockDatabase = [
        { _id: '5', name: 'Wooden Reusable Bottle', price: '$12.99' },
        { _id: '6', name: 'Bamboo Toothbrushes - Set of 3', price: '$7.99' },
        { _id: '3', name: 'Lavendar Candle', price: '$15.99' },
        { _id: '4', name: 'Reusable Cotton Pads', price: '$14.99' },
        { _id: '1', name: 'Maui Shampoo and Conditioner Set', price: '$17.99' },
        { _id: '2', name: 'Linen Set', price: '$20.99' },
    ];

    function renderList(results){
        
        //selecting div for products section 
        var products = document.getElementById("product-cards").getElementsByClassName("card");
        //var productTitle = document.getElementsByClassName("product_title");
        //var productPrice = document.getElementsByClassName("product_price");

    
        //clears out the info in the div 
        products.innerHTML = '';

        // Map each database record to a string containing the HTML for it's row
		var productInfo = results.map(function (res) {
            return `<div id=${res._id}>` + res.name + '</div>'+'<div>' + res.price + '</div>';
		});



		// Map each database record to a string containing the HTML for it's row
		var tableRows = results.map(function (result, index) {
			return '<tr><td>' + index + '</td><td>' + result.name + '</td><td>' + 
					result._id + '</td><td>' + result.published + '</td></tr>';
		});

		// Set the contents of the table body to the new set of rendered HTML rows
		productInfo.forEach(function (row) {
			products.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
		});




        
    }

    renderList(mockDatabase);

})();

       /*
        var productImage = document.getElementsByClassName('card_image');
        var productTitle = document.getElementsByClassName('card_title');
        var productPrice = document.getElementsByClassName('card_price');

        <div class="card">
                <div class = "card_image"></div>
    
                <div class="card_title">
                    
                </div>	
    
                <div class="card_price">
                    
                </div>	
            </div>
        */
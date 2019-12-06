// global variables
let productList =  [
        {
            "id" : 1,
            "name" : "Aspire Z3",
            "image" : "/img/laptops/Product_1/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-7400T processor Quad-core 2.40 GHz", "17.3\" Full HD (1920 x 1080) 16:9 Touchscreen",
                            "Intel® HD Graphics 630 shared memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 899.99,
            "quantity" :  2,
            "category" : "laptop",
            "type" : "Regular",
            "screenSize" : "23.8",
            "color" : ["Silver", "Black"],
            "rating": 3.4,
            "ratingCount" : 200
        },
        {
            "id" : 2,
            "name" : "Predator 15 Gaming",
            "image" : "/img/laptops/Product_2/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1060 with 6 GB Dedicated Memory", "16 GB, DDR4 SDRAM", "1 TB HDD, 256 GB SSD",
                            "30-day Microsoft Office trial included"],
            "price" : 1499.99,
            "quantity" : 15,
            "category" : "laptop",
            "type" : "Gaming",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black"],
            "rating": 4.7,
            "ratingCount" : 10
        },
        {
            "id" : 3,
            "name" : "Nitro 5 Gaming Laptop - AN515-43-R2MG",
            "image" : "/img/laptops/Product_3/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 899.99,
            "quantity" : 20,
            "category" : "laptop",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black", "Red"],
            "rating": 4.9,
            "ratingCount" : 26    
        },
        {
            "id" : 4,
            "name" : "Nitro 5 Gaming Laptop - AN515-53-55H5",
            "image" : "/img/laptops/Product_4/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 20,
            "category" : "laptop",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black", "Red"],
            "rating": 3.3,
            "ratingCount" : 570 
        },
        {
            "id" : 5,
            "name" : "Aspire Z3",
            "image" : "/img/laptops/Product_1/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-7400T processor Quad-core 2.40 GHz", "17.3\" Full HD (1920 x 1080) 16:9 Touchscreen",
                            "Intel® HD Graphics 630 shared memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 20,
            "category" : "laptop",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black", "Red"],
            "rating": 3.3,
            "ratingCount" : 570 
        },
        {
            "id" : 6,
            "name" : "Predator 15 Gaming",
            "image" : "/img/laptops/Product_2/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1060 with 6 GB Dedicated Memory", "16 GB, DDR4 SDRAM", "1 TB HDD, 256 GB SSD",
                            "30-day Microsoft Office trial included"],
            "price" : 799.99,
            "quantity" : 20,
            "category" : "laptop",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black", "Red"],
            "rating": 3.3,
            "ratingCount" : 570   
        },
        {
            "id" : 7,
            "name" : "Nitro 5 Gaming Laptop - AN515-43-R2MG",
            "image" : "/img/laptops/Product_3/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 20,
            "category" : "laptop",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black", "Red"],
            "rating": 3.3,
            "ratingCount" : 570        
        },
        {
            "id" : 8,
            "name" : "Nitro 5 Gaming Laptop - AN515-53-55H5",
            "image" : "/img/laptops/Product_4/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 20,
            "category" : "laptop",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black", "Red"],
            "rating": 3.3,
            "ratingCount" : 570        
        }
    ]
let currentPage = 1;
let productsPerPage = 3;

/*-------------Utility Funtions---------------*/

/*  Function: getProductStatusbyQtyAsHTML
    Parameters: quantity: Integer
    Return: string
    Description: displays stock status of product based on quantity and 
                apply suitable color class to the status text
*/
const getProductStatusbyQtyAsHTML = (quantity) => {
    let colorClass = null;
    let stockStatus = null;
    if(quantity>10){
        colorClass = `green-color`;
        stockStatus = `In Stock`;
    }
    else if(quantity>0){
        colorClass = `red-color`;
        stockStatus = `Hurry, only ${quantity} left`;
    }
    else{
        colorClass = `grey-color`;
        stockStatus = `Out of Stock`;
    }

    return `<span class=${colorClass}>${stockStatus}</span>`
};

/*  Function: getProductRatingAsHTML
    Parameters: rating: float
    Return: string
    Description: calculate number full and half stars based on the product rating and 
                creates HTML string to return
*/
const getProductRatingAsHTML = (rating) => {
    const fractPart = rating - Math.floor(rating);
    const decimalPart = Math.floor(rating);
    let starSpan = ``;
    for(let i=0; i<decimalPart; i++)
        starSpan += `<span class="material-icons gold-color">star</span>`;

    if(fractPart >= 0.5){
        starSpan += `<span class="material-icons gold-color">star_half</span>`;
    }

    return starSpan;
}
    // fetch(endPoint)
    // .then(function(res){
    //   res.json()
    //     .then(function(data){
    //         alert(`Temp is ${data.current.temperature}`);
    //     })
  
    // })
// <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>

/*  Function: getProductAsHTML
    Parameters: product: Object
    Return: String
    Description: dynamically creates product HTML using product attributes from data
*/
const getProductAsHTML = (product) => {
    return `
    <article class="product">
        <header class="bottom-border">
            <div class="product-image"><img src=${product.image} alt="Product Image"><div>
            <div class="product-header-grid">
                ${getProductStatusbyQtyAsHTML(product.quantity)}
                <div class="product-rating">
                    <span>User rating ${product.rating} (${product.ratingCount})</span>
                    <span>${getProductRatingAsHTML(product.rating)}<span>
                </div>
                <fieldset class="product-colors-block">
                    <span><legend>colour variants</legend></span>
                    <div>
                        <ul class="swatches">
                            <li>
                                <label class="product-color red">
                                    <input type="radio" name="colour" value="r" checked> <!-- default -->
                                    <span>Red</span>
                                </label>
                            </li>

                            <li>
                                <label class="product-color white">
                                    <input type="radio" name="colour" value="w">
                                    <span>White</span>
                                </label>
                            </li>

                            <li>
                                <label class="product-color blue">
                                    <input type="radio" name="colour" value="b"> 
                                    <span>Blue</span>
                                </label>
                            </li>
                        </ul>
                    <output id="selected"></output>
                    </div>
                </fieldset>
            </div>
        </header>
        <main class="bottom-border">
            <h3>${product.name}</h3>
            <ul class="product-description-list">
                ${product.description.map(x => `<li>${x}</li>`).join('')}
            </ul>
        </main>
        <footer class="bottom-border">
            <form class="product-footer-form">
                <data class="price" value="39"><del>$50.00</del><ins class="offer-price">$39.00</ins></data>
                <input type="button" class="buy-button" value="Buy Now">
                <button class="transparent-button align-right"><span class="material-icons add-cart">add_shopping_cart</span></button>
            </form>
        </footer>
    </article>`

    return HTMLString;
}

/*-------------Functionality Funtions---------------*/

/*  Function: calculateAndShowNumberOfPages
    Parameters: productsPerPage: Integer
    Return: None
    Description: calculates number of pages and add them to inner HTML
*/
const calculateAndShowNumberOfPages = (productsPerPage) =>{
    const numberOfPages = Math.ceil(productList.length/productsPerPage);
    const pageListing = document.getElementById("pageListing");
    pageListing.innerHTML = `<li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>`;
    for(let i=2; i<=numberOfPages; i++){
        pageListing.innerHTML += `<li><a href="#" aria-label="Page ${i}">${i}</a></li>\n`
    }
    
}

/*  Function: showProductsByPage
    Parameters: pageNumber: Integer
                productsPerPage: Integer
    Return: None
    Description: slices the products according to the current page number
*/
const showProductsByPage = (pageNumber, productsPerPage) => {
    currentPage = pageNumber;
    //update current page aria-label for accessibility
    const pageListing = document.getElementById("pageListing");

    const firstIndex = (pageNumber-1)*productsPerPage;
    const lastIndex = Math.min(productList.length,firstIndex + productsPerPage);

    // update product results at start of footer
    document.getElementById("mainFooterResults").innerHTML = `Page ${pageNumber}, showing products ${firstIndex+1} to ${lastIndex} of ${productList.length} products`;
    
    const productsSection = document.getElementById("products");    
    productsSection.innerHTML = ``;
    productsSection.innerHTML += productList.slice(firstIndex, lastIndex).map(getProductAsHTML).join('');

    //disable prev page and next page link if needed
    const numberOfPages = Math.ceil(productList.length/productsPerPage);
    
    if(pageNumber === 1){
        document.getElementById("previousPage").setAttribute("disabled", true);
        document.getElementById("nextPage").removeAttribute("disabled");
    }
    else if(pageNumber === numberOfPages){
        console.log("2nd");
        document.getElementById("previousPage").removeAttribute("disabled");
        document.getElementById("nextPage").setAttribute("disabled", true);
    }
    else{
        document.getElementById("nextPage").removeAttribute("disabled");
        document.getElementById("previousPage").removeAttribute("disabled");   
    }
}

window.addEventListener("load", () => {
    
    calculateAndShowNumberOfPages(productsPerPage);
    
    // add listener to page listing parent
    const paginationParent = document.getElementById("pageListing");
    paginationParent.addEventListener("click", (event)=>{
        clickedPage = parseInt(event.target.innerHTML);
        showProductsByPage(clickedPage, productsPerPage);
    });
    // Add Listeners to previous and next button
    document.getElementById("previousPage").addEventListener("click", () =>{
        window.scroll(0,0);
        showProductsByPage(currentPage - 1, productsPerPage);
    });
    document.getElementById("nextPage").addEventListener("click", () =>{
        window.scroll(0,0);
        showProductsByPage(currentPage + 1, productsPerPage);
    });

    // call to show products on page 1 for the first load
    showProductsByPage(currentPage, productsPerPage);

    const filterButton = document.getElementById("filterButton");
    filterButton.addEventListener("click", ()=>{

    });
    
});  

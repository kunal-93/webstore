// global variables
let productList =  [
        {
            "id" : 1,
            "name" : "Notebook 9 Pen",
            "image" : "../img/laptops/Product_1/silver_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-7400T processor Quad-core 2.40 GHz", "17.3\" Full HD (1920 x 1080) 16:9 Touchscreen",
                            "Intel® HD Graphics 630 shared memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 899.99,
            "quantity" :  2,
            "category" : "laptop",
            "type" : "Regular",
            "RAM" : [8, 16],
            "color" : ["silver", "blue"],
            "rating": 3.4,
            "ratingCount" : 200
        },
        {
            "id" : 2,
            "name" : "Notebook 9 Pen Gaming",
            "image" : "../img/laptops/Product_2/blue_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1060 with 6 GB Dedicated Memory", "16 GB, DDR4 SDRAM", "1 TB HDD, 256 GB SSD",
                            "30-day Microsoft Office trial included"],
            "price" : 1799.99,
            "quantity" : 15,
            "category" : "laptop",
            "type" : "Gaming",
            "RAM" : [8, 12, 16],
            "color" : ["blue", "Black"],
            "rating": 4.7,
            "ratingCount" : 10
        },
        {
            "id" : 3,
            "name" : "Notebook 9 Pen Pro",
            "image" : "../img/laptops/Product_3/silver_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 899.99,
            "quantity" : 20,
            "category" : "laptop",
            "RAM" : [8, 16],
            "color" : ["silver"],
            "rating": 4.9,
            "ratingCount" : 26    
        },
        {
            "id" : 4,
            "name" : "Notebook 7 Pen",
            "image" : "../img/laptops/Product_4/silver_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 20,
            "category" : "laptop",
            "RAM" : [8],
            "color" : ["silver"],
            "rating": 3.3,
            "ratingCount" : 570 
        },
        {
            "id" : 5,
            "name" : "Notebook 7 Pen Gaming",
            "image" : "../img/laptops/Product_5/black_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-7400T processor Quad-core 2.40 GHz", "17.3\" Full HD (1920 x 1080) 16:9 Touchscreen",
                            "Intel® HD Graphics 630 shared memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 0,
            "category" : "laptop",
            "RAM" : [8, 16],
            "color" : ["black"],
            "rating": 3.3,
            "ratingCount" : 570 
        },
        {
            "id" : 6,
            "name" : "Notebook 7 Pen Pro",
            "image" : "../img/laptops/Product_6/black_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1060 with 6 GB Dedicated Memory", "16 GB, DDR4 SDRAM", "1 TB HDD, 256 GB SSD",
                            "30-day Microsoft Office trial included"],
            "price" : 799.99,
            "quantity" : 20,
            "category" : "laptop",
            "RAM" : [8, 12, 16],
            "color" : ["black"],
            "rating": 3.3,
            "ratingCount" : 570   
        },
        {
            "id" : 7,
            "name" : "Notebook Odyssey",
            "image" : "../img/laptops/Product_7/silver_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 1799.99,
            "quantity" : 20,
            "category" : "laptop",
            "RAM" : [8, 12, 16],
            "color" : ["silver"],
            "rating": 3.3,
            "ratingCount" : 570        
        },
        {
            "id" : 8,
            "name" : "Notebook Odyssey Gaming",
            "image" : "../img/laptops/Product_8/black_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i7-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 2060 with 8 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 1999.99,
            "quantity" : 20,
            "category" : "laptop",
            "RAM" : [8, 16],
            "color" : ["black", "white"],
            "rating": 3.3,
            "ratingCount" : 570        
        },
        {
            "id" : 9,
            "name" : "Notebook 5",
            "image" : "../img/laptops/Product_9/white_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 13,
            "category" : "laptop",
            "RAM" : [8, 16],
            "color" : ["white"],
            "rating": 3.3,
            "ratingCount" : 570        
        },
        {
            "id" : 10,
            "name" : "Notebook Flash",
            "image" : "../img/laptops/Product_10/grey_main.jpg",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                            "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 799.99,
            "quantity" : 0,
            "category" : "laptop",
            "RAM" : [8, 16],
            "color" : ["grey"],
            "rating": 3.3,
            "ratingCount" : 570        
        }
    ]
let currentPage = 1;
let productsPerPage = 3;
let filteredProducts = productList.slice();

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


const getColorSwatch = (product_color) => {
    return `
        <li>
            <label class="product-color ${product_color}">
                <input type="radio" name="colour" value="${product_color}"> <!-- default -->
                <span>${product_color}</span>
            </label>
        </li>
    `
}
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
                <div>
                    <p>User rating ${product.rating} (${product.ratingCount})</p>
                    <div>${getProductRatingAsHTML(product.rating)}</div>
                </div>
                <fieldset class="product-colors-block">
                    <legend>colours</legend>
                    <div>
                        <ul class="swatches">
                            ${product.color.map(getColorSwatch).join('\n')}
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
                <data class="price" value="$${product.price.toFixed(2)}"><del>$${(product.price*(Math.random()+1)).toFixed(2)}</del><ins class="offer-price">$${product.price}</ins></data>
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
    const numberOfPages = Math.ceil(filteredProducts.length/productsPerPage);
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
    const lastIndex = Math.min(filteredProducts.length,firstIndex + productsPerPage);

    // update product results at start of footer
    document.getElementById("mainFooterResults").innerHTML = `Page ${pageNumber}, showing products ${firstIndex+1} to ${lastIndex} of ${filteredProducts.length} products`;
    
    const productsSection = document.getElementById("products");    
    productsSection.innerHTML = ``;
    productsSection.innerHTML += filteredProducts.slice(firstIndex, lastIndex).map(getProductAsHTML).join('');

    //disable prev page and next page link if needed
    const numberOfPages = Math.ceil(filteredProducts.length/productsPerPage);
    
    if(pageNumber === 1){
        document.getElementById("previousPage").setAttribute("disabled", true);
        document.getElementById("nextPage").removeAttribute("disabled");
    }
    else if(pageNumber === numberOfPages){
        document.getElementById("previousPage").removeAttribute("disabled");
        document.getElementById("nextPage").setAttribute("disabled", true);
    }
    else{
        document.getElementById("nextPage").removeAttribute("disabled");
        document.getElementById("previousPage").removeAttribute("disabled");   
    }
}

// Sorting order function
const sortProducts = (criteria) => {

    if (criteria == 'RatingsAsc') {
        // High to Low ratings
        filteredProducts.sort((a, b) => a.rating - b.rating);
    } 
    else if(criteria == 'RatingsDesc'){
        // Low to High ratings
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    else if (criteria == 'PriceAsc') {
        // Low to High Price
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (criteria == 'PriceDesc') {
        // High to Low Price
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    showProductsByPage(1, productsPerPage);
}


const toggleFilterForm = () => {
    const filterPanelStyle = document.getElementById("filterPanel").style;
    if(filterPanelStyle.display == "grid"){
        filterPanelStyle.display = "none";
    }
    else{
        filterPanelStyle.display = "grid";
    }
}

const clearAllFilters = () => {

    /* UI clearance section */
    // uncheck out of stock option
    document.getElementById("excludeOutOfStock").checked = false;

    // Clear All RAM options by name
    document.querySelectorAll("input[name='ram']");

    // Clear All Ratings Options by name
    const allRAMCheckboxes = document.querySelectorAll("input[name='ram']");
    for(let i=0; i<allRAMCheckboxes.length; i++){
        allRAMCheckboxes[i].checked = false;
    }

    //Clear Price Range Fields
    document.getElementById("MinPriceFilter").value = null;
    document.getElementById("MaxPriceFilter").value = null;

    //clear Ratings Field
    const allRatingsRadio = document.querySelectorAll("input[name='rating']");
    for(let i=0; i<allRatingsRadio.length; i++){
        allRatingsRadio[i].checked = false;
    }

    const sortCriteria = document.getElementById('sortOrder').value;
    sortProducts(sortCriteria);
}

const matchRAM = (product, RAMFilters) => {
    
}

const applyNewFilters = () => {
    
    // Make a copy
    filteredProducts = productList.slice();

    // Remove out of stock Items
    if(document.getElementById("excludeOutOfStock").checked)
        filteredProducts = filteredProducts.filter(x => x.quantity > 0);
    
    // Apply RAM filters
    const allRAMCheckboxes = document.querySelectorAll("input[name='ram']");
    let RAMFilters = [];
    for(let i=0; i<allRAMCheckboxes.length; i++){
        const currentFilter = allRAMCheckboxes[i];
        if(currentFilter.checked)
            RAMFilters.push(parseInt(currentFilter.value));
    }
    if(RAMFilters.length>0)
        filteredProducts = filteredProducts.filter( (product) => {
            for(let i=0; i<RAMFilters.length; i++){
                if(product.RAM.includes(RAMFilters[i]))
                    return true;
            }
            return false;
        });

    // Apply Price Range Filter
    let minPrice=0, maxPrice=99999999;
    if(parseInt(document.getElementById("MinPriceFilter").value) > 0)
        minPrice = parseInt(document.getElementById("MinPriceFilter").value);
    else //convert negative value to zero
        document.getElementById("MinPriceFilter").value = 0;

    if(parseInt(document.getElementById("MaxPriceFilter").value) > minPrice)
        maxPrice = parseInt(document.getElementById("MaxPriceFilter").value);
    else //convert maxPrice to Highest since it cannot be smaller than minPrice
        document.getElementById("MaxPriceFilter").value = maxPrice;

    filteredProducts = filteredProducts.filter(x => minPrice <= x.price && x.price <= maxPrice);
    

    console.log(filteredProducts.length);


    // hide filter form
    toggleFilterForm();
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

    document.getElementById("clearFiltersButton").addEventListener("click", clearAllFilters);

    // call to show products on page 1 for the first load
    showProductsByPage(currentPage, productsPerPage);

    
    document.getElementById("filterButton").addEventListener("click", toggleFilterForm);
    
    document.getElementById("applyFiltersButton").addEventListener("click", applyNewFilters);

    document.getElementById('sortOrder').addEventListener('change', () => {
        // sort dropdown value
        const sortCriteria = document.getElementById('sortOrder').value;
        sortProducts(sortCriteria);
    });

        
    
});  

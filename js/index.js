/* Settings */
const settings = {
    imagePath:'img/'
}

// global variables
let productList =  [
    {
        "id" : 1,
        "name" : "Galaxy S7",
        "image" : "smartphones/product_1/black_main.jpg",
        "description" : ["Android 8.0", "Qualcomm Snapdragon 820 2.15GHz, 1.6GHz, Quad-Core", "4GB RAM",
                        "5.1 2560 x 1440 (Quad HD) Super Amoled Display", "32GB ROM"],
        "price" : 399.99,
        "quantity" : 3,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["black"],
        "rating": 2.7,
        "ratingCount" : 480,
        "selectedColorIndex": 0
    },
    {
        "id" : 2,
        "name" : "Galaxy S10",
        "image" : "smartphones/product_2/black_main.jpg",
        "description" : ["An immersive Cinematic Infinity Display", "Android 9.0", "Qualcomm Snapdragon 820 2.15GHz, 1.6GHz, Quad-Core", "4GB RAM",
                        "5.1 2560 x 1440 (Quad HD) Super Amoled Display", "128GB ROM"],
        "price" : 699.99,
        "quantity" : 8,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["black", "blue", "white"],
        "rating": 4.7,
        "ratingCount" : 1570,
        "selectedColorIndex": 0      
    },
    {
        "id" : 3,
        "name" : "Galaxy A70",
        "image" : "smartphones/product_3/blue_main.jpg",
        "description" : ["Rear Camera: Main: 32MP, F1.7 Ultra Wide: 8MP, F2.2 (123°)", "Android 9.0", "Display: 6.7-inch Full HD+ (1080x2400) Super AMOLED Infinity-U Display", "8GB RAM",
                        "128GB ROM"],
        "price" : 458.99,
        "quantity" : 15,
        "category" : "smartphones",
        "RAM" : [8],
        "color" : ["blue", "black", "white"],
        "rating": 4.3,
        "ratingCount" :2003,
        "selectedColorIndex": 0       
    },
    {
        "id" : 4,
        "name" : "Galaxy A50",
        "image" : "smartphones/product_4/blue_main.jpg",
        "description" : ["FHD+ multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution", "Android 9.0", "Display: 5.7-inch", "4GB RAM",
                        "64GB ROM"],
        "price" : 479.99,
        "quantity" : 23,
        "category" : "smartphones",
        "RAM" : [4, 8],
        "color" : ["blue", "black", "white"],
        "rating": 4.1,
        "ratingCount" :203,
        "selectedColorIndex": 0     
    },
    {
        "id" : 5,
        "name" : "Galaxy A30",
        "image" : "smartphones/product_5/white_main.jpg",
        "description" : ['Display: 16.21cm (6.4") FHD+ Infinity-U Super AMOLED Display', "Processor Exynos 7904 Octa-Core", "Android 9.0", "4GB RAM",
                        "64GB ROM"],
        "price" : 279.99,
        "quantity" : 8,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["white", "black", "blue"],
        "rating": 3.7,
        "ratingCount" : 203,
        "selectedColorIndex": 0     
    },
    {
        "id" : 6,
        "name" : "Galaxy A20",
        "image" : "smartphones/product_6/blue_main.jpg",
        "description" : ['Display: 16.21cm (6.4") FHD+ Infinity-U Super AMOLED Display', "Dual SIM 6.5''HD+ Snapdragon 450", "Android 9.0", "4GB RAM",
                        "64GB ROM"],
        "price" : 229.99,
        "quantity" : 2,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["blue", "black"],
        "rating": 3.5,
        "ratingCount" : 393,
        "selectedColorIndex": 0      
    },
    {
        "id" : 7,
        "name" : "Galaxy A10",
        "image" : "smartphones/Product_7/red_main.jpg",
        "description" : ['Display: 16.21cm (6.4") FHD+ Infinity-U Super AMOLED Display', "Dual SIM 6.5''HD+ Snapdragon 450", "Android 9.0", "4GB RAM",
                        "64GB ROM"],
        "price" : 289.99,
        "quantity" : 2,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["red", "black"],
        "rating": 3.5,
        "ratingCount" : 439,
        "selectedColorIndex": 0      
    },
    {
        "id" : 8,
        "name" : "Galaxy S8",
        "image" : "smartphones/Product_8/black_main.jpg",
        "description" : ['Display: 16.21cm (5.8")', "Snapdragon 450", "Android 9.0", "4GB RAM",
                        "64GB ROM"],
        "price" : 309.99,
        "quantity" : 5,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["black"],
        "rating": 3.5,
        "ratingCount" : 973,
        "selectedColorIndex": 0  
    },
    {
        "id" : 9,
        "name" : "Galaxy Prime 3 J3",
        "image" : "smartphones/Product_9/black_main.jpg",
        "description" : ['Display: 16.21cm (5.8")', "Snapdragon 450", "Android 9.0", "4GB RAM",
                        "64GB ROM"],
        "price" : 399.99,
        "quantity" : 5,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["black"],
        "rating": 3.5,
        "ratingCount" : 563,
        "selectedColorIndex": 0    
    },
    {
        "id" : 10,
        "name" : "Galaxy S10e",
        "image" : "smartphones/Product_10/black_main.jpg",
        "description" : ['Display: 16.21cm (5")', "Snapdragon 450", "Android 8.0", "4GB RAM",
                        "16GB ROM"],
        "price" : 428.99,
        "quantity" : 3,
        "category" : "smartphones",
        "RAM" : [4],
        "color" : ["black"],
        "rating": 4.8,
        "ratingCount" : 5903,
        "selectedColorIndex": 0     
    },
    {
        "id" : 11,
        "name" : "Notebook 9 Pen",
        "image" : "laptops/Product_1/silver_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i7-7400T processor Quad-core 2.40 GHz", "17.3\" Full HD (1920 x 1080) 16:9 Touchscreen",
                        "Intel® HD Graphics 630 shared memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 899.99,
        "quantity" :  2,
        "category" : "laptop",
        "type" : "Regular",
        "RAM" : [8, 12],
        "color" : ["silver", "blue"],
        "rating": 3.4,
        "ratingCount" : 200,
        "selectedColorIndex": 0
    },
    {
        "id" : 12,
        "name" : "Notebook 9 Pen Gaming",
        "image" : "laptops/Product_2/blue_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 1060 with 6 GB Dedicated Memory", "16 GB, DDR4 SDRAM", "1 TB HDD, 256 GB SSD",
                        "30-day Microsoft Office trial included"],
        "price" : 1799.99,
        "quantity" : 15,
        "category" : "laptop",
        "type" : "Gaming",
        "RAM" : [8, 12, 16],
        "color" : ["blue"],
        "rating": 4.7,
        "ratingCount" : 10,
        "selectedColorIndex": 0
    },
    {
        "id" : 13,
        "name" : "Notebook 9 Pen Pro",
        "image" : "laptops/Product_3/silver_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 999.99,
        "quantity" : 20,
        "category" : "laptop",
        "RAM" : [8, 12],
        "color" : ["silver"],
        "rating": 4.9,
        "ratingCount" : 26,
        "selectedColorIndex": 0
    },
    {
        "id" : 14,
        "name" : "Notebook 7 Pen",
        "image" : "laptops/Product_4/silver_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 1399.99,
        "quantity" : 20,
        "category" : "laptop",
        "RAM" : [4,8],
        "color" : ["silver"],
        "rating": 3.3,
        "ratingCount" : 240,
        "selectedColorIndex": 0
    },
    {
        "id" : 15,
        "name" : "Notebook 7 Pen Gaming",
        "image" : "laptops/Product_5/black_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i5-7400T processor Quad-core 2.40 GHz", "17.3\" Full HD (1920 x 1080) 16:9 Touchscreen",
                        "Intel® HD Graphics 630 shared memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 1099.99,
        "quantity" : 0,
        "category" : "laptop",
        "RAM" : [12, 16],
        "color" : ["black"],
        "rating": 3.3,
        "ratingCount" : 903,
        "selectedColorIndex": 0
    },
    {
        "id" : 16,
        "name" : "Notebook 7 Pen Pro",
        "image" : "laptops/Product_6/black_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 1060 with 6 GB Dedicated Memory", "16 GB, DDR4 SDRAM", "1 TB HDD, 256 GB SSD",
                        "30-day Microsoft Office trial included"],
        "price" : 1499.99,
        "quantity" : 20,
        "category" : "laptop",
        "RAM" : [8, 12],
        "color" : ["black"],
        "rating": 3.3,
        "ratingCount" : 780,
        "selectedColorIndex": 0  
    },
    {
        "id" : 17,
        "name" : "Notebook Odyssey",
        "image" : "laptops/Product_7/silver_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i7-8750H processor Quad-core 2.40 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 1899.99,
        "quantity" : 20,
        "category" : "laptop",
        "RAM" : [8, 12],
        "color" : ["silver"],
        "rating": 3.3,
        "ratingCount" : 3470,
        "selectedColorIndex": 0  
    },
    {
        "id" : 18,
        "name" : "Notebook Odyssey Gaming",
        "image" : "laptops/Product_8/black_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i7-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 2060 with 8 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 1999.99,
        "quantity" : 20,
        "category" : "laptop",
        "RAM" : [8, 16],
        "color" : ["black", "white"],
        "rating": 3.3,
        "ratingCount" : 1340,
        "selectedColorIndex": 0      
    },
    {
        "id" : 19,
        "name" : "Notebook 5",
        "image" : "laptops/Product_9/white_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 749.99,
        "quantity" : 13,
        "category" : "laptop",
        "RAM" : [4, 8],
        "color" : ["white"],
        "rating": 3.3,
        "ratingCount" : 570,
        "selectedColorIndex": 0     
    },
    {
        "id" : 20,
        "name" : "Notebook Flash",
        "image" : "laptops/Product_10/grey_main.jpg",
        "description" : ["Windows 10 Home", "Intel® Core™ i5-8300H processor Quad-core 2.30 GHz", "15.6\" Full HD (1920 x 1080) 16:9",
                        "NVIDIA® GeForce® GTX 1050 with 4 GB Dedicated Memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
        "price" : 699.99,
        "quantity" : 0,
        "category" : "laptop",
        "RAM" : [4, 8],
        "color" : ["grey"],
        "rating": 3.3,
        "ratingCount" : 320,
        "selectedColorIndex": 0    
    }

    
]
let currentPage = 1;
let productsPerPage = 6;
let filteredProducts = productList.slice();
const laptopAltImageList = [`main`, `back`, `angle`];
const smartphoneAltImageList = [`main`, `front`, `back`, `side`];

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

/*
    name: isBuyDisabled
    param: 
        rating: string
    return: string
    description: add disabled attribute to button if it is out of stock
*/
const isBuyDisabled = (quantity) => {
    // return string 'disabled' if quantity is 0 
    if(quantity<=0)
        return "disabled"
    
    // return empty string otherwise
    return ''
}

/*
    name: getColorSwatch
    param:
        id: int
        color: string
    return: string
    description: This method returns the appropriate swatch color and name swatch with id and color
*/
const getColorSwatch = (id, color) => {
    return `
        <li>
            <label class="product-color ${color}">
                <input type="radio" name="color_${id + "_" + color}" value="${color}">
                <span>${color}</span>
            </label>
        </li>
    `
}
/*
    function: getProductAltImagesAsHTML
    Param:
        product: object
        selectedColorIndex: Integer
    return: string
    Description: generates product image gallery
*/
const getProductAltImagesAsHTML = product => {
    const selectedColor = product.color[product.selectedColorIndex];
    let imageDirectory = product.image.split('/').slice(0,-1).join('/');
    
    //Add img path prefix from settings
    imageDirectory = settings.imagePath + imageDirectory;
    let productAltImageList;
    let outputList = [];
    // Laptops have 3 alt images for every color 
    // Smartphones have 4 alt images for every color
    product.category == "laptop" ? productAltImageList = laptopAltImageList : productAltImageList = smartphoneAltImageList;
    
    productAltImageList.forEach(postFix => {
        imgName = `${selectedColor}_${postFix}.jpg`;
        imagePath = `${imageDirectory}/${imgName}`;
        outputList.push(imagePath);
    });

    //Make HTML img Element for all images
    const AltImagesHTMLList = outputList.map( imgPath => 
        `<img class="product-alt-image" name="${product.id}_altImage" src=${imgPath} alt="Product Alternate Image"></img>`).join('\n');

    return AltImagesHTMLList;
}

/*  Function: getProductAsHTML
    Parameters: 
        product: Object
        selectedColorIndex: Integer
    Return: String
    Description: dynamically creates product HTML using product attributes from data
*/
const getProductAsHTML = product => {
    return `
    <article class="product">
        <header class="bottom-border">
            <div class="product-image-container"><img class="product-image" id="${product.id}mainImage" src=${settings.imagePath + product.image} alt="Product Image"><div>
            <ul class="product-gallery" id="${product.id}_productGallery">
                ${getProductAltImagesAsHTML(product)}
            </ul>
            <div class="product-header-grid">
                <div id="${product.id}productStatus">
                    ${getProductStatusbyQtyAsHTML(product.quantity)}
                </div>
                <div>
                    <p>User rating ${product.rating} (${product.ratingCount})</p>
                    <div>${getProductRatingAsHTML(product.rating)}</div>
                </div>
                <fieldset class="product-colors-block">
                    <legend>colours</legend>
                    <div>
                        <ul class="swatches" id="swatches">
                            ${product.color.map( color => {
                                return getColorSwatch(product.id, color);
                            }).join('\n')}
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
        <footer>
            <form class="product-footer-form">
                <data class="price" value="$${product.price.toFixed(2)}"><del>$${(product.price*(Math.random()+1)).toFixed(2)}</del><ins class="offer-price">$${product.price}</ins></data>
                <input type="button" class="buy-button" id="${product.id}buyButton" value="Buy Now" ${isBuyDisabled(product.quantity)}>
                <button type="button" name="${product.id}_addCart" class="transparent-button align-right"><span class="material-icons add-cart" name="${product.id}_addCart" id="${product.id}addToCartIcon">add_shopping_cart</span></button>
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
    //update number of products on top
    document.getElementById("productsCount").innerHTML = `Total products: ${filteredProducts.length}`;

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
    
    // Render products on the page
    const productsSection = document.getElementById("products");    
    productsSection.innerHTML = ``;
    productsSection.innerHTML += filteredProducts.slice(firstIndex, lastIndex).map(getProductAsHTML).join('');

    // Add event listener to swatches


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
}


const toggleFilterForm = () => {
    document.getElementById("filterPanel").classList.toggle('open');
    // const filterPanelStyle = document.getElementById("filterPanel").style;
    // if(filterPanelStyle.display == "grid"){
    //     filterPanelStyle.display = "none";
    // }
    // else{
    //     filterPanelStyle.display = "grid";
    // }
}

/*
    name: clearAllFilters
    param: none
    return: none
    desc: Clears all the filters one by one and update the filteredList

*/
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
}

/*
    name: applyNewFilters
    param: none
    return: none
    desc: Apply all the filters one by one and update the filteredList

*/
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

    // Apply Ratings filters
    let selectedMinRating = 0;
    const allRatingsRadio = document.querySelectorAll("input[name='rating']");
    for(let i=0; i<allRatingsRadio.length; i++){
        if(allRatingsRadio[i].checked){
            selectedMinRating = parseInt(allRatingsRadio[i].value);
            break;
        }
    }

    filteredProducts = filteredProducts.filter(x => x.rating >= selectedMinRating);
}

/*
    name: searchProducts
    param: searchString: string
    return: none
    description: Filter products based on the search string
*/
const searchProducts = (searchString) => {
    // Apply New Filters first to get the data as per filters and then apply search
    applyNewFilters();

    // Return if nothing is to be searched
    if(searchString.length<=0)
        return;
    
    //Search the string in 4 fields of product (name, description, colors, category)
    filteredProducts = filteredProducts.filter( product => {
        if(product.name.toLowerCase().includes(searchString))
            return true;
        if(product.category.toLowerCase().includes(searchString))
            return true;
        if(product.image.toLowerCase().includes(searchString))
            return true;
        
        // Match if color of the product matches
        const matchedColors = product.color.filter( color => color.toLowerCase().includes(searchString));
        //If any color is matched, matchedColors length will be greater than zero
        if(matchedColors.length>0)
            return true;

        // search for string in the description array
        const matchedDescription = product.description.filter(desc => desc.toLowerCase().includes(searchString));
        //If any color is matched, matchedColors length will be greater than zero
        if(matchedDescription.length>0)
            return true;

        //If nothing matches return False
        return false;
    });
}

const renderProducts = (filteredProducts) => {
    // sort dropdown value
    const sortCriteria = document.getElementById('sortOrder').value;
    const sortedProducts = sortProducts(sortCriteria);

    //Update number of pages according to number of products now
    calculateAndShowNumberOfPages(productsPerPage);

    // call to show products on page 1 according to filtered product list
    showProductsByPage(1, productsPerPage);
}

const updateProductSelectedColor = (productID, newColor) => {
    
    filteredProducts.forEach(product => {
        if(product.id == productID){
            //Update the main Image according to new color
            const newImageName = `${newColor}_main.jpg`;
            const baseDir = `${settings.imagePath}${product.image.split('/').slice(0,-1).join('/')}`;
            document.getElementById(`${productID}mainImage`).src = `${baseDir}/${newImageName}`;

            for(let i=0; i<product.color.length; i++){
                if(product.color[i] == newColor){
                    product.selectedColorIndex = i;
                    
                    const galleryID = `${productID}_productGallery`;
                    // update the gallery HTML element
                    document.getElementById(galleryID).innerHTML = getProductAltImagesAsHTML(product);
                }
            } 
        }
    });
}

/*
    name: updateCartAndProductQuantity
    param:
        productID
    return: none
    description: updates counter on cart icon and product quantity
*/
const updateCartAndProductQuantity = productID =>{
    
    const cartCounterElement = document.getElementById("itemsInCart");
    const currentValue = cartCounterElement.innerHTML.length <= 0 ? 0: parseInt(cartCounterElement.innerHTML);
    

    //Reduce the product count
    filteredProducts.forEach(product => {
        if(product.id == productID && product.quantity>0){
            // increase the items in cart at header
            cartCounterElement.innerHTML =  currentValue + 1;

            product.quantity = Math.max(product.quantity-1, 0);
            //Update product in stock status
            document.getElementById(`${productID}productStatus`).innerHTML = getProductStatusbyQtyAsHTML(product.quantity);

            //disable buy now and add to cart if quantity is 0
            if(product.quantity == 0){
                const buyButton = document.getElementById(`${productID}buyButton`);
                buyButton.setAttribute("disabled", true);
                buyButton.value = "Out Of Stock";
                buyButton.className += " disabled-button";
                
                const addToCartIcon = document.getElementById(`${productID}addToCartIcon`);
                addToCartIcon.className += " disabled-icon";
            }
        }
    });
}

window.addEventListener("load", () => {
    
    /** Adding listeners to Header Elements*/
    //Adding listener to menu Icon
    document.getElementById("menuButton").addEventListener("click", () => {
        document.getElementById("headerMenu").classList.toggle('open');
    });

    //Adding listener to search Icon
    document.getElementById("searchIcon").addEventListener("click", () => {
        document.getElementById("searchContainer").classList.toggle('open');
    });

    //Adding listener to search Button
    document.getElementById("searchButton").addEventListener("click", () => {
        const searchString = document.getElementById("searchBar").value;
        
        searchProducts(searchString.toLowerCase());
        
        renderProducts();

        //Toggle search bar
        document.getElementById("searchContainer").classList.toggle('open');
    });

    calculateAndShowNumberOfPages(productsPerPage);

    // Adding event listener to product parent to handle clicks on swatches and alt images
    document.getElementById("products").addEventListener("click", event => {
        
        if(typeof(event.target.name) == "undefined")
            return;

        // update product gallery based on selected swatch
        if(event.target.name.startsWith("color_"))
        {
            const productID = parseInt(event.target.name.split('_')[1]);
            const selectedColor = event.target.name.split('_')[2];
            
            //update product selected Color in the data
            updateProductSelectedColor(productID, selectedColor);
        }

        //update product Image
        if(event.target.name.endsWith("_altImage")){
            const productId = event.target.name.split('_')[0];
            document.getElementById(`${productId}mainImage`).src = event.target.src;
        }

        
        //add to cart functionality
        if(event.target.name.endsWith("_addCart")){
            // THis does not work with clicking on icon since span gets triggered over button.
            const productId = event.target.name.split('_')[0];

            updateCartAndProductQuantity(productId);
        }

        

    });
    
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

    document.getElementById("clearFiltersButton").addEventListener("click", () => {
        // clear all filters
        clearAllFilters();
        
        //Apply New Filters i.e no filters now
        applyNewFilters();

        renderProducts();
    });

    // call to show products on page 1 for the first load
    showProductsByPage(currentPage, productsPerPage);

    document.getElementById("filterButton").addEventListener("click", toggleFilterForm);
    
    document.getElementById("applyFiltersButton").addEventListener("click", () => {
        // Apply all Filters
        applyNewFilters();

        // hide filter form
        toggleFilterForm();

        renderProducts();
    });

    document.getElementById('sortOrder').addEventListener('change', () => {
        // sort dropdown value
        const sortCriteria = document.getElementById('sortOrder').value;
        
        sortProducts(sortCriteria);

        renderProducts();
    });  
    
    // document.getElementById("smartPhonesTab").addEventListener('click', () =>{
    //     searchProducts("smartphones");
    //     renderProducts();
    // });

    // document.getElementById("laptopsTab").addEventListener('click', () =>{
    //     searchProducts("laptops");
    //     renderProducts();
    // });

    // document.getElementById("smartPhonesMenuOption").addEventListener('click', () =>{
    //     searchProducts("smartphones");
    //     renderProducts();
    // });

    // document.getElementById("laptopsMenuOption").addEventListener('click', () =>{
    //     searchProducts("laptops");
    //     renderProducts();
    // });

    const smartPhonesSelector = document.querySelectorAll("#smartPhonesTab");
    for(let i=0; i<smartPhonesSelector.length; i++){
        smartPhonesSelector[i].addEventListener("click", () =>{
            searchProducts("smartphones");
            renderProducts();
        });
    }

    const laptopsSelector = document.querySelectorAll("#laptopsTab");
    for(let i=0; i<laptopsSelector.length; i++){
        laptopsSelector[i].addEventListener("click", () =>{
            searchProducts("laptops");
            renderProducts();
        });
    }



    
});  

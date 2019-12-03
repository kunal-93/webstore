let productList =  [
        {
            "id" : 1,
            "name" : "Aspire Z3",
            "image" : "/img/laptops/Product_1/main.png",
            "description" : ["Windows 10 Home", "Intel® Core™ i5-7400T processor Quad-core 2.40 GHz", "17.3\" Full HD (1920 x 1080) 16:9 Touchscreen",
                            "Intel® HD Graphics 630 shared memory", "8 GB, DDR4 SDRAM", "1 TB HDD"],
            "price" : 899.99,
            "quantity (in stock)" : 10,
            "category" : "laptop",
            "type" : "Regular",
            "screenSize" : "23.8",
            "color" : ["Silver", "Black"],
            "rating": 4.4,
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
            "quantity (in stock)" : 15,
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
            "quantity (in stock)" : 20,
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
            "quantity (in stock)" : 20,
            "category" : "laptop",
            "screenSize" : "15.6",
            "color" : ["Silver", "Black", "Red"],
            "rating": 3.3,
            "ratingCount" : 570 
        }
    ]

    // fetch(endPoint)
    // .then(function(res){
    //   res.json()
    //     .then(function(data){
    //         alert(`Temp is ${data.current.temperature}`);
    //     })
  
    // })
// <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
const getProductAsHTML = (product) => {
    return `
    <article class="product">
        <header>
        <img src=${product.image} alt="Product Image">
        </header>
        <h3>${product.name}</h3>
        <form class="product-form">
        <div class="product-color-sizes">
            <fieldset>
                <legend>colour variants</legend>
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
            </fieldset>
            <fieldset>
                <legend>Sizes</legend>
                <ol>
                    <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
                    <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
                    <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
                </ol>
            </fieldset>
        </div>
            <footer>
                <data value="39"><del>$50.00</del> <ins>$39.00</ins></data>
                <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
                <button type="button"><span class="material-icons">favorite</span></button>
            </footer>
        </form>
    </article>`

    return HTMLString;
}

window.addEventListener("load", () => {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML += productList.map(getProductAsHTML);
});  

import axios from 'axios'
const SEARCH_Product_URL = "http://localhost:8080/product-api/products"
const CREATE_PRODUCT_URL = "http://localhost:8080/product-api/product/createBySellers"
const UPDATE_PRODUCT_URL = "http://localhost:8080/product-api/product/updateBySellers"
const DELETE_PRODUCT_URL = "http://localhost:8080/product-api/product/deleteBySellers"
const GET_PRODUCT_URL = "http://localhost:8080/product-api/products"
const IMAGE_URL = "./product-pictures";

const fetchProducts = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        showProducts(data.results);
        console.log(data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

const imageContainer = document.getElementById("image-container")

const fetchImages = async () => {
    try {
        const response = await axios.get(IMAGE_URL);
        const images = response.data;
        images.forEach((image) => {
            const imgElement = document.createElement('img');
            imgElement.src = IMAGE_URL + '/' + image;
            imgElement.alt = 'productName';
            imageContainer.appendChild(imgElement);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};


fetchProducts(GET_PRODUCT_URL);
fetchImages(IMAGE_URL)
const productBox = document.querySelector('.productBox');

const showProducts = (products)=>{
    productBox.innerHTML = "";

    products.forEach((product) => {
        const {price, description, category, productName} = product;
        const divTag = document.createElement('div');
        divTag.classList.add('productHolder');
        const productDetails = {price, description, category, productName}
        createInnerHTML(productDetails);
        productBox.appendChild(divTag);
    });
}

function createInnerHTML(productDetails) {
    const {price, description, category, productName} = productDetails;

    divTag.innerHTML = `
        <div class="priceAndCategory">
            <p>$${productName}${price}</p>
            <p>${category}</p>
        </div>
        <div class="productDescription">
            <p>${description}</p>
        </div>
    `;
}



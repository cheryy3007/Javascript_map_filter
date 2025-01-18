const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = Array.from(document.querySelectorAll('.card')); // Преобразуем NodeList в массив
const noResultMessage = document.getElementById('noResultMessage');

function searchProduct(){
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = productList.filter(product=>{
        const productName = product.getAttribute('data-name').toLowerCase();
        return productName.includes(searchValue);
    })

    productList.map(product=>product.style.display='none');

    filteredProducts.map(product=>product.style.display='block');
}

searchButton.addEventListener('click', searchProduct)

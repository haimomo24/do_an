

// Định nghĩa URL API và các biến cần thiết
const API_URL = "https://r3x9h4-3000.csb.app/products";
const imgDetail = document.querySelector(".show-cart-js");
const params = new URLSearchParams(document.location.search);
const idDetail = params.get("id");
const cartModal = document.querySelector(".cart-modal-overlay");

// Hàm lấy dữ liệu từ API
const getApi = async (url) => {
  try {
    const response = await axios.get(url);
    showDetail(response.data);
  } catch (error) {
    console.error("Error fetching API:", error);
  }
};

// Hàm hiển thị chi tiết sản phẩm từ dữ liệu API
const showDetail = (data) => {
  const detail = data.find((item) => item.id == idDetail);

  if (!detail) {
    console.error("Product detail not found");
    return;
  }

  imgDetail.innerHTML = `
        <div class="row">
        <div class="col-12 col-sm-6 col-md-6">
            <div class="show-cart-image">
                <img class="product-image" src="${detail.image}" alt="">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6">
            <div class="show-cart-title" data-id="${detail.id}">
                <h1>${detail.name}</h1>
                <h3 class="product-price">${detail.price}</h3>
                
                <div class="group">
                    <h4>Số Lượng</h4>
                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
                </div>
                <p>${detail.title}</p>
                <button class="add-to-cart">Thêm vào giỏ hàng</button>
            </div>
        </div>
        </div>
        
        
      


       
    `;
};




// Xử lý sự kiện khi DOM đã được tải hoàn toàn
document.addEventListener("DOMContentLoaded", () => {

  // Sử dụng event delegation để xử lý sự kiện click cho nút "Thêm vào giỏ hàng"
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      addToCartClicked(event.target);
      cartModal.style.transform = "translateX(0)";
    }
    
    if (event.target.classList.contains("remove-btn")) {
      removeCartItem(event.target);
    }
  });

  const addToCartClicked = (button) => {
    let parentCart = button.closest(".show-cart-title");
    let price = parentCart.querySelector(".product-price").innerText;
    let imageSrc = parentCart.closest('.row').querySelector(".product-image").src;
    let productId = parentCart.getAttribute('data-id');
    addToCartItem(productId, price, imageSrc);
  };

  const addToCartItem = (productId, price, imageSrc) => {
    let productRows = document.querySelector(".products-overlay");
    let existingProduct = productRows.querySelector(`.product-row[data-id="${productId}"]`);

    if (existingProduct) {
      alert('Sản phẩm này đã có trong giỏ hàng.');
      return;
    }

    let divEL = document.createElement("div");
    divEL.classList.add("product-row");
    divEL.setAttribute('data-id', productId);

    let cartHTML = `
    <div class="cart-products-overlay">
       <img class="product-image" src="${imageSrc}" alt="">
        <span class="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1" min="1" max="10">
        <button class="remove-btn">xóa</button>
    </div>
       
    `;

    divEL.innerHTML = cartHTML;
    productRows.appendChild(divEL);
  };

  const removeCartItem = (button) => {
    button.closest('.product-row').remove();
  };

  // Xử lý sự kiện khi đóng modal
  const closeCart = document.querySelector(".close-cart");
  closeCart.addEventListener("click", () => {
    cartModal.style.transform = "translateX(300%)";
  });

  // Xử lý sự kiện khi nhấp vào phần ngoài modal để đóng modal
  cartModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-modal-overlay")) {
      cartModal.style.transform = "translateX(300%)";
    }
  });
});

// Gọi hàm lấy dữ liệu từ API khi trang được tải
const cartShop = document.querySelector(".other-right");

const closeCart = document.querySelector(".close-cart");



// bắt sự kiện :
cartShop.addEventListener("click" , () => {
    cartModal.style.transform="translateX(0)";
})
closeCart.addEventListener("click",() =>{
    cartModal.style.transform="translateX(300%)";
})
cartModal.addEventListener("click",(event) => {
    // console.log(event.target.classList.contains("cart-modal-overlay"))
  
    if(event.target.classList.contains("cart-modal-overlay") == true){
      cartmodalOverlay.style.transform="translateX(300%)";
    }
  })






  
  

















getApi(API_URL);




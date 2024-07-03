const API_URL = "https://r3x9h4-3000.csb.app/products";
let imgDetail = document.querySelector(".show-cart-js");



let params = new URLSearchParams(document.location.search);
let idDetail = params.get('id');



const getApi = async (url) => {
    let response = await axios.get(url);
  
    showDetail(response.data);
  };
  getApi(API_URL);


//   hien thi danh sach khop vs api
const showDetail= (data)=>{
    console.log(data);
    let detail = data.filter(item=>{
        
        return item.id == idDetail ;
    });
    imgDetail.innerHTML = `
     
      <div class="col-12 col-sm-6 col-md-6">
    <div class="show-cart-image">
                <img src="${detail[0].image}" alt="">
            </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6">
            <div class="show-cart-title">
                <h1>${detail[0].name} </h1>
                <h3>${detail[0].price}</h3>
                <div class="group">
                    <h4>Số Lượng </h4>
                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
                </div>
              
                <p> ${detail[0].title}</p>
                 <button class="add-to-cart">Thêm vào giỏ hàng</button>
            </div>
             </div>
            </div>
            
            `
            
            ;


    console.log(detail)
};

// gio hang :

// truy cập phần tử  :
const cartShop = document.querySelector(".other-right");
const cartModal = document.querySelector(".cart-modal-overlay")
const closeCart = document.querySelector(".close-cart");
const addToCart =document.querySelector(".add-to-cart");


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


 addToCart.addEventListener("click",()=>{
    cartModal.style.transform="translateX(0)";
 })
  

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
    <div class="show-cart-image">
                <img src="${detail[0].image}" alt="">
            </div>
            <div class="show-cart-title">
                <h1>${detail[0].name} </h1>
                <h3>${detail[0].price}</h3>
                <div class="group">
                    <h4>Số Lượng </h4>
                    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
                </div>
                <button> Thêm vào giỏ hàng </button>
                <p> ${detail[0].title}</p>
                
            </div>`;


    console.log(detail)
};

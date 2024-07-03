// slider 

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,

        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


  });


//   add sản phẩm  :
const API_URL = "https://r3x9h4-3000.csb.app/products";
const getApi = async(url) =>{
    let response = await axios.get(url);
    // console.log(response.data)
    showProduct(response.data);
}
getApi(API_URL);
let rowJs =document.querySelector(".row-js");
const showProduct = (data) =>{
    let HTML = ``;
    data.forEach(value => {
        console.log(value);
        HTML += ` <div class="col-12 col-sm-6 col-md-3">
                        <div class="cart-wrap">
                        <a href="./detail.html?id=${value.id}">
                            <div class="cart-wrap-content">
                                <img src="${value.image}" alt="">
                                <h4>${value.name} </h4>
                                <p>${value.price}</p>
                                <div class="buy-cart">
                                    <button>Mua ngay</button>
                                </div>
                                
                            </div>
                            </a>
                        </div>
                    </div>`
    });

    rowJs.innerHTML = HTML;
};

// tim kiem 



//phân trang :






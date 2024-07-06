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




const API_URL = "https://r3x9h4-3000.csb.app/products";
        let thisPage = 1;
        const limit = 8;
        const rowJs = document.querySelector(".row-js");
        const listPage = document.querySelector('.listPage');

        const getApi = async (url) => {
            let response = await axios.get(url);
            showProduct(response.data);
            loadItem();
        }

        const showProduct = (data) => {
            let HTML = '';
            data.forEach(value => {
                HTML += `<div class="col-12 col-sm-6 col-md-3 item">
                            <div class="cart-wrap">
                                <a href="./detail.html?id=${value.id}">
                                    <div class="cart-wrap-content">
                                        <img src="${value.image}" alt="">
                                        <h4>${value.name}</h4>
                                        <p>${value.price}</p>
                                        <div class="buy-cart">
                                            <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                         </div>`;
            });
            rowJs.innerHTML = HTML;
            loadItem();
        };

        const loadItem = () => {
            const items = document.querySelectorAll('.item');
            let beginGet = limit * (thisPage - 1);
            let endGet = limit * thisPage - 1;
            items.forEach((item, key) => {
                if (key >= beginGet && key <= endGet) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            listPagination(items.length);
        };

        const listPagination = (totalItems) => {
            const count = Math.ceil(totalItems / limit);
            listPage.innerHTML = '';

            if (thisPage !== 1) {
                let prev = document.createElement('li');
                prev.innerText = '<<';
                prev.onclick = () => changePage(thisPage - 1);
                listPage.appendChild(prev);
            }

            for (let i = 1; i <= count; i++) {
                let newPage = document.createElement('li');
                newPage.innerText = i;
                if (i === thisPage) {
                    newPage.classList.add('active');
                }
                newPage.onclick = () => changePage(i);
                listPage.appendChild(newPage);
            }

            if (thisPage !== count) {
                let next = document.createElement('li');
                next.innerText = '>>';
                next.onclick = () => changePage(thisPage + 1);
                listPage.appendChild(next);
            }
        };

        const changePage = (i) => {
            thisPage = i;
            loadItem();
        };

        getApi(API_URL);
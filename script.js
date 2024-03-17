//  Login-register page
let text_register = document.getElementById('text-register');
let text_login = document.getElementById('text-login');
let register_form = document.getElementById('register-form');
let login_form = document.getElementById('login-form');

if (text_register && text_login && register_form && login_form) {
    function register(){
        text_register.style.backgroundColor = '#FC5D6D';
        text_register.style.boxShadow = '0 0 10px 0 rgba(0,0,0,0.45) inset';
        text_login.style.boxShadow = "none";
        text_login.style.backgroundColor = "transparent";
        login_form.style.display = "none";
        register_form.style.display = "block";
    }
    text_register.addEventListener('click', register);
    text_login.addEventListener('click', function(){
        this.style.backgroundColor = '#FC5D6D';
        this.style.boxShadow = '0 0 10px 0 rgba(0,0,0,0.45) inset';
        text_register.style.boxShadow = "none";
        text_register.style.backgroundColor = "transparent";
        login_form.style.display = "block";
        register_form.style.display = "none";
    });
}


//  Home Page
let menu = document.getElementById('menu');
let slider = document.getElementById('slider');
let slider_container = document.getElementById('slider-container');
let header_container = document.getElementById('header-container');
let main_container = document.getElementById('main-container');
let search_icon = document.getElementById('search-icon');
let popup_searchbar_container = document.getElementById('popup-searchbar-container');
let backarrow = document.getElementById('backarrow');

if(menu && slider && search_icon){
    menu.addEventListener('click', function(){    
        slider_container.style.display = 'block';
        slider_container.style.opacity = '1';
        slider.style.left = '0px';  
    });
    slider_container.addEventListener('click', function(){
        slider_container.style.display = 'none';
        slider.style.left = '-250px';
    });

    search_icon.addEventListener('click', function(){
        popup_searchbar_container.style.display = 'flex';
        popup_searchbar_container.style.opacity = '1';
        document.getElementById('popup').focus();
    })
    backarrow.addEventListener('click', function(){
        popup_searchbar_container.style.display = 'none';
        popup_searchbar_container.style.opacity = '0';
    })
}




let cs_products = document.querySelectorAll('.cs-products-container a');
let cs_products_container = document.querySelectorAll('.cs-products-container');
let left_arrow = document.querySelector('.bx-left-arrow-alt');
let right_arrow = document.querySelector('.bx-right-arrow-alt');

if(cs_products)
{
    for(let i=0; i<cs_products.length; i++){
        cs_products[i].style.left = `${i*20}%`;
        if (window.innerWidth < 600)
        cs_products[i].style.left = `${i*50}%`;
        else if (window.innerWidth < 1000)
        cs_products[i].style.left = `${i*33.33}%`;
        else if (window.innerWidth < 1350)
        cs_products[i].style.left = `${i*25}%`;
    }
}

const WP_items_container = document.getElementById('WP-items-container');
const WP_items_demo = document.getElementById('WP-items-demo');
const WP_items_demo_img = WP_items_demo.querySelector('.img');
const WP_items_demo_about = WP_items_demo.querySelector('.about');
const wishlist = document.getElementById('wishlist');
const wishlist_page = document.getElementById('wishlist-page');
const PC_box1 = document.querySelector('.PC-box1');
const homepage_header = document.getElementById('homepage-header');
const PC_header_padding = document.querySelector('.PC-header-padding');
const WP_back_btn = document.getElementById('WP-back-btn');



//  Products Collection Page
let wishlistbtn = document.getElementsByClassName('wishlistbtn');
let PC_box2 = document.getElementsByClassName('PC-box2');
let wishlist_container = document.getElementById('wishlist-container');
let wishlist_drag_container = document.getElementById('wishlist-drag-container');
let bag_container = document.getElementById('bag-container');
let bag_drag_container = document.getElementById('bag-drag-container');
const WP_item = document.getElementsByClassName('WP-item');

if(PC_box2 && wishlistbtn && wishlist_container && wishlist_drag_container && bag_container && bag_drag_container){
    let wish_div;
    let cart_div;
    Array.from(PC_box2).forEach((ele)=>{
        ele.addEventListener('dragstart', ()=>{
            wishlist_drag_container.style.display = 'flex';
            bag_drag_container.style.display = 'flex';
            wish_div = ele;
        })
    })
    Array.from(PC_box2).forEach((ele)=>{
        ele.addEventListener('touchstart', ()=>{
            wishlist_drag_container.style.display = 'flex';
            bag_drag_container.style.display = 'flex';
            wish_div = ele;
        })
    })
    Array.from(PC_box2).forEach((ele)=>{
        ele.addEventListener('dragend', ()=>{
            wishlist_drag_container.style.display = 'none';
            bag_drag_container.style.display = 'none';
        })
    })
    wishlist_drag_container.addEventListener('dragover', (ele)=> {
        ele.preventDefault();
    });
    wishlist_drag_container.addEventListener('touchmove', (ele)=> {
        ele.preventDefault();
    });
    wishlist_drag_container.addEventListener('drop', ()=> {
        let wishlist_btn = wish_div.querySelector('.wishlistbtn');
        if(wishlist_btn.style.color!='red')
        add_to_wishlist(wish_div);
        wishlist_btn.style.color = "red";
    })
    WP_back_btn.addEventListener('click', ()=>{
        wishlist_page.style.display = 'none';
        PC_box1.style.display = 'flex';
        homepage_header.style.display = 'block';
        PC_header_padding.style.display = 'block';
    })
    
    wishlist.addEventListener('click', ()=>{
        wishlist_page.style.display = 'block';
        PC_box1.style.display = 'none';
        homepage_header.style.display = 'none';
        PC_header_padding.style.display = 'none';
    })
    
    // const
    function remove_to_wishlist_bag(ele){
        let temp = document.getElementById('wish-item'+ele);
        wishlist_container.removeChild(temp);
    }
    function add_to_wishlist(ele){
        let item_id = ele.getAttribute('id');
        let item_class = ele.getAttribute('class');
        let new_div = document.createElement('div');
        let item_innerHTML = document.getElementById(item_id).innerHTML;
        new_div.id = 'wish-'+item_id;
        new_div.setAttribute('class', item_class);
        new_div.innerHTML = item_innerHTML;
        wishlist_container.appendChild(new_div);
        add_to_wishlist_page(ele);
    }
    function add_to_wishlist_page(ele){
        const product_img = ele.querySelector('.PC-img');
        const product_about = ele.querySelector('.PC-about');
        const product_id = ele.getAttribute('id');
        console.log(product_id);
        WP_items_demo_img.innerHTML = product_img.innerHTML;
        WP_items_demo_about.innerHTML = product_about.innerHTML;
        let new_div = document.createElement('div');
        new_div.id = 'wish-'+product_id;
        new_div.innerHTML = WP_items_demo.innerHTML;
        WP_items_container.appendChild(new_div);
    }
    function remove_to_wishlist(ele){
        let temp = document.getElementById('wish-item'+ele);
        wishlist_container.removeChild(temp);
    }
    Array.from(PC_box2).forEach(function dblclick(ele){
        ele.addEventListener('dblclick', () => {
            let wishlist_btn = ele.querySelector('.wishlistbtn');
            if(wishlist_btn.style.color!='red')
            add_to_wishlist(ele);
            wishlist_btn.style.color = "red";
        })
    })                  

    bag_drag_container.addEventListener('dragover', (ele)=> {
        ele.preventDefault();
    })
    bag_drag_container.addEventListener('drop', ()=> {
        console.log('drop');
        add_to_cart(wish_div);
    })

    function add_to_cart(ele){
        let item_id = ele.getAttribute('id');
        let item_class = ele.getAttribute('class');
        let new_div = document.createElement('div');
        let item_innerHTML = document.getElementById(item_id).innerHTML;
        
        let quantity_button = document.getElementById('dsds');
        let div_cart_continer = bag_container.getElementsByClassName('PC-box2');
        let exist = false;
        Array.from(div_cart_continer).forEach((ele)=>{
            if(ele.getAttribute('id')=='bag-'+item_id)
            {
                exist = true;
                incrementQuantity();
            }
        })
        if(exist==false){
            bag_container.appendChild(new_div);
            new_div.id = 'bag-'+item_id;
            new_div.setAttribute('class', item_class);
            new_div.innerHTML = item_innerHTML;
            let item_PC_about = document.getElementById(new_div.id).querySelector('.PC-about');
            item_PC_about.innerHTML += quantity_button.innerHTML;
            let qnty = document.getElementById(new_div.id).querySelector('.quantity');
            qnty.setAttribute('id', new_div.id+'-quantity');
        }
    }

    Array.from(wishlistbtn).forEach(function(ele){
        ele.addEventListener('click', function(){
            let wishlist_btn_id = ele.getAttribute('id');
            let box = document.getElementById("item"+wishlist_btn_id);
            if(this.style.color=='red'){
                this.style.color = 'black';
                remove_to_wishlist(wishlist_btn_id);
            }
            else{
                this.style.color = 'red';
                add_to_wishlist(box);
            }
        })
    })
}

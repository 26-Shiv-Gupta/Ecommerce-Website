let text_register = document.getElementById('text-register');
let text_login = document.getElementById('text-login');
let register_form = document.getElementById('register-form');
let login_form = document.getElementById('login-form');

if (text_register && text_login && register_form && login_form) {
    text_register.addEventListener('click', function(){
        this.style.backgroundColor = '#FC5D6D';
        this.style.boxShadow = '0 0 10px 0 rgba(0,0,0,0.45) inset';
        text_login.style.boxShadow = "none";
        text_login.style.backgroundColor = "transparent";
        login_form.style.display = "none";
        register_form.style.display = "block";
    });
    text_login.addEventListener('click', function(){
        this.style.backgroundColor = '#FC5D6D';
        this.style.boxShadow = '0 0 10px 0 rgba(0,0,0,0.45) inset';
        text_register.style.boxShadow = "none";
        text_register.style.backgroundColor = "transparent";
        login_form.style.display = "block";
        register_form.style.display = "none";
    });
}

let wishlistbtn = document.getElementsByClassName('wishlistbtn');
let PC_box2 = document.getElementsByClassName('PC-box2');

if(PC_box2 && wishlistbtn){
    Array.from(PC_box2).forEach(function(ele){
        ele.addEventListener('dblclick', function(){
            let temp = ele.querySelectorAll('.wishlistbtn')[0];
            temp.style.color = "red";
        })
    })

    Array.from(wishlistbtn).forEach(function(ele){
        ele.addEventListener('click', function(){
            if(this.style.color=='red'){
                this.style.color = 'black';
            }
            else{
                this.style.color = 'red';
            }
        })
    })
}


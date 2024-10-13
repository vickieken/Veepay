const eyeBtn = document.querySelector('.fa-eye');

const initialText = document.querySelector('#acc-balance');

const icons = document.querySelectorAll('.icon');

var id=document.getElementsByName("button")[0].id;

console.log(icons);

document.addEventListener('DOMContentLoaded', function () {
    // window.addEventListener('load', ()=> {
    //     const preload = document.querySelector('.pre-div');
    
    //     preload.classList.add("pre-div-hidden");
    
    //     preload.addEventListener('transitionend', ()=> {
    //         document.body.removeChild('.pre-div');
    //     })
    // })
    
    const icons = 
    document.querySelectorAll('.icon');
    let currentIcon = null;

        icons.forEach(icon => {
            icon.addEventListener('click', 
                function() {
                    // event.preventDefault(); // prevent default link behaviour

                    icons.forEach(icon => {
                        icon.classList.remove('.active-icon')
                    });

                    this.classList.add('active-icon')
                });
        });
});

eyeBtn.addEventListener("click", ()=> {
    var id=document.getElementsByName("button")[0].id;
    if(id==0)
    {
        document.querySelector("#acc-balance").innerHTML = "250,000,000.00";
        document.getElementsByName("button")[0].id=1;
        console.log("clicked");
    } else {
        document.querySelector("#acc-balance").innerHTML = "******";
        document.getElementsByName("button")[0].id=0;
        console.log("toggled");
    }
});


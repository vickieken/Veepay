const eyeBtn = document.querySelector('.fa-eye');

const initialText = document.querySelector('#acc-balance');

const icons = document.querySelectorAll('.icon');

var id=document.getElementsByName("button")[0].id;

console.log(icons);

document.addEventListener('DOMContentLoaded', function () {
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
    if(id==1)
    {
        document.querySelector("#acc-balance").innerHTML = "0.00";
        document.getElementsByName("button")[0].id=0;
        console.log("clicked");
    } else {
        document.querySelector("#acc-balance").innerHTML = "******";
        document.getElementsByName("button")[0].id=1;
        console.log("toggled");
    }
})


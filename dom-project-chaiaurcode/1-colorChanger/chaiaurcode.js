const buttons= document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener("click" , function(e){
    console.log(e)
    console.log(e.target)
    const color=e.target.id

    switch(color){
        case 'mustard':
            body.style.backgroundColor='#FFDB58'
            break;
        case 'neonpink':
            body.style.backgroundColor='#FF6EC7'
            break;
        case 'lavender':
            body.style.backgroundColor= '#E6E6FA'
            break;
        case 'mint':
            body.style.backgroundColor='#AAF0D1'
            break;

    }

    })
});
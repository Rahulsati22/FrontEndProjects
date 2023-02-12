// const { element } = require("prop-types");
let id = document.getElementById("ball");
id.addEventListener('mouseenter',  function()
{
    let val1 = (Math.random() * 1000) ;
    let val2 = (Math.random() * 1500) ;
     val1 = Math.min(val1, window.innerHeight - id.offsetHeight - 80);
     val2 = Math.min(val2, window.innerWidth - id.offsetWidth);
    id.style.top =  val1 + 80 +'px';
    
     
    id.style.left = val2 + 'px';
});
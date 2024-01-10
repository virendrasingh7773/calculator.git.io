let demo = document.getElementById("demo");
let result = "";
let x = document.getElementsByClassName('inpt')
let z = Array.from(x)

z.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML == "=") {
            result = eval(result);
            demo.value = result;
        }
         else if(e.target.innerHTML == "AC"){
            result = ''
            demo.value = result
         }
         else if(e.target.innerHTML == "DEL"){
            result = result.substring(0,result.length-1)
            
            demo.value = result
        }
        else{
            result += e.target.innerHTML;
            demo.value = result;
        }
           })
})
let inputBtn = document.querySelectorAll(".inputBtn")     // selecting the input buttons 
const resultBox = document.querySelector(".resultBox")  // selecting the output box 

/* the query selector only selects the first element of the particular class or id. 
   the query selector selects all the elements of its attribute and returns a node list. 

    querySelector() → Returns a single HTML element (first match).
    querySelectorAll() → Returns a NodeList (collection of html elements).
*/

let string=""                   // all the input buttons are stored in a string 
let arr=Array.from(inputBtn)   // converting nodelist into an array

resultBox.innerHTML=0          // bydefault the 0 should be displayed 

arr.forEach((button)=>{
    button.addEventListener("click",(event)=>{

        if(event.target.value==="="){
            string = String(eval(string))                           // inbuilt function which evalutes the string content mathematically 
            resultBox.innerHTML=string
        }else if(event.target.value==="AC"){
            string=""                                       // making the string empty to not include the previous answer                                
            resultBox.innerHTML=0
        }else if(event.target.value==="DEL"){
            string=string.substring(0,string.length-1)      // using substring method excluding the last element 
            resultBox.innerHTML=string

            if(string===""){                               // if string becomes empty then it show 0 
                resultBox.innerHTML=0
            }else{
                resultBox.innerHTML=string
            }

        }else{
            string+=event.target.value                      // performing string concatenation 
            resultBox.innerHTML=string
        }
    })
})
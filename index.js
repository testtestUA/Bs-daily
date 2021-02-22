const text = document.querySelector("textarea");
const section = document.querySelector("section");
const add = document.querySelector(".add");
const table = document.querySelector(".table");
const deleteIt = document.querySelector(".delete");
const numMin = document.querySelector(".numMin")
const prize = document.querySelector(".prize");
const silver = document.querySelector(".silver");
const div = document.querySelector(".if");

add.onclick = () => {
    const array = [];

    console.log("d");
    //Get each value if it is listed up to down.
    array.push(text.value.split("\n"))
    //Get each array element. 
    array.forEach(name => {
        
        //Loop elements, print value till name list length. 
        for (let i = 0; i < name.length; i++) {
            if(name[i] != "") {
            table.insertAdjacentHTML('beforeend' , ` <div class="num-win"><p contenteditable="true" class="number">${table.childElementCount}</p><p class="winner"> ${name[i]}</p></div> ` )
            }
           
        }
    });
    //Borders
    
    
    check()
}
    function check() {

        
        const number = document.querySelectorAll(".number");
       
    if(table.childElementCount > 3) {
            prize.src="./bronze.png"
    }

    if(table.childElementCount < 3) {
        prize.src="./gold.png"
}

    if(table.childElementCount > 6) {
        table.classList.add("table-sml")
        number.forEach(number => {
        number.classList.add("number-sml")
        silver.src ="./silver.png"
        prize.src ="";
        })

    }else {
        table.classList.remove("table-sml")
        number.forEach(number => {
            number.classList.remove("number-sml")
        })
    
        silver.src =""
    }
  

    deleteIt.onclick = () => {

        setInterval(() => {
            check()
        }, 100);
        
        for (let ins = 0; ins < table.childElementCount; ins++) {
            table.children[1].remove()
            table.children[1].remove()
            table.children[1].remove()
            table.children[1].remove()
        }
       
    }

    }
    


    //Clear all!

   

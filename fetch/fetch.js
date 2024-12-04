
const url = "https://cat-fact.herokuapp.com/facts"
let para = document.querySelector('.pera');
para.innerHTML=''

let btn = document.querySelector('#btn');

// const getFacts = async () =>{
    //     console.log("getting started.....");
    //     let response = await fetch(url);
    
//     // IT IS RETURN OBJECT BUT NOT USABLE AND RETURN PROMISE
//     console.log(response);   

//     //OBJECT USED BY JSON METHOD AND RETURN PROMISE

//     let data =await response.json();
//     para.innerHTML =data[0].text
//     console.log(data[0].text);
// }

function getFacts(){
    fetch(url)
     .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        para.innerHTML =data[0].text
    })
}
btn.addEventListener('click' , getFacts)


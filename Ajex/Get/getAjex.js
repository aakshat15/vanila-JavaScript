let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click' , btnclickHandler);

function btnclickHandler(){
    //CREATE XHR OBJECT
    const xhr = new XMLHttpRequest();

    //OPEN THE OBJECT
    xhr.open('get' , 'Ajex.txt' , true);

    //CREATE THE WHAT TO DO IN ONPROGRESS
    xhr.onprogress = function(){
        console.log('ON progress');
    }
    //WHEN RESPONSE IS READY
    xhr.onload = function(){
        if( this.status === 200){
            console.log(this.responseText);
            alert(this.responseText)
        }
        else{
            console.error('error occured');
            alert(eror)
        }
    }
    //SEND THE REQUEST
    xhr.send();
}
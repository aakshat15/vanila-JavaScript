
//RUN A FUNCTION AFTER THE SET TIME 1000 MEANS 1 SEC
function timeOut(){

setTimeout(()=>{console.log('hello');},5000)


let timed =      setTimeout(()=>{console.log('hii'); setTimeout(()=>{console.log('byiie');
    },2000)
    },1000)

    clearTimeout(timed)//USED TO CLEAR AND DELET THE FUNCTION
}
// timeOut()

// 2 EXAMPLE

function timeOut2(){

    console.log('start');
    
    setTimeout(()=>{console.log('this is run after 2 sec');
    },2000);

    console.log('end');
    
}
timeOut2()
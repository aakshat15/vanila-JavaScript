// setIntervall()
function setIntervall1(){

    setInterval(()=>{console.log('hii');
    },2000);

}

//EXAMPLE 2
setIntervall2()
function setIntervall2(){
    let count = 0 ;
    let interval = setInterval(()=>{
        console.log(`count: ${++count}`);
        if(count === 10){
            clearInterval(interval)
            console.log('clear execution');
            
        }
    },1000)
}

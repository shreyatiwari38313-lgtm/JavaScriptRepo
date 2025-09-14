//generating a random color using hex values
// Range 0-9, A-F
const randomColor = function(){
    const hex = "0123456789ABCDEF";   //16 values(hex)
    //starting color (#FFFFFF) -> whitecolor isi me hm ++ lgakr color bdhaenge
     let color ='#'
     for(let i =1;i<=6;i++){
        color += hex[Math.floor(Math.random()*16)]
     }
     return color
    };

    console.log(randomColor())

   //  console.log(Math.floor(Math.random()*16));   //for  values between 1-16
    //global scope
    let intervalId;   //undefined  //(!intervalId) = true


   const startChangingColor = function(){
    if(!intervalId){        //optional when cleanup code not written.if cleanup code is written then must to use it 
    intervalId= setInterval(changeBgColor,1000)

    function changeBgColor(){
    document.body.style.backgroundColor =randomColor();
   }
}
  }  
   const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; //flush out the intervalId value for cleaner code as there are some edge cases
   }

   //Now taking references of both buttons
    document.querySelector('#start').addEventListener
    ('click',startChangingColor)
      
    document.querySelector('#stop').addEventListener
    ('click',stopChangingColor)
   





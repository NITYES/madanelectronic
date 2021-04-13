

let nameValue=null;
let mobileValue=null;
let pincodeValue=null;
let productValue=null;

const user=document.getElementById('name');
const mobile=document.getElementById('mobile');
const address=document.getElementById('address');
const product=document.getElementById('product');
const submit=document.getElementById('submit');




//user
user.addEventListener('keyup',(e)=>{
   nameValue=e.target.value;
   allFilles();
})


//mobile 
mobile.addEventListener('keyup',(e)=>{


    mobileValue=Number(e.target.value);
    const errorDiv=document.getElementById('error');
    if(isNaN(mobileValue)){
        mobileValue=null;
          errorDiv.innerHTML="please enter 10 digit mobile number"
          errorDiv.style.color="red"
          submit.disabled=true;
          allFilles()

    }else{
        if([...e.target.value].length <10 || [...e.target.value].length>10){
            mobileValue=null;
            errorDiv.innerHTML="please enter 10 digit mobile number"
          errorDiv.style.color="red"
          submit.disabled=true;
          allFilles();

        }else{
            errorDiv.innerHTML="";
            allFilles();
        }
    }


 });

 


//address
 address.addEventListener('keyup',(e)=>{
    addressValue=e.target.value
    allFilles();
}

 ) 


 //product
 product.addEventListener('change',(e)=>{
if(e.target.value=="null"){
    productValue=null
    allFilles();
    submit.disabled=true;

}
else{
    productValue=e.target.value
    allFilles();
}
 })




function allFilles(){

    if(nameValue && mobileValue && addressValue && productValue ){
        submit.disabled=false;
    }else{
        submit.disabled=true;
    
    }
    

}
allFilles();

//stop resubmission of form on refresh

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
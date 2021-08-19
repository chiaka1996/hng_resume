const submitBtn = document.querySelector('.submitBtn');
const nameValue = document.querySelector('.name');
const emailValue = document.querySelector('.email');
const messageValue = document.querySelector('.message');
const errorMessage = document.querySelector('.errorMessage');
const successMessage = document.querySelector('.successMessage');


submitBtn.addEventListener('click', async () => {
   try{
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        const nameRegex = /^[a-z]+/i;
        const name = nameValue.value;
        const email = emailValue.value;
        const message = messageValue.value;

        successMessage.innerHTML = '';

        if(!name || !email || !message)
         return errorMessage.innerHTML = "please fill all fields"

        if(!nameRegex.test(name))
          return errorMessage.innerHTML = 'please, input a valid name'

        if(!emailRegex.test(email))
         return errorMessage.innerHTML = "please, input a valid email address"

    const data = {
        name,
        email,
        message
    }

    const postReq = await axios.post('/apis/submitForm', data)
    if(postReq.status == 201){
        errorMessage.innerHTML = '';
        nameValue.length = 0;
        emailValue.length = 0;
        messageValue.length = 0;
        successMessage.innerHTML = postReq.data.message;
    }
   }
   catch(error){
    if(!error.response){
        errorMessage.innerHTML= "Something went wrong. Please check your internet connection";
        return;
      }
  
      if(error.response.status === 400){
        errorMessage.innerHTML = "Their is a problem from our end. try again later"
        return;
      }
  
      if(error.response.status === 500){
        errorMessage.innerHTML = 'Their is a problem from our end. try again later';
        return;
        }
   }    
})
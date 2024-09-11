 
  
        
    //  image slider
    let currentIndex = 0;
    let slides = document.querySelectorAll('.slider img');
   
   function showSlide(index) {
       if (index < 0) {
           currentIndex = slides.length - 1;
       } else if (index >= slides.length) {
           currentIndex = 0;
       } else {
           currentIndex = index;
       }
   
       let offset = -currentIndex * 23 + '%';
       document.querySelector(".slider").style.transform = "translateX(" + offset + ")";
   }
   
   function prevSlide() {
       showSlide(currentIndex - 1);
   }
   
   function nextSlide() {
       showSlide(currentIndex + 1);
   }
   
   // Automatic sliding every 2 seconds
   setInterval(nextSlide, 2000);
   // end  image slider
   //  start scpript code product-list
  $(document).ready(function(){
    $("#product-list").click(function(){
    $('.product-list').slideToggle()
    })
    })
    //  end scpript code product-list
   
    // limited time products countdown
    let end= new Date("Sep 22, 2024 12:00:00").getTime();
    let x= setInterval(function(){
    let now= new Date().getTime();
    let time= end-now ;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    console.log(days)
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours)
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes)
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    console.log(seconds)
     document.getElementById("time-end").innerHTML= days+ "d, "+ hours +"hrs: " + minutes + "min: " + seconds+ " sec";
     
   
  }, 1000 ) 
        //  products detalis images
        //  Alluiminuim deatils pics
  function Change1(){
    document.getElementById('product-image').src="product Details pic/01.jpeg"; 
  } 
  function Change2(){
    document.getElementById("product-image").src="product Details pic/02.jpeg"; 
  } 
  function Change3(){
    document.getElementById("product-image").src="product Details pic/03.jpeg" ;
  } 
   
  function Change4(){
    document.getElementById("product-image").src="product Details pic/images.jpeg" ;
  } 
  function Change5(){
    document.getElementById("product-image").src="product Details pic/04.jpeg" ;
  }  
  //  wall  clock details pics
  function Change6(){
    document.getElementById('product-image').src="product Details pic/clock- 01.jpeg"; 
  } 
  function Change7(){
    document.getElementById("product-image").src="product Details pic/clock-02.jpeg"; 
  } 
  function Change8(){
    document.getElementById("product-image").src="product Details pic/clock-03.jpeg" ;
  } 
  function Change9(){
      document.getElementById("product-image").src="product Details pic/clock-04.jpeg" ;
    } 
    function Change10(){
      document.getElementById("product-image").src="image/featured 03.png" ;
    } 
    //  old style  details pic
    function Change11(){
      document.getElementById("product-image").src="product Details pic/old-style -01.jpg" ;
    } 
    function Change12(){
      document.getElementById('product-image').src="product Details pic/old-style -02.jpg"; 
    } 
    function Change13(){
      document.getElementById("product-image").src="product Details pic/old-style -03.jpg"; 
    } 
    function Change14(){
      document.getElementById("product-image").src="product Details pic/old-style -04.jpg" ;
    } 
    function Change15(){
      document.getElementById("product-image").src="product Details pic/old-style -05.jpg" ;
    } 
    //  glass elgant decorative details pic
    function Change16(){
      document.getElementById("product-image").src="product Details pic/glass-01.jpeg" ;
    } 
    function Change17(){
      document.getElementById("product-image").src="product Details pic/glass-02.jpeg" ;
    }
     function Change18(){
      document.getElementById("product-image").src="product Details pic/glass-03.jpeg" ;
    } 
    function Change19(){
      document.getElementById("product-image").src="product Details pic/glass-04.jpeg" ;
    } 
    function Change20(){
      document.getElementById("product-image").src="product Details pic/glass-05.jpeg" ;
    } 
      //  glass led round detail pics
      function Change21(){
        document.getElementById("product-image").src="product Details pic/led-glass-01.jpeg" ;
      } 
      function Change22(){
        document.getElementById("product-image").src="product Details pic/led-glass-02.jpeg" ;
      }
       function Change23(){
        document.getElementById("product-image").src="product Details pic/led-glass-03.jpeg" ;
      } 
      function Change24(){
        document.getElementById("product-image").src="product Details pic/led-glass-04.jpeg" ;
      } 
      function Change25(){
        document.getElementById("product-image").src="product Details pic/led-glass-05.jpeg" ;
      } 
      
      // products images zoomOverlay
      let imageContainer = document.querySelector('.image-container');
   let zoomOverlay = document.querySelector('.zoom-overlay');
   let productImage = document.getElementById('product-image');
  
  imageContainer.addEventListener('mousemove', (e) => {
      let { left, top, width, height } = imageContainer.getBoundingClientRect();
      let x = (e.clientX - left) / width * 100;
      let y = (e.clientY - top) / height * 100;
      zoomOverlay.style.backgroundPosition = `${x}% ${y}%`;
      productImage.style.transformOrigin = `${x}% ${y}%`;
  });
  
  imageContainer.addEventListener('mouseenter', () => {
      zoomOverlay.style.display = 'block';
  });
  
  imageContainer.addEventListener('mouseleave', () => {
      zoomOverlay.style.display = 'none';
  });
  
   
  
  
  function login(){
     
    let user = document.getElementById('Username').value;
    let pass = document.getElementById('password').value;
    let check = document.getElementById('check-box').value;
    let User="Sindhcraft@gmail.com"
    let Pass="120321"
   
    if(user==""){
        document.getElementById("caution").innerHTML="** Please type Email"
        return false;
     }
     if(user != User){
      document.getElementById("caution").innerHTML="** Please type correct Email"
      return false;
   }
     if( pass==""){
        document.getElementById("caution").innerHTML="** Please type Password"
        return false;
     }
     if( pass != Pass){
      document.getElementById("caution").innerHTML="** Please type Password correct password"
      return false;
   }
     if (check.checked == false) {
       alert("please click on check box")
      return false;
     }
    else if (user==User && pass==Pass )
     {
        alert(" You  have login Successfully")
       return true;
     }
  
   else  {
         document.getElementById("pass-c").innerHTML= " ** Please type Email or password";
        
         return false;
         
     }
   } 
    // Create account form validation
       
    function validateForm() {
        let fname = document.getElementById("First").value.trim();
        let lname = document.getElementById("Last").value.trim();
        let city = document.getElementById("City/Town").value.trim();
        let Address = document.getElementById("Address").value.trim();
        let phone = document.getElementById("Number").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        //  first name validation
        if(fname== ""){
          document.getElementById("first").innerHTML="** PLEASE FILL USER NAME";
          return false;
        }
        else if (fname.length<2){
          document.getElementById("first").innerHTML="** WRITE 3 LETTERS ABOVE";
          return false;
        }
        // last name validation
        if(lname== ""){
          document.getElementById("last").innerHTML="** PLEASE FILL LAST NAME";
          return false;
        }
        else if (lname.length<2){
          document.getElementById("last").innerHTML="** WRITE 3 LETTERS ABOVE";
          return false;
        }
        // city name validation
        if(city== ""){
          document.getElementById("city").innerHTML="** TYPE CITY NAME";
          return;
        }
        // Adress validation
         if (Address==""){
          document.getElementById("address").innerHTML=" ** FILL ADDRESS";
          return false;
        }
        // Phone number validation
        if(phone== ""){
          document.getElementById("number").innerHTML="** Type PHONE NUMBER";
          return false;
        }
       else if (phone.length<11){
          document.getElementById("number").innerHTML="** TYPE less than 11  NUMBERS ";
          return false;
        }
       
        // email validation
         
        if(email== ""){
          document.getElementById("email").innerHTML="** TYPE EMAIL ADDRESS";
          return false;
        }
      
        //  password validation 
        if(password== " "){
          document.getElementById("pass").innerHTML="** FILL PASSWORD";
          return false;
        }
       
        else if(password.length<6){
          document.getElementById("pass").innerHTML="** TYPE 6 LETTERS ABOVE PASSWORD";
          return false;
        }
        // confirm password validation
         if (confirmPassword != password){
          document.getElementById("confirm").innerHTML="PASSWORD MIS MATCH" ;
          return false;
        }
        else if(confirmPassword==password){
          Swal.fire({
            title: "Your Account Has Been Created Successfully",
            icon: "success"
          });
         return false;
        
        }
        else{
          document.getElementById("confirm").innerHTML="" ;
          return false;
        }
      }
      // Create account form validation  end
    //  start script code faqs page
    // start js code anwser 0
   
  
  //  contact us page message submit
  
  function submitForm() {
              
    // You can add your logic here to handle the form submission
    Swal.fire({
      title: "Your Message Submit Successfully",
      icon: "success"
    })
    document.getElementById('contactForm').reset();
    return false;
  };
      // check out form validation//
      function checkvalidation(){
        let Usr = document.getElementById("User").value.trim();
        let emil = document.getElementById("email").value.trim();
        let cty = document.getElementById("city").value.trim();
        let add = document.getElementById("add").value.trim();
        let code = document.getElementById("code").value.trim();
        let card = document.getElementById("crd_n").value.trim();
        let Ex_Month = document.getElementById("ex_m").value.trim();
        let ex_year = document.getElementById("ex_y").value.trim();
        let  cvv_n= document.getElementById("cvv_n").value.trim();
        let  Name = document.getElementById("Name").value.trim();
        
        if (Usr == ""){
           alert(" Please Type User Name");
           return false;
        }
        if (emil == ""){
          alert(" Please Type Email Address");
          return false;
       }
       if ( cty == ""){
        alert(" Please Type  City Name");
        return false;
       }
        if (add == ""){
      alert(" Please Type  Address");
      return false;
      }
       if ( code == ""){
      alert(" Please Type Zipcode");
      return false;
      }
      if ( Name == ""){
        alert(" Please Type  Name ");
        return false;
        }
      if (card == ""){
       alert(" Please Type  card Number");
       return false;
      }
      if (Ex_Month == ""){
      alert(" Please Type  Expire date of card ");
       return false;
     }
      if ( ex_year == ""){
      alert("Please Type  Expire year of card");
      return false;
     }
     if (cvv_n == ""){
     alert(" Please Type   cvv number");
     return false;
     }
     else if (cvv_n.length> 2 || Name. length >5) {
         alert (" Payment Successfully Recieved")
     }
     else{
      document.getElementById("Check").innerHTML="" ;
      return false;
    }
      };

  

  
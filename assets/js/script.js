const header = document.querySelector("header");

window.addEventListener("scroll",()=>
{
    header.classList.toggle("sticky",window.scrollY > 0);
});

const headerMenu = document.querySelector(".header__menu"),
menuBtn = document.querySelector(".menu-btn"),
headerMenuItems = headerMenu.querySelectorAll("li a");

menuBtn.addEventListener("click",()=>{
    headerMenu.classList.toggle("show");
});

headerMenuItems.forEach((item)=>{
    item.addEventListener("click",()=>{
        headerMenu.classList.remove("show");
    });
});
    
AOS.init({
        offset: 300,
        duration: 1200,
});



function sendEmail(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    
    // Initialize emailjs with your Public Key
    emailjs.init('JG1Z7ggWs-SgdJQS9');
    const findUsSelect = document.getElementById("findus");
    const findUsText = findUsSelect.options[findUsSelect.selectedIndex].text;
    
    // Get the form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      movefrom: document.getElementById("movefrom").value,
      moveto: document.getElementById("moveto").value,
      bedroomno: document.getElementById("bedroomno").value,
      phoneno: document.getElementById("phoneno").value,
      findus: findUsText, // Use the selected option text
      date: document.getElementById("date").value,
      carbike: document.querySelector('input[name="carbike"]:checked').value,
      storage: document.querySelector('input[name="storage"]:checked').value,
    };
    
    // Send the form data via emailjs
    emailjs.send('service_0ocownf', 'template_dv6mxbq', formData)
      .then(function(response) {
         console.log('Email sent successfully:', response);
         // Reset the form
         document.querySelector(".contact__form").reset();
      }, function(error) {
         console.error('Error sending email:', error);
      });
  }
  
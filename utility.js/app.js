function scrollToSection() {
    const section = document.getElementById("ticket-section");
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Adding event listener to the button
  document.getElementById("buy-tickets").addEventListener("click", scrollToSection);
  




  // next button of purchase
  function next(){

    const nextButton = document.getElementById('footer-section');
    nextButton.classList.add('hidden');

    const ticketSection = document.getElementById('ticket-section');
    ticketSection.classList.add('hidden');

    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

        const successScreen = document.getElementById('success-screen');
    successScreen.classList.remove('hidden');

  }

  // success message popup
function success(){
    const successScreen = document.getElementById('success-screen');
    successScreen.classList.add('hidden');

    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.remove('hidden');

    const ticketSection = document.getElementById('ticket-section');
    ticketSection.classList.remove('hidden');

    const footerSection = document.getElementById('footer-section');
    footerSection.classList.remove('hidden');
}


// ALL SEAT BTN
// const allBtn = document.getElementsByTagName('kbd');

// for(const btn of allBtn){
// console.log(btn.innerText);
// }

function addBGColor(id){
  const element = document.getElementById(id);
  element.classList.add("bg-green-400");
}


function btn_id(btnNmbr){
  const Seat_id = document.getElementsByClassName('kbd');
  // console.log(btnNmbr);
  const addColor=Seat_id[btnNmbr].id;
  
   console.log(addColor);
   addBGColor(addColor);
  
}

function scrollToSection() {
    const section = document.getElementById("ticket-section");
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Adding event listener to the button
  document.getElementById("buy-tickets").addEventListener("click", scrollToSection);
  

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



  
//   const seats=document.getElementsByClassName('kbd');
//   for(seat of seats){
//     const singleSeat = seat.innerText;
//     console.log(singleSeat);
//   }
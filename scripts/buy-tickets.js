

// buy tickets onclick 
function buttonClick(){
    
    const buttonBuy = document.getElementById('buy-ticket-button');
    const buyScetion = document.getElementById('bus-ticket-booking');

    if(buttonBuy){
        buyScetion.scrollIntoView({
        behavior: 'smooth', // Optional: for smooth scrolling animation
        block: 'start'      // Aligns the top of the element with the top of the viewport
      });
    }
}


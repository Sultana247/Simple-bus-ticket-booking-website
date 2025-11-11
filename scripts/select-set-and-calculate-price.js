    
        let total = 0;

document.getElementById('all-seats').addEventListener('click', function(event){

        const elementEvent = event.target;
        const elementsInnertext = elementEvent.innerText;
       addBackgroundByID(elementsInnertext);
       elementEvent.disabled = true;
        // get the count value of selected seat
       const countValue =   document.getElementById('selected-seat-count');
       const countText = countValue.innerText;
       const countInt = parseInt(countText);
        
        const count = countInt + 1;
        
        const seatNumberEvent = document.getElementById(elementsInnertext);
        

        // now selected seat will be displayed
        // const setSelectedSeat = document.getElementById('selected-seat');
        // setSelectedSeat.innerText = elementsInnertext;

        // const setSelectedSeat = document.getElementById('selected-seat-display');
        
        // setSelectedSeat.classList.remove('hidden');

        // setSelectedSeat.append();
        setElementById('selected-one', elementsInnertext);
        const setSelectedSeat = document.getElementById('selected-seat-display');

        const divContainer = document.getElementById('selected-seat-list');
        
        const div = document.createElement('div');
        div.innerHTML = setSelectedSeat.innerHTML;
        div.id="selected-seat-display";
        divContainer.appendChild(div);

        

        

        

        setElementById('selected-seat-count', count);

        // get the current total value 
         const TotalValue =   document.getElementById('total-payable');
        const totalText = TotalValue.innerText;
         const totalInt = parseInt(totalText);
        // total payable taka for selected seat
        total = totalInt + 550 ;
        setElementById('total-payable', total);



       if (count >= 4) {
            const allButtons = document.querySelectorAll('#all-seats button');
            allButtons.forEach(btn => {
            if (!btn.classList.contains('selected')) {
                btn.disabled = true;
            
            }
            });
        }

        // cupon part
        
       
});


// need to do more work
function cupon(){
     const cuponInput = document.getElementById('cupon');
     console.log(cuponInput);
    // count vale getting
     const countValue =   document.getElementById('selected-seat-count');
       const countText = countValue.innerText;
       const count = parseInt(countText);

    //    total value gettting
    const TotalValue =   document.getElementById('total-payable');
        const totalText = TotalValue.innerText;
         var total = parseInt(totalText);
    
     const cuponInputText = cuponInput.value;
     
     console.log(cuponInputText);
     console.log(count," seats selected");
        const applyCupon = document.getElementById('apply-cupon');
        
        if(cuponInputText === 'NEW15' && count === 4){
            total = total - (total*0.15);
            console.log(total, 'discount price');
            setElementById('total-payable', total);
            applyCupon.classList.add('hidden');

        }
        else if(cuponInputText === 'Couple 20' && count === 2){
            total = total -(total*0.20);
            console.log(total, 'discount price');
            setElementById('total-payable', total);
            applyCupon.classList.add('hidden');
        }
        else{
            
            applyCupon.append('Please apply proper cupon');
        }
    


}

function successfullyBooked(){
    hiddenSectionById('header-section');
    hiddenSectionById('main-section');
    hiddenSectionById('footer-section');
    // display only successful section
    displaySectionById('succesful-section');

}

function continueButton(){
    displaySectionById('header-section');
    displaySectionById('main-section');
    displaySectionById('footer-section');
    // display only successful section
    hiddenSectionById('succesful-section');

    // selected items hide
    // const seatselected = document.getElementsByClassName('display-booked-seat');
    // seatselected.classList.add('hidden');

    // clear the total and count
    setElementById('total-payable', 0);
    setElementById('selected-seat-count', 0);

    //clear the previous calculation
    const currentSelected = document.getElementById('selected-seat-list');
    console.log(currentSelected);
    // clear all button
    const findTheseatId = currentSelected.querySelectorAll("#selected-one");
    console.log(findTheseatId);
    for(const node of findTheseatId){
        removeBackgroundByID(node.innerText);
        
    }
    // //clear the previous calculation
   
    // enable all the buttons again
    const allButtons = document.querySelectorAll('#all-seats button');
            allButtons.forEach(btn => {
            if (!btn.classList.contains('selected')) {
                btn.disabled = false;
            
            }
            });

    // selected items hide
    // const seatselected = document.getElementsByClassName('display-booked-seat');
    // seatselected.classList.add('hidden');

    // const currentcalc = document.getElementById('selected-seat-list');
    // console.log(currentcalc);
    // const currentCalcTest = currentcalc.innerText;

}


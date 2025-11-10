let count = 0;
let total = 0;

document.getElementById('all-seats').addEventListener('click', function(event){

        const elementEvent = event.target;
        const elementsInnertext = elementEvent.innerText;
       addBackgroundByID(elementsInnertext);
        
       
        
        count = count +1;
        
        const seatNumberEvent = document.getElementById(elementsInnertext);
        

        // now selected seat will be displayed
        // const setSelectedSeat = document.getElementById('selected-seat');
        // setSelectedSeat.innerText = elementsInnertext;

        // const setSelectedSeat = document.getElementById('selected-seat-display');
        
        // setSelectedSeat.classList.remove('hidden');

        // setSelectedSeat.append();
        
        const setSelectedSeat = document.getElementById('selected-seat-display');

        const divContainer = document.getElementById('selected-seat-list');
        const div = document.createElement('div');
        div.innerHTML = setSelectedSeat.innerHTML;
        
        divContainer.appendChild(div);
        

        

        setElementById('selected-one', elementsInnertext);

        setElementById('selected-seat-count', count);
        // total payable taka for selected seat
        total = total + 550 ;
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
        cupon(count);
       
});


// need to do more work
function cupon(count){
     const cuponInput = getelementForSeatByID('cupon');
     const cuponInputText = cuponInput.innerText;
        const applyCupon = getelementForSeatByID('apply-cupon');
        document.getElementById('apply-cupon-button').addEventListener('click', function(){
        if(cuponInputText === 'NEW15' && count === 4){
            total = total - (total*0.15);
            setElementById('total-payable', total);
            applyCupon.classList.add('hidden');

        }
        else if(cuponInputText === 'Couple 20' && count === 2){
            total = total -(total*0.20);
            setElementById('total-payable', total);
            applyCupon.classList.add('hidden');
        }
        else{
            
            console.log('the cupon is not valid');
        }
    });


}


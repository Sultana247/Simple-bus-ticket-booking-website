function getelementForSeatByID(Id){
    const seat = document.getElementById(Id);
    const setInnertext = seat.innerText;
    
    
}
function addBackgroundByID(Id){
    const seat = document.getElementById(Id);
    seat.classList.add('bg-green-400');
    seat.classList.add('text-white');
    
}
function removeBackgroundByID(Id){
    const seat = document.getElementById(Id);
    seat.classList.remove('bg-green-400');
    seat.classList.remove('text-white');
    
}

function setElementById(Id, value){
    const seat = document.getElementById(Id);
    seat.innerText = value;

}

function hiddenSectionById(id){
    const hiddenEvent = document.getElementById(id);
    hiddenEvent.classList.add('hidden');

}
function displaySectionById(id){
    const hiddenEvent = document.getElementById(id);
    hiddenEvent.classList.remove('hidden');
    
}


function getTheCurrentValue(id){
   const countValue =   document.getElementById(id);
    const countText = countValue.innerText;
    const countInt = parseInt(countText);
    
    
}
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


var i = 0;

var buttonCreation = function () {
    var btn = document.createElement('button');
    btn.setAttribute('class', 'redBg');
    btn.setAttribute('onclick', 'buttonCreation()');
    if (i > 0) {
        btn.innerHTML = 'demo button' + i;
    }
    else {
        btn.innerHTML = 'demo button';
    }
    i++;

    var wrapper = document.getElementById('divDemoArea');
    wrapper.appendChild(btn);
};
buttonCreation();

function showOnMouseOver() {
    document.getElementById('btnShowHide').innerHTML = "Hide";
    document.getElementById('disappearingdiv').style.display = 'block';
}

function hideOnMouseLeave() {
    document.getElementById('btnShowHide').innerHTML = "show";
    document.getElementById('disappearingdiv').style.display = 'none';
}

function handleAddClick(event) {
    // explore event obj 
    event.target.innerText = 'clicked';
    event.target.disabled = true;
}


function handledrag(event) {

    console.log(event);
    event.dataTransfer.setData('xyz', event.target.id);
    console.log('Dragging');

}

function handleDragOver(event) {
    console.log(event)
    event.preventDefault();
}

function handleDrop(event) {
    console.log(event);
    event.preventDefault();
    console.log('Dropping');

    var draggedItem = event.dataTransfer.getData('xyz');
    console.log(draggedItem);
    event.target.appendChild(document.getElementById(draggedItem));
}

function handleLocateMe()
{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation,locationAccessDenied);
    }
    else{
        alert('Browser does not support geo loc');
    }
}
function showLocation(position){
    console.log('position is ' + position);
    console.log('you are in ' + position.coords.latitude + ' and ' + position.coords.longitude);
    navigator.geolocation.watchPosition(watchingPosition,watchingError);

}
function watchingPosition(pos){
   console.log(pos);
   var crd = pos.coords;

   console.log('watching position '+ crd.latitude + ' , ' + crd.longitude);
 
   
}
function watchingError(){

}
function locationAccessDenied(){
    alert('locationAccessDenied');
}
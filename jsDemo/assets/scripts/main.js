"use strict";

var c = 30;

var btn = document.getElementById('dispatchBtn');

var profile = {
    firstName: 'dhivi',
    lName: 'sundar',
    city: 'chennai',
    age: 30,
    address: {
        doorNo: 107,
        street: '28th'
    }
}

function handleSendIt(event) {
    //debugger;
    console.log(this);
    alert('sending from external js');
}

function handleDispatch() {
    alert('Dispatch click');
}

function two(a) {
    a();
}

function one() {
    console.log('wow');
}

two(one);

console.log("ll");


btn.onclick = function(){
    console.log('dispatch clicked');
}

btn.addEventListener('mouseover',function(){
    console.log('dispatch btn clicked listener')
});


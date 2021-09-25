function handleFormSubmit(event) {

    event.preventDefault();

    var formData = {
        firstName: document.getElementById('fName').value,
        lastName: document.getElementById('lName').value
    }



    console.log(formData);
    /*ajax
    backend - rest api - https://jsonplaceholder.typicode.com/users
    http method - post
    data - form data
    rest api client - xmlhttpreq*/

    var xmlhttpRequest = new XMLHttpRequest();
    xmlhttpRequest.onreadystatechange = function () {
        console.log(this.readyState);
        /*
        0: req not initialized
        1: server connection established
        2: req received
        3:processing req
        4: req finished resp ready.
        */
        if (this.readyState == 4 && this.status == 201) {//response ready
            alert('success');
            document.getElementById('divToast').style.display = 'block';
        }
    }

    xmlhttpRequest.open('POST', 'https://jsonplaceholder.typicode.com/users');
    xmlhttpRequest.send(formData);
}
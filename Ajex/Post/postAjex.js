let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', btnclickHandler);

function btnclickHandler() {
    // Create XHR object
    const xhr = new XMLHttpRequest();

    // Open the request
    xhr.open('POST', 'post.txt', false);

    // Set the correct content type for the POST request
    xhr.setRequestHeader('Content-Type', 'text/plain');

    // Define the onprogress handler
    xhr.onprogress = function () {
        console.log('On progress');
    };

    // Define what to do when the response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            alert(this.responseText);
        } else {
            console.log('Error occurred');
            alert(`Error occurred,${this.status}`);
        }
    };

    // Define the data to send in the POST request
    
    // Log to indicate that the process is starting
    console.log('We are done sending the request');
    
    const p = `This is written in the file`;
    
    // Send the request with the data
    xhr.send(p);
}

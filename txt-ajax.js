var request;

// For backwards compatibility with early IE versions
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP');
}

// False parameter makes this request synchronous, requests are async by default
// request.open('GET','data.txt', false);
request.open('GET','content/data.txt');


request.onreadystatechange = function() {
    if ((request.status === 200) && (request.readyState === 4)) {
        
        // Target an Element by ID, and insert data
        var modifyElement = document.getElementById('update');
        modifyElement.innerHTML = request.responseText;
        
        // Target a group of Elements by Tag Name
        // You could loop through an array or target each element in the group individually
        var modifyGroup = document.getElementsByTagName('li');
        modifyGroup[0].innerHTML = 'The readyState is: ' + request.readyState;
        modifyGroup[1].innerHTML = 'The statusText is: ' + request.statusText;
        modifyGroup[2].innerHTML = 'This is the 3rd List Item in the Array';
        modifyGroup[3].innerHTML = 'The response is: ' + request.response;
        modifyGroup[4].innerHTML = 'The responseURL is: ' + request.responseURL;
    }
}

request.send();
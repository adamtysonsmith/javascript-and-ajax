var request;

// For backwards compatibility with early IE versions
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP');
}

// False parameter makes this request synchronous, requests are async by default
request.open('GET', 'content/note.xml');

request.onreadystatechange = function() {
    if ((request.status === 200) && (request.readyState === 4)) {
        
        // Target an Element by ID, and insert data
        var modifyFirstElement = document.getElementById('xml-object');
        modifyFirstElement.innerHTML = "Use request.responseXML to get the XML object: " + request.responseXML;
        
        var modifySecondElement = document.getElementById('xml-text-response');
        modifySecondElement.innerHTML = "You can also use request.responseText to get the text: " + request.responseText;
        
        // To access the text within an XML node, it is actually the child of the node (firstChild)
        console.log(request.responseXML.getElementsByTagName('subject')[0]);
        console.log(request.responseXML.getElementsByTagName('subject')[0].firstChild);
        
        
        // Create a variable to store the XML nodes to loop over, and a variable to store the list items
        var nodes = request.responseXML.getElementsByTagName('subject');
        var listItems = "";
        
        // Loop through the Subject nodes and add a string for each list item
        for (var i = 0; i < nodes.length; i++) {
            listItems += '<li>' + nodes[i].firstChild.nodeValue + '</li>';
        }
        
        // Write the List Items inside the <ul>
        document.getElementById('list').innerHTML = listItems;
    }
}

request.send();
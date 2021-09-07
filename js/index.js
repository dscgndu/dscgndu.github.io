function sendmail(){    
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value;
    window.location = "mailto:dscgndu@gmail.com?subject="+subject+"&body="+message;
}
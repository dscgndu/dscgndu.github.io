function sendmail(){    
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value;
    window.location = "mailto:dscgndu@gmail.com?subject="+subject+"&body="+message;
}
function loadteam(){
    var data='';
    for(var i=0;i<memberdata.length;i++){
        data+=`<div class="mdl-cell mdl-cell--4-col teamcard">
        <img src="${memberdata[i]['picture']}" alt="" class="teampic">
        <div class="teammembername">${memberdata[i]['name']}</div>
        <div class="positionmember">${memberdata[i]['posiiton']}</div>
        <a class="mdl-button mdl-js-button mdl-button--icon colorlinkedinanchor" href="${memberdata[i]['linkedin']}" target="_blank">
            <i class="fa fa-linkedin colorlinkedin"></i>
        </a>
    </div>`;
    }
    document.getElementById('memberdatagrid').innerHTML=data;
}
loadteam();
var dt = new Date();
var e = formatDate(dt);
document.getElementById("datetime").innerHTML = e.toLocaleString();



function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var month = date.getMonth()+1;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getDate() + "/" + month + "/" + date.getFullYear() + " " + strTime;
  }
  

  
String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    if (stringToFind === stringToReplace) return this;
    var temp = this;
    var index = temp.indexOf(stringToFind);
    while (index != -1) {
       temp = temp.replace(stringToFind, stringToReplace);
       index = temp.indexOf(stringToFind);
    }
    return temp;
};
window.neatify = {
  "neatURL": function(url, _callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var js =  this.responseText;
        js = js.replaceAll("\x09", "");
        js = js.split("\n");
        for(let i = 0; i < js.length; i++) {
            js[i] = js[i].split("\/\/")[0];
        }
        js = js.join("");
        _callback(js);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
};

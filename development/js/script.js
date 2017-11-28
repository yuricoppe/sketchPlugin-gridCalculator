(function() {
"use strict";

document.addEventListener('DOMContentLoaded' , changeEventHandler);
document.getElementById('form').addEventListener('change' , changeEventHandler);

var devicesLinks = document.querySelectorAll('.device-link');

for (var i = 0; i < devicesLinks.length; i++) {
  devicesLinks[i].addEventListener('click' , changeInputForDevices);
}

function changeInputForDevices(event){
    // console.log(this.attributes.item(1).value);
    document.getElementById('full-width').value = this.attributes.item(1).value;
    changeEventHandler();
}

function changeEventHandler(event) {

  var totalWidth  = parseInt(document.getElementById('full-width').value),
      gutter      = parseInt(document.getElementById('gutter').value),
      colQtd      = parseInt(document.getElementById('columns').value),
      gutterTotal = (colQtd * 2) * gutter,
      colWidth    = (totalWidth - gutterTotal) / colQtd;
      // gutterTotalOutside = (colQtd + 1) * gutter;
      // gutterTotalInside = (colQtd - 1) * gutter;

  document.getElementById('col-width').value = colWidth;
  console.log('totalWidth: ' + totalWidth);
}


})();

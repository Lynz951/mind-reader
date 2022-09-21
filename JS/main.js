
let state = {
    views: [
    
    {headerText: "I can read your mind"},

    {headerText: "Pick a number from 01-99"}
    ]
}

function myFunction() {
  var headerText = document.getElementById("myDIV");
  if (headerText.innerHTML === `${state.views[0].headerText}`) {
    headerText.innerHTML = `${state.views[1].headerText}`;
  } 
}

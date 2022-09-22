const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");


let views= [
    {
      headerText: "I can read your mind",
      helperText: "",
    },

    {
      headerText: "Pick a number from 01-99",
      helperText: "when you have your number click next",
    },

    {
      headerText: "Add both didgits together to get a new number",
      helperText: "Ex: 14 is 1 + 4 = 5, click next to proceed",
    },

    {
      headerText: "Subtract your new number from the original number",
      helperText: "Ex: 14 - 5 = 9, click next to proceed",
    },

    {
      headerText: "0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B <br> ...",
      helperText: "Find your new number. Note the symbol beside the number",
    },

    {
      headerText: "*",
      helperText: "Your symbol is: *",
    },
    ]

const headerText = document.getElementById("headerText");
const helperText = document.getElementById("helperText");

var view = 0;

nextButton.addEventListener("click", () => {

  if (view === 0) {
    headerText.innerHTML = views[1].headerText;
    helperText.innerHTML = views[1].helperText;
  } 
    
  else if (view === 1) {
    headerText.innerHTML = views[2].headerText;
    helperText.innerHTML = views[2].helperText;
  }

  else if (view === 2) {
    headerText.innerHTML = views[3].headerText;
    helperText.innerHTML = views[3].helperText;
  }
    
  else if (view === 3) {
    headerText.innerHTML = views[4].headerText;
    helperText.innerHTML = views[4].helperText;
  }
   
  else if (view === 4) {
    headerText.innerHTML = views[5].headerText;
    helperText.innerHTML = views[5].helperText;
  }
  view += 1;
});


// resetButton.addEventListener("click", () => {
//   headerText.innerHTML = views[0].headerText;
//   helperText.textContent = views[0].helperText;
// });


// Other way

// var view = 0;
// const headerText = document.getElementById("headerText");
// const helperText = document.getElementById("helperText");

// function whatView () {
//   console.log(views[view]);
// }

// function nextView (e){
// nextButton.addEventListener("click", () => {
//   view++;
// }).
// whatView();
// }

// function reset (e){
//   resetButton.addEventListener("click", () => {
//   view = 0;
// }).
//   whatView();
// }

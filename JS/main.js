const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");

let views= [
    {
      headerText: "I can read your mind",

    },

    {
      headerText: "Pick a number from 01-99",
      helperText: "when you have your number click next",
    },

    {
      headerText: "Add both didgits together to get a new number",

    },

    {
      headerText: "Subtract your new number from the original number",

    },

    {
      headerText: "0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B <br> ...",

    },

    {
      headerText: "&",
      helperText: "Your symbol is: &",
    },
    ]

const headerText = document.getElementById("headerText");
const helperText = document.getElementById("helperText");

nextButton.addEventListener("click", () => {

  if (headerText.textContent === views[0].headerText) {
    headerText.innerHTML = views[1].headerText;
    helperText.innerHTML = views[1].helperText;
  } 
    
  else if (headerText.textContent === views[1].headerText) {
    headerText.innerHTML = views[2].headerText;

    
  else if (headerText.textContent === views[2].headerText) {
    headerText.innerHTML = views[3].headerText;

  }
    
  else if (headerText.textContent === views[3].headerText) {
    headerText.innerHTML = views[4].headerText;

  }
   
  else if (headerText.textContent === views[4].headerText) {
    headerText.innerHTML = views[5].headerText;

  }
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

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
      helperText: "Ex: 14 is 1 + 4 = 5 <br> click next to proceed",
    },

    {
      headerText: "Subtract your new number from the original number",
      helperText: "Ex: 14 - 5 = 9 <br> click next to proceed",
    },

    {
      headerText: "0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B <br> 4 - % <br> 5 - # <br> 6 - ! <br> 7 - M <br> 8 - ? <br> 9 - * <br> 10 - & <br> 11 - @ <br> 12 - $ <br> 13 - B <br> 14 - % <br> 15 - # <br> 16 - ! <br> 17 - M <br> 18 - * <br> 19 - ? <br>",
      helperText: "Find your new number. <br> Note the symbol beside the number",
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

resetButton.addEventListener("click", () => {
  if (view > 0) {
    view = 0;
      headerText.innerHTML = views[0].headerText;
      helperText.innerHTML = views[0].helperText;
    } 
  return view;
});

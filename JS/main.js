const nextButton = document.getElementById("nextButton");

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
      helperText: "Ex: 14 is 1 + 4 = 5. Click next to proceed.",
    },

    {
      headerText: "Subtract your new number from the original number",
      helperText: "Ex: 14 - 5 = 9. Click next to proceed.",
    },

    {
      headerText: "0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B <br> ...",
      helperText: "Find your new number. Note the symbol beside the number.",
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
    helperText.innerHTML = views[2].helperText;
  }
  else if (headerText.textContent === views[2].headerText) {
    headerText.innerHTML = views[3].headerText;
    helperText.innerHTML = views[3].helperText;
  }
  else if (headerText.textContent === views[3].headerText) {
    headerText.innerHTML = views[4].headerText;
    helperText.innerHTML = views[4].helperText;
  }
  else if (headerText.textContent === views[4].headerText) {
    headerText.innerHTML = views[5].headerText;
    helperText.innerHTML = views[5].helperText;
  }
});



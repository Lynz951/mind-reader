const nextButton = document.getElementById("nextButton");

let views= [
    {
      headerText: "I can read your mind",
      key: 'value',
    },
    {
      headerText: "Pick a number from 01-99",
    },

    {headerText: "Add both didgits together to get a new number"},

    {headerText: "Subtract your new number from the original number"},

    {headerText: "0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B <br> ..."},

    {headerText: "&"},
    ]

const headerText = document.getElementById("headerText");
const helpText

nextButton.addEventListener("click", () => {

  if (headerText.textContent === views[0].headerText) {
    headerText.innerHTML = views[1].headerText;
    ()
  } 
  else if (headerText.textContent === views[1].headerText) {
    headerText.innerHTML = views[2].headerText;
    ()
  }
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



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

    
      // List numbers 01-99
      // if int % 9 === 0  assign symbol inserty
      // if int % 9 != assign random symbol insert x

      // {
      // headerText: "0 - :insertx: <br> 1 - :insertx: <br> 2 - :insertx: <br> 3 - :insertx: <br> 4 - :insertx: <br> 5 - :insertx: <br> 6 - :insertx: <br> 7 - :insertx: <br> 8 - :insertx: <br> 9 - :inserty: <br> 10 - :insertx: <br> 11 - :insertx: <br> 12 - :insertx: <br> 13 - :insertx: <br> 14 - :insertx: <br> 15 - :insertx: <br> 16 - :insertx: <br> 17 - :insertx: <br> 18 - :inserty: <br> 19 - :insertx: <br> 20 - :insertx: <br> 21 - :insertx: <br> 22 - :insertx: <br> 23 - :insertx: <br> 24 - :insertx: <br> 25 - :insertx: <br> 26 - :insertx: <br> 27 - :inserty: <br> 28 - :insertx: <br> 29 - :insertx: <br> 30 - :insertx: <br> 31 - :insertx: <br> 32 - :insertx: <br> 33 - :insertx: <br> 34 - :insertx: <br> 35 - :insertx: <br> 36 - :inserty: <br> 37 - :insertx: <br> 38 - :insertx: <br> 39 - :insertx: <br> 40 - :insertx: <br> 41 - :insertx: <br> 42 - :insertx: <br> 43 - :insertx: <br> 44 - :insertx: <br> 45 - :inserty: <br> 46 - :insertx: <br> 47 - :insertx: <br> 48 - :insertx: <br> 49 - :insertx: <br> 50 - :insertx: <br> 51 - :insertx: <br> 52 - :insertx: <br> 53 - :insertx: <br> 54 - :inserty: <br> 55 - :insertx: <br> 56 - :insertx: <br> 57 - :insertx: <br> 58 - :insertx: <br> 59 - :insertx: <br> 60 - :insertx: <br> 61 - :insertx: <br> 62 - :insertx: <br> 63 - :inserty: <br> 64- :insertx: <br> 65 - :insertx: <br> 66 - :insertx: <br> 67 - :insertx: <br> 68 - :insertx: <br> 69 - :insertx: <br> 70 - :insertx: <br> 71 - :insertx: <br> 72 - :inserty: <br> 73 - :insertx: <br> 74 - :insertx: <br> 75 - :insertx: <br> 76 - :insertx: <br> 77 - :insertx: <br> 78 - :insertx: <br> 79 - :insertx: <br> 80 - :insertx: <br> 81 - :inserty: <br> 82 - :insertx: <br> 83 - :insertx: <br> 84 - :insertx: <br> 85 - :insertx: <br> 86 - :insertx: <br> 87 - :insertx: <br> 88 - :insertx: <br> 89 - :insertx: <br> 90 - :inserty: <br> 91 - :insertx: <br> 92 - :insertx: <br> 93 - :insertx: <br> 94 - :insertx: <br> 95 - :insertx: <br> 96 - :insertx: <br> 97 - :insertx: <br> 98 - :insertx: <br> 99 - :inserty: <br>",
      //}

    {
       headerText: "0 - :inserty: <br> 1 - @ <br> 2 - $ <br> 3 - B <br> 4 - % <br> 5 - # <br> 6 - ! <br> 7 - M <br> 8 - ? <br> 9 - :inserty: <br> 10 - & <br> 11 - @ <br> 12 - $ <br> 13 - B <br> 14 - % <br> 15 - # <br> 16 - ! <br> 17 - M <br> 18 - :inserty: <br> 19 - ? <br> 20 - & <br> 21 - @ <br> 22 - $ <br> 23 - B <br> 24 - % <br> 25 - # <br> 26 - ! <br> 27 - :inserty: <br> 28 - M <br> 29 - ? <br> 30 - & <br> 31 - @ <br> 32 - $ <br> 33 - B <br> 34 - % <br> 35 - # <br> 36 - :inserty: <br> 37 - ! <br> 38 - M <br> 39 - ? <br> 40 - & <br> 41 - @ <br> 42 - $ <br> 43 - B <br> 44 - % <br> 45 - :inserty: <br> 46 - ! <br> 47 - M <br> 48 - ? <br> 49 - $ <br> 50 - B <br> 51 - % <br> 52 - # <br> 53 - ! <br> 54 - :inserty: <br> 55 - M <br> 56 - ? <br> 57 - & <br> 58 - @ <br> 59 - $ <br> 60 - B <br> 61 - % <br> 62 - # <br> 63 - :inserty: <br> 64- ! <br> 65 - M <br> 66 - ? <br> 67 - & <br> 68 - @ <br> 69 - $ <br> 70 - B <br> 71 - % <br> 72 - :inserty: <br> 73 - # <br> 74 - ! <br> 75 - M <br> 76 - ? <br> 77 - & <br> 78 - @ <br> 79 - $ <br> 80 - B <br> 81 - :inserty: <br> 82 - % <br> 83 - # <br> 84 - ! <br> 85 - M <br> 86 - ? <br> 87 - & <br> 88 - @ <br> 89 - $ <br> 90 - :inserty: <br> 91 - B <br> 92 - % <br> 93 - # <br> 94 - ! <br> 95 - M <br> 96 - ? <br> 97 - & <br> 98 - @ <br> 99 - :inserty: <br>",
       helperText: "Find your new number. <br> Note the symbol beside the number",
    },

    {
      headerText: ":inserty:",
      helperText: "Your symbol is: :inserty:",
    },
    ]

const headerText = document.getElementById("headerText");
const helperText = document.getElementById("helperText");
const randomize = document.getElementById('randomize');

var view = 0;

nextButton.addEventListener("click", () => {

  if (view === 0) {
    headerText.innerHTML = views[1].headerText;
    helperText.innerHTML = views[1].helperText;
    resetButton.classList.remove('d-none');
    resetButton.classList.add('d-block');
    randomize.classList.remove('d-none');
    randomize.classList.add('d-block');
    
  } 
    
  else if (view === 1) {
    headerText.innerHTML = views[2].headerText;
    helperText.innerHTML = views[2].helperText;
    randomize.classList.remove('d-none');
    randomize.classList.add('d-block');
  }

  else if (view === 2) {
    headerText.innerHTML = views[3].headerText;
    helperText.innerHTML = views[3].helperText;
    randomize.classList.remove('d-none');
    randomize.classList.add('d-block');
  }
    
  else if (view === 3) {
    headerText.innerHTML = views[4].headerText;
    helperText.innerHTML = views[4].helperText;
    result();
  }
   
  else if (view === 4) {
    headerText.innerHTML = views[5].headerText.replaceAll(':inserty:', yItem);
    helperText.innerHTML = views[5].helperText.replaceAll(':inserty:', yItem);
    randomize.classList.remove('d-none');
    randomize.classList.add('d-block');
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

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let insertx = ["&", "@", "$", "%", "#", "!", "?"];
let inserty = [":)", "&", "@", "$", "%", "#", "!", "?"];

randomize.addEventListener('click', result);

function result() {
 
  // let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);

  let newSymbols = views[4].headerText;
  newSymbols = newSymbols.replaceAll(':inserty:', yItem);

  headerText.innerHTML = newSymbols;
}
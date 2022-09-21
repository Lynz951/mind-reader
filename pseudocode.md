Mind Reader

About:
- A mind reader asks a user to choose a number between 01-99 and then guides them through steps to guess their number
- The steps always lead you to a number that is a factor of 9
- Then every number between 1-100 is asigned a symbol
- All factors of 9 are assigned the same symbol
- The last view shows the symbol assigned to the factors of 9 and asks if it was the symbol next to your number (it always is)

INIT: Create my variables

1. View number (integer) 

    2. Header text

    3. Next/reveal button (event listeners)
        properties: clicked or unclicked

    4. Example text

    5. Helper text

    6. Reset/Go button (event listeners)
        properties: clicked or unclicked

7. Symbols
    properties: randomized, answer symbol


   

FUNCTIONALITY: 

FUNCTION init:
    let viewNumber = 0;

FUNCTION updateView:

FUNCTION randomizeSymbols:
    randomize list of 9
    new list
    loop from 0-100 to create an element in JS
    if i % 9 === 0 assign answerSymbol
    if i % 9 != 0 assign randomSymbol

FUNCTION nextView:
    increment view number by 1

FUNCTION reset:
    set viewNmber = 0


Ideas:

let state = {
    views: [{text: key}, {text:key}, {text: key}]
    currentView: 0
    symbols:
    answer:
    ]
}

state.views[state.currentView]
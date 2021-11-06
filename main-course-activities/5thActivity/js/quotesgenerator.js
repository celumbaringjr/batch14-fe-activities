const quotesContainer = document.getElementById("quotes-content");

var quotes = [
  "“Love For All, Hatred For None.” ― Khalifatul Masih III",
  "“Change the world by being yourself.” ― Amy Poehler",
  "“Every moment is a fresh beginning.” ― T.S Eliot",
  "“Never regret anything that made you smile.” ― Mark Twain",
  "“Die with memories, not dreams.” ― Unknown",
  "“Aspire to inspire before we expire.” ― Unknown",
  "“Everything you can imagine is real.” ― Pablo Picasso",
  "“Simplicity is the ultimate sophistication.” ― Leonardo da Vinci",
  "“Whatever you do, do it well.” ― Walt Disney",
  "“What we think, we become.” ― Buddha",
  "“None but ourselves can free our minds.” ― Bob Marley",
];
/* var quotes = [
  '"One"',
  '"Two"',
  '"Three"',
  '"Four"',
  '"Five"',
  '"Six"',
  '"Seven"',
  '"Eight"',
  '"Nine"',
  '"Ten"',
]; */

function surpriseQuote() {
  // storing our array as a string
  localStorage.setItem("randomquotes", JSON.stringify(quotes));
  // retrieving our data and converting it back into an array
  var retrievedqoutes = localStorage.getItem("randomquotes");
  var quotesGen = JSON.parse(retrievedqoutes);
  //Calling Math.floor() with Math.random() passes as a parameter
  //If we console log our randomNumber at this state, it will always return 0. This is because Math.random() will always be a decimal between 0 and 1
  var randomQuote = Math.floor(Math.random() * quotesGen.length);
  //we are using the quotes.length method to always get the current length of our array.
  quotesContainer.innerHTML = quotes[randomQuote];
}

document
  .getElementById("add-quote")
  .addEventListener("click", function displayData() {
    var quoteDisplay = document.getElementById("quotes-content");
    var textValue = document.getElementById("input-quote").value;
    var textValueAfter = document.getElementById("input-quote");

    /* Change the inner HTML of your div. */
    quoteDisplay.innerHTML = textValue;
    quotes.push(textValue);
    textValueAfter.value = "";
  });

/* let start = () => {
  surpriseQuote();
};
 */

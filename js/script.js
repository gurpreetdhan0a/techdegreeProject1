/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Setting the "quote-box" div from html to quoteBox
var quoteBox=document.getElementById("quote-box");

//creating an array of 5 quotes
var quotes = [
  {
    quote:"That's the thing about books.They let you travel without moving your feet.",
    author:"JHUMOPA LAHIRI",
    tags:"Humor"
  },
  {
    quote:"The question is'nt who is going to let me;it's who is going to stop me.",
    author:"Ayan Rand",
    tags:"Politics, Humor"
  },
  {
    quote:"Be the change that you wish to see in the world",
    author:"Mahatma Gandhi",
    citation:"publication",
    year:1940,
    tags:"Humor"
  },
  {
    quote:"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    author:"Stephen King"
  },
  {
    quote:"Tears are words that need to be written.",
    author:"Paulo Coelho"
  }
]



/***
 * `getRandomQuote` function
***/
//Getting random index from the quotes array
function getRandomQuote()
{
  var randomNumber=(Math.floor(Math.random() * quotes.length));
  return quotes[randomNumber];
}

//generating a random color and setting its value to change background color
function getRandomColor()
{
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return document.body.style.backgroundColor = randomColor;
}



/***
 * `printQuote` function
***/
function printQuote()
{

  var randomQuote=getRandomQuote();

  var emptyString='';

  emptyString = '<p class="quote">'+randomQuote.quote+'</p>'
  emptyString += '<p class="source">'+randomQuote.author;

  // checking if any quote has citation property
  if (randomQuote.citation)
  {
    emptyString += '<span class="citation">' + randomQuote.citation + '</span>'
  
  }

  // checking if any quote has year property
  if (randomQuote.year)
  {
    emptyString += '<span class="year">' + randomQuote.year + '</span>'

  }

  if (randomQuote.tags)
  {
    emptyString += '<span class="tags">' + randomQuote.tags + '</span>'
  }

  emptyString+='</p>';
  quoteBox.innerHTML=emptyString;
  return emptyString;
  

}

//function to refersh the page every 20 seconds
function autoRefresh(){
  setInterval(function()
  {
    printQuote();getRandomColor();},20000);
  }
  
  //calling the refresh function
  autoRefresh();

  //adding event listener to the button for changing background every time its clicked
  
  document.getElementById('load-quote').addEventListener("click", getRandomColor, false);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false );


/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// This array stores quote objects. 
// Each object has a quote and source property.
// Each object may or may not contain a citation or year property. 
var quotes = [
  {
    quote: `Do not go gentle into that good night,
            Old age should burn and rave at close of day;
            Rage, rage against the dying of the light.`,
    source: "Dylan Thomas",
    citation: "Do Not Go Gentle Into That Good Night",
    year: "1951",
  },
  {
    quote: `Is Pious pious 'cause God loves pious?
            Socrates asks, "Whose bias do y'all seek?`,
    source: "Jay-Z",
    citation: "No Church in The Wild",
    year: "2011"
  },
  {
    quote:  `I sometimes have nightmares about a world of echoes 
            in which there are only echoes, and echoes of echoes, 
            and echoes of echoes of echoes—reverberating forever down 
            the empty corridors of my mind.`,
    source: "Alan Watts",
    citation: "n.d.",
    year: "Individual and the World"
  },
  {
    quote:  `The nitrogen in our DNA, the calcium in our teeth, 
            the iron in our blood, the carbon in our apple pies were 
            made in the interiors of collapsing stars. We are made of starstuff.`,
    source: "Carl Sagan",
    citation: "Cosmos",
    year: "1980"
  },
  {
    quote: `What can be asserted without evidence can also be dismissed without evidence.`,
    source: "Christopher Hitchens",
    citation: "Slate Magazine",
    year: "2003"
  },
  {
    quote: `And these children that you spit on
            As they try to change their worlds
            Are immune to your consultations
            They're quite aware of what they're goin' through...`,
    source: "David Bowie",
    citation: "Changes",
    year: "1972"
  },
  {
    quote: `He who fights with monsters should look to it that he 
            himself does not become a monster. And if you gaze long into an abyss, 
            the abyss also gazes into you`,
    source: "Friedrich Nietzsche",
    citation: "Beyond Good and Evil",
    year: "1886"

  }
];



// This function returns a random quote object
// from the quote object lsit. 
function getRandomQuote(){
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


// This function prints a random quote to screen.
function printQuote(){
  const currentQuote = getRandomQuote();
  let html = `<p class="quote">`;
  html += currentQuote.quote + '<p>';
  html += `<p class="source">${currentQuote.source}`;
  if (currentQuote.hasOwnProperty('citation')){
    html += `<span class="citation">${currentQuote.citation}</span>`;
  }

  if (currentQuote.hasOwnProperty('year')){
    html += `<span class="year">${currentQuote.year}</span>`;
  }
  html += "</p>";
  document.querySelector('.quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
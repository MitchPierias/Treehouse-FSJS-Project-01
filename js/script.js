/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Auto-refresh Duration (4 seconds)
const TIMER_DURATION_MS = 4000;

const quotes = [
  {
    quote:'Talk is cheap. Show me the code.',
    source:' Linus Torvalds ',
    citation:'http://torvalds-family.blogspot.com/',
    tags:['humor','linux','programming']
  }, {
    quote:'Programs must be written for people to read, and only incidentally for machines to execute.',
    source:' Harold Abelson',
    citation:'Structure and Interpretation of Computer Programs',
    tags:['1984','programming','maintenance'],
    year:1984
  }, {
    quote:'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    source:'John Woods',
    tags:['programming']
  }, {
    quote:'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    source:'Rick Cook',
    citation:'The Wizardry Compiled',
    tags:['humor','programming']
  }, {
    quote:'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
    source:'Muhammad Waseem ',
    tags:['coding','developer','frustrated','program','programming']
  }
];

let interval;

/**
 * Get Random Quote
 * @description Retrieves a quote at a random index
 * @param {array} arr - (optional) - Array of quote objects
 */
function getRandomQuote(arr=quotes) {
  // Handle invalid quotes
  if (arr.length <= 0) throw new Error("No values found");
  // Determine quote at a random index
  const maxIndex = arr.length - 1;
  const randomIndex = Math.round(Math.random() * maxIndex);
  return arr[randomIndex];
}

/**
 * Get Random Color
 * @description Derives a random color by seperately generating values between 0-255 for red, green and blue channels.
 * @returns {array} Array of color values
 */
function getRandomColor() {
  // Fill array with 3 random 8bit values
  const rgb = [];
  for (let i=0; i<3; i++) rgb.push(Math.round(Math.random() * 255));
  return rgb;
}

/**
 * Shuffle Primary Color
 * @description Updates primary color elements with a randomly generated color
 */
function shufflePrimaryColor() {
  // Generate random RGB color array
  const randomColor = getRandomColor();
  // Update `background-color` with constructed string
  document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${randomColor.join(',')})`;
  document.getElementById('loadQuote').style.backgroundColor = `rgb(${randomColor.join(',')})`; // Given the provided CSS... but could be solved with better CSS
}

/**
 * Print Quote
 * @description Handles timer, prints a random quote and shuffles the primary color
 */
function printQuote() {
  // Reset auto-refresh timer
  if (interval) clearInterval(interval);
  interval = setTimeout(printQuote, TIMER_DURATION_MS);
  // Fetch random quote
  const selected = getRandomQuote(quotes);
  // Construct HTML string
  let html = "";
  html += `<p class="quote">${selected.quote}</p>`;
  html += `<p class="source">${selected.source}`;
  if (selected.citation) html += `<span class="citation">${selected.citation}</span>`;
  if (selected.year) html += `<span class="year">${selected.year}</span>`
  html += `</p></p>`;
  // Update the quote and color elements
  document.getElementById('quote-box').innerHTML = html;
  shufflePrimaryColor();
}

// Attach and execute functions
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
printQuote();
# Treehouse Fullstack Javascript Tech Degree
## Project 1 - A Random Quote Generator

### Project Instructions
1. Multibrowser support
2. Each `quote` object in the `quotes` array should have the following properties;
    - `quote` - a string containing the text of the quote that will be displayed on the page.
    - `source` - a string containing the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb” or "Anonymous".
    - `citation` - (optional) - a string identifying where the quote comes from, like a speech, publication or a movie. If there is no known publication, do not include - this property on the object.
    - `year` - (optional) - a number identifying the year of the quote. If there is no known year, then do not include this property on the object.
3. Create the `getRandomQuote` function
    - Name the function `getRandomQuote`.
    - The function will be invoked with an `array` of quotes.
    - Return a random quote object from the `quotes` array.
4. Create the `printQuote` function
    - Call `getRandomQuote`.
    - Build a HTML string to inject into the `quote-box` element.
5. Add code comments.

### Extra Curricular Features
1. Aditional properties on the `quote` object;
    - Included quote tags
2. Randomized background color;
    - A random color is derived by generating values between 0-255 for red, green and blue channels.
3. Auto-refresh quotes
    - A self instantiating timer automatically updates the quote after a set duration.
    - Manually refreshing resets the timer period.
    - Added CSS transitions for aesthetic `background-color` changes introduced by the `shufflePrimaryColor()` function.
    - Set duration as 4 seconds by default to visualize example
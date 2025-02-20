//Quotes Generator
var quotesArray = [
  "Honesty is the first chapter in the book of wisdom. — Thomas Jefferson",
  "I like the dreams of the future better than the history of the past. — Thomas Jefferson",
  "The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants — Thomas Jefferson",
  "In matters of style, swim with the current; in matters of principle, stand like a rock.  — Thomas Jefferson",
  "Do you want to know who you are? Don’t ask. Act! Action will delineate and define you. — Thomas Jefferson",
  "When the people fear the government, there is tyranny; when the government fears the people, there is liberty. — Thomas Jefferson",
  "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude. — Thomas Jefferson",
];
var randomNumber = Math.floor(Math.random() * quotesArray.length);
document.getElementById("quotes").textContent =
  "“" +
  quotesArray[randomNumber].split("—")[0] +
  "” — " +
  quotesArray[randomNumber].split("—")[1];
//console.log(quotesArray[randomNumber].split('—')[0])

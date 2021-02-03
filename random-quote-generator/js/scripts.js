const quoteContainer = document.getElementById('primary-quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//Get Quote From API
async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //Proxy URL to avoid CORS error
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();

    //Credit Author as Anonymous if name isn't received in API.
    if (data.quoteAuthor === ''){
      authorText.innerText = 'Anonymous';
    } else{
      authorText.innerText = data.quoteAuthor; 
    }

    //Reduce Font Size for long quotes > 120 chars in length
    if (data.quoteText.length > 120){
      quoteText.classList.add('long-quote');
    }else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = data.quoteText;//1st quoteText is Userdefined, the 2nd is from API
  } catch (error) {
    getQuote(); //Added to refetch in case of API Error.

  }
}

//Tweet Code
function tweetQuote(){
  const quote = quoteText.innerText;  //Userdefined quoteText
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuote();
const quoteContainer = document.getElementById('primary-quote-container');
const quoteLeft = document.getElementById('quote-left');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('idLoader');

//Detect Mobile Browser
const isMobile = function() {
    const match = window.matchMedia('(pointer:coarse)');
    return (match && match.matches);
};


//Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function loading_complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

//Get Quote From API
async function getQuote() {
    loading();
    const proxyUrl = 'https://shrouded-inlet-14671.herokuapp.com/'; //Proxy URL to avoid CORS error
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        //Credit Author as Anonymous if name isn't received in API.
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Anonymous';
        } else {
            authorText.innerText = data.quoteAuthor;
        }

        //Reduce Font Size for long quotes > 120 chars in length
        if (isMobile()) {
            if (data.quoteText.length > 50) {
                quoteLeft.classList.add('fa-quote-left-long-mobile');
                quoteText.classList.add('quote-text-long-mobile');
                authorText.classList.add('quote-author-long-mobile');
            } else {
                quoteLeft.classList.remove('fa-quote-left-long-mobile');
                quoteText.classList.remove('quote-text-long-mobile');
                authorText.classList.remove('quote-author-long-mobile');
            }
        } else {
            if (data.quoteText.length > 120) {
                quoteText.classList.add('long-quote');
            } else {
                quoteText.classList.remove('long-quote');
            }
        }

        quoteText.innerText = data.quoteText; //1st quoteText is Userdefined, the 2nd is from API

        //Stop Loader and Show Quote
        loading_complete();
    } catch (error) {
        getQuote(); //Added to refetch in case of API Error.
    }
}

//Tweet Code
function tweetQuote() {
    const quote = quoteText.innerText; //Userdefined quoteText
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuote();
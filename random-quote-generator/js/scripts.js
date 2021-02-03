//Get Quote From API
async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //Proxy URL to avoid CORS error
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote(); //Added to refetch in case of API Error.
    console.log('whoops, no quote',error);
  }
}


//On Load
getQuote();
const App = () => {
  

  const [quotes, setQuotes] = React.useState([]);
  const [rQuote, setRquote] = React.useState("");

  React.useEffect (() => {
    async function fetchData (){
      const response = await fetch ('https://type.fit/api/quotes');
      const data = await response.json();
      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length );
      setRquote(data[randomIndex])
    }
    fetchData();
  }, [])

  const getNextQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length );
      setRquote(quotes[randomIndex])
  }

  return (
    <div className= "container pt-5">
      <div id="quote-box" className="mb-5">
          <div className="card">
            <div className="card-header">Quotes</div>
            <div className="card-body">
              {rQuote ? (
                <>
                <p id="text" className="card-text">"{rQuote.text}"</p>
                <h6 id="author" className="card-title">-{rQuote.author || "*Author unknown*"}</h6>
                </>
              ) : (
                <h3> Hold a second! </h3>) }
                <div className="row">
                  <button id="new-quote" className="btn btn-primary ml-4 mt-2 w-25" onClick={getNextQuote}>Next Quote</button>
                  <a target="_blank" id="tweet-quote" href="https://twitter.com/intent/tweet" className="btn btn-warning">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.tumblr.com/" className="btn btn-warning">
                  <i class="fa fa-tumblr" aria-hidden="true"></i>
                  </a>
                </div>
            </div>
          </div>
      </div>
    </div>
    
  );
}


ReactDOM.render(<App/>, document.getElementById('app'))
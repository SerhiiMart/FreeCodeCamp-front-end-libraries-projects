const App = () => {
  

  const [quotes, setQuotes] = React.useState([]);
  const [rQuote, setRquote] = React.useState("");
  const [color, setColor] = React.useState("#8A2BE2");

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
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    

    let randomIndex = Math.floor(Math.random() * quotes.length );
    let randomColor = Math.floor(Math.random() * colors.length );
      setRquote(quotes[randomIndex])
      setColor(colors[randomColor])
  }

  return (
  <section id="App" style={{backgroundColor: color, minHeight: "100vh"}}>
    <div id="quote-box" className= "container pt-5">
      <div className="mb-5">
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
                  <a target="_blank" id="tweet-quote" href="https://twitter.com/intent/tweet" className="btn btn-warning ">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" href="https://www.tumblr.com/" className="btn btn-warning ">
                  <i class="fa fa-tumblr" aria-hidden="true"></i>
                  </a>
                </div>
            </div>
          </div>
      </div>
    </div>
    </section>
  );
}


ReactDOM.render(<App/>, document.getElementById('app'))
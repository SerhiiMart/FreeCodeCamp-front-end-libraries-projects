const App = () => {
  

  const [quotes, setQuotes] = React.useState('');
  const [rquotes, setRquotes] = React.useState('');

  React.useEffect(() => {
    async function fetchData (){
      const response = await fetch ('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    }
  }, [input])


  return (
    <div>Something</div>
  );
}


ReactDOM.render(<App/>, document.getElementById('app'))
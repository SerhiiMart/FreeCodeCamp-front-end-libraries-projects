const Calculator = () => {
  const [declaration, setDeclaration] = React.useState('');
  const [result, setResult] = React.useState(0);
  const disRes = (symbol) => {
    setDeclaration(prev => prev + symbol);
    if (declaration[declaration.length-1] == "=") {
      (/[1-9.]/.test(symbol)) ? setDeclaration(symbol) : setDeclaration(result + symbol);
    }
  };
  const equalizer = () => {
    setResult(eval(declaration));
    setDeclaration((prev) => prev + "=");
  }
  const clearAll = () => {
    setDeclaration('');
    setResult(0);
  } 
  const clear = () => { 
    setDeclaration((prev) => prev.split("").slice(0, prev.length-1).join(""));
    setResult(0);
  } 

  return (
    <>
    <h1 className="text-center mg-3"> React JavaScript Calculator </h1>
    <main className="container">
      <div className="system">
        <div id="display" className="display">
          <input type="text" id="input" value={declaration} placeholder="0" readOnly />
          <p >{result}</p>
        </div>
        <div onClick={clearAll} id="clear" className="buttonsCal red btn btn-warning">AC</div>
        <div onClick={clear} id="clearlast" className="buttonsCal red btn btn-warning" >C</div>
        <div onClick={() => disRes("/")} id="divide" className="buttonsCal btn btn-success">/</div>
        <div onClick={() => disRes("*")} id="multiply" className="buttonsCal btn btn-success">*</div>
        <div onClick={() => disRes("7")} id="seven" className="buttonsCal num btn btn-secondary">7</div>
        <div onClick={() => disRes("8")} id="eight" className="buttonsCal num btn btn-secondary">8</div>
        <div onClick={() => disRes("9")} id="nine" className="buttonsCal num btn btn-secondary">9</div>
        <div onClick={() => disRes("-")} id="subtract" className="buttonsCal btn btn-success">-</div>
        <div onClick={() => disRes("4")} id="four" className="buttonsCal num btn btn-secondary">4</div>
        <div onClick={() => disRes("5")} id="five" className="buttonsCal num btn btn-secondary">5</div>
        <div onClick={() => disRes("6")} id="six" className="buttonsCal num btn btn-secondary">6</div>
        <div onClick={() => disRes("+")} id="add" className="buttonsCal btn btn-success">+</div>
        <div onClick={() => disRes("1")} id="one" className="buttonsCal num btn btn-secondary">1</div>
        <div onClick={() => disRes("2")} id="two" className="buttonsCal num btn btn-secondary">2</div>
        <div onClick={() => disRes("3")} id="three" className="buttonsCal num btn btn-secondary">3</div>
        <div onClick={equalizer} id="equals" className="buttonsCal green btn btn-info">=</div>
        <div onClick={() => disRes("0")} id="zero" className="buttonsCal num btn btn-secondary">0</div>
        <div onClick={() => disRes(".")} id="decimal" className="buttonsCal num btn btn-secondary">.</div>

      </div>
    </main>
    </>
  );
}


ReactDOM.render(<Calculator />, document.getElementById('app'));
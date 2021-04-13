const App = () => {
  const [declaration, setDeclaration] = React.useState('');
  const [result, setResult] = React.useState(0);
  const disRes = (x) => {
    setDeclaration(prev => prev + x);
  };
  const equalizer = () => {
    setResult(eval(declaration))
  }
  const clearAll = () => {
    setDeclaration('');
    setResult(0);
  } 
  const clear = () => { 
    setDeclaration(prev => prev.split("").slice(0, prev.length-1).join(""));
    setResult(0);
  } 

  return (
    <>
    <h1 className="text-center mg-3"> React JavaScript Calculator </h1>
    <main className="container">
      <div class="system">
        <div id="display">
          <input type="text" id="input" value={declaration} placeholder="0" disable />
          <p>{result}</p>
        </div>
        <div onClick={clearAll} id="ac" class="buttonsCal red btn btn-warning">AC</div>
        <div onClick={clear} id="clear" class="buttonsCal red btn btn-warning" >C</div>
        <div onClick={() => disRes("/")} id="divide" class="buttonsCal btn btn-success">/</div>
        <div onClick={() => disRes("x")} id="multiply" class="buttonsCal btn btn-success">*</div>
        <div onClick={() => disRes("7")} id="seven" class="buttonsCal num btn btn-secondary">7</div>
        <div onClick={() => disRes("8")} id="eight" class="buttonsCal num btn btn-secondary">8</div>
        <div onClick={() => disRes("9")} id="nine" class="buttonsCal num btn btn-secondary">9</div>
        <div onClick={() => disRes("-")} id="subtract" class="buttonsCal btn btn-success">-</div>
        <div onClick={() => disRes("4")} id="four" class="buttonsCal num btn btn-secondary">4</div>
        <div onClick={() => disRes("5")} id="five" class="buttonsCal num btn btn-secondary">5</div>
        <div onClick={() => disRes("6")} id="six" class="buttonsCal num btn btn-secondary">6</div>
        <div onClick={() => disRes("*")} id="add" class="buttonsCal btn btn-success">+</div>
        <div onClick={() => disRes("1")} id="one" class="buttonsCal num btn btn-secondary">1</div>
        <div onClick={() => disRes("2")} id="two" class="buttonsCal num btn btn-secondary">2</div>
        <div onClick={() => disRes("3")} id="three" class="buttonsCal num btn btn-secondary">3</div>
        <div onClick={equalizer} id="equals" class="buttonsCal green btn btn-info">=</div>
        <div onClick={() => disRes("0")} id="zero" class="buttonsCal num btn btn-secondary">0</div>
        <div onClick={() => disRes(".")} id="decimal" class="buttonsCal num btn btn-secondary">.</div>

      </div>
    </main>
    </>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
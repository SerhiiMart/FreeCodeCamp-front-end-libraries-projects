const App = () => {


  return (
    <>
    <h1 className="text-center mg-3"> React JavaScript Calculator </h1>
    <main className="container">
      <div class="system">
        <div id="display"></div>
        <div id="ac" class="buttonsCal">AC</div>
        <div id="clear" class="buttonsCal">C</div>
        <div id="divide" class="buttonsCal">/</div>
        <div id="multiply" class="buttonsCal">*</div>
        <div id="seven" class="buttonsCal">7</div>
        <div id="eight" class="buttonsCal">8</div>
        <div id="nine" class="buttonsCal">9</div>
        <div id="subtract" class="buttonsCal">-</div>
        <div id="four" class="buttonsCal">4</div>
        <div id="five" class="buttonsCal">5</div>
        <div id="six" class="buttonsCal">6</div>
        <div id="add" class="buttonsCal">+</div>
        <div id="one" class="buttonsCal">1</div>
        <div id="two" class="buttonsCal">2</div>
        <div id="three" class="buttonsCal">3</div>
        <div id="equals" class="buttonsCal">=</div>
        <div id="zero" class="buttonsCal">0</div>
        <div id="decimal" class="buttonsCal">.</div>

      </div>
    </main>
    </>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
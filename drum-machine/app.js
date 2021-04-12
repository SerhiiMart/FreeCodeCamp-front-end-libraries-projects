const audioDrum = [

];

const Drum = ({e}) => { 
  return <button className="btn btn-dark p-6 m-4"></button>
} 

const App = () => {
  return (
    <>
      <main id="drum-machine" className="bg-primary text-white min-vh-100">
        <div className="text-center"> 
        <h2 className=""> Drum Machine </h2>
        {audioDrum.map(e => (
          <Drum key={e.id} e={e} />
        ))}
        </div> 
      </main>
    </>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
const audioDrum = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

function Drum({e, volume, setRecording}) {
  const [active, setActive] = React.useState(false);
  
  React.useEffect(() => {
    document.addEventListener("keydown", buttonHandler);
    return () => {
      document.removeEventListener("keydown", buttonHandler)
    };
  }, []);

  const buttonHandler = (event) => {
    if(event.keyCode === e.keyCode) {
      playDrum();
    }
  };
  const playDrum = () => {
    const audioTag = document.getElementById(e.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 500);
    audioTag.currentTime = 0;
    audioTag.volume = volume;
    setRecording(prev => prev + e.keyTrigger + " ");
    audioTag.play();
  };

  return (<button id={e.id} className={`btn btn-dark drum-pad text-center p-3 m-3 ${active && "btn-outline-danger"}`} onClick={playDrum}><audio className="clip drum-pad" id={e.keyTrigger} src={e.url} />
  {e.keyTrigger}
  </button>)
}

const App = () => {
    const [volume, setVolume] = React.useState(1); 
    const [recording, setRecording] = React.useState(""); 
    const [speed, setSpeed] = React.useState(0.4);
    const playRecord = () => {
      let musicArr = recording.split(" ");
      let index = 0;
      const interval = setInterval(() => {
        const audioTag = document.getElementById(musicArr[index]);
        audioTag.currentTime = 0;
        audioTag.volume = volume;
        index++;
        audioTag.play();
      }, speed * 600);
      setTimeout(() => clearInterval(interval), 600 * speed * musicArr.length - 1);
    }
    return (
      <main id="drum-machine" className="bg-secondary text-indigo min-vh-100">
        <div id="display" className="text-center"> 
        <h2 className="header"> React Drum Machine </h2>
        <br />
        <h5 className="text-red">Volume</h5>
        <input className="w-40" type="range" onChange={(event) => setVolume(event.target.value)} id="" step="0.1" value={volume} max="1" min="0" />
        <br />
        <h5 className="text-red">Speed</h5>
        <input className="w-40" type="range" onChange={(event) => setSpeed(event.target.value)} id="" step="0.1" value={speed} max="1.5" min="0.1" />
        <br />
        <section id="buttons">
        {audioDrum.map(e => (
          <Drum  key={e.id}  e={e} volume={volume} setRecording={setRecording} />
        ))}
        </section>
        <br />
        <h4>{recording}</h4>
        {recording && (
        <>
        <button onClick={playRecord} class="btn btn-success mg-1">Play</button>
        <button onClick={( () => setRecording(''))} class="btn btn-warning mg-1">Clear</button>
        <br />
       
        </>
        )}
        </div> 
      </main>
   );
  }

ReactDOM.render(<App />, document.getElementById('app'));
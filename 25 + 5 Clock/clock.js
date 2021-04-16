
function Clock () {
  const soundS = "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg";
  const [fortime, setFortime] = React.useState(25 * 60);
  const [stopTime, setStopTime] = React.useState(5 * 60);
  const [sessionTime, setSessionTime] = React.useState(25 * 60);
  const [timeron, setTimeron] = React.useState(false);
  const [onStop, setOnStop]= React.useState(false);
  // const [whistle, setShistle] = React.useState(new Audio('./whistle.mp3'));

  const playWhistle = () => {
    player.currentTime = 0;
    player.play();
  };

  let player = React.useRef(null);

  React.useEffect(() => {
    if (fortime <= 0) {
      setOnStop(true);
      playWhistle();
    } else if (!timeron && fortime === stopTime) {
      setOnStop(false);
    }
  }, [fortime, onStop, timeron, stopTime, sessionTime]);

  const formatDisplayTime = (time) => {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    return (
      (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs)
    );
  };

  const timeFormat = (time) => {
    return time / 60;
  };

  const changeTime = (num, type) => {
    if (type === "break") { 
      if ((stopTime <= 60 && num < 0) || stopTime >= 60 * 60) {
        return;
      }
      setStopTime((prev) => prev + num);
      
    } else {
      if ((sessionTime <= 60 && num < 0) || sessionTime >= 60 * 60){
        return;
      }
      setSessionTime((prev) => prev + num);
      if (!timeron) {
        setFortime(sessionTime + num);
      }
    };
  };

  const timeControl = () => {
    let sec = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + sec;
    let onStopVar = onStop;
    if (!timeron) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setFortime((prev) => {
            if (prev <= 0 && !onStopVar) {
              onStopVar = true;
              setOnStop(true);
              return stopTime;
            } else if (prev <= 0 && onStopVar) {
              onStopVar = false;
              setOnStop(false);
              return sessionTime;
            }
            return prev - 1;
          });
          nextDate += sec;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem("interval-id", interval);
    }
    if(timeron) { 
      clearInterval(localStorage.getItem("interval-id")); 
    }
    setTimeron(!timeron);
  };
  const timeReset = () => {
    clearInterval(localStorage.getItem("interval-id"));
    setFortime(25 * 60);
    setStopTime(5 * 60);
    setSessionTime(25 * 60);
    player.pause();
    player.currentTime = 0;
    setTimeron(false);
    setOnStop(false);
  };

  return (
    <main className="text-center center-align">
      <h1 className="title text-decoration-underline"> 25 + 5 Clock App</h1>
      <div className="grid row">
          <BreakLength  title={"Break Length"} type={"break"} changeTime={changeTime} time={stopTime} timeFormat={timeFormat} formatDisplayTime={formatDisplayTime} />
          <BreakLength title={"Session Length"} type={"session"} changeTime={changeTime} time={sessionTime} timeFormat={timeFormat} formatDisplayTime={formatDisplayTime} />
      </div>
      <div>
        <h3 id="timer-label"> {onStop ? "Break" : "Session"} </h3>
      <h1 id="time-left" className="time-format timer">{formatDisplayTime(fortime)}</h1>
        <button id="start_stop"  onClick={timeControl} className="btn-large purple darken-4">
          {timeron ? ( <i className="material-icons">pause_circle_filled</i> ) : ( <i className="material-icons">play_circle_filled</i> )}
        </button>
        <button id="reset" onClick={timeReset} className="btn-large purple darken-4"><i className="material-icons">autorenew</i></button>
        <audio ref={(g) => (player = g)} src={soundS} id="beep" />
      </div>
    </main>
  );
}

const BreakLength = ({title, changeTime, type, time, timeFormat}) => {
  return (
    <section >
    <h3 id={type === "break" ? "break-label" : "session-label"}>{title}</h3>
    <div>
        <button  id={type === "break" ? "break-decrement" : "session-decrement"}   className="btn btn-small waves-effect red accent-4" onClick={()=> changeTime(-60, type)}>
          <i className="material-icons">arrow_downward</i>  
        </button>
      <h4 className="m-2 display-7"
        id={type === "break" ? "break-length" : "session-length"}>{timeFormat(time)}
      </h4>  
        <button id={type === "break" ? "break-increment" : "session-increment"} className="btn btn-small waves-effect red accent-4" onClick={()=> changeTime(60, type)}>
          <i className="material-icons">arrow_upward</i>  
        </button>
    </div>
    </section>
  );
};

ReactDOM.render(<Clock />, document.getElementById('root'));
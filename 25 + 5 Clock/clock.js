const Clock = () => {
 
  const [fortime, setFortime] = React.useState(25*60);
  const [stopTime, setStopTime] = React.useState(5*60);
  const [sessionTime, setSessionTime] = React.useState(25*60);
  const [timeron, setTimeron] = React.useState(false);
  const [onStop, setOnStop]= React.useState(false);
  const [whistle, setShistle] = React.useState(new Audio('./whistle.mp3'));

  const timeFormat = (time) => {
    let mins = Math.floor(time/60);
    let secd = time % 60;
    return (mins < 10 ? '0' + mins : mins) + ':' + (secd < 10 ? '0' + secd : secd);
  };

  const changeTime = (num, type) => {
    if (type == "break") { 
      if (stopTime <=60 && num < 0) {
        return;
      }
      setStopTime((prev) => prev + num);
      
    } else {
      if (sessionTime <= 60 && num < 0){
        return;
      }
      setSessionTime((prev) => prev + num);
      if (!timeron) {
        setFortime(sessionTime + num);
      }
    };
  }

  const BreakLength = ({title, changeTime, type, time, timeFormat}) => {
    return (
      <section >
      <h4>{title}</h4>
      <div>
        <div id="break-label">
        <button  id="session-decrement break-decrement" className="btn btn-small waves-effect red accent-4" onClick={()=> changeTime(-60, type)}>
          <i className="material-icons">arrow_downward</i>  
        </button>
        </div>
        <h4>{timeFormat(time)}</h4>  
        <div id="session-label">
        <button id="break-increment session-increment" className="btn btn-small waves-effect red accent-4" onClick={()=> changeTime(60, type)}>
          <i className="material-icons">arrow_upward</i>  
        </button>
        </div>
      </div>
      </section>
    );
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
          setFortime(prev => {
            if (prev <= 0 && !onStopVar) {
              playWhistle();
              onStopVar = true;
              setOnStop(true);
              return stopTime;
            } else if (prev <= 0 && onStopVar) {
              playWhistle();
              onStopVar = false;
              setOnStop(false);
              return sessionTime;
            }
            return prev -1;
          })
          nextDate += sec;
        }
      }, 40);
      localStorage.clear();
      localStorage.setItem("interval-id", interval);
    }
    if(timeron) { clearInterval(localStorage.getItem("interval-id")); }
    setTimeron(!timeron);
  }
  const timeReset = () => {
    setFortime(25*60);
    setStopTime(5*60);
    setSessionTime(25*60);
  }

  const playWhistle = () => {
    whistle.currentTime = 0;
    whistle.play();
  }

  return (
    <main className="text-center center-align">
      <h1 className="title text-decoration-underline"> 25 + 5 Clock App</h1>
      <div className="grid">
          <BreakLength  title={"Break Length"} type="break" changeTime={changeTime} time={stopTime} timeFormat={timeFormat} />
          <BreakLength   title={"Session Length"} type="session" changeTime={changeTime} time={sessionTime} timeFormat={timeFormat} />
      </div>
        <h3> {onStop ? "Break" : "Session"} </h3>
      <h1 className="time-format">{timeFormat(fortime)}</h1>
        <button onClick={timeControl} className="btn-large purple darken-4">
          {timeron ? ( <i className="material-icons">pause_circle_filled</i> ) : ( <i className="material-icons">play_circle_filled</i> )}
        </button>
        <button onClick={timeReset} className="btn-large purple darken-4"><i className="material-icons">autorenew</i></button>
    </main>
  );
}



ReactDOM.render(<Clock />, document.getElementById('root'));
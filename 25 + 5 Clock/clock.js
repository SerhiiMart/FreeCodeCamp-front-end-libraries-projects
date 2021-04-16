const Clock = () => {
  const [timeron, setTimeron] = React.useState(false);
  const [fortime, setFortime] = React.useState(25*60);
  const [stopTime, setStopTime] = React.useState(5*60);
  const [sessionTime, setSessionTime] = React.useState(25*60);

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
        <button className="btn btn-small waves-effect red accent-4" onClick={()=> changeTime(-60, type)}>
          <i className="material-icons">arrow_downward</i>  
        </button>
        <h4>{timeFormat(time)}</h4>  
        <button className="btn btn-small waves-effect red accent-4" onClick={()=> changeTime(60, type)}>
          <i className="material-icons">arrow_upward</i>  
        </button>
      </div>
      </section>
    );
  };

  const timeControl = () => {

  }
  const timeReset = () => {
    setFortime(25*60);
    setStopTime(5*60);
    setSessionTime(25*60);
  }
  return (
    <main className="text-center center-align">
      <h1 className="title text-decoration-underline"> 25 + 5 Clock App</h1>
      <div className="grid">
          <BreakLength title={"Break Length"} type="break" changeTime={changeTime} time={stopTime} timeFormat={timeFormat} />
          <BreakLength title={"Session Length"} type="session" changeTime={changeTime} time={sessionTime} timeFormat={timeFormat} />
      </div>

      <h1 className="time-format">{timeFormat(fortime)}</h1>
        <button onClick={timeControl} className="btn-large purple darken-4">
          {timeron ? ( <i className="material-icons">pause_circle_filled</i> ) : ( <i className="material-icons">play_circle_filled</i> )}
        </button>
        <button onClick={timeReset} className="btn-large purple darken-4"><i className="material-icons">autorenew</i></button>
    </main>
  );
}



ReactDOM.render(<Clock />, document.getElementById('root'));
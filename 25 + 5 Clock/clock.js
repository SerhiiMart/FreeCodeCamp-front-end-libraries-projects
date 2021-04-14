const Clock = () => {
  const [fortime, setFortime] = React.useState(25*60);
  const timeFormat = () => {
    
  }
  return (
    <h1 className="text-center">25 + 5 Clock</h1>
  );
}


ReactDOM.render(<Clock />, document.getElementById('root'));
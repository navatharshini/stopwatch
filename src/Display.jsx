const Display = ({ time }) => {
    const { ms, s, m, h } = time; // destructuring
  
    return (
      <div className="time-display">
        <span>{h >= 10 ? h : "0" + h}</span>:
        <span>{m >= 10 ? m : "0" + m}</span>:
        <span>{s >= 10 ? s : "0" + s}</span>:
        <span>
        {ms >= 100? ms :ms >= 10?"0"+ms:"00"+ms}
      
        </span>
      </div>
    );
  };
  
  export default Display;
  
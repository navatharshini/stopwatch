const Button = ({ start, stop, reset, status }) => {
    return (
      <div>
        {status === 0 ? (
          <button onClick={start}>Start</button>  
        ) : (
          <div>
            <button onClick={stop}>Stop</button> 
            <button onClick={reset}>Reset</button>          </div>
        )}
      </div>
    );
  };
  export default Button;
  
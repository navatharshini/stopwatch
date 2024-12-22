import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Display from './Display';
import Button from './Button';

function App() {
const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
const [inter,setInter]=useState();
const [status,setStatus]= useState(0);



  var updatedMs=time.ms,updatedS=time.s,updatedM=time.m,updatedH=time.h;

  const start =() =>{
   run();
   setInter(setInterval(run,0.1));
   setStatus(1);
  }
  const run =()=>{
if(updatedM===60){
  updatedH++;
  updatedM=0;
}
if(updatedS===60){
  updatedM++;
  updatedS=0;
}
if(updatedMs===1000){
  updatedS++;
  updatedMs=0;
}
updatedMs++;

setTime({
  ms: updatedMs,
  s: updatedS,
  m: updatedM,
  h: updatedH
});

  }
  const stop=()=> {
clearInterval(inter);
setStatus(0);
  }

  const reset=()=> {
clearInterval(inter);
setTime({ ms: 0, s: 0, m: 0, h: 0 });
setStatus(0);


  }


  return (
   
    <>
   
      <h1>STOP WATCH</h1>
      <Display time={time} />
      <Button start={start} stop={stop } reset={reset} status={status}/>
    </>
  );
}

export default App;  
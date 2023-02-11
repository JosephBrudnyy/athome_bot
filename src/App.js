import './App.css';
import React from 'react';
import { useTelegram } from './hooks/useTelegram';




function App() {

  const {onToggleButton, tg} = useTelegram()

  React.useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
     <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;

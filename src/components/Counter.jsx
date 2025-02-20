import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount (count + 1);
    }

  return (<>
  <div>
    Updated Counter is {count}. 
  </div>

  <button  onClick={handleCount}> Increase Count</button>
  <button  onClick={() => setCount(count-1 )}>Decrease Count</button>
  
  </>
  )
}

export default Counter

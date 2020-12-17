import React, {useState} from 'react';

const Contador = () => {

  const [count, setCount] = useState(0);

  function handleChange (e) {
    setCount(e.target.value);
  } 

  return (
    <div>
        <p>valor {count}</p>
        <input onChange={handleChange} value={count} />
    </div>
  );
  
};

export default Contador;
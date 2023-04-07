import { Counter } from 'Components/Cart/Counter';
import { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const changeCount = (id, value) => {
    console.log(id);
    setCount(p => p + value);
  };

  return (
    <div>
      <h1>Counter</h1>
      <Counter id={0} value={count} onCountChange={changeCount} />
    </div>
  );
};

export default CounterPage;

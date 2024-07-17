import react,{ useState, useEffect } from 'react';
const Counter = () => {
    const[count, setCount] = useState(0);
    
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};
export default Counter;
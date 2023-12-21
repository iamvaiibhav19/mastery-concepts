// UseRef allows variable to change their values without rendering application
//  used for - 1) accessing DOM elements        2) tracking state changes          3) don't cause renders

import React, { useEffect, useRef, useState } from "react";

const Problem = () => {
  const [count, setCount] = useState(0);

  // useEffect is triggered on every re-render here
  useEffect(() => {
    setCount(count + 1);
  });

  return (
    <>
      <h1>Count is : {count}</h1>
    </>
  );
};

const Solution = () => {
  // 1. Does not cause re-renders
  const [name, setName] = useState("");
  const count = useRef(0); // it takes initialValue in parameter      --- useRef return one object called current       --- like const count = {current : 0}

  // 2. Accessing DOM elements
  const inputRef = useRef() as any;

  // 3. Tracking state changes

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>Count is : {count?.current}</h1>
      {/* 1 */}
      <div id="1" className="mb-10">
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      {/* 2 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}>
        Focus
      </button>

      {/* 3 */}
      <button>+</button>
    </>
  );
};

const UseRefExample = () => {
  return (
    <div>
      {/* <Problem />  */}
      <Solution />
    </div>
  );
};

export default UseRefExample;

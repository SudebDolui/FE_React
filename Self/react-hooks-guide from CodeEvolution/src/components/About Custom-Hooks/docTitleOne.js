import React, { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `Count ${count}`;
  //   }, [count]);

  useDocumentTitle(count);

  return (
    <div>
      <span> Count is: {count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default DocTitleOne;

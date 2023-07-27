import { useCallback, useMemo, useState } from "react";
import UserDetail from "./UserDetail/UserDetail";

function App() {
  const [count, setCount] = useState(0);

  const doble = () => {
    return count * 2;
  };

  const callBackFHook = useCallback(doble, [count]);
  console.log( "callBack: \n" + callBackFHook);

  const memoHook = useMemo(doble, [count]);
  console.log( "memo: \n" + memoHook);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <p>{count}</p>
      <p>{doble()}</p>
      <UserDetail UserId="9" />
    </div>
  );
}

export default App;

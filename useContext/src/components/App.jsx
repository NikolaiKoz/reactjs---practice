import { UserProvider } from "../providers/userProvider";
import { Hijo } from "./Hijo";

function App() {
  return (
    <UserProvider>
      <div>
        <Hijo />
      </div>
    </UserProvider>
  );
}

export default App;

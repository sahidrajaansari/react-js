import InputBox from "./Components/InputBox";
import Login from "./Components/Login";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="w-full h-screen bg-slate-300 flex flex-col items-center">
          <h1 className="text-center text-rose-700 text-3xl font-extrabold">
            Welcome to Mini Context Project
          </h1>
          <InputBox />
          <Login />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;

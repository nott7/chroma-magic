import "./App.css";
import Header from "./components/Header";
import Main from "./components/MainContainer";
import useEyeDropper from "use-eye-dropper";

function App() {
  const { isSupported } = useEyeDropper();

  return (
    <>
      <Header />
      {isSupported() ? (
        <Main />
      ) : (
        <p className="text-center text-4xl text-slate-200 font-extrabold">
          Your browser does not support the Eye Dropper API
        </p>
      )}
    </>
  );
}

export default App;

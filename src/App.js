import logo from "./logo.svg";
import "./App.css";
import { useSettingStore } from "./store";
import People from "./components/People";
import { useEffect } from "react";
function App() {
  const toggleDarkMode = useSettingStore((state) => state.toggleDarkMode);
  const dark = useSettingStore((state) => state.dark);

  useEffect(() => {
    document.querySelector("body").classList.toggle("dark");
  }, [dark]);
  return (
    <div className="">
      <button onClick={toggleDarkMode}>Toggle</button>
      <People />
    </div>
  );
}

export default App;

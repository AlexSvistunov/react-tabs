import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Content from "./Content";
import { useState } from "react";
import {phoneData} from "./variables";

function App() {
  const [currentIndex, setCurrentIndex] = useState("1");


  const changeContent = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="App">
      {phoneData.map((phone) => (
        <Button index={phone.id} key={phone.id} text={phone.phone} functionChangeContent={changeContent}></Button>
      ))}

      <div className="container">

        {phoneData.filter((el, index) => currentIndex === el.id).map((phone) => {
          return <Content key={phone.id} text={phone.descr} />
        })
        }
      </div>
    </div>
  );
}

export default App;

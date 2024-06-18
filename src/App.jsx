import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonCont from "./components/ButtonCont";
import { useState } from "react";
function App() {
  const [calVal, setVal] = useState("");

  const onButtonClick = (btnname) => {
    if (btnname === "C") {
      setVal("");
    } else if (btnname === "=") {
      const result = eval(calVal);
      setVal(result);
    } else {
      const newDisplayValue = calVal + btnname;
      setVal(newDisplayValue);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12 mx-auto">
            <div>
              <h1>Calc</h1>
              <Display dispTxt={calVal} />
            </div>

            <div className={styles.calCont}>
              <ButtonCont onButtonClicked={onButtonClick}></ButtonCont>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

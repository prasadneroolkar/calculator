import styles from "../App.module.css";

const ButtonCont = (props) => {
  let calButton = [
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "=",
  ];
  return (
    <div className={styles.button_holder}>
      {calButton.map((btnname) => (
        <button key={btnname} onClick={() => props.onButtonClicked(btnname)}>
          {btnname}
        </button>
      ))}
    </div>
  );
};

export default ButtonCont;

import { useState, useEffect } from 'react'
import './App.css'
import Wrapper from './components/wrapper/Wrapper'
import Screen from './components/screen/Screen'
import ButtonWrapper from './components/buttonWrapper/ButtonWrapper'
import Button from './components/button/Button'
import styles from './components/button/Button.module.css'

const buttonValues = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  const [count, setCount] = useState(0)
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  })

  const numClickHandler = (value) => {
    if (removeSpaces(calc.num).length < 14) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      })
    }
  }

  const commaClickHandler = () => {
    const value = "."

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    })
  }

  const signClickHandler = (value) => {
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res ? calc.num : calc.res,
      num: 0,
    })
  }

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)), 
                  Number(removeSpaces(calc.num)), 
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      })
    }
  }

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    })
  }

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    })
  }

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0
    })
  }

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key >= 0 && key <= 9) {
      numClickHandler(key);
    } else if (key === ".") {
      commaClickHandler();
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      const sign = key === "*" ? "X" : key;
      signClickHandler(sign);
    } else if (key === "Enter" || key === "=") {
      equalsClickHandler();
    } else if (key === "%") {
      percentClickHandler();
    } else if (key === "Backspace" || key === "Escape") {
      resetClickHandler();
    } else if (key === "±") {
      invertClickHandler();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [calc]);

  return (
    <>
      <div>
        <h1>Calculator & Test</h1>
        <Button
          value={`count is ${count}`}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>
      <div>
        <Wrapper>
          <Screen value={calc.num ? calc.num : calc.res} />
          <ButtonWrapper>
            {buttonValues.flat().map((btn, index) => (
              <Button
                key={index}
                className={btn === "=" ? styles.equals : ""}
                value={btn}
                onClick={
                  btn === "AC"
                    ? resetClickHandler
                    : btn === "+/-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : () => numClickHandler(btn)
                }
              />
            ))}
          </ButtonWrapper>
        </Wrapper>
      </div>
    </>
  );
}

export default App

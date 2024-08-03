import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

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
          <Screen value={0} />
          <ButtonWrapper>
            {
              buttonValues.flat().map((btn, index) => (
                <Button
                  key={index}
                  className={btn === "=" ? styles.equals : ""}
                  value={btn}
                  onClick={() => {
                    console.log(`clicked ${btn}`)
                  }}
                />
              ))
            }
          </ButtonWrapper>
        </Wrapper>
      </div>
    </>
  );
}

export default App

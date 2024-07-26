import { useState } from 'react'
import './App.css'
import Wrapper from './components/wrapper/Wrapper'
import Screen from './components/screen/Screen'
import Button from './components/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Calculator & Test</h1>
        <Button
          text={`count is ${count}`}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>
      <div>
        <Wrapper>
          <Screen value={0} />
        </Wrapper>
      </div>
    </>
  );
}

export default App

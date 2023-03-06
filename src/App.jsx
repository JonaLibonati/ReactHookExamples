
import './App.css';
import { CounterApp } from './01_useState/CounterApp';
import { CounterWithCustomHook } from './01_useState/CounterWithCustomHook';
import { SimpleForm } from './02_useEffect/SimpleForm';
import { FormWithHook } from './02_useEffect/FormWithHook';
import { FocusScreen } from './03_useRef/FocusScreen';
import { Layout } from './04_useLayoutEffect/Layout';
import { Memorize } from './05_Memo/Memorize';
import { HookUseMemo } from './05_Memo/HookUseMemo';
import { HookCallback } from './06_useCallback/HookCallback';

function App() {
  return (
    <>
      <div className="App bg-light p-4 border rounded-4 border-light col-5 m-auto">
        <h1>Hooks App</h1>
        <hr />
        <CounterApp />
        <hr />
        <CounterWithCustomHook />
        <hr />
        <SimpleForm />
        <hr />
        <FormWithHook />
        <hr />
        <FocusScreen />
        <hr />
        <Layout />
        <hr />
        <Memorize />
        <hr />
        <HookUseMemo />
        <hr />
        <HookCallback />
        <hr />
      </div>
    </>
  )
}

export default App

import {useState} from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { TestContainer, TimeApp } from "./01_useEffect/test";
import { ThisYear } from "./01_useEffect/test2";
import UseReducerBasic, { Counter } from "./02_useReducer/01_useReducer-basic";
import { Input, ReducerFormControl } from "./02_useReducer/02_reducer-form-control";
import { UseReducer } from "./02_useReducer/reducertest";
import { HardCalculator } from "./03_useMemo/01_hard-calulator";
import { ComplexCalculator } from "./03_useMemo/02_complex-calculator";
import { UseMemoComponent } from "./03_useMemo/03_performance-useMemo";
import { LocationComponent } from "./03_useMemo/04_object-type-problem";
import { CaluatorComponent } from "./03_useMemo/test";
import SqareCalculator from "./03_useMemo/05_question1";

function App()
{
  const [message, setMessage] = useState("안녕하세요");
  return (
    <>
      {/*<UseEffectBasic message={message}/>
      <UseEffectMount/>
      <UseEffectUpdate/>/*}
      {//<Container/>
      }
      {//<TimeApp/>
}
      {/*<ThisYear/>
      <Counter/>
      <UseReducerBasic/>
      <ReducerFormControl/>
      <Input/>
      <UseReducer/>
      <HardCalculator/>
      <ComplexCalculator/>*/}
      <UseMemoComponent/>
      <LocationComponent/>
      <SqareCalculator/>
    </>
  );
}

export default App;
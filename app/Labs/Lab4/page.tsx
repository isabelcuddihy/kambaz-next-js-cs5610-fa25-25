"use client"
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariables from "./DateStateVariable";
import ObjectStateVariables from "./ObjectStateVariable";
import ArrayStateVariables from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples/reduxExamples";
import store from "./store";
import { Provider } from "react-redux";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  
  return (
    <Provider store={store}>
      <div id="wd-lab4">
        <h2>Lab 4</h2>
        
        {/* User Events Section */}
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        
        {/* Component State Section */}
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariables />
        <ObjectStateVariables />
        <ArrayStateVariables />
        <ParentStateComponent />
        
        {/* Redux Examples Section */}
        <ReduxExamples />
      </div>
    </Provider>
  );
}
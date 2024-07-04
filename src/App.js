import logo from './logo.svg';
import './App.css';
import UseStateExample from './components/UseState';
import UseReducerExample from './components/UseReducer';
import UseEffectExample from './components/UseEffect';
import UseRefExample from './components/UseRef';
import UseLayoutEffectExample from './components/UseLayoutEffect';
import UseImperativeExample from './components/UseImperetive';
import UseContextExample from './components/UseContext';

function App() {
  return (
    <div className="App">
          
        
       <h1>Use State Example</h1>
        <UseStateExample/>
        <hr/>


        <h1>Use Reducer Example</h1>

        <UseReducerExample/>
        <hr/>
        <h1>Use Effects Example</h1>
        <UseEffectExample/>

        <hr/>
        <h1>Use Ref Example</h1>
        <UseRefExample/>

        <hr/>


        <hr/>
        <h1>Use LayoutEffect Example</h1>
        <UseLayoutEffectExample/>

        <hr/>



        <hr/>
        <h1>Use Imperative Example</h1>
        <UseImperativeExample/>

        <hr/>


        <hr/>
        <h1>UseContext Example</h1>
        <UseContextExample/>


        <hr/>

    </div>
  );
}

export default App;

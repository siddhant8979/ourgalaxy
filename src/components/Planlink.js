import {React,Component} from 'react';
import {Switch,Route } from 'react-router-dom';
import Jupiter from './Jupiter';
import Planet from './planets';


export class Planeto extends Component {
    render() {
        return (
<>
<div className="App">
      <Planet/>
      <Switch>
        <Route exact path="/planet/jupiter" component={Jupiter}/>
      </Switch>
    </div>
    </>
  );
}}
export default Planeto;
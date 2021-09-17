import {React,Component} from 'react';
import Navone from './Navbar';
import {Switch,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Moon from './Moon';
import Solar from './solor';
import Planeto  from './Planlink';
import Jupiter from './Jupiter';
import Moonr from './Moonr';
import Sature from './Sature';
import Mars from './Mars';
import Neptune from './Neptune';
import Venus from './Venus';
import Mercury from './Mercury';
import Earth from './earth';
import Uranus from './Uranus';

export class Navlink extends Component {
    render() {
        return (
<>
<div className="App">
      <Navone/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/planet" component={Planeto}/>
        <Route exact path="/moon" component={Moon}/>
        <Route exact path="/solar" component={Solar}/>
        <Route exact path="/planet/jupiter" component={Jupiter}/>
        <Route exact path="/planet/earthmoon" component={Moonr}/>
        <Route exact path="/planet/sature" component={Sature}/>
        <Route exact path="/planet/mars" component={Mars}/>
        <Route exact path="/planet/neptune" component={Neptune}/>
        <Route exact path="/planet/venus" component={Venus}/>
        <Route exact path="/planet/mercury" component={Mercury}/>
        <Route exact path="/planet/earth" component={Earth}/>
        <Route exact path="/planet/uranus" component={Uranus}/>

      </Switch>
    </div>
    </>
  );
}}
export default Navlink;
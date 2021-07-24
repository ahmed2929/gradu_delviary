import react ,{useEffect}from "react"
import HomePage from "./containers/HomePage/HomePage"
import { Route, Switch ,Redirect,withRouter} from 'react-router-dom';



function App(props) {
  

  let routes=(
    <react.Fragment>
        <Route path="/" component={HomePage}  exact />
    </react.Fragment>
  
  );
  return (
    
    <react.Fragment>
        {routes}
    </react.Fragment>
   
       
    
 
);
    
  }
  

 





export default App



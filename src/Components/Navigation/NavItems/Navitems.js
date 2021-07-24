import react from "react"
import classes from "./Navitems.module.css"
import NavigationItem from "./NavItem/NavItem"
import sharedClasses from "../../../asset/sharedcss.module.css"
function NavItems() {
  return (
    <react.Fragment>
      <div className={sharedClasses.continer}>
        <div className={classes.HeaderContiner}>
       
        
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Pianta</NavigationItem>
       
      
    </ul>
    
    

        </div>
     
      </div>
     
    </react.Fragment>
  );
}

export default NavItems;

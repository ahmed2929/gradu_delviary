import react from "react"
import classes from "./HomePage.module.css"
import continer from "../../asset/sharedcss.module.css"
import NavBar from "../../Components/Navigation/ToolBar/ToolBar"
import OrderCarts from "../../Components/orderCarts/OrderCarts"


const HomePage=(props)=>{
  

    //nav
    return (
        <react.Fragment>
            <NavBar />
            
            <div className={continer.continer+' '+classes.body}>
               
                 
               
                <OrderCarts />
              
            </div>
        </react.Fragment>
        
    )
}


 
  
  
export default  HomePage 


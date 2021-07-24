import React,{useState,useEffect} from 'react';
import "./OrderCart.module.css"
import SingleOrderCart from './singleOrderCart/SingleOrderCart';
import Loader from '../../Components/loader/Loader';
import axios from 'axios';
const OrderCarts = props => {
 const [Loading,updateLoading] = useState(true);
const [data,updateData] = useState([]);
 useEffect(async() => {
try {
const response = await axios.get('https://gradubanana.herokuapp.com/getAllOrders');
updateData(response.data)
updateLoading(false)


} catch (error) {
    
}



 } , []);

 if(Loading){
 return (
<div style={{position:'relative' ,left:'50%'}}> 
<Loader />
</div>


 )    
    
 }
console.log(data)
  return (
        <React.Fragment>
            {data.Orders.map(item => <SingleOrderCart key={item._id} OrderData={item} />)}
            
              
             
      
              
        </React.Fragment>
      
      
   
  );
}
export default OrderCarts;
import React from 'react';
import "./singleOrderCart.modul.css"
import axios from 'axios';
const SingleOrderCart = props => {
   console.log("SingleOrderCart props",props.OrderData);
    const {OrderData} = props;
    const changeStatusHandler=async ()=>{
        try {
            const result =await  axios.post('https://gradubanana.herokuapp.com/changeOrderStatus', {
                orderId:OrderData._id,
                status:"ended"
                  })
        console.log("changeStatusHandler",result);
        window.location.reload();
         
        } catch (error) {
            
        }
     
        
    }

  return (
    
        <div className="column">
      <div className="card">
       <h3>{`status: ${OrderData.status}`}</h3>
        <p>{`payed :${OrderData.pay ? 'true':'false'}`}</p>
        <p>{`clint name :${OrderData.client.name}`}</p>
        <p>{`clint phone:${OrderData.client.mobile}`}</p>
        <p>{`clint email :${OrderData.client.email}`}</p>
        <p>{`totalPrice :${OrderData.totalPrice}`}</p>
        <button style={{backgroundColor:'#38dbcb',borderRadius: '10px'}} onClick={changeStatusHandler}>delivered</button>
      </div>
    </div>
    
  
  
    

  );
}
export default SingleOrderCart;
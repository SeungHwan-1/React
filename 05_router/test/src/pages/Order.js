
import { createContext, useContext } from "react";
import { useState,useEffect } from "react";





const Order = ({order}) => {
  
    return (
        <>
        <h1>주문확인</h1>
        
        {order.map(menu =>
             <div>
             <li>{menu.name} 
             {menu.price}원 
            </li>
             </div>
            )}
        </>
    )

}
export default Order;
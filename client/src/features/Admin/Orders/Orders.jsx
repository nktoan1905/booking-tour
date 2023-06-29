import React, { useEffect } from "react";

const Orders = () => {
    useEffect(()=>{
        document.title = "User orders"
    },[])
  return <div>Orders</div>;
};

export default Orders;

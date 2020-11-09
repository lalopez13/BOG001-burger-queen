import { useEffect, useState } from "react";
import { db } from "../../firebase.js";

const UseSinglePendingOrder = (orderId) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    db.collection("pedidos")
      .doc(order)
      .where("state", "==", "pending")
      .onSnapshot((snapshot) => {
        let singleOrder = snapshot.docs.map((doc) => ({
          orderId: doc.id,
          data: doc.data(),
        }));
        setOrder(singleOrder);
      });
  }, []);

  return order;
};

export default UseSinglePendingOrder;

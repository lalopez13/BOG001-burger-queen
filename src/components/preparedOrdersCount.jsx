import { useEffect, useState } from "react";
import { db } from "../../src/firebase";

const usePreparedOrdersCount = () => {
  const [preparedOrdersCount, setPreparedOrdersCount] = useState([]);

  useEffect(() => {
    db.collection("pedidos")
      .where("state", "==", "prepared")
      .onSnapshot((snapshot) => {
        let preparedOrdersArray = snapshot.docs.map((doc) => ({
          orderId: doc.id,
          data: doc.data(),
        }));
        
        setPreparedOrdersCount(preparedOrdersArray.length);
      });
  }, []);

  return preparedOrdersCount;
};

export default usePreparedOrdersCount;

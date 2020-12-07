
//import db from '../../firebase.js'
const { db } = require("../../firebase.js");
import UseOrdersPending from './UseOrdersPending.jsx'
import data from '../../data/CompleteMockData.json'




jest.mock('firebase')




describe('useTextField', () => {
    test('test para probar el mock ', (done)=>{


      db.collection("pedidos").doc('order1').set(data.mockData[0]);
      db.collection("pedidos").doc('order2').set(data.mockData[1]);
      db.collection("pedidos").doc('order3').set(data.mockData[2]);
      db.collection("pedidos").doc('order4').set(data.mockData[3]);


      db.collection("pedidos").get().then((snapshot) => {
        console.log(snapshot.data)
        done()
    });

    expect(UseOrdersPending()).toEqual(data.mockData[1])

     
      

      
  })
});
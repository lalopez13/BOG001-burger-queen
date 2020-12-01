
const { db } = require("../../firebase.js");
import UseOrdersPending from './UseOrdersPending.jsx'
import data from '../../data/mockData.json'




jest.mock('firebase')


console.log(data.mockData[0])

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

    expect(UseOrdersPending()).toEqual({
      "customer" : "Antonia Santos",
      "init_time" : "12/11/2020, 5:23:48 p.m.",
      "order" : [
          {
              "key" :"b-01",
              "price": 5,
              "product" : "American coffee",
              "quantity" : 5,
              "readyChef": false
          },
          {
              "key" :"b-03",
              "price": 10,
              "product" : "Ham and cheese sandwich",
              "quantity" : 1,
              "readyChef": false
          },
          {
              "key" :"b-04",
              "price": 7,
              "product" : "Natural fruit juice",
              "quantity" : 1,
              "readyChef": false
          }
      ],
      "state" : "pending",
      "table": "5",
      "total": "$42"
  },)

     
      

      
  })
});

const { db } = require("../../firebase.js");
const UseSinglePendingOrder = require("./UseSinglePendingOrder");
const { act, testHook } = require('react-dom/test-utils');
const MockFirebase = require("firebase-mock/src/firebase");



jest.mock('firebase')




describe('useTextField', () => {
    test('test para probar el mock ', (done)=>{


      db.collection("pedidos").doc('order2').set({
        customer : 'Marcos Aurelio',
        init_time : '17/11/2020, 4:28:47 p.m.',
        order : [
          {
            key :"b-02",
            price: 7,
            product : "Coffe with milk",
            quantity : 5,
            readyChef: true
          },
          {
            key :"b-01",
            price: 5,
            product : "American coffe",
            quantity : 2,
            readyChef: true
          }          
        ],
        state : 'prepared',
        table: '8',
        total: '$12'
      })


      db.collection("pedidos").get().then((snapshot) => {
        console.log(snapshot.data)
        done()
    });

      // db.collection("pedidos").add('prueba').then(()=>{
      //   console.log('adding')
      //   return db.collection('pedidos').get()
      // }).then((ref)=>{

      //   console.log(ref.data)
      //   done()

      // })
      

      
  })
});
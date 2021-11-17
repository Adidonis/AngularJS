import  renderer  from "react-test-renderer";
// import fruitService from "./services/fruitService"
import App from './App'


// it('Test API', async () => {
//   // function dataFunction1(data) {
//   //   alert(data.id);
//   //   alert(data.fruitName);
//   // }
//   var dummyPost = {
//     id: 4,
//     fruitName: "Apple",
//     colour: "Red",
//     Price: "40"
//   };
//   let component =  renderer.create(<fruitService/>).getInstance();
//   dummyPost = component.dataFunction1(dummyPost);
//   expect(dummyPost.fruitService[0].id).toEqual("4")
//   expect(dummyPost.fruitService[0].fruitName).toEqual("Apple")
// })

test("function Testing" , () => {
  let component =  renderer.create(<App/>).getInstance();
  let tree = component.dataFunction();
  expect(tree).toBe(10)
})
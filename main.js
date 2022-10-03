//bai 1

// function knot(nums) {
//   const storage = [];
//   let numberLength;
//   let sum = 0;
//   nums / 10000 >= 1 ? (numberLength = 5) : (numberLength = 4);
//   if (numberLength === 5) {
//     storage.push(Math.floor(nums / 10000));
//     storage.push(Math.floor((nums / 1000) % 10));
//     storage.push(Math.floor((nums / 100) % 10));
//     storage.push(Math.floor((nums % 100) / 10));
//     storage.push(Math.floor(nums % 10));
//     storage.forEach((num) => {
//         sum += num;
//       });
//       if (sum >= 40) {
//         sum -= 40;
//       } else if (sum >= 30 && sum < 40) {
//         sum -= 30;
//       } else if (sum >= 20 && sum < 30) {
//         sum -= 20;
//       } else if (sum >= 10 && sum < 20) {
//         sum -= 10;
//       } else {
//         sum -= 0;
//       }
//   }
//   else {
//         storage.push(Math.floor(nums / 1000));
//         storage.push(Math.floor((nums / 100) % 10));
//         storage.push(Math.floor((nums / 10) % 10));
//         storage.push(Math.floor(nums % 10));
//         storage.forEach((num) => {
//             sum += num;
//           });
//           if (sum >= 30 && sum < 40) {
//             sum -= 30;
//           } else if (sum >= 20 && sum < 30) {
//             sum -= 20;
//           } else if (sum >= 10 && sum < 20) {
//             sum -= 10;
//           } else {
//             sum -= 0;
//           }
//   }
  
//   console.log(`so nut xe: ${sum}`);
// }
// function licensePlate() {
//   var number = Number(prompt("nhap so xe cua ban: "));
//   knot(number);
// }
// licensePlate();

//bai 2
// function radius(){
//     const rad = Number(prompt('nhap ban kinh: '));
//     perimeter(rad);
//     area(rad);
// }
// const perimeter =  function(rad){
//     console.log(2*3.14*rad);
// }
// const area = function(rad){
//     console.log(3.14*rad*rad);
// }
// radius();

//bai 4

// function value(){
//     const price = Number(prompt('nhap gia san pham: '));
//     const amount = Number(prompt('nhap so luong san pham: '));

//     money(price, amount);
// }
// function tax(money){
//     console.log('thue: '+10 * money / 100);
// }
// function money(price, amount){
//     const money = price * amount;
//     tax(money);
//     console.log('tong tien: '+money);
// }
// value()

//bai 5

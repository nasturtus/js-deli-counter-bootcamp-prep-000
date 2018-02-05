var katzDeli = [];

function takeANumber(katzDeli, customerName){
  katzDeli.push(customerName);
  queueNumber = katzDeli.length - 1;
  return `Welcome, ${customerName}. You are number ${katzDeli.length - 1} in line.`
}
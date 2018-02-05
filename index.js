var katzDeli = [];

function takeANumber(katzDeli, customerName){
  katzDeli.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeli.length - 1} in line.`
}
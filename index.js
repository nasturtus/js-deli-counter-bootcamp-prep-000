var katzDeli = [];

function takeANumber(katzDeli, customerName){
  katzDeli.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "katzDeli.shift()"
  }
}
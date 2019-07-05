function checkCashRegister(price, cash, cid) {
  //convert 2D array in an new Object
  let cidObj = Object.assign(...cid.map(el => ({ [el[0]]: el[1] })));
  var change = [];
  let giveBack = cash - price;
  //If total amount of drwaer === Exchange
  let drawerSum = 0;
  cid.map(el => (drawerSum += el[1]));
  if (drawerSum === giveBack) {
    return { status: "CLOSED", change: cid };
  }

  let functionChange = function(currencyName, currencyValue) {
    //var to store the amount of this currency given back
    let sum = 0;
    //check if we can give back the given currency
    if (cidObj.hasOwnProperty(currencyName)) {
      //var for the amount of this specific currency in the drawer
      let currencyLeft = cidObj[currencyName];
      //as long as we have to give back more than the value of one part of this currency and we have some of them laft in the drawer
      while (giveBack - currencyValue >= 0 && currencyLeft >= currencyValue) {
        //we reduce the amount of cash we have to give back by the value of one part of this currency
        giveBack -= currencyValue;
        giveBack = Math.round(giveBack * 100) / 100;
        //and we remember how much we have already given back from this currency
        sum += currencyValue;
        //and we reduce the amount of this currency left in the drawer
        currencyLeft -= currencyValue;
        cidObj[currencyName] -= currencyValue;
      }
      //we store the name of this currency and the given amount in the change array
      if (sum > 0) {
        change.push([currencyName, sum]);
      }
    }
    return;
  };

  //use the function with each possible currency
  functionChange("ONE HUNDRED", 100);
  functionChange("TWENTY", 20);
  functionChange("TEN", 10);
  functionChange("FIVE", 5);
  functionChange("ONE", 1);
  functionChange("QUARTER", 0.25);
  functionChange("DIME", 0.1);
  functionChange("NICKEL", 0.05);
  functionChange("PENNY", 0.01);

  //if giveBack is unequal to zero we cant give back exactly
  if (giveBack !== 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  //if giveBack == 0, it worked
  else if (giveBack == 0) {
    return { status: "OPEN", change: change };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);

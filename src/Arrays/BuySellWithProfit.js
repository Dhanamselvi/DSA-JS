
// Best Time to Buy and Sell Stock
/* 
    Your are given an array prices where prices[i] is the 
    price of the given stock on the i th day.

    You wanted to maximize your profit by choosing a single day 
    to buy one stock and choosing a different day in the future
    to sell the stock.

    Return the maximum profit you  can achieve from this transaction.
    If you cannot achieve any profit return 0.
*/

function buySellWithProfit(arr){
    let min = arr[0];  // 7     1,1,1,1,1
    let maxProfit = 0; // 0     0,4,4,5,5  -- final result
    for(let i = 1; i< arr.length; i++){
        if(arr[i]-min > maxProfit){
            maxProfit = arr[i]-min
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return maxProfit;
}

console.log(buySellWithProfit([7,1,5,3,6,4]))
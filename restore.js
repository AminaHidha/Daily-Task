var recoverOrder = function(order, friends) {
   let result=[]
    for(i=0;i<order.length;i++){
      if(friends.includes(order[i])){
          result.push(order[i])
      }
    }
    return result
};
console.log(recoverOrder([3,1,2,5,4],[1,3,4]));
console.log(recoverOrder( [1,4,5,3,2],[2,5]));




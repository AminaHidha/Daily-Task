var isEmpty = function(obj) {
    if(Object.keys(obj).length==0 || obj.length==0){
        return'true'
    }else{
        return'false'
    }
};


console.log(isEmpty([null, false, 0]));

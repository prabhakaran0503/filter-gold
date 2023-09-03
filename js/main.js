var input =["anna","beth","cara"];
var ans=input.filter(function(value,index){
    if(index==0){
        console.log("gold winner"+value);
    }
    else if(index==1){
        console.log("silver winner "+value);
    }
    else if(index==[2]){
        console.log("bronze winner is"+value);
    }
})

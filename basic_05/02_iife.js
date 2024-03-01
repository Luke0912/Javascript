// Immedietly Invocked Function expression (IIFE)


(function luke(){
    //named iife
    console.log("DB Connedted");
})();


((name)=>{
    console.log(`Connected to DB ${name}`);
})("hitesh")

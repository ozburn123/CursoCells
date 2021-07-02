
let lastThreeDigists=(m,n)=>{
   let num= Math.pow(m,n);
   if(num>999){
    let stringNum=num.toString(); 
   return `${stringNum[stringNum.length-3]}${stringNum[stringNum.length-2]}${stringNum[stringNum.length-1]}`;
    }
    else return num;
}

console.log(lastThreeDigists(2,2));
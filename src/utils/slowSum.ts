export const slowSum = ():number=>{
    let sum=0;
    for(let i=0;i<1_000_000_000;i++){
        sum += i;
    }

    return sum;
}
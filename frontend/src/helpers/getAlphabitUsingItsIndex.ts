
const alphabit = "abcdefghijklmnopqrstvxyz".toUpperCase().split("");

export const getAlphabitUsingItsIndex = (idx:number)=>{
  if(idx>=alphabit.length)return alphabit[alphabit.length-1]
  return  alphabit[idx];
}

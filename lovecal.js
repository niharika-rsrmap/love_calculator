
// function valid(str){
//     let c;
//     for(let i=0;i<str.length;i++){
//          c=str[i];
//          if(!((c>='A'&&c<='Z')||(c>='a'&&c<='z')||(c===''))){
//             return false;
//          }
//     }
//     return true;
// }
function valid(str) {
    let regex = /^[A-Za-z\s]+$/;
    return regex.test(str); 
}

function nam(name){
    let sum=0;
    name=name.toUpperCase();
    for(let char of name){
           if(char!=' '){
            sum += char.charCodeAt(0) - 64;  
           }
    }
    return sum;
}
function love(){
    let fn=document.getElementById("fn").value;
    let sn=document.getElementById("sn").value;
    let u=document.getElementById("res");
      let v=document.getElementById("mes");
      if (!valid(fn) || !valid(sn) || fn === "" || sn === ""){
       u.innerHTML="Invalid input";
       v.innerHTML="";
       return;
   }
   let s=(nam(fn)+nam(sn))%100;
 if(s>=90){
     u.innerHTML=`Love Compatability of Your couple is ${s}%`;
     v.innerHTML="Perfect Match Made for each other ❤️💖"
 }
 else if(s>=80){
    u.innerHTML=`Love Compatability of Your couple is ${s}%`;
     v.innerHTML="A Great Match with some spice! 🥰💕"
 }
 else if(s>=70){
    u.innerHTML=`Love Compatability of Your couple is ${s}%`;
     v.innerHTML="Nice Choice with some spice😊💗"
 }
 else if(s>=60){
    u.innerHTML=`Love Compatability of Your couple is ${s}%`;
     v.innerHTML="There's potential keep filtring! 😎"
 }
 else{
    u.innerHTML=`Love Compatability of Your couple is ${s}%`;
     v.innerHTML=" Just good friends, no need to impress.😜"
 }

}
const endd="12 March 2024 1:30 PM";
document.getElementById("end-date").innerText=endd;
const inputs=document.querySelectorAll("input");
// const clock =()=>{

// }

function clock(){
    const end=new Date(endd);
    const now =new Date();
    console.log(now);
   const diff=(end-now)/1000;
   if(diff<0) return;
   console.log(diff);
   //days
inputs[0].value=Math.floor(diff/3600/24);
//hours
inputs[1].value=Math.floor(diff/3600)%24;
//min
inputs[2].value=Math.floor(diff/60)%60;
//sec
inputs[3].value=Math.floor(diff)%60;

}

clock();
// setInterval(
// ()=>{
//     clock()
// },
// 1000
// )
setInterval(clock,1000);

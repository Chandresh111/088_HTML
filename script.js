function handleclock(){
    const now=new Date();
    let hour=now.getHours().toString();
    let minutes=now.getMinutes().toString();
    let second=now.getSeconds().toString();


    document.getElementById('clock').innerHTML=`${hour}:${minutes}:${second}`;

}

setInterval(handleclock,1000);
handleclock()
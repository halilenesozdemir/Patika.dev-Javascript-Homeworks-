//name part
let name = prompt("Lütfen isminizi giriniz");
let myName = document.querySelector("#myName")
myName.innerHTML = name;

//time and day name part
let clock = function (){

    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    //StackoverFlow practice method for adding day.
    let days = ["Pazartesi","Salı","Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"]
    let dayName = days[date.getDay()-1]; // foreign countries week starts with Sunday... That's why we decreased getday.

    // for good view. You don't want to 15:1:2
hours = hours < 10 ? "0" + hours : hours;
mins = mins < 10 ? "0" + mins : mins;
secs = secs < 10 ? "0" + secs : secs;

let time = `${hours}:${mins}:${secs} ${dayName}`;
document.querySelector("#myClock").innerHTML = time;
setInterval(clock,1000);
}
clock()



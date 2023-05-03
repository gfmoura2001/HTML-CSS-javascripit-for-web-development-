var names2 = ["Eu", "Tu", "Ele"]

// var myObj = {
//     name: "Yaakov",
//     course: "HTML/CSS/JS",
//     platform: "Coursera",
// }
// for(var prop in myObj) {
//     console.log(prop +":" +myObj[prop]);
// }

// for(var name in names2){
//     console.log("Hello " + names2[name]);
// }

names2.greeting = "Hi!";

for(var name in names2){
    console.log("Hello " + names2[name]);
}


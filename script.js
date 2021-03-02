var wrapEle = document.body.querySelector(".wrapper");
var submitEle = document.querySelector(".submit");

var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function createTransformers(list){
  var ele = document.createElement("div");
  var aflEle = document.createElement("div");
  
  if(list.afl === "autobot"){
    ele.classList.add("autobot");
    aflEle.innerHTML = "<img src='https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png'/>";
  }else if(list.afl === "decepticon"){
    ele.classList.add("decepticon");
    aflEle.innerHTML = "<img src='https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png'/>";
  }
  
  ele.classList.add("character");
  
  var nameEle = document.createElement("div");
  nameEle.innerHTML = "Name: " + list.name;
  var classEle = document.createElement("div");
  classEle.innerHTML = "Class: " + list.class.toUpperCase();
  var vehicleEle = document.createElement("div");
  
  
  if (list.vehicle === "truck"){
    vehicleEle.innerHTML = "Vehicle: " + list.vehicle;
    vehicleEle.style.color = "blue";
  }else if (list.vehicle === "tank"){
    vehicleEle.innerHTML = "Vehicle: " + list.vehicle;
    vehicleEle.style.color = "green";
  }else if (list.vehicle === "car"){
    vehicleEle.innerHTML = "Vehicle: " + list.vehicle;
    vehicleEle.style.color = "gold";
  }else if (list.vehicle === "plane"){
    vehicleEle.innerHTML = "Vehicle: " + list.vehicle;
    vehicleEle.style.color = "white";
  }
  
  ele.appendChild(aflEle);
  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);
  wrapEle.appendChild(ele);
}


function starting(listChrs){
  for(var i=0; i<listChrs.length; i++){
    createTransformers(listChrs[i]);
  }
}

function randomize(list){
  list = list.sort(() => Math.random() - 0.5);
  wrapEle.innerHTML = "";
  starting(list);
}
starting(chrs);
// waits for user to press the button, then runs randomize()
submitEle.addEventListener("click", function () {
  randomize(chrs);
});

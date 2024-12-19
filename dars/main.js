let map = new Map();
map.set("name","Ziyoda");

map.set(function add() {}, "This is function");
console.log(map.get("name"));

map.delete("name");
map.clear()

for(let value of map.values()){
    console.log(value);
}

let weekMap = new WeakMap();
let key = {key: "key"};
weekMap.set(key,"Olim");

let mySet = new Set();

mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add("Salom");

mySet.delete(1);
console.log(mySet.size);
let mySet2 = new Set(["apple", "banana", "cherry"]);
for (let item of mySet) {
  console.log(item, "For of");
}
// forEach

mySet.forEach();


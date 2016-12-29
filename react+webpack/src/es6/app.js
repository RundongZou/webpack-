// let, var, const

//let arr = [];
//const value = 20;
//for (let i = 0; i < 5; i ++) {
//	arr[i] = () => console.log(i);
//}
//arr[4]();
//value = 30;
//console.log(value);

//const [a, b, c] = [1, 2, 3];
//console.log("a: " + a);

//let [head, ...tail] = ["first", "second", "third"];
//console.log("head: " + head);	// first
//console.log(...tail);			//second third
//console.log(tail);				//["second", "third"]
//console.log(("tail: " + tail).toString());	//second third
//console.log("...tail: " + ...tail);	//wrong


// arrow function

//let arrow = {
//	name: "arrow",
//	fn: function () {
//		return () => {
//			console.log(this.name);
//		}
//	}
//}
//arrow.fn()();

// Uncertain parameters and default parameters

//function fn1 (a, ...arg) {
//	console.log(a, ...arg)
//}
//fn1("z", "x");

 

// OOP, extend

//class Person {
//	constructor (name, age) {
//		this.name = name,
//		this.age = age
//	}
//	show_name () {
//		alert(this.name);
//	}
//	show_age () {
//		alert(this.age);
//	}
//}

//class Zou extends Person {
//	constructor (name, age, skill) {
//		super(name, age);
//		this.skill = skill;
//	}
//	show_skill () {
//		alert(this.skill);
//	}
//}

//let zourundong = new Zou("zzz", 10, "smile");

//zourundong.show_name();
//zourundong.show_age();
//zourundong.show_skill();



// module
import {module1, module2, this_year} from "./m1.js";
import mm from "./m1.js";
import mma from "./m1.js";

console.log(module1);
console.log(module2);
console.log(this_year);

console.log(mm);
mma();

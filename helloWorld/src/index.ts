// console.log('helloworld');
let age: number = 20;
if (age<50)
age += 10;
console.log(age);

let user: [number, string] = [1,'John']
user.push(1);


//age = "20"
//Type 'string' is not assignable to type 'number'.ts(2322)

function helloworld(city: string){
    return 'hello,' + city;
}
let city = 'Melbourne';
console.log(helloworld(city));





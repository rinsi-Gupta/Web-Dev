var person = {
    'full Name' :'Avinash Sharma',
    age: 36,
    isMarried: true,
    position: ['co-Founder','Developer'],
    address: {
        street: 18,
        HouseNo: '23A',
        city: 'Delhi, India',
    }
}

person.age = 40;
person["Full Name"] = 'Shubham Rajput'

console.log(person['age']);
console.log(person);
// use loops (for in) in object
for(var perso in person){
    console.log(person[perso])
}
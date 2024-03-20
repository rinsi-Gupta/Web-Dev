
function student(name, age, id,marks) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.marks = marks;
}
student.prototype.avgMarks = function(){
    return (this.marks[0] + this.marks[1] + this.marks[2]) / 3;
}

const s1 = new student('Arpit', 23, 1, [50, 80, 75]);
const s2 = new student('Rahul', 30, 2,[80, 90, 85]);
const s3 = new student('Rohit', 20, 3,[70, 95, 95]);

console.log(s1, s2, s3);

let obj = {
    a:4,
    b:true
}

let obj1 = Object.create(obj);
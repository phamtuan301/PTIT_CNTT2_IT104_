class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const students: Student[] = []
students.push(new Student(1, 20, "sinhvien1@gmail.com"));
students.push(new Student(2, 21, "sinhvien2@gmail.com"));
students.push(new Student(3, 22, "sinhvien3@gmail.com"));
students.push(new Student(4, 23, "sinhvien4@gmail.com"));
students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
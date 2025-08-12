class Student {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
const allStudents: Student[] = [];
class Classroom {
    students: Student[] = [];
    showStudents(): void {
        if (this.students.length === 0) {
            console.log("No students in the classroom.");
        } else {
            console.log("Students in the classroom:");
            this.students.forEach(student => {
                console.log(`ID: ${student['id']}, Name: ${student['name']}`);
            });
        }
    }
    addStudent(student: Student): void {
        this.students.push(student);
        const index = allStudents.indexOf(student);
        if (index !== -1) {
            allStudents.splice(index, 1);
        }
    }
    filterStudent(id: number): void {
        const student = this.students.find(s => s['id'] === id);
        if (student) {
            console.log(`Found student: ID ${student['id']}, Name ${student['name']}`);
        } else {
            console.log(`No student found with ID ${id}`);
        }
    }
    addStudentInClass(id: number, name: string): void {
        const student = new Student(id, name);
        this.addStudent(student);
    }
}
const classroom1 = new Classroom();
const classroom2 = new Classroom();
const student1 = new Student(1, "Alice");
const student2 = new Student(2, "Bob");
const student3 = new Student(3, "Charlie");
const student4 = new Student(4, "David");
const student5 = new Student(5, "Eve");
const student6 = new Student(6, "Frank");
allStudents.push(student1, student2, student3, student4, student5, student6);
classroom1.addStudent(student1);
classroom1.addStudent(student2);
classroom1.addStudent(student3);
classroom2.addStudent(student4);
classroom2.addStudent(student5);
classroom2.addStudent(student6);
classroom1.showStudents();
classroom2.showStudents();


    
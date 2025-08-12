class MyStudent {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    setName(newName: string): void {
        this.name = newName;
    }
}
const allMyStudents: MyStudent[] = [];
class MyClassroom {
    students: MyStudent[] = [];
    showStudents(): void {
        if (this.students.length === 0) {
            console.log("No students in the classroom.");
        } else {
            console.log("Students in the classroom:");
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
            });
        }
    }
    addStudent(student: MyStudent): void {
        this.students.push(student);
        const index = allMyStudents.indexOf(student);
        if (index !== -1) {
            allMyStudents.splice(index, 1);
        }
    }
    filterStudent(id: number): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            console.log(`Found student: ID ${student.getId()}, Name ${student.getName()}`);
        } else {
            console.log(`No student found with ID ${id}`);
        }
    }
    addStudentInClass(id: number, name: string): void {
        const student = new MyStudent(id, name);
        this.addStudent(student);
    }
    removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const removed = this.students.splice(index, 1)[0];
            allMyStudents.push(removed);
            console.log(`Removed student ID ${removed.getId()} from classroom.`);
        } else {
            console.log(`No student found with ID ${id} to remove.`);
        }
    }
    editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Updated student ID ${id} name to "${newName}".`);
        } else {
            console.log(`No student found with ID ${id} to edit.`);
        }
    }
}
const classroomA = new MyClassroom();
const classroomB = new MyClassroom();
const s1 = new MyStudent(1, "Alice");
const s2 = new MyStudent(2, "Bob");
const s3 = new MyStudent(3, "Charlie");
const s4 = new MyStudent(4, "David");
const s5 = new MyStudent(5, "Eve");
const s6 = new MyStudent(6, "Frank");
allMyStudents.push(s1, s2, s3, s4, s5, s6);
classroomA.addStudent(s1);
classroomA.addStudent(s2);
classroomA.addStudent(s3);
classroomB.addStudent(s4);
classroomB.addStudent(s5);
classroomB.addStudent(s6);
classroomA.showStudents();
classroomB.showStudents();
classroomA.removeStudent(2);
classroomA.editStudent(3, "Charlie Updated");
classroomA.showStudents();
classroomB.showStudents();
allMyStudents.forEach(s => console.log(`ID: ${s.getId()}, Name: ${s.getName()}`));

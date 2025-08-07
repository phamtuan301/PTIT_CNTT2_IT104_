interface students {
    name: string;
    age: number;
    email:string;
}
function introduce(student: students): string {
    return `Ten toi la ${student.name}, toi ${student.age} tuoi, va email cua toi la ${student.email}`;
}
console.log(introduce({name: "Alice", age: 20, email: "alic@gmail.com"}));     
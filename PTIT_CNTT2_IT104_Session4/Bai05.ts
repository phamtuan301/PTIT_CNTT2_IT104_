interface Person {
    name: string;
    age: number;
}
interface Employee {
    employeeId: number;
    department: string;
}
type StaffMember = Person & Employee;
function printStaffInfo(staff: StaffMember): string {
    return `Nhan vien: ${staff.name},${staff.age} tuoi, Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`;
}
let staff: StaffMember = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "IT"
};
console.log(printStaffInfo(staff));
type numArr = (number | string)[];
type scoretype = number | string;
//Intersection type
type student = {
    name: string;
    age: number;
    scores: numArr;
    scoreType: scoretype;
}
type user = numArr & student;
interface person {
    name: string;
    age: number;    
    scores: numArr;
    scoreType: scoretype;
}
//type guard
function isStudent(obj: any): obj is student {
    return 'name' in obj && 'age' in obj && 'scores' in obj && 'scoreType' in obj;
}
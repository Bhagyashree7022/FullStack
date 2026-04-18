export{};

// 1. Primitive Types
let studentName: string = "Rahul";
let rollNo: number = 25;

// 2. Interface (The Contract)
interface Department {
    deptName: string;
    display(): void;
}

// 3. Class (The Blueprint)
class CSEStudent implements Department {
    deptName: string = "Computer Science and Engineering";
    
    constructor(public name: string) {}

    display(): void {
        console.log(`${this.name} belongs to ${this.deptName}`);
    }
}

// 4. Using the Building Blocks
let student1 = new CSEStudent(studentName);
student1.display();

import { addNumber,subtractNumber,multiplyNumber,divideNumber} from "./math.js";

console.log(`Addition: ${addNumber(10, 5)}`);
console.log(`Subtraction: ${subtractNumber(10, 5)}`);
console.log(`Multiplication: ${multiplyNumber(10, 5)}`);
console.log(`Division: ${divideNumber(10, 5)}`);
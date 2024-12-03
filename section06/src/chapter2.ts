/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "lbj",
  age: 35,
  position: "Front-end developer",
  work() {
    console.log("일함");
  },
};

// 타입스크립트의 클래스는 타입으로도 취급 가능함
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

// 인스턴스
const employeeB = new Employee("lbj", 35, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

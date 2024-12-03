/**
 * 접근 제어자
 * eccess modifier
 * -> public , private, protected
 */

/*
class Employee {
  // 필드
  public name: string; // public 생략가능
  private age: number;
  protected position: string;

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
*/

// 필드 생략 가능
class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

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
  // 메서드
  func() {
    this.position;
  }
}

const employee = new Employee("lbj", 35, "developer");
// employee.name = "홍길동";
// employee.age = 32;
// employee.position = "디자이너";

console.log(employee);

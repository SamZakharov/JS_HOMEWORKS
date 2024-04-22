class Student {
  name;

  surname;

  birthDate;

  marksArray = [];

  attendanceArray = [];

  constructor(name, surname, birthDate, marksArray, attendanceArray) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.marksArray = marksArray;
    this.attendanceArray = attendanceArray;
  }

  getStudentAge() {
    const birthDate = new Date(this.birthDate);
    return new Date().getFullYear() - birthDate.getFullYear();
  }

  #setMark(mark) {
    this.marksArray.push(mark);
  }

  getAvarageMark() {
    if (this.marksArray.length > 0) {
      let sum = 0;
      let count = 0;
      for (let i = 0; i < this.marksArray.length - 1; i += 1) {
        sum += this.marksArray[i];
        count++;
      }
      return sum / count;
    }
  }

  present(mark) {
    if (this.attendanceArray.length < 25) {
      this.#setMark(mark);
      this.attendanceArray.push(true);
    } else {
      return new Error('array of attendance must');
    }
  }

  absent() {
    if (this.attendanceArray.length < 25) {
      this.#setMark(0);
      this.attendanceArray.push(false);
    } else {
      return new Error('array of attendance must');
    }
  }

  summary() {
    const averageMark = this.getAvarageMark();
    let averageAttendance = 0;

    let countAttendance = 0;
    for (let i = 0; i < this.attendanceArray.length; i += 1) {
      if (Number(this.attendanceArray[i]) === 1) {
        countAttendance += 1;
      }
    }

    averageAttendance = countAttendance / this.attendanceArray.length;

    if (averageMark > 90 && averageAttendance > 0.9) return 'Молодець!';
    if (averageMark > 90 || averageAttendance > 0.9) return 'Добре, але можна краще';
    if (averageMark < 90 && averageAttendance < 0.9) return 'Редиска!';
  }
}

const firstStudent = new Student('Sam', 'Zakharov', '1995-07-16', [], []);
const secondStudent = new Student('Artem', 'Koteliuk', '1998-09-20', [], []);
const thirdStudent = new Student('Victoria', 'Zakharov', '1991-03-09', [], []);

firstStudent.present(100);
firstStudent.present(100);
firstStudent.present(100);
firstStudent.absent();
firstStudent.absent();
console.log(`Student - ${firstStudent.name} ${firstStudent.surname} | ${firstStudent.birthDate} | He is ${firstStudent.getStudentAge()} years old.`);
console.log(`His avegare mark is ${firstStudent.getAvarageMark()}.`);
console.log(`Overall, he is ${firstStudent.summary()}`);

secondStudent.present(100);
secondStudent.present(100);
secondStudent.present(90);
secondStudent.present(100);
secondStudent.present(80);
console.log(`Student - ${secondStudent.name} ${secondStudent.surname} | ${secondStudent.birthDate} | He is ${secondStudent.getStudentAge()} years old.`);
console.log(`His avegare mark is ${secondStudent.getAvarageMark()}.`);
console.log(`Overall, he is ${secondStudent.summary()}`);

thirdStudent.present(100);
thirdStudent.present(90);
thirdStudent.present(100);
thirdStudent.present(90);
thirdStudent.present(50);
console.log(`Student - ${thirdStudent.name} ${thirdStudent.surname} | ${thirdStudent.birthDate} | He is ${thirdStudent.getStudentAge()} years old.`);
console.log(`His avegare mark is ${thirdStudent.getAvarageMark()}.`);
console.log(`Overall, he is ${thirdStudent.summary()}`);

(function () {
  const createStudent = function (name, surname, birthYear, grades = []) {
    const attendance = new Array(25).fill(false);

    const present = function () {
      const index = attendance.findIndex((status) => !status);
      if (index !== -1) {
        attendance[index] = true;
      }
    };

    const absent = function () {
      const index = attendance.findIndex((status) => !status);
      if (index !== -1) {
        attendance[index] = false;
      }
    };

    const calculateAge = function () {
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear;
    };

    const calculateAverageGrade = function () {
      if (grades.length === 0) {
        return 0;
      }
      const sum = grades.reduce((total, grade) => total + grade, 0);
      const average = sum / grades.length;
      return average.toFixed(2);
    };

    const summary = function () {
      const averageGrade = calculateAverageGrade();
      const attendancePercentage = attendance.filter((status) => status).length / attendance.length;
        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return 'Молодец!';
        } else if (averageGrade > 90 && attendancePercentage <= 0.9) {
            return 'Хорошо, но можно лучше';
        } else if (averageGrade <= 90 && attendancePercentage > 0.9) {
            return 'Хорошо, но можно лучше';
        } else {
            return 'Неудачник!';
        }
    };

    return {
      name,
      surname,
      grades,
      attendance,
      present,
      absent,
      calculateAge,
      calculateAverageGrade,
      summary,
    };
  };

  const student1 = createStudent('Artem', 'Koteluk', 1997, [95, 88, 92, 97, 89]);
  const student2 = createStudent('Victoria', 'Gaponova', 1991, [90, 92, 87, 94, 91]);
  const student3 = createStudent('Sam', 'Zakharov', 1995, [60, 85, 87, 90, 91]);

  student1.grades = [95, 88, 92, 97, 89];
  student2.grades = [90, 92, 87, 94, 91];
  student3.grades = [60, 85, 87, 90, 91];

  student1.present();
  student1.absent();
  student1.present();
  student1.present();
  student1.present();

  student2.present();
  student2.present();
  student2.absent();
  student2.present();
  student2.present();

  student3.present();
  student3.absent();
  student3.absent();
  student3.absent();
  student3.absent();

  console.log(`${student1.name} ${student1.surname}, возраст: ${student1.calculateAge()} лет.`);
  console.log(`Средний балл: ${student1.calculateAverageGrade()}`);
  console.log(`Резюме: ${student1.summary()}`);

  console.log(`${student2.name} ${student2.surname}, возраст: ${student2.calculateAge()} лет.`);
  console.log(`Средний балл: ${student2.calculateAverageGrade()}`);
  console.log(`Резюме: ${student2.summary()}`);

  console.log(`${student3.name} ${student3.surname}, возраст: ${student3.calculateAge()} лет.`);
  console.log(`Средний балл: ${student3.calculateAverageGrade()}`);
  console.log(`Резюме: ${student3.summary()}`);
}());

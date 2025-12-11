const {
  createStudent,
  addStudent,
  addGrade,
  printAllStudents
} = require("./Students.js");

const {
  createTeacher,
  addTeacher,
  assignStudentToTeacher,
  printAllTeachers
} = require("./Teachers.js");

// 1) إنشاء طلاب (نفس شغلكم)
const s1 = createStudent("Ali", 20);
const s2 = createStudent("Sara", 22);
const s3 = createStudent("Noor", 19);

addStudent(s1);
addStudent(s2);
addStudent(s3);

addGrade(student1, [80, 88, 75]);
addGrade(student2, [90, 95, 88]);
addGrade(student3, [75, 60, 80]);

// 2) إنشاء مدرّسين
const t1 = createTeacher("Mr. Ahmed", "Math");
const t2 = createTeacher("Ms. Lina", "English");
const t3 = createTeacher("Mr. Laith", "Physics");

addTeacher(t1);
addTeacher(t2);
addTeacher(t3);

// 3) ربط الطلاب ويا المدرسين
assignStudentToTeacher(t1, s1);
assignStudentToTeacher(t1, s2);
assignStudentToTeacher(t1, s3);

// 4) طباعة تقارير
console.log("=== All Students ===");
printAllStudents(student);

console.log("\n=== All Teachers ===");
printAllTeachers(teacher);
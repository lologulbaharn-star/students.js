// =======================================
// Simple Teacher Manager
// Weekly Task 2
// =======================================

// مصفوفة تخزن المدرسين (كل مدرس هو Object)
let teachers = [];

// متغير بسيط حتى نزود الـ id لكل مدرس جديد
let nextTeacherId = 1;

// ---------------------------------------
// TODO 1:
// دالة تنشئ مدرس جديد وتُرجع Object
// الاتربيوت: id, name, subject, students
// students بالبداية مصفوفة فارغة []
// id يأخذ القيمة من nextTeacherId، وبعدها نزود nextTeacherId
// مثال شكل المدرس:
// {
//   id: 1,
//   name: "Mr. Ahmed",
//   subject: "Math",
//   students: []   // هنا نخزن طلاب هذا المدرس
// }
// ---------------------------------------
function createTeacher(name, subject) {
  // اكتب الكود هنا
  // مثال بسيط توضيحي (تگدر تحذفه بالحل مال الطلاب):
  const teacher = {
    id: nextTeacherId,
    name: name,
    subject: subject,
    students: []
  };
  nextTeacherId++;
  return teacher;
}
console.log(teachers);


// ---------------------------------------
// TODO 2:
// دالة تضيف مدرس إلى مصفوفة teachers
// ---------------------------------------
function addTeacher(teacher) {
      teachers.push(teacher);
}
const teacher1 = createTeacher("Mr. Ahmed", "Math");
const teacher2 = createTeacher("Ms. Lina", "English");
const teacher3 = createTeacher("Mr. Laith", "Physics");

const student1 = {name:"Ali", age: 20};
const student2 = {name:"Sara", age: 22};
const student3 = {name:"Noor", age: 19};

 addTeacher(teacher1);
 addTeacher(teacher2 );
 addTeacher(teacher3);

console.log(teachers);


// ---------------------------------------
// TODO 3:
// دالة تربط طالب مع مدرس معيّن
// تضيف الطالب إلى teacher.students
// ملاحظة:
// - الطالب يجي كـ object من ملف الطلاب (createStudent)
// - نقدر نخزن الطالب كامل، أو بس اسمه، براحتكم
// ---------------------------------------
function assignStudentToTeacher(teacher, student) {
    teacher.students.push(student);
}
assignStudentToTeacher(teacher1, student1);
assignStudentToTeacher(teacher1, student2);
assignStudentToTeacher(teacher1, student3);
assignStudentToTeacher(teacher2, student1);
assignStudentToTeacher(teacher2, student2);
assignStudentToTeacher(teacher2, student3);
assignStudentToTeacher(teacher3, student1);
assignStudentToTeacher(teacher3, student2);
assignStudentToTeacher(teacher3, student3);


// ---------------------------------------
// TODO 4:
// دالة تطبع تقرير مدرس واحد
// مثال شكل الطباعة:
// ========================================
// Teacher #1 - Mr. Ahmed (Subject: Math)
// Students:
// - Ali (Age: 20)
// - Sara (Age: 22)
// إذا ماكو طلاب تطبع:
// Students: لا يوجد طلاب بعد
// ---------------------------------------
function printTeacherReport(teacher) {
     console.log("=====================================");
     console.log(`Techer #${teacher.id} - ${teacher.name} (Subject: ${teacher.subject})`);
     console.log("Students:");
     console.log(`- ${student1.name} (Age: ${student1.age})`);

     if (teacher.student.length === 0) {
        console.log(`لا يوجد طلاب بعد:`);
     } else {
      teacher.students.forEach(student => {
        console.log(`- ${student1.name} (Age: ${student1.age})`);
      });
     }
}
printTeacherReport(teacher1);



// ---------------------------------------
// TODO 5:
// دالة تطبع تقرير كل المدرسين
// إذا ماكو مدرّسين تطبع رسالة مناسبة
// غير ذلك تستخدم loop على teachers
// وتستدعي printTeacherReport لكل مدرس
// ---------------------------------------
function printAllTeachers() {
      if (teachers.length == 0) {
        console.log("لا يوجد مدرسون مسجلون في النظام حاليا");
        return;
      }
      console.log("---AllTechers---");
      teachers.forEach(teacher => {
        printAllTeachers(teacher);
      });
}


// ---------------------------------------
// TODO 6
// دالة تبحث عن مدرس بالاسم داخل teachers
// إذا لقت المدرس ترجع الـ object
// إذا ما لقت ترجع undefined
// ---------------------------------------
function findTeacherByName(name) {
  const foundTeacher = teacher.find(teacher => {
    return teacher.name.toLwerCase() === name.toLwerCase() ;
  });
}
 






// نخلي الدوال متاحة للملف الرئيسي





module.export ={
    teachers,
    createTeacher,
    addTeacher,
    assignStudentToTeacher,
    printAllTeachers

}
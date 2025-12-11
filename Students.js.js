// =======================================
// Simple Student Manager
// Weakly Task 1
// =======================================

// مصفوفة تخزن الطلاب (كل طالب هو Object)
let students = [];

// متغير بسيط حتى نزود الـ id لكل طالب جديد
// كل طالب عندة id مختلف عن باقي الطلاب 
let nextId = 1;

// ---------------------------------------
// TODO 1:
// دالة تنشئ طالب جديد وتُرجع Object
// الاتربيوت: name, age
// الدرجات بالبداية مصفوفة فارغة []
// id يأخذ القيمة من nextId، وبعدها نزود nextId
// مثال شكل الطالب:
// {
//   id: 1,
//   name: "Ali",
//   age: 20,
//   grades: []
// }
// ---------------------------------------
function createStudent(name, age) {
    const student = {
        id: nextId,
        name: name,
        age,
        grades:[]
    };
    nextId++;
    return student;
}
console.log(students);

// ---------------------------------------
// TODO 2:
// دالة تضيف طالب إلى مصفوفة students
// ---------------------------------------
function addStudent(student) {
    students = [...students, student];
    
}
 const student1 = createStudent("Ali", 20);
 const student2 = createStudent("Sara", 22);
 const student3 = createStudent("Noor", 19);

 addStudent(student1);
 addStudent(student2);
 addStudent(student3);

console.log(students);


// ---------------------------------------
// TODO 3:
// دالة تضيف درجة جديدة لطالب معيّن
// تضيف الدرجة إلى student.grades
// ---------------------------------------
function addGrade(student, grade) {
         student.grades.push(...grade);
}
addGrade(student1, [80, 88, 75]);
addGrade(student2, [90, 95, 88]);
addGrade(student3, [75, 60, 80]);

  console.log(students); 



// ---------------------------------------
// TODO 4:
// دالة تحسب معدّل درجات طالب
// إذا ما عنده درجات ترجع 0
// تستخدم loop حتى تجمع الدرجات
// وترجع sum / عدد الدرجات
// ---------------------------------------
function getAverage(student) {
    const grade = student.grade;
    if (grade.length === 0) {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i <= grades.length; i++) {

    } 

     return sum / grades.length;
     
    }   
getAverage(student1);
getAverage(student2);
getAverage(student3);

console.log(students);

// ---------------------------------------
// TODO 5:
// دالة ترجع حالة الطالب حسب المعدّل
// تستخدم getAverage(student)
// إذا المعدّل >= 50 → "ناجح"
// غير ذلك → "راسب"
// ---------------------------------------
function getStatus(student) {
    const average = getAverage(student);
    if (average >= 50){
        return "ناجح"
    } else {
        return "راسب"
    }

}
getStatus(student1);
getStatus(student2);
getStatus(student3);

console.log(students);



// ---------------------------------------
// TODO 6:
// دالة تطبع تقرير طالب واحد في الـ console
// مثال شكل الطباعة:
// ========================================
// Student #1 - Ali (Age: 20)
// Grades: 80, 90, 75
// Average: 81.67
// Status: ناجح
// إذا ماكو درجات تطبع: Grades: لا توجد درجات بعد
// ---------------------------------------
function printStudentReport(student) {
        const avarage = getAverage(student);
        const Status = getStatus(student);
console.log(`student #${student.id} - ${student.name} (age: ${student.age})`);
if(student.grades.length === 0) {
    console.log("greads: لا توجد درجات بعد");
} else {
     console.log(`Grades: ${student.grades}`);
     console.log(`avarage: ${getStatus(student)}`);
     console.log(`Status: ${getStatus(student)}`);
}

}

printStudentReport(student1);
printStudentReport(student2);
printStudentReport(student3);


// TODO 7:
// دالة تطبع تقرير كل الطلاب
// إذا ماكو طلاب تطبع رسالة مناسبة
// غير ذلك تستخدم loop على students
// وتستدعي printStudentReport لكل طالب
// ---------------------------------------
function printAllStudents() {
    if(students.length === 0){
        console.log("لا يوجدطلاب")
    } else {
        for(let i = 0; i< students.length; i++){
           printAllStudents(students[i]) 
        }
    }
}



// ---------------------------------------
// TODO 8:
// دالة تبحث عن طالب بالاسم داخل students
// إذا لقت الطالب ترجع الـ object
// إذا ما لقت ترجع undefined
// ---------------------------------------
function findStudentByName(name) {
    for(let i = 0;i < students.length; i++ ) {
        const Student = students[i];
        if(Student.name.toLowerCase() === name.toLowerCase()) {
            return Student;
        }
    }
}



// =======================================
// TODO 9 - جزء التنفيذ (Main):
// هنا يخلي الطالب كوده التجريبي:
// - ينشئ 3 طلاب على الأقل باستخدام createStudent
// - يضيفهم لمصفوفة students باستخدام addStudent
// - يضيف درجات لكل طالب باستخدام addGrade
// - يستدعي printAllStudents حتى يطبع تقرير كامل
//
// مثال تخطيط (هم يملوه):
//
// const s1 = createStudent("Ali", 20);
// const s2 = createStudent("Sara", 22);
// const s3 = createStudent("Noor", 19);
//
// 
(s1);
// addStudent(s2);
// addStudent(s3);
//
// addGrade(s1, 80);
// addGrade(s1, 90);
// addGrade(s1, 75);
//
// ... الخ
//
// printAllStudents();
//
// =======================================





// اكتب كود التنفيذ هنا:




module.export ={
    students,
    createStudent,
    addStudent,
    addGrade,
    printAllStudents
}
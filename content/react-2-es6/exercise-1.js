// 1. Khai báo 1 biến bootcampClass là 1 object, với các props như sau:
// - name: tên lớp, giá trị là 1 string tuỳ chọn
// - monitor: là 1 object với các props: name (string), age (só nguyên dương), averageScore (số thập phân, giá trị nhỏ hơn 10) có giá trị tuỳ chọn
// - headTeacher: là 1 object với các props: name(string), age (số nguyên dương), grade (enum, là 1 trong các thang rate: A,B,C,D,E,F)
// - students: là 1 array với 20 bạn, props tương tự như monitor và chỉ khác giá trị
// * YOUR CODE HERE *


const studentListData = [
    ['Ali Galindo',25,8.2],
    ['Coco Acosta',25,8.2],
    ['Tyreke Anthony',34,9.0],
    ['Shazia Sumner',20,6.7],
    ['Lois Guerrero',36,9.0],
    ['Khushi Lugo',24,6.6,1],
    ['Lukas Crawford',26,9.3],
    ['Cristian Mcguire',40,9.9],
    ['Raisa Avila',27,9.9],
    ['Maliha Shepard',21,9.3],
    ['Kristen Greenaway',37,2.3],
    ['Dannielle Rigby',43,8.6],
    ['Brett Burrows',45,5.6],
    ['Montel Parks',32,9.9],
    ['Charlene Sanchez',45,6.8],
    ['Lilli Perez',39,8.9],
    ['Aleeza Villa',27,8.4],
    ['Jonah Bray',22,6.8],
    ['Rhianne Chaney',21,6.6],
    ['Iain Moyer',19,8.1]
    ]

const Class = []

function studentObject(name, age, averageScore) {
    return {
        name: name,
        age: age,
        averageScore: averageScore
    }
}

function renderStudent() {
   for(let studentItem of studentListData) {
       Class.push(studentObject(studentItem[0], studentItem[1], studentItem[2]));
   }
   return Class;
}


function checkMonitor() {
    for(let item of studentListData) {
        if(item[3] === 1) {
            return studentObject(item[0], item[1], item[2]);
        }
    }
}


const bootcampClass = {
    name: 'RJ2201R1',
    monitor:  checkMonitor(),
    headTeacher: {
        name: 'Tuan Anh',
        age: 33,
        grade: 'A'
    },
    students: renderStudent() }



let {name, monitor, headTeacher, students} = bootcampClass;
let {name : mName, age: mAge, averageScore: mAverageScore} = monitor;
console.log(students);
console.log(monitor);



// 2. Tạo 1 hàm đọc ra tên của bạn lớp trưởng (monitor) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *
const monitorName = (object) => {
    return monitor.name
} 
console.log(`Monitor Name::: ${monitorName(bootcampClass)}`);


// 3. Tạo 1 hàm đọc ra tên của thầy giáo chủ nhiệm (headTeacher) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *
const headTeacherName = (object) => {
    return headTeacher.name;
} 

console.log(`Monitor Name::: ${headTeacherName(bootcampClass)}`);


// 4. (optional) Tạo 1 hàm tính tổng số điểm trung bình của tất cả sinh viên trong lớp, với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *
const classAverageScore = (object) => {
    let totalScore = 0;
    students.forEach(element => {
        totalScore += element.averageScore; 
    });
    return (totalScore/students.length).toFixed(2);
} 

console.log(`Điểm trung bình::: ${classAverageScore()}`);


// 5. Xét điêm trung bình của lớp trưởng (monitor), 
// - nếu điểm số trên 7.5 thì alert ra "Đạt yêu cầu!"
// - nếu điểm từ 7.5 - 8.5 thì alert ra "Quá là đạt yêu cầu luôn!"
// - nếu điểm từ 8.5-10 thì alert ra "Bạn ấy không thuộc về thế giới này" 
// - còn lại thì alert ra "Thay lớp trưởng thôi!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *
function monitorDecide(Obj) {
    if(mAverageScore > 7.5) {
        alert('Đạt yêu cầu');
        if (mAverageScore >=7.5 || mAverageScore < 8.5) {
            alert('Quá là đạt yêu cầu luôn!');
        } else if(mAverageScore >=8.5 || mAverageScore <=10) {
            alert('Bạn ấy không thuộc về thế giới này');
        } 
    }else {
        confirm('Thay lớp trưởng thôi!');
    }
}

monitorDecide(monitor);


// 6. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, console.log ra từng sinh viên
// * YOUR CODE HERE *
let forLoop = (Obj) => {
    console.log("FOR LOOP !");
    for(let person of students) {
        console.log(person);
    }
}
forLoop(bootcampClass);

let doWhileLoop = (Obj) => {
    console.log("DO-WHILE LOOP !");
    let i=0;
    console.log(students.length)
    // do {
    //     console.log(students[i]);
    // } while(i <20);
}
doWhileLoop(bootcampClass);


// 7. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, tính ra tổng số điểm trung bình. Sau đó xét các case:
// - Nếu điểm số thấp hơn 100, alert ra "Trainer thất bại!"
// - Nếu điểm số trong khoảng 100 - 150, alert ra "Tạm đạt yêu cầu!"
// - Nếu điểm số trong khoảng 150 - 200, alert ra "Đạt yêu cầu!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *
function checkTrainerResult(Obj) {
    let sumAverage = 0
    for(let item of students) {
        sumAverage += item.averageScore;     
    }
    console.log(sumAverage);
    if(sumAverage >= 150) {
        alert('Đạt yêu cầu');
    } else if (sumAverage >= 100 || sumAverage < 150){
        alert('Tạm đạt yêu cầu !');
    } else{
        alert('Trainer THất bại');
    }
}
checkTrainerResult(bootcampClass);



// 8. (nâng cao, optional) Biến hàm ở bài số 2 và 3 thành method của object bootcampClass, thay thế đầu vào bằng từ khoá this
// * YOUR CODE HERE *
bootcampClass.showMonitorName = function() {
    return this.monitor.name;
}
bootcampClass.showHeadTeacherName = function() {
    return this.headTeacher.name;
}

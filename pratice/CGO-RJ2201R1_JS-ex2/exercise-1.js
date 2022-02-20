//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firtName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firtName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firtName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firtName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firtName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
console.log(`======================  1  =================`);

let renderFullName = (arr) => {
  arr.forEach(function print(Element) {
    console.log(`${Element.firtName} ${Element.lastName}`);
  })
} 
renderFullName(traineeIterator);

//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
console.log(`======================  2  =================`);

let renderGradeByName = (arr) => {
  arr.forEach(function print(Element) {
    console.log(`${Element.firtName} ${Element.lastName} / ${Element.grade}`);
  })
}
renderGradeByName(traineeIterator);

//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *
console.log(`======================  3  =================`);

let expectedTraineeArray = new Map();

for(let i in traineeIterator) {
  expectedTraineeArray.set(i, { newId: traineeIterator[i].className+ '-' + traineeIterator[i].id, 
                                fullName: traineeIterator[i].firtName + ' ' + traineeIterator[i].lastName,
                                rank: traineeIterator[i].grade})
}

console.log(expectedTraineeArray.size);
console.log(expectedTraineeArray);

//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *
console.log(`======================  4  =================`);

let newTraineeArray = new Map();


const CLASSIFICATION__1 = (grade) => {
  if(typeof grade === 'string') {
    switch(grade) {
      case 'A' : 
        return 'Excellent' 
      case 'B' :
        return 'Good';
      case 'C' : 
        return 'Medium';
      case 'D' :
        return 'Weak';
      case 'E' :
        return 'Poor';
      case 'F' :
        return 'Disbanded';
      default : 
        return 'Empty Value'; 
    }
  } else {
    return 'format Error'
  }
  
}

for(let i in traineeIterator) {
  newTraineeArray.set(i, { id: traineeIterator[i].id, 
                          codeName: traineeIterator[i].className + ' - ' + traineeIterator[i].firtName + ' ' + traineeIterator[i].lastName,
                          classification: CLASSIFICATION__1(traineeIterator[i].grade)});
}

console.log(newTraineeArray);


//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *
console.log(`======================  5  =================`);

const UNDER_B_FILTER = (arr) => {
  let tempArray = new Map();
  for(let i in arr) {
    if(typeof arr[i].grade != 'string') {
      alert('Wrong Data Type');
    } else if (arr[i].grade !== 'A') {
      tempArray.set(tempArray.size + 1 , {id: arr[i].id,
                                          firtName: arr[i].firtName,
                                          lastName: arr[i].lastName,
                                          className: arr[i].className,
                                          grade: arr[i]}.grade)
    }
  }
  return tempArray;
}

let underBData = UNDER_B_FILTER(traineeIterator);
console.log(underBData);

//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *
console.log(`======================  6  =================`);

const UPPER_C_FILTER = (arr) => {
  let tempArray = new Map();
  for(let i in arr) {
    if(typeof arr[i].grade != 'string') {
      console.log('Wrong Data Type');
    } else if (arr[i].grade === 'C' || arr[i].grade === 'B' || arr[i].grade === 'A') {
      tempArray.set(tempArray.size + 1 , {id: arr[i].id,
                                          firtName: arr[i].firtName,
                                          lastName: arr[i].lastName,
                                          className: arr[i].className,
                                          grade: arr[i]}.grade)                
    }
  }
  return tempArray;
}


const CHECK_EFFECTIVE_TRAINING = (arr) => {
  let tempArray = UPPER_C_FILTER(arr);
  let classArray = new Map(Object.entries(arr));
  let percentGrade = tempArray.size / classArray.size;

  if(percentGrade >= .5) {
    alert('Effective training');
  } else if(percentGrade < .3) {
    alert('Average training');
  } else if(percentGrade === 0 ) {
    alert('Failed training');
  } else {
    alert('OK fine !');
  }
} 

CHECK_EFFECTIVE_TRAINING(traineeIterator);


//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
const SEARCH_BY_GRADE = (arr, grade) => {
  arr.forEach((Element) => {
    if(Element.grade === grade){
      alert(`${grade} score ::: ${Element.firtName} ${Element.lastName}`) ;
    }
  })
}

SEARCH_BY_GRADE(traineeIterator,'A');


//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
SEARCH_BY_GRADE(traineeIterator,'F');


//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *
const GRADE_COLLECTION = (arr) => {
  let tempArray = [];
  arr.forEach(function gradeArray(Element) {
    tempArray.push(Element.grade);
  })

  let msg = tempArray.reduce((accString, currentString) => {
      return accString + ' ' + currentString;
  })

  return msg;
}

console.log(GRADE_COLLECTION(traineeIterator));


//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *
const FACTORIAL = (number) => {
  let tempArray = new Array; 

  let i = 1
  do {
    tempArray.push(i); 
    i++;
  } while(i<=number)

  let factorial = tempArray.reduce((accValue, curValue) => {
    return accValue*curValue;
  }) 

  return factorial;
}

console.log(FACTORIAL(369));


//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *
function newArray(arr) {

  let newArray = new Map();
  let tempArray = new Array;
  const CLASSIFICATION__2 = (grade) => {
    if(typeof grade === 'string') {
      switch(grade) {
        case 'A' : 
          return 1
        case 'B' :
          return 2;
        case 'C' : 
          return 3;
        case 'D' :
          return 4;
        case 'E' :
          return 5;
        case 'F' :
          return 6;
        default : 
          return null; 
      }
    } else {
      return null;
    }
    
  }
  
  for(let i in arr) {
    tempArray.push( CLASSIFICATION__2(arr[i].grade));
  }

  tempArray.sort();
  
  newArray.set('High', tempArray[tempArray.length - 1]);
  newArray.set('Low', tempArray[0]);
  newArray.set('Average', 
    ((tempArray.reduce((Acc, Cur) => {
      return Acc + Cur ;
    })) / tempArray.length ))

  return newArray;
}

console.log(newArray(traineeIterator));

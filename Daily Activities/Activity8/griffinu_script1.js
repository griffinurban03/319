/*
*    EXERCISE 1
*/

console.log(" EXERCISE 1");
console.log("--------------------");

const maxOfTwo = function(n1,n2) {
    let max = n1
    if (n2 > max) {
        max = n2;
    } return max;
}

let n1 = 11;
let n2 = 10;
console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1,n2));

/*
*    EXERCISE 2
*/

console.log(" EXERCISE 2");
console.log("--------------------");

const maxOfArray = function(array) {
    let max = array[0];
    for (let value of array) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}

let array = [10,11,1024,125,9,201];
console.log(`The maximum number is : ${maxOfArray(array)}`);

/*
*    EXERCISE 3
*/

console.log(" EXERCISE 3");
console.log("--------------------");

const movie = {
    title : 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
    };

const showProperties = function(movie) {
    //console.log(Object.keys(movie));
    //console.log(Object.values(movie));
    console.log("List of Keys");
    for (let myKey in movie) {
        console.log(myKey);
    }
    console.log("List of Values");
    for (let myKey in movie) {
        console.log(movie[myKey]);
    }
}
showProperties(movie);

/*
*    EXERCISE 4
*/

console.log(" EXERCISE 4");
console.log("--------------------");

const circle = {
    radius : 2,
    area : function() {
        return Math.PI * this.radius * this.radius
    }
}

console.log(`The area of the circle is : ${circle.area().toFixed(2)}`);

/*
*    EXERCISE 7
*/

console.log(" EXERCISE 7");
console.log("--------------------");

const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
}

const calculateAverageGrade = function(grades) {
    let sum = 0;
    let numSubjects = 0;
    for (let subjects in grades) {
        sum += grades[subjects];
        numSubjects++;
    }
    return sum / numSubjects;
}

console.log(`The AVG is : `, calculateAverageGrade(grades));

/*
*    EXERCISE 8
*/

console.log(" EXERCISE 8");
console.log("--------------------");

const students = [
    {
        Fer: {
            math: 85,
            science: 90,
            history: 75,
            literature: 88
        }
    },
    {
        Alex: {
            math: 99,
            science: 97,
            history: 94,
            literature: 90
        }
    },
    {
        Mary: {
            math: 79,
            science: 72,
            history: 81,
            literature: 79
        }
    }
]


const averages = {}
const calculateAverageGradePerStudent = function(students) {
    for (let student of students) {
        let key = Object.keys(student)[0];

        let total = 0;
        let numSubjects = 0;

        for(let subject in student[key]) {
            total+=student[key][subject];
            numSubjects++;
        }

        let average = total / numSubjects;

        averages[key] = average;        
    }
    return averages;
}

console.log(calculateAverageGradePerStudent(students));


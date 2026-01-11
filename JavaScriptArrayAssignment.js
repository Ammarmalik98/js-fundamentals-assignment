// Question 1: Create an array of student information objects.

const students = [
    { id: 781227, name: "Arthur Leywin", age:21, grades: [88, 92, 97, 100, 89] },
    { id: 781228, name: "Nico Sever", age:22, grades: [45, 50, 63, 38, 61] },
    { id: 781229, name: "Caera Denoir", age:20, grades: [90, 95, 92, 94, 96] },
    { id: 781230, name: "Tessia Eralith", age:21, grades: [98, 99, 100, 97, 96] },
    { id: 781231, name: "Feyrith Ivsaur", age:22, grades: [80, 85, 88, 82, 84] },
    { id: 781232, name: "Kathlyn Glayder", age:20, grades: [92, 94, 91, 93, 95] },
    { id: 781233, name: "Melzri Vritra", age:21, grades: [78, 80, 82, 79, 81] }
]

console.log(students);



// Question 2: Calculate the average grade for each student and add it as a new property to their object.

// A function is first created to calculate the average grade for each student and then rounded up to two decimal places.
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    const roundedUpAvg = Math.ceil(average * 100) / 100;
    return roundedUpAvg;
}
// I then added the average property to each student object using the map method.
const studentsWithAverage = students.map(student => ({
    ...student,
    average: calculateAverage(student.grades)
}));

console.log(studentsWithAverage)

// Please note that the output of the average do not all appear as 2 decimal places.
// This is because some averages are whole numbers or have only one decimal place after rounding up.



// Question 3: Filter out students who have an average grade greater than or equal to 60.

function getPassingStudents(students) {
    return students.filter(student => student.average >= 60);
}
// Using the filter method to get students with average >= 60, and then calling said function while passing in the array of students with average property.
const passingStudents = getPassingStudents(studentsWithAverage);
console.log(passingStudents)



// Question 4: Calculate the total class average.

// Here we calculate the class average by summing up all student averages and dividing by the number of students.
function calculateClassAverage(students) {
    const totalAverage = students.reduce((sum, student) => {
        return sum + student.average;
    }, 0);

    const classAverage = totalAverage / students.length;
    return Number(classAverage.toFixed(2));
}

const classAverage = calculateClassAverage(studentsWithAverage);

console.log("Overall Class Average: ",classAverage);



// Question 5: Find a function to find student record based on student id.

// This is a simple find function that returns the student object if found, or null if not found.
function findStudentById(students, id) {
    const student = students.find(student => student.id === id);
    return student || null;
}


console.log("Student Record: ", findStudentById(studentsWithAverage, 781230));
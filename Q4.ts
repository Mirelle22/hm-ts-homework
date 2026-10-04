interface Student {
    name : string
    score : number
}
let student1: Student = {
    name: 'Alice',
    score: 95
}
let student2: Student = {
    name: 'Bob',
    score: 55
}
let student3: Student = {
    name: 'Lisa',
    score: 78
}
let student4: Student = {
    name: 'Tom',
    score: 83
}
interface StudentSummary {
    average : number
    highestName : string
    passNames : string[]
}
function analyzeStudents(students : Student[]):StudentSummary{
    if(students.length === 0){
        return{
            average: 0,
            highestName: '',
            passNames: []
        }
    }
    let average : number = 0
    let highestName : string = students[0].name
    let passNames : string[] = []
    for(let i = 0; i<students.length; i++){
        average += students[i].score/students.length
        if(students[i].score > students[0].score){
            highestName = students[i].name
        }
        if(students[i].score >= 60){
            passNames.push(students[i].name)
        }
    }
    return {
        average: average,
        highestName: highestName,
        passNames: passNames
    }
}
console.log(analyzeStudents([student1,student2,student3,student4]))

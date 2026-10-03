function getGrade(score: number): string {
    if (score < 0 || score > 100)  {
        return 'Invalid'
    }
    if (score >= 90) {
        return 'A'
    }
    if (score >= 80) {
        return 'B'
    }
    if (score >= 60) {
        return 'C'
    }
     return 'D'
}
console.log(getGrade(86))
console.log(getGrade(105))
interface Todo {
    id : number
    title : string
    finished : boolean
}
let todo1: Todo = {
    id: 1,
    title: 'Read a book',
    finished: false
}
let todo2: Todo = {
    id: 2,
    title: 'Write a report',
    finished: false
}
let todo3: Todo = {
    id: 3,
    title: 'Go shopping',
    finished: false
}
let todo4: Todo = {
    id: 4,
    title: 'Clean the house',
    finished: false
}
interface TodoSummary {
    total : number
    finishedCount : number
    unfinishedTitles : string[]
}
function updateAndSummary(todos: Todo[],finishedIDs: number[]): TodoSummary {
    let total :number = todos.length
    let finishedCount : number = 0
    let unfinishedTitles : string[] = []
for (let i = 0; i < finishedIDs.length; i++){
    todos[i].finished = true
    finishedCount++  
}
for (let j = 0; j<todos.length; j++){
    if(todos[j].finished === false){
        unfinishedTitles.push(todos[j].title)
    }
}
return{
    total: total,
    finishedCount: finishedCount,
    unfinishedTitles: unfinishedTitles
}
}
console.log(updateAndSummary([todo1,todo2,todo3,todo4],[1,3]))
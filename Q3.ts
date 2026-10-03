interface Book {
    title: string
    price: number
    inStock: boolean
}
let book1: Book ={
    title: '红楼梦',
    price: 68,
    inStock: true
}
let book2: Book = {
    title: '西游记',
    price: 88,
    inStock: false
}
let book3: Book = {
    title: '三国演义',
    price: 58,
    inStock: true
}
let book4: Book = {
    title: '水浒传',
    price: 78,
    inStock: true
}
function getAvailableBooks(books: Book[],maxPrice: number): string[] {
    let availableBooks: string[] = []
    for (let i = 0; i < books.length; i++){
        if (books[i].inStock && books[i].price <= maxPrice){
            availableBooks.push(books[i].title)
        }
    }
    return availableBooks
}
console.log(getAvailableBooks([book1,book2,book3,book4], 70))

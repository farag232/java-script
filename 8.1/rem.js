const mybook = {

    bookName : 'harry potter' ,
    pages : 268,
    publishingyear  : 1998,
    author : 'J.k rolling'
    


};

function isbook () {

    return `The book ${mybook.bookName} was written by ${mybook.author} in the year ${mybook.publishingyear}`
    
}
console.log(isbook());
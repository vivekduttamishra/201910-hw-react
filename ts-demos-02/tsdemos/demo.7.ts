interface Book{
    title:string,
    author:string,
    price:number;
}
//Condition is a function which takes a Book, an any and returns a bool

type Condition= (book:Book,param:any)=>boolean;

var books:Book[]=[
    {title:"Harry Potter Part 1",author:"J.K.Rowling",price:250},
    {title:"Harry Potter Part 2",author:"J.K.Rowling",price:150},
    {title:"Harry Potter Part 3",author:"J.K.Rowling",price:450},
    {title:"Harry Potter Part 4",author:"J.K.Rowling",price:400},
    {title:"Harry Potter Part 5",author:"J.K.Rowling",price:500},
    {title:"Harry Potter Part 6",author:"J.K.Rowling",price:480},
    {title:"Harry Potter Part 7",author:"J.K.Rowling",price:425},
    {title:"Shiva Triology Part 1",author:"Amish",price:225},
    {title:"Shiva Triology Part 2",author:"Amish",price:350},
    {title:"Shiva Triology Part 3",author:"Amish",price:450}   

];

class SearchEngine{
    constructor(private records:Book[]){

    }
    search(condition:Condition,param:any):Book[]{
        var result:Book[]=[];
        for(let record of this.records){
            if(condition(record,param))
                result.push(record);
        }
        return result;
    };
}



class BookPrinter{
    static print(caption:string,books:Book[]):void{
        console.log(caption);
        for(let i=0;i<books.length;i++){
            let book=books[i];
            console.log(`${book.title}\t${book.author}\t${book.price}`);
        }
    }
}


BookPrinter.print("All Books",books);

var se=new SearchEngine(books);

var matchAuthor=function(book:Book,authorName:string){
    return book.author.toLocaleLowerCase()===authorName.toLocaleLowerCase();
};

var amishBooks= se.search(matchAuthor,"Amish");

BookPrinter.print("Books by Amish",amishBooks);

var matchPartialTitle=function(book:Book,title:string){
    return book.title.toLocaleLowerCase().indexOf(title.toLocaleLowerCase())>=0;
};

var harryPotterBooks=se.search(matchPartialTitle,"Harry");
BookPrinter.print("Harry Potter Books",harryPotterBooks); 

var matchPriceRange=function(book:Book,range:{min:number,max:number}){
    return book.price>=range.min && book.price<range.max;
};

var midRangeBooks=se.search(matchPriceRange,{min:400,max:500});
BookPrinter.print("Books in range 400-500", midRangeBooks);








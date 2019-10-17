
import simpleSearch from './esdemo/search';
import {not,any} from './esdemo/matcher';

import Book,{getDummyBookStore,printBooks} from './esdemo/books';

//import fn from './esdemo/math';

import fn from './esdemo/math';

let {isPrime}=fn;

//console.log('fn',fn);


let books=getDummyBookStore().getAll();

printBooks('All Books',books);


let result=simpleSearch(not(b=>b.price<100), books);

printBooks('Books.price>100',result);


let values=[2,3,9,11,8,15,13];

let nonPrimes= simpleSearch(not(isPrime),values);

console.log('nonPrimes',nonPrimes);

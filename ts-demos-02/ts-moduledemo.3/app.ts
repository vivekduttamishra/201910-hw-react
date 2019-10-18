
//approach 1. import the module as g
// use g as a prefix to all members of module
//useful if you have several features coming from a single module
import * as g from './greeter';


//import selective features from a module
// module prefix is not required here as 
// the names are imported from the module to current context
import {Greeter} from './greeter';


var greeter=new g.Greeter("Typescript");


greeter.greet();

var greeter2=new Greeter('Javascript');
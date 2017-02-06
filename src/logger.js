import FS from 'fs';



const print = message => message.toUpperCase();


export default {
  
  openDirectory(callback) {
    FS.readFile(__dirname + '/greeting.txt', (err, data) => {
      if(err) {
        console .log(err);
        return callback(err);
      }
      return callback(null, data);
    });
    
  },
  badPrint() {
    
    console.log(this);
    
    return () => {
      console.log(this);
    }
  },
  
  print

//  print(message, ...args) {
//
//    console.log(this);
//
////    console.log(args);
//
////    console.log(arguments);
////    console.log(arguments[0]);
////    console.log(arguments[1]);
////    console.log(arguments[2]);
////    console.log(arguments[3]);
//
//
////    console.log(message);
////    console.log(number);
////    console.log(person);
//
//    return message;
//  }
  
}

import Test from 'ava';
import Logger from '../src/logger';

Test.cb(t => {
  
  Logger.openDirectory((err, file) => {
    console.log(err);
    console.log(file.toString());
  
    t.end();
  });
  
  
});

//Test('#print(message) displays a message', t => {
//
//  console.log(Logger.print('Blah'));
//
//  Logger.openDirectory((err, data) => {
//    t.end();
//  });
//});

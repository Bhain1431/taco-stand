import Test from 'ava';
import Calculator, { CalculatorBetter, UberCalculator } from '../src/calculator';

const DIVISION_ERROR = `Can't divide by 0`;

Test.cb('#add(1,2) is 3', t => {
  Calculator.add(1, 2, (err, result) => {
    if (err) t.fail(err);
    t.is(result, 3);
    t.end();
  });
});

Test.cb('#subtract(2,1) is 1', t => {
  Calculator.subtract(2, 1, (err, result) => {
    if (err) t.fail(err);
    t.is(result, 1);
    t.end();
  });
});

Test.cb('#divide(2,2) is 1', t => {
  Calculator.divide(2, 2, (err, result) => {
    if (err) t.fail(err);
    t.is(result, 1);
    t.end();
  });
});

Test.cb('#divide(2,0) is 1', t => {
  Calculator.divide(2, 0, (err) => {
    t.is(err, DIVISION_ERROR);
    t.end();
  });
});

Test.cb('#multiply(1,2) is 2', t => {
  Calculator.multiply(1, 2, (err, result) => {
    if (err) t.fail(err);
    t.is(result, 2);
    t.end();
  });
});


Test(`CalculatorBetter.add(1,2) is 3`, t => {
  return CalculatorBetter.add(1, 2)
    .then((result) => {
      t.is(result, 3);
    })
    .catch(err => {
      t.fail(err);
    });
});

Test(`CalculatorBetter.subtract(2,1) is 1`, t => {
  return CalculatorBetter.subtract(2, 1)
    .then((result) => {
      t.is(result, 1);
    });
});

Test(`CalculatorBetter.divide(2,2) is 1`, t => {
  return CalculatorBetter.divide(2, 2)
    .then((result) => {
      t.is(result, 1);
    });
});

Test(`CalculatorBetter.divide(2,2) is 0`, t => {
  return CalculatorBetter.divide(2, 0)
    .catch(err => {
      t.is(err, DIVISION_ERROR)
    });
});

Test(`CalculatorBetter.subtract(2,1) is 2`, async t => {
  const result = await CalculatorBetter.subtract(2, 1);
  t.is(result, 1);
});

Test(`UberCalculator.add(2,1) is 3`, async t => {
  const result = await UberCalculator.add(1, 2);
  t.is(result, 3);
});


Test(`UberCalculator.add(2,1) is 3`, t => {
  
  return UberCalculator.add(2, 1)
    .then(result => t.is(result, 3));
  
});


Test(`(5+5)/2 gives us 5`, t => {
  
  // p
  console.log(Promise.resolve);
  
  // p
  console.log(Promise.reject);
  
  console.log(Promise.then);
  console.log(Promise.catch);
  
  
  const p = new Promise(resolve => resolve());
  console.log(p.then);
  console.log(p.catch);
  
  
  return CalculatorBetter.add(5, 5)
    .then(result => CalculatorBetter.divide(result, 2))
    .then((divisionResult) => {
      t.is(divisionResult, 5);
    });
});

Test(`(5+5)/0 gives us an error`, t => {
  return CalculatorBetter.add(5, 5)
    .then(result => CalculatorBetter.divide(result, 0))
    .then((divisionResult) => t.is(divisionResult, 5))
    .catch(err => {
      t.truthy(err);
    });
});

Test(`(5+5)/2 gives us 5 with async/await`, async t => {
  const additionResult = await CalculatorBetter.add(5, 5);
  const divisionResult = await CalculatorBetter.divide(additionResult, 2)
  
  
  
  
  
  
  
  
  t.is(divisionResult, 5);
  
  const result = await CalculatorBetter.add(5, 5)
    .then(result => CalculatorBetter.divide(result, 2));
  
  t.is(result, 5);
  
});


Test(`add and subtract at the same time, 
      no dependence on each others result`, t => {
  
  // Running in parallel, not sequentially
  const promises = [
    CalculatorBetter.add(5, 5),
    CalculatorBetter.subtract(5, 5)
  ];
  
  return Promise.all(promises)
    .then(result => console.log(result));
});

Test(`add and subtract at the same time, 
      no dependence on each others result`, async t => {
  
  // Running in parallel, not sequentially
  
  const result = await Promise.all([
    CalculatorBetter.add(5, 5),
    CalculatorBetter.subtract(5, 5)
  ]);
  
  
  t.deepEqual(result, [10, 0]);
});




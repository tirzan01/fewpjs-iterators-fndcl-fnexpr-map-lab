const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  let myArr = tutorials.map(element=>{return element.split(' ')})

 myArr = myArr.map(element=>{return element.map(subE=>subE[0].toUpperCase()+subE.slice(1))})

  myArr = myArr.map(element=>element.join(' '))

  return myArr
}

const parseJSON = (jsonToString) => {
  try {
    return JSON.parse(jsonToString);
  } catch {
    return 'Invalid JSON string';
  }
};

console.log(parseJSON('{"name": "John", "age": 30}'));
console.log(parseJSON('{"name": "John", "age":'));
console.log(parseJSON('{"key": "value", "number": 123}'));
console.log(parseJSON('{"array": [1, 2, 3]}'));
console.log(parseJSON('{"bool": true}'));
console.log(parseJSON('null'));
console.log(parseJSON('undefined'));

const getPropertyDescriptors = function (obj) {
  const propertyNames = Object.getOwnPropertyNames(obj);
  const propertyValues = Object.getOwnPropertyDescriptors(obj);
  const result = [];

  for (const propName of propertyNames) {
    const descriptor = propertyValues[propName];
    result.push({ name: propName, descriptor });
  }

  return result;
};

const mathProperties = getPropertyDescriptors(Math);
console.log(mathProperties);

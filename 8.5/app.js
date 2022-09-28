const obj = { car: 'Tesla', color: 'Red', model: '3' };
const func = (objectInput) => {
  const resObj = {};
  
  for (const [key, val] of Object.entries(objectInput)) {
    resObj[val] = key;
  }
  return resObj;
};

console.log(func(obj));
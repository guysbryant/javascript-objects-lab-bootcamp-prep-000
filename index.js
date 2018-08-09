var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, key.value);
  console.log(newObj);
  return newObj;
  
}

updateObjectWithKeyAndValue();
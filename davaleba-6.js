function findObjectByName(objectsArray, targetName) {
    const foundObject = objectsArray.find(obj => obj.name === targetName);
    return foundObject || null;
  }
  const arrayOfObjects = [
    { name: 'ana'},
    { name: 'nana'},
    { name: 'liako'}
  ];
  const targetObjectName = 'nana';
  const result = findObjectByName(arrayOfObjects, targetObjectName);
  if (result) {
    console.log('Object found:', result);
  } else {
    console.log('Object not found');
  }
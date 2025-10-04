const getStoredBook = () => {
  const storedBook = localStorage.getItem("readList");
  if (storedBook) {
    return JSON.parse(storedBook);
  } else {
    return [];
  }
};

const getStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if(storedBookData.includes(id)){
    alert('Already exists')
  }
  else{storedBookData.push(id)}
};

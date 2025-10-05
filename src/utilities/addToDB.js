import { toast } from "react-toastify";

const getStoredBook = () => {
  const storedBook = localStorage.getItem("readList");
  if (storedBook) {
    return JSON.parse(storedBook);
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    toast.error("Already exists");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    toast.success("Book marked as read!");
  }
};

export { addToStoredDB, getStoredBook };

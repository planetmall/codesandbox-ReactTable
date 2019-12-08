const jsonPlaceHolderAPI = {
  call: fetch("https://jsonplaceholder.typicode.com/todos/").then(r => r.json())
};

export { jsonPlaceHolderAPI };


  const data = (() => {
    const api = 'https://redux-bookstore-api.herokuapp.com/api/v1/books';
    const getData = async () => {
      const data = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        };
      const request = await fetch(api, data);
      const response = await request.json();
      return response.data;
    }
    return { getData }
  })() 
   
export default data;
    
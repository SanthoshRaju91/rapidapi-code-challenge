function validate(api) {
    return new Promise((resolve, reject) => {
      if (api.apiUrl && api.apiHost && api.apiKey) {
        fetch(api.apiUrl, {
          headers: {
            "X-RapidAPI-Host": api.apiHost,
            "X-RapidAPI-Key": api.apiKey
          }
        })
          .then(response => {
            console.log(response.status);
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      } else {
        alert(
          "Nope, something is not right. Check data/index.js, to see if all the API configurations are set"
        );
      }
    });
  }
  
  export default validate;
  
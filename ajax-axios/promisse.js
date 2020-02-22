axios.get('https://api.github.com/users/brunomarques-br')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(response);
    });
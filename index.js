function submitData(name,email) {
    //create the data object to be sent
    const userData = {
        name: name,
        email: email
    };

    //Return the fetch chain
    return fetch('http://localhost:5500/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        //check if response is ok
        if(!response.ok){
            throw new error('Network response was not ok')
        }
        return response.json();
    })
    .then(data => {
        //Append the new id to the DOM
        const newId = document.createElement('p');
        newId.textContent = data.id;
        document.body.appendChild(newId);
        return data;
    })
    .catch(error => {
        //Append error message to the DOM
        const errorMessage= document.createElement('p');
        errorMessage.textContent =  error.message;
        document.body.appendChild(errorMessage);
        throw error;
    });
}
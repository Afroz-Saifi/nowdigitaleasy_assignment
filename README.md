# nowdigitaleasy_assignment

## Live link : <a>https://famous-beanie-boa.cyclic.app/</a>

## Routes
/users/add : It is a POST route to add a new user
body: {
    name: String,
    email: String,
    role: String, // default is User
    phoneNumber: Number
}

/users/all_users : It is a GET route to get the details of all the users

/users/user:id : It is a GET route to get the user details by ID

/users/delete/:id : It is a DELTE route to delte a user by its ID

/users/update/:id : It is PUT route to update a users details by its ID
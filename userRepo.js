function getUser() {  
    return {"id": 1, "name": "jonDoe"}
}

function getUsers() {
   
    return [{"id": 1, "name": "jonDoe"}, {"id": 2, "name": "janeDoe"}]
}

module.exports = {
    getUser,
    getUsers
}
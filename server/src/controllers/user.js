
export const createUser = (req,res)=>{
    res.send("user created successfully !")
}


export const getAllUsers = (req, res)=>{
    res.send("Get all users")
}

export const getUniqueUser = (req, res)=>{
    const {user} = req.params.id
    res.send(`user n°${user} get sucessfully`)
}

export const updateUser = (req, res)=>{
    const {user} = req.params.id
    res.send(`user n°${user} updated sucessfully`)
}

export const deleteUniqueUser = (req, res)=>{
    const {user} = req.params.id
    res.send(`user n°${user} deleted sucessfully`)
}




let users = []

function create(req, res) {
    const { name, age } = req.body
    const newuser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        age 
    }
    users.push(newuser)
    return res.status(201).json(newuser)
}

function list(req, res){
    const currentUser = users.find(
        (user) => user.id === parseInt(request.params.id)
    )
    if(!currentUser) res.send("Não foi encontrado")
    return res.status(200).json(currentUser)
}

function deleteU(req, res){
     const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id)
    )
    if(index === -1) res.send("Não encontrado para excluir")
    users.splice(0, index)
    return res.status(200).json("Excluido com sucesso")
}

function edit(req, res){
    const { age, name } = req.body

    const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id)
    )

    if(index === -1) res.send("Não encontrado para editar")

    const updateduser = {
        id: users[index].id,
        age,
        name
    }

    users[index] = updateduser

    
    return res.status(200).json("Excluido com sucesso")
}

module.exports = {create, list, deleteU, edit}
const verifyToken = async (request, response, next) => {
    if(!request.headers.authorization){
        return response.status(401).json("Não autorizado")
    }

    return next()
}

module.exports =  verifyToken 
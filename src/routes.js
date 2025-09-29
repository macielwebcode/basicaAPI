const { Router } = require("express")
const { create, list, deleteU, edit } = require("./controllers/users")
const verifyToken = require("./middlewares/AuthMiddleware")

const routes = Router()


routes.get('/health', (req, res) => {
    res.send("api rodando")
})



routes.post('/users', create)

routes.get("/users/:id", list)
    
routes.use(verifyToken)

routes.delete("/users/:id", deleteU)

routes.put("/users/:id", edit)


module.exports = routes;
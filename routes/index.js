const express = require("express")
const teamRouter = require("./teamRouter")

function routerApi(app){
  const router = express.Router()
  app.use("/api/v1", router)
  router.use("/teams", teamRouter)
}

module.exports = routerApi

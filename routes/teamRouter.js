const express = require("express")
const routes = express.Router()
const teamSchema = require("../models/teams")

/*POST */
routes.post("/team", (req, res) => {
    const team = teamSchema(req.body)
    team
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*GET */
routes.get("/", (req, res) => {
    teamSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// routes.get("/:teamId", (req, res) => {
//     const { teamId } = req.params
//     teamSchema
//         .findById(teamId)
//         .then((data) => res.json(data))
//         .catch((error) => res.json({ message: error }))
// })

routes.get("/:country", (req, res) =>{
    const { country } = req.params;
    teamSchema
        .findOne({ 'informationAdditional.country.name': country })
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
})

routes.put("/:teamId", (req, res) => {
    const { teamId } = req.params
    const {
        owner,
        city,
        informationClub,
        informationAdditional
        } = req.body
    teamSchema
        .updateOne(
            { _id: teamId },
            { $set: { owner, city, informationClub, informationAdditional } }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

routes.delete("/:teamId", (req, res) => {
    const { teamId } = req.params
    teamSchema
        .deleteOne({ _id: teamId })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = routes

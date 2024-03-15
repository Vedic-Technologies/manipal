const express = require("express")
const {
    GetAllUsers,
    GetUserById,
    UpdateUserById,
    deleteUserById,
    CreateNewUser
} = require('../controllers/user')

const router = express.Router();

router.route("/")
    .get(GetAllUsers)
    .post(CreateNewUser)

router
    .route("/:id")
    .get(GetUserById)
    .patch(UpdateUserById)
    .delete(deleteUserById)

module.exports = router;
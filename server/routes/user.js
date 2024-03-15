const express = require("express")
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handledeleteUserById,
    handleCreateNewUser
} = require('../controllers/user')

const router = express.Router();

router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handledeleteUserById)

module.exports = router;
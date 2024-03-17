const User = require("../models/user");

async function GetAllUsers(req, res) {
  const alldbUsers = await User.find({});
  return res.json(alldbUsers);
}

async function GetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function UpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
  res.json({ status: "success patched" });
}

async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "deleted successfully" });
}

async function CreateNewUser(req, res) {
  console.log(req.body);
  const body = req.body;
  console.log(body)
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "all fields are req..." });
  }
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });
  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  GetAllUsers,
  GetUserById,
  UpdateUserById,
  deleteUserById,
  CreateNewUser,
};

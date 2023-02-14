const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend

} = require('../../controllers/usersController.js');

// /api for users
router.route('/').get(getUsers).post(createUser);

// /api :usersId
router
  .route('/:usersId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api :usersId/friends/:friendId
router
.route('/:usersId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
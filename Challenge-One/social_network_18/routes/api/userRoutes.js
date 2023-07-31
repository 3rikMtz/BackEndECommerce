const router = require('express').Router(); 

const {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userControllers.js'); 

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser); 

router // /api/users/:userId
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

router  // /api/users/:userId/friends/:friendId
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router; 
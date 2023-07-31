const router = require('express').Router(); 

const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReation,
    deleteReaction,

    

} = require('../../controllers/thoughtControllers.js'); 

// /api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createThought)

router // /api/thoughts/:thoughtId
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router // /api/thoughts/:thoughtId/reactions
    .route('/:thoughtId/reactions')
    .post(createReation)
    
router  // /api/thoughts/:thoughtId/reactions/:reactionId
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router; 
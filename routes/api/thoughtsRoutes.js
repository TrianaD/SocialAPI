const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  postNewThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController.js');

// /api  for thoughts
router.route('/').get(getThoughts).post(postNewThought);

// /api for /:thoughtsId
router
  .route('/:thoughtsId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  // /api  for /:thoughtsId/reactions
router.route('/:thoughtsId/reactions').post(createReaction);

// /api /:thoughtsId/reactions/:reactionId
router.route('/:thoughtsId/reactions/:reactionId').delete(deleteReaction);
  

module.exports = router;
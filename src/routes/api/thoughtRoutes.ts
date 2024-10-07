import { Router } from 'express';
import { getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
 } from '../../controllers/thoughtController';

const router = Router();

router.get('/', getAllThoughts);

router.get('/:id', getThoughtById);

router.post('/', createThought);

router.put('/:id', updateThought);

router.delete('/:id', deleteThought);

router.post('/:thoughtId/reactions', addReaction);

router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

export default router;
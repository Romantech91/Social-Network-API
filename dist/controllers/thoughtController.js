import Thought from '../models/Thought.js';
import User from '../models/User.js';
export const getAllThoughts = async (_, res) => {
    try {
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts);
    }
    catch (err) {
        res.status(500).json({ message: 'Unable to get thoughts', error: err });
    }
};
export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        return res.status(200).json(thought);
    }
    catch (err) {
        return res.status(500).json({ message: 'Unable to get thought', error: err });
    }
};
export const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
        res.status(201).json(thought);
    }
    catch (err) {
        res.status(400).json({ message: 'Unable to create thought', error: err });
    }
};
export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        return res.status(200).json(thought);
    }
    catch (err) {
        return res.status(400).json({ message: 'Unable to update thought', error: err });
    }
};
export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        await User.findByIdAndUpdate(thought.username, {
            $pull: { thoughts: thought._id }
        });
        return res.status(200).json({ message: 'Thought deleted successfully' });
    }
    catch (err) {
        return res.status(500).json({ message: 'Unable to delete thought', error: err });
    }
};
export const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true, runValidators: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        return res.status(200).json(thought);
    }
    catch (err) {
        return res.status(400).json({ message: 'Unable to add reaction', error: err });
    }
};
export const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        return res.status(200).json(thought);
    }
    catch (err) {
        return res.status(400).json({ message: 'Unable to delete reaction', error: err });
    }
};

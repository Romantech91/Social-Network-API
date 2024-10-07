import { Request, Response } from "express";
import Thought from "../models/Thought";
import User from "../models/User";

export const getAllThoughts = async (_: Request, res: Response) => {
    try {
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get thoughts', error: err });
    }
};

export const getThoughById = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get thought', error: err });
    }
};

export const createThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
        res.status(201).json(thought);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create thought', error: err });
    }
};

export const updateThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(400).json({ message: 'Failed to update thought', error: err });
    }
};

export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id' });
        }
        await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } });
        res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete thought', error: err });
    }
};

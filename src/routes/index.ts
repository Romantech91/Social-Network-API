import { Router } from 'express';
import apiRoutes from './api/index.js';
import userRoutes from './api/userRoutes.js';

const router = Router();

router.use('/api', apiRoutes);
router.use('/api/users', userRoutes);

export default router;

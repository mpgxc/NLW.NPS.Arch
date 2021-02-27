import { Router } from 'express';

import { userRouter } from './Accounts.routes';
import { surveyRouter } from './Surveys.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/surveys', surveyRouter);

export { router };

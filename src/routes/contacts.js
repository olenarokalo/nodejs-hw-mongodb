import { Router } from 'express';

import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  patchContactController,
  upsertContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getAllContactsController));
router.get('/:Id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(createContactController),
);

router.delete('/:Id', isValidId, ctrlWrapper(deleteContactController));

router.put(
  '/:Id',
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(upsertContactController),
);

router.patch(
  '/:Id',
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(patchContactController),
);

export default router;

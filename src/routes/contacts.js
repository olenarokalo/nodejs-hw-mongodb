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

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));
router.get('/contacts/:Id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/contacts',
  validateBody(createStudentSchema),
  ctrlWrapper(createContactController),
);

router.delete('/contacts/:Id', isValidId, ctrlWrapper(deleteContactController));

router.put(
  '/contacts/:Id',
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(upsertContactController),
);

router.patch(
  '/contacts/:Id',
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(patchContactController),
);

export default router;

import { generList } from '../constans/contacts';

const parseType = (type) => {
  const isString = typeof contactType === 'string';
  if (isString) return;

  if (generList.includes(type)) {
    return type;
  }
};

const parseBoolean = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;

  return isFavourite === 'true';
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedBoolean = parseBoolean(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedBoolean,
  };
};

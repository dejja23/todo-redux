export const CHANGEHANDLER = 'CHANGEHANDLER';
export const changeHandler = event => {
  return { type: CHANGEHANDLER, event };
};

export const ADDHANDLER = 'ADDHANDLER';
export const addHandler = () => {
  return { type: ADDHANDLER };
};

export const COMPLETEHANDLER = 'COMPLETEHANDLER';
export const completeHandler = index => {
  return { type: COMPLETEHANDLER, index };
};

export const REMOVEHANDLER = 'REMOVEHANDLER';
export const removeHandler = index => {
  return { type: REMOVEHANDLER, index };
};

export const EDITINPUTHANDLER = 'EDITINPUTHANDLER';
export const editinputHandler = event => {
  return { type: EDITINPUTHANDLER, event };
};

export const EDITHANDLER = 'EDITHANDLER';
export const editHandler = index => {
  return { type: 'EDITHANDLER', index };
};

export const CANCELEDIT = 'CANCELEDIT';
export const cancelEdit = () => {
  return { type: EDITINPUTHANDLER };
};

export const SAVEEDIT = 'SAVEEDIT';
export const saveEdit = () => {
  return { type: 'SAVEEDIT' };
};

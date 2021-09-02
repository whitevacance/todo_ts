import { createContext, useContext } from 'react';

export const alert = {
  isOpen: false,
  type: 'alert',
  body: {
    title: 'initial title',
    content: 'initial message',
    confirm: '확인',
    cancel: '취소',
  },
  onConfirm: null,
  top: null,
};
export const openAlert = () => {};
export const closeAlert = () => {};

const context = createContext({ alert, openAlert, closeAlert });
export const useAlert = () => useContext(context);
export default context;

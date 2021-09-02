import { createContext, useContext } from 'react';

export const isCat = false;
export const isDev = true;
export const imgUrl = isCat
  ? 'https://img.catpre.com/event/catpre'
  : 'https://img.dogpre.com/event/dogpre';

const context = createContext({ isCat, isDev, imgUrl });
export const usePreset = () => useContext(context);
export default context;

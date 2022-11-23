import { atom } from 'recoil';

const selectedMenuAtom = atom({
  key: 'selectedMenuAtom',
  default: 'all',
});

export { selectedMenuAtom };

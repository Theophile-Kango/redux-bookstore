import { v4 as uuidv4 } from 'uuid';

export const INITIAL_STATE = [
  { id: uuidv4(), title: 'Game of thrones', category: 'Action' },
  { id: uuidv4(), title: 'Life story', category: 'Biography' },
  { id: uuidv4(), title: 'Second workd wore', category: 'History' },
  { id: uuidv4(), title: 'Vampire', category: 'Horror' },
  { id: uuidv4(), title: 'Tintin au Congo', category: 'Kids' },
  { id: uuidv4(), title: 'The raod to learn react', category: 'Learning' },
  { id: uuidv4(), title: 'Mistery', category: 'Sci-Fi' },
];

export default INITIAL_STATE;

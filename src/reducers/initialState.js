import { v1 as uuidv1 } from 'uuid';

export const INITIAL_STATE = [
  { id: uuidv1(), title: 'Game of thrones', category: 'Action' },
  { id: uuidv1(), title: 'Life story', category: 'Biography' },
  { id: uuidv1(), title: 'Second workd wore', category: 'History' },
  { id: uuidv1(), title: 'Vampire', category: 'Horror' },
  { id: uuidv1(), title: 'Tintin au Congo', category: 'Kids' },
  { id: uuidv1(), title: 'The raod to learn react', category: 'Learning' },
  { id: uuidv1(), title: 'Mistery', category: 'Sci-Fi' },
];

export default INITIAL_STATE;

import { Note } from "../types/notes.type";

export const notesData: Note[] = [
  {
      id: 1,
      title: 'Überschrift 1',
      content: '...',
      categories: ['Büro', 'Haushalt'],
      user: 'John Doe',
      date: new Date('2024-04-29')
  },
  {
      id: 2,
      title: 'Überschrift 2',
      content: '...',
      categories: ['Büro'],
      user: 'Jane Smith',
      date: new Date('2024-04-28')
  },
  // Füge weitere Notizen hinzu und vergiss nicht, user und date einzuschließen
];

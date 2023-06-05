import { noteRepository } from '@/repository/NoteRepository'
import type { Note } from '@/entities/Note'

export const noteCollectionRepository = {
  async add(note: Note) {
    const table = noteRepository.table()
    const store = await table.where({ template: note.template }).toArray();
    note.id = crypto.randomUUID()
    note.createdAt = Date.now()
    note.updatedAt = Date.now()
    note.index = store.length + 1
    return table.add(note)
  },
  fetch() {
    const order: keyof Note = 'createdAt'
    return noteRepository.table().toCollection().sortBy(order)
  }
}

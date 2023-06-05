export type Note = {
  id: string
  text: string
  diagrams: string[]
  createdAt: number
  updatedAt: number
  index: number
  template: string
}

export const getDefaultNote = (): Note => ({
  id: '',
  text: '',
  template: '',
  diagrams: [],
  createdAt: 0,
  updatedAt: 0,
  index: -1
})

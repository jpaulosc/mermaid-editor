import flowchartTemplate from '@/assets/templates/flowchart.md?raw'
import sequenceDiagramTemplate from '@/assets/templates/sequenceDiagram.md?raw'
import classDiagramTemplate from '@/assets/templates/classDiagram.md?raw'
import stateDiagramTemplate from '@/assets/templates/stateDiagram.md?raw'
import erDiagramTemplate from '@/assets/templates/erDiagram.md?raw'

import { injectUseNoteCollection } from '@/store/UseNoteCollection'
import { injectUseNoteSingle } from '@/store/UseNoteSingle'

export const templates = {
  'flowchart': {
    'type': flowchartTemplate,
    'title': 'flowchart'
  },
  'sequence': {
    'type': sequenceDiagramTemplate,
    'title': 'sequenceDiagram'
  },
  'class': {
    'type': classDiagramTemplate,
    'title': 'classDiagram'
  },
  'state': {
    'type': stateDiagramTemplate,
    'title': 'stateDiagram'
  },
  'er': {
    'type': erDiagramTemplate,
    'title': 'erDiagram'
  }
}

export const useAddNote = () => {
  const { add, fetch } = injectUseNoteCollection()
  const { read, getText, renderHtml } = injectUseNoteSingle()

  const addNewNote = async (temp: keyof typeof templates) => {
    const id = await add(templates[temp].type, temp)
    await read(id)
    await renderHtml(getText())
    await fetch()
  }

  return { addNewNote }
}

import { describe, it, expect } from 'vitest'
import { START_DIAGRAM, parser, END_DIAGRAM } from './NoteParser'
import defaultDiagramTemplate from '@/assets/templates/defaultDiagram.md?raw'
import classDiagramTemplate from '@/assets/templates/classDiagram.md?raw'

describe('NoteParse.spec', () => {

  const defaultDiagram = defaultDiagramTemplate.replace(START_DIAGRAM, '').replace(END_DIAGRAM, '').trim()
  const classDiagram = classDiagramTemplate.replace(START_DIAGRAM, '').replace(END_DIAGRAM, '').trim()

  it('Extrair blocos mermaid da remarcação', () => {
    const markdown = `# título\n${defaultDiagramTemplate}\ntexto\n${classDiagramTemplate}\n`
    const { diagrams } = parser(markdown)
    expect(diagrams.length).toBe(2)
    expect(diagrams[0]).toBe(defaultDiagram)
    expect(diagrams[1]).toBe(classDiagram)
  })

  it('Quaisquer blocos mermaid não fechados são ignorados', () => {
    const markdown = `# título\n${START_DIAGRAM}\ntexto\n${classDiagramTemplate}\n`
    const { diagrams } = parser(markdown)
    expect(diagrams.length).toBe(1)
    expect(diagrams[0]).toBe(classDiagram)
  })

  it('Se a frase terminar com um bloco mermaid、``` pode ser omitida', () => {
    const markdown = `# título\n${defaultDiagramTemplate}\ntexto\n${START_DIAGRAM}\nclassDiagram\n`
    const { diagrams } = parser(markdown)
    expect(diagrams.length).toBe(2)
    expect(diagrams[0]).toBe(defaultDiagram)
    expect(diagrams[1]).toBe('classDiagram')
  })

  it('mermaid uma matriz vazia se não houver blocos', () => {
    const { diagrams } = parser('teste')
    expect(diagrams.length).toBe(0)
  })
})

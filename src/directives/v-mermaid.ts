import type { Directive } from 'vue'
import { render } from '@/plugin/Mermaid'

interface VMermaidElement extends HTMLElement {
  __timer__: number
}

export const vMermaid: Directive<VMermaidElement> = {
  updated(el) {
    if (el.__timer__) {
      clearInterval(el.__timer__)
    }
    el.__timer__ = window.setTimeout(() => {
      const targets = el.querySelectorAll<HTMLElement>(`.mermaid`)
      targets.forEach(async (target) => {
        let result = ''
        try {
          result = await render(target.textContent || '')
        } catch (error) {
          error instanceof Error && (result = error.message)
        } finally {
          target.insertAdjacentHTML('afterend', `<div class="diagram-svg">${result}</div>`)
        }
      })
    }, 500)
  }
}

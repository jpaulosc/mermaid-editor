import { marked } from 'marked'
import DOMPurify from 'dompurify'

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if ('target' in node) {
    node.setAttribute('target', '_blank')
    node.setAttribute('rel', 'noopener noreferrer')
  }
  switch (node.tagName.toLowerCase()) {
    case 'table':
      node.className = 'table table-hover'
      break;
    case 'pre':
      node.className = node.getElementsByTagName('code')[0].className.replace('language-', '')
      node.setAttribute('hidden', '')
      break;
  }
})

export const convertToHtml = (md: string) => DOMPurify.sanitize(marked(md))
<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { createEditor } from '@/plugin/MonacoEditor'
import { injectUseNoteSingle } from '@/store/UseNoteSingle'
import defaultDiagramTemplate from '@/assets/templates/defaultDiagram.md?raw'

const { current, getText, readCache, update, setCurrentHtml, renderHtml } = injectUseNoteSingle()
const element = ref<HTMLElement | null>(null);

onMounted(async () => {
  await readCache()

  const editor = createEditor(element.value as HTMLElement, {
    value: getText() || defaultDiagramTemplate
  })

  editor.onDidChangeModelContent(async (event) => {
    !event.isFlush && (await update(editor.getValue()))
    await renderHtml(editor.getValue())
  })

  watch(
    () => current.value.id,
    (id) => editor.setValue(id ? getText() : '')
  )

  await setCurrentHtml(
    current.value.id ? undefined : defaultDiagramTemplate
  )
})
</script>

<template>
  <div ref="element" class="note-editor overflow-hidden"></div>
</template>
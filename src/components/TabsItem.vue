<script setup lang="ts">
import { watch, computed } from 'vue'
import Diagram from '@/components/Preview/Diagram.vue'
import { injectUseNoteCollection } from '@/store/UseNoteCollection'
import { injectUseNoteSingle } from '@/store/UseNoteSingle'
import { useSelectNote } from '@/usecase/UseSelectNote'

const { selectNote, deleteNote } = useSelectNote()
const { notes, fetch } = injectUseNoteCollection()
const { current } = injectUseNoteSingle()

watch(
  current.value,
  async () => await fetch(),
  { immediate: true }
)

</script>

<template>
  <div v-for="note in notes" :key="note.id"
    class="relative flex h-[36px] pr-2 cursor-pointer items-center gap-2 rounded-sm text-sm transition-[background] duration-[0.3s,color] qwe"
    :class="[note.id == current.id ? 'bg-slate-400 text-white': 'bg-slate-800 hover:bg-slate-400 text-white']">
    <div class="py-2 pl-3 pr-2 font-semibold" :class="{ 'pointer-events-none': note.id === current.id }" role="button"
      @click="selectNote(note.id)">
      {{ note.template }} {{ note.index }}
    </div>
    <div class="relative hover:bg-slate-800 rounded-full transition-[background] duration-[0.3s] z-40"
      @click="deleteNote(note)">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="m7 7l10 10M7 17L17 7" />
      </svg>
    </div>
    <div v-if="note.id !== current.id" class="preview flex flex-row gap-2">
      <div v-for="(diagram, index) in note.diagrams" :key="index">
        <diagram :diagram="diagram" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.inner:is(:hover, .current) {
  outline-offset: -0.4rem;
  outline: 0.4rem solid var(--bs-pink);
}

.diagram-svg {
  display: grid;
  place-content: center;
  height: 14rem;
}

.secondary {
  width: calc(50% - 0.125rem);
}

.secondary .diagram-svg {
  height: 3.5rem;
}
</style>

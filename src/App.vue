<script setup lang="ts">
import Tabs from '@/components/Tabs.vue'
import Sidenav from '@/components/Sidenav.vue'
import Editor from '@/components/Editor.vue'
import Preview from '@/components/Preview.vue'
import { provideUseNoteCollection } from '@/store/UseNoteCollection'
import { provideUseNoteSingle } from '@/store/UseNoteSingle'

provideUseNoteCollection()
provideUseNoteSingle()
</script>

<template>
  <div class="flex flex-row h-screen">
    <sidenav />
    <div class="flex flex-1 flex-col">
      <tabs />
      <div class="flex flex-row flex-1 h-[calc(100vh_-_56px)]">
        <editor class="note-editor" />
        <div class="flex flex-col flex-1">
          <preview />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-size: 0.875rem;
}
[role='button'] {
  user-select: none;
}
.mermaid-editor {
  display: grid;
  grid-template-columns: auto auto minmax(40rem, 1fr);
  grid-template-rows: auto 1fr;
  height: 100vh;
}

.app-header {
  grid-column: 1 / 4;
}

.note-editor {
  width: 45rem;
}

.hidden {
  padding: 0;
  width: 0;
  height: 0;
}
</style>

<script setup lang="ts">
import { provideUseNotePreview } from '@/store/UseNotePreview'
import { injectUseNoteSingle } from '@/store/UseNoteSingle'
import { vMermaid } from '@/directives/v-mermaid'

const { imgSize, addImgSize } = provideUseNotePreview()
const { htmlString } = injectUseNoteSingle()
</script>

<template>
  <div class="d-flex flex-column overflow-hidden">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-mermaid class="flex-grow-1 pt-3 px-3 pb-0 overflow-auto" v-html="htmlString"></div>
    <div
      class="fixed flex justify-center items-center text-white bottom-9 right-9 h-16 w-16 rounded-full group transition-[background] duration-[0.4s] bg-black hover:bg-gray-700 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg"
        class="transition-[transform] rotate-0 duration-[0.3s] group-hover:rotate-45" width="24" height="24"
        viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
      </svg>
      <div class="absolute bottom-[100%] p-1 pb-2 flex flex-col gap-1 justify-center items-center">
        <button type="button"
          class="p-2 rounded-full bg-black hover:bg-gray-700 text-white flex items-center justify-center transition-[transform] duration-[0.3s] delay-[180ms] scale-0 group-hover:scale-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="m12 16l4-5h-3V4h-2v7H8z" />
            <path fill="currentColor" d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
          </svg>
        </button>
        <button type="button"
          class="p-2 rounded-full bg-black hover:bg-gray-700 text-white flex items-center justify-center transition-[transform] duration-[0.3s] delay-[180ms] scale-0 group-hover:scale-100" @click="addImgSize(10)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314ZM11 8v6m-3-3h6" />
          </svg>
        </button>
        <button type="button"
          class="p-2 rounded-full bg-black hover:bg-gray-700 text-white flex items-center justify-center transition-[transform] duration-[0.3s] delay-[180ms] scale-0 group-hover:scale-100" @click="addImgSize(-10)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314ZM8 11h6" />
          </svg>
        </button>
      </div>
    </div>

</div></template>

<style scoped>:deep(.diagram-svg) {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.diagram-svg) svg {
  max-width: unset !important;
  width: calc(40rem * v-bind('imgSize'));
}</style>

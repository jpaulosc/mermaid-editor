<script setup lang="ts">
import TabsItem from '@/components/TabsItem.vue'
import { useAddNote, templates } from '@/usecase/UseAddNote'

const { addNewNote } = useAddNote()
</script>
<template>
  <div class="flex h-[56px] items-center justify-start border-b border-b-slate-600 bg-slate-900 px-2 gap-2">
    <tabs-item />
    <div class="ml-4 mr-1 h-[18px] border-l border-l-slate-600 opacity-50"></div>
    <button type="button"
      class="relative group cursor-pointer rounded-full border-none px-1 py-1 text-slate-50 outline-0 hover:bg-slate-700 z-20 transition-[background] duration-[0.3s]">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z" />
      </svg>
      <div class="absolute left-0 top-5 flex-col overflow-hidden text-left hidden group-hover:!flex w-48">
        <div class="mt-4 px-1 py-1 rounded-sm bg-slate-800">
          <div v-for="(tpl, id) in templates" :key="id" role="button" class="rounded-sm px-3 py-1 hover:bg-slate-400 transition-[background] duration-[120ms]"
            @click="addNewNote(id as keyof typeof templates)">
            {{ tpl.title }}
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
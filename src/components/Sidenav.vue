<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { provideUseLayout } from '@/store/UseLayout'
import { injectUseNoteSingle } from '@/store/UseNoteSingle'

const fullscreen = ref(false)

const toggleFullscreen = () => {
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => fullscreen.value = false)
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen().then(() => fullscreen.value = true);
  }

  document.addEventListener('fullscreenchange',
    () => fullscreen.value = document.fullscreenElement instanceof Element
  );
}

const { darkMode } = provideUseLayout()
</script>

<template>
  <div class="flex h-screen w-[58px] flex-col items-center gap-2 border-r border-r-slate-600 bg-slate-900">
    <div
      class="mb-1 flex w-full cursor-pointer justify-center border-b border-solid border-b-slate-600 px-1 py-1 text-cyan-400 hover:bg-slate-600">
      <svg width="48" height="48" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M13 7v8h-2v-1H9v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7h-2M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
    </div>
    <button type="button"
      class="flex h-[42px] w-[46px] cursor-pointer items-center justify-center rounded-sm border-0 py-3 text-slate-100 outline-0 hover:bg-slate-400"
      title="Settings" @click='toggleFullscreen'>
      <svg v-if="fullscreen" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8 19v-3H5v-2h5v5H8Zm6 0v-5h5v2h-3v3h-2Zm-9-9V8h3V5h2v5H5Zm9 0V5h2v3h3v2h-5Z" />
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
      </svg>
    </button>
    <div class="my-3 h-px w-[46px] bg-slate-600 hidden"></div>
    <button type="button"
      class="group flex h-[42px] w-[46px] cursor-pointer items-center justify-center rounded-sm border-0 py-3 text-slate-100 outline-0 hover:bg-slate-400 hidden"
      title="Settings" @click='darkMode = !darkMode'>
      <svg v-if="darkMode" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm18 0q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8-8q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm0 18q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7q-.275.3-.687.288T5.65 7.05ZM18 19.425l-1.05-1.075q-.275-.3-.275-.713t.275-.687q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288Z" />
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19Zm-.25-6.75Z" />
      </svg>
    </button>
    <div class="hidden mb-2 mt-auto flex flex-col items-center justify-center gap-2">
      <button type="button"
        class="mt-4 flex cursor-pointer items-center justify-center rounded-full border-0 text-slate-600 outline-0 hover:text-slate-400"
        title="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" />
        </svg>
      </button>
      <button type="button"
        class="hidden flex h-[42px] w-[46px] cursor-pointer items-center justify-center rounded-sm border-0 py-3 text-slate-100 outline-0 hover:bg-slate-400"
        title="Settings">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="3" />
            <path
              d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361c0 .558-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453c.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z" />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.brand-color {
  color: var(--bs-pink);
}
</style>

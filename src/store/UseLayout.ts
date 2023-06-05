import { computed, inject, type InjectionKey, provide, ref } from 'vue'

const useLayout = () => {
  const isShowMenu = ref(true)
  const darkMode = ref(true)

  const showMenu = () => isShowMenu.value = true
  const hideMenu = () => isShowMenu.value = false

  return {
    isShowMenu: computed(() => isShowMenu.value),
    darkMode,
    showMenu,
    hideMenu
  }
}

const USE_LAYOUT: InjectionKey<ReturnType<typeof useLayout>> = Symbol('USE_LAYOUT')

export const provideUseLayout = () => {
  const useObj = useLayout()
  provide(USE_LAYOUT, useObj)
  return useObj
}

export const injectUseLayout = () => {
  const useObj = inject(USE_LAYOUT)

  if (useObj) {
    return useObj
  } else {
    throw new Error('error injectUseLayout')
  }
}

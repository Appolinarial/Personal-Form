import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const parent = ref({ name: '', age: '' })
  const children = ref([])

  function saveFormData(parentData, childrenData) {
    parent.value = parentData
    children.value = childrenData
  }

  return { parent, children, saveFormData }
})

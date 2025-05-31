<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/store.js'
import AppLayout from "../components/AppLayout.vue"

const router = useRouter()
const store = useFormStore()

const parentName = ref('')
const parentAge = ref('')
const parentAgeError = ref('')
const parentNameError = ref('')
const children = ref([])

function addChild() {
  if (children.value.length < 5) {
    children.value.push({ name: '', age: '' })
  }
}

function removeChild(index) {
  children.value.splice(index, 1)
}

function submitForm() {
  if (!parentName.value.trim()) {
    parentNameError.value = 'Поле обязательно для заполнения'
    hasError = true
  } else {
    parentNameError.value = ''
  }
  if (!parentAge.value.trim()) {
    parentAgeError.value = 'Поле обязательно для заполнения'
    hasError = true
  } else {
    parentAgeError.value = ''
  }


  store.saveFormData(
    { name: parentName.value, age: parentAge.value },
    children.value
  )
  router.push('/preview')
}

watch(parentAge, (newValue) => {
  parentAgeError.value = isNaN(Number(newValue)) && newValue !== '' ? 'Напишите возраст числом (пример: 25)' : ''
})
</script>


<template>
  <AppLayout>
    <main class="main">
      <section class="form-section form-section--personal">
        <h2 class="form-section__title">Персональные данные</h2>
        <div class="form-section__group">
          <label class="form-section__field">
            <span class="form-section__name">Имя</span>
            <input type="text" class="form-section__input" v-model="parentName"/>
            <span v-if="parentNameError" id="form-section__error">{{ parentNameError }}</span>
          </label>
          <label class="form-section__field">
            <span class="form-section__name">Возраст</span>
            <input 
              type="text" 
              class="form-section__input" 
              v-model="parentAge"
              :class="{ 'input--error': parentAgeError }"
            />
            <span v-if="parentAgeError" id="form-section__error">{{ parentAgeError }}</span>
          </label>
        </div>
      </section>

      <section class="form-section form-section--children">
        <div class="form-section__header">
          <h2 class="form-section__title">Дети (макс. 5)</h2>
          <button 
            class="form-section__add-btn" 
            @click="addChild" 
            v-show="children.length < 5">
            <img class="form-section__add-btn-img"src="../assets/icons/plus.svg" alt="plus"/>
            <span class="form-section__add-btn-description">Добавить ребёнка</span>
          </button>
        </div>
        <div v-for="(child, index) in children" :key="index" class="form-section__group form-section__group--child">
          <label class="form-section__field">
            <span class="form-section__name">Имя</span>
            <input type="text" class="form-section__input" v-model="child.name" />
          </label>
          <label class="form-section__field">
            <span class="form-section__name">Возраст</span>
            <input type="text" class="form-section__input" v-model="child.age" />
          </label>
          <button class="form-section__remove-btn" @click="removeChild(index)">Удалить</button>
        </div>
      </section>

      <button class="main__submit-btn" @click="submitForm">Сохранить</button>
    </main>
  </AppLayout>
</template>

<style scoped>
.main {
  font-family: "Montserrat", sans-serif;
  max-width: 616px;
  width: 100%;
  margin: auto;
  height: auto;
  box-sizing: border-box;
  margin-top: 30px;
  flex: 1;
  margin-bottom: 30px;
}

.form-section__title {
  font-size: 18px;
  font-weight: 400;
}

.form-section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 11px;
  padding-top: 23px;
}
.form-section__group {
  display: flex;
  flex-direction: column;
}
.form-section__group--child {
  flex-direction: row;
  align-items: center;
  gap: 18px;
}

.form-section__group--child .form-section__field {
  flex: 1;
}
.form-section__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 58px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  padding: 8px 0px 8px 16px;
  box-sizing: border-box;
}

.form-section__field span {
  color: #8d8d8d;
  margin-bottom: 2px;
}

.form-section__input {
  height: 100%;
  border: none;
  font-size: 16px;
  color: #000;
}
.form-section__input:focus {
  outline: none;
  box-shadow: none;
}

#form-section__error {
  color: red;
  font-size: 10px;
  margin-top:6px;
}

.form-section__add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 204px;
  text-align: center;
  color: #01a7fd;
  background-color: #fff;
  border: 2px solid #01a7fd;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
}

.form-section__remove-btn {
  border: none;
  color: #01a7fd;
  font-size: 16px;
  width: 60px;
  background-color: #fff;
  cursor: pointer;
}

.form-section__add-btn-img {
  padding-right: 4px;
  cursor: pointer;
}

.main__submit-btn {
  width: 118px;
  height: 44px;
  margin-top: 20px;
  text-align: center;
  background-color: #01a7fd;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
}
</style>

<script setup>
import AppLayout from "../components/AppLayout.vue"
import { useFormStore } from '../stores/store.js'
const store = useFormStore()

function formatAgeData(age) {
  const n = Number(age)
  const lastDigit = n % 10

  if (lastDigit === 1) {
    return `${n} год`
  }
  if (11 <= n <= 14) {
    return `${n} лет`
  }  

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${n} года`
  }

  return `${n} лет`
}
</script>

<template>
<AppLayout>
  <div v-if="store.parent.name == '' && store.parent.age == ''" class="main">
    <p class="main__header">Данные не добавлены</p>
  </div>
  <div v-else-if="store.parent.name == ''" class="main">
    <p class="main__header">Внесите в форму информацию об имени</p>
  </div>
  <div v-else-if="store.parent.age == ''" class="main">
    <p class="main__header">Внесите в форму информацию о возрасте</p>
  </div>
  <main v-else class="main">
      <section class="form-section form-section--personal">
        <h2 class="form-section__title">Персональные данные</h2>
        <div class="form-section__group">
          {{ store.parent.name + ', ' + formatAgeData(store.parent.age) }}
        </div>
      </section>

      <section v-if="store.children.length > 0" class="form-section form-section--children">
          <h2 class="form-section__title">Дети</h2>
        <div  class="form-section__group--child">
          <ul class="form-section__group--list">
            <li v-for="(child, index) in store.children" :key="index" class="form-section__group--list-elem">
              <div>{{ child.name + ', ' + formatAgeData(child.age) }}</div>
            </li>
          </ul>
        </div>
      </section>
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
}

.main__header {
  text-align: center;
}

.form-section__title {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
}

.form-section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 11px;
  padding-top: 23px;
}
.form-section__group {
  font-family: 'Montserrat-Bold', sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 60px;
  padding-top: 20px;
}
.form-section__group--child {
  flex-direction: row;
  align-items: center;
  gap: 18px;
}

.form-section__group--list {
 padding: 0;
}

.form-section__group--list-elem {
  list-style-type: none;
}

.form-section__group--list-elem div{
  font-family: 'Montserrat-Bold', sans-serif;
  box-sizing: content-box;
  height: 44px;
  width: fit-content;
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
}
@media screen and (max-width: 560px) {
  .main {
    padding-left: 10px;
  }
}
</style>

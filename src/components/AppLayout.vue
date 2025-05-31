<template>
    <div class="app">
      <header class="header">
        <div class="header__logo">
          <img src="@/assets/icons/logo.svg" alt="logo">
        </div>
        <nav class="header__nav">
          <RouterLink to="/" class="header__link">
            <span class="header__link-text">Форма</span>
          </RouterLink>
          <RouterLink to="/preview" class="header__link">
            <span class="header__link-text">Превью</span>
          </RouterLink>
        </nav>
      </header>
    <slot></slot>
      <footer class="footer">
        <p class="footer__text">all rights reserved</p>
      </footer>
    </div>
</template>

<style lang="css" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
slot {
    flex: 1;
}
.header {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  position: relative;
  height: 76px;
  border-bottom: 1px solid #e7e7e7;
}
.header__nav {
  display: flex;
}
.header__logo {
  position: absolute;
  left: 94px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 93px;
}
.header__link {
  display: flex;
  font-weight: 100;
  align-items: center;
  text-decoration: none;
  color: inherit;
  color: #8d8d8d;
  font-size: 16px;
}

.header__link-text {
  padding-right: 24px;
}
.footer {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  text-align: center;
  background: #fafafa;
  height: 76px;
  width: 100%;
  padding-top: 30px;
  margin-top: auto;

}
.footer__text {
  margin: 0;
}
</style>
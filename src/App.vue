<template>
  <div id="app">
    <header>
      <div class="spacer"></div>
      <a href="" class="logo">Moritz.dev</a>
      <ul>
        <li>
          <button class="theme-btn">
            <font-awesome-icon icon="moon" class="theme-btn-icon" />
          </button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false) // Для переключения темы

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

header {
  background-color: rebeccapurple;
  padding: 20px 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 1rem;
}

.logo {
  text-transform: uppercase;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

.spacer {
  visibility: hidden;
  flex: 0 0 auto;
}

ul {
  display: flex;
  align-items: center;
}

ul li {
  display: inline-block;
}

.theme-btn {
  border: none;
  outline: none;
  padding: 0.75rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.theme-btn-icon {
  font-size: 1.25rem;
  width: 1.25em;
  height: 1.25em;
}
</style>

<template>
  <div id="app">
    <header>
      <h1>Stockholm Student Housing Management Center</h1>
      <nav>
        <router-link to="/">NOTICATIONS</router-link>
        <router-link to="/submit-issue">CONTACT US</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 Stockholm Student Housing Management Center</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

h2 {
  color: #064a88; /* 设置深蓝色 */
}

  /* 全局样式 */
  body {
    background-color: #edf2f6; /* 设置页面背景颜色 */
  }

#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #064a88;
  color: #fff;
  padding: 1rem;
  font-weight: bold; /* 设置字体加粗 */
}


nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

nav a:hover {
  background-color: #555;
}

main {
  flex: 1;
  padding: 1rem;
}

footer {
  background-color: #064a88;
  color: #fff;
  text-align: center;
  padding: 0.5rem;
}
</style>

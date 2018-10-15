<template>
  <div id="app">
    <Nav />
    <div id="app-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
html,body,#app {
  font-family: 'Helvetica Neue,Arial,Hiragino Sans GB,STHeiti,Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#app-content {
  max-width: 1390px;
  height: 100%;
  padding-left: 290px;
  padding-right: 40px;
}
a {
  color: #2479cc;
  text-decoration: none;
}
blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
  margin-left: 0;
  margin-right: 0;
}
pre.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>

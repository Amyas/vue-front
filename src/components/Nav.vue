<template>
  <nav id="nav">
    <div class="title">Amyas的小站</div>
    <div class="nav">
      <ul>
        <template v-for="(item, index) in $router.options.routes">
          <li v-if="item.meta.nav" :key="index"><router-link :to="item.path">{{item.meta.title}}</router-link></li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
#nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background: url('../assets/sidebar.webp') no-repeat;
  background-size: cover;
  background-position: 0;
  transition: background 1.5s ease-in-out;
}
#nav:hover {
  background-position: 100%;
}
.title {
  font-size: 18px;
  text-align: center;
  margin-top: 180px;
  margin-bottom: 20px;
  color: #fff;
}
ul {
  text-align: center;
  padding-left: 0;

  li {
    list-style: none;
    font-size: 16px;
    height: 45px;
    line-height: 45px;

    >a {
      display: block;

      color: #fff;
      text-decoration: none;
    }
  }
}
</style>

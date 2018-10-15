<template>
  <div class="posts-list">
    <h1 class="title">归档</h1>
    <div class="item" v-for="(item, key, index) in list" :key="index">
      <h3>{{key}} ({{item.length}})</h3>
      <ul>
        <li v-for="subItem in item" :key="subItem._id">
          <router-link :to="{name:'articleDetail',params:{id:subItem._id}}">{{subItem.title}}</router-link>&nbsp;
          <span>{{subItem.created | createDate('ymd')}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Store from '@/store'
import {mapState} from 'vuex'
export default {
  beforeRouteEnter: async (to, from, next) => {
    await Store.dispatch('article/index')
    next()
  },
  filters: {
    createDate (date, type) {
      const d = new Date(date).toLocaleString()
      if (type === 'ymd') {
        // 只显示年月日
        return d.split(' ')[0]
      }
      return d
    }
  },
  computed: {
    ...mapState('article', ['list'])
  }

}
</script>
<style lang="scss" scoped>
.posts-list {
  text-align: left;
  padding-top: 30px;
  .title {
    margin: 0;
    font-size: 2em;
    color: #333;
    margin-bottom: 25px;
    font-weight: 400;
    line-height: 35px;
  }
  .item {
    color: #666;
    font-size: 16px;
    line-height: 1.8;

    h3 {
      font-weight: 400;
    }
  }
}
</style>

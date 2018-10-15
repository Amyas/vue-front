<template>
  <main>
    <article v-for="item in list" :key="item._id">
      <header>
        <div class="title">
          <router-link :to="`/article/${item._id}`">{{item.title}}</router-link>
        </div>
        <div class="date">{{item.created | createDate}}</div>
      </header>
      <div class="content">
        <div>{{item.intro}}</div>
        <router-link :to="`/article/${item._id}`">阅读更多 »</router-link>
      </div>
    </article>
  </main>
</template>

<script>
import Store from '@/store'
import {mapState} from 'vuex'

export default {
  beforeRouteEnter: async (to, from, next) => {
    await Store.dispatch('home/list')
    next()
  },
  filters: {
    createDate (date) {
      return new Date(date).toLocaleString()
    }
  },
  computed: {
    ...mapState('home', ['list'])
  }
}
</script>
<style lang="scss" scoped>
article {
  color: #555;
  padding: 30px 0;
  text-align: left;
  border-bottom: 1px solid #ddd;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .title {
      flex: 1;
      font-size: 2em;

      >a {
        color: #333;

        &:hover {
          color: #2378cc;
        }
      }
    }
    .date {
      width: 180px;
      text-align: right;
    }
  }
  .content {
    line-height: 1.5;
    >div {
      margin: 15px 0;
    }
  }
}
</style>

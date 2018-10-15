<template>
  <div class="posts-detail">
    <header>
      <div class="title">
        <h1>{{detail.title}}</h1>
      </div>
      <div class="date">{{detail.created | createDate}}</div>
    </header>
    <div class="content">
      <div v-html="detail.content"></div>
    </div>
  </div>
</template>
<script>
import Store from '@/store'
import { mapState } from 'vuex'
export default {
  beforeRouteEnter: async (to, from, next) => {
    await Store.dispatch('article/detail', to.params)
    next()
  },
  filters: {
    createDate (date) {
      return new Date(date).toLocaleString()
    }
  },
  computed: {
    ...mapState('article', ['detail'])
  }
}
</script>
<style lang="scss" scoped>
.posts-detail {
  padding-top: 30px;
  text-align: left;

  > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .title {
      flex: 1;

      h1 {
        font-size: 2em;
        font-weight: 400;
        margin: 0;
      }
    }

    .date {
      width: 180px;
      text-align: right;
    }
  }

  .content {
    color: #000;
    line-height: 1.5;
  }
}
</style>

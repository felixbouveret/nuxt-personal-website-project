<template>
  <section class="likes blk_bgr">
    <div class="inner">
      <Title :title-params="data.title" class="title" />
      <div class="content">
        <article
          v-for="(hobby, likeIndex) in data.hobbies"
          :key="likeIndex"
          class="element love_dev fadeIn"
        >
          <img
            :src="hobby.hobby_icon.url"
            :alt="hobby.hobby_icon.alt"
            loading="lazy"
          />
          <h3 class="h4">
            {{ hobby.hobby_title }}
          </h3>
          <p>{{ hobby.hobby_description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '~/components/Title'

export default {
  components: {
    Title,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      likes: this.$t('likesSection.likes'),
    }
  },
}
</script>

<style lang="scss" scoped>
.likes {
  .title {
    margin-bottom: 80px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (min-width: 1px) and (max-width: 600px) {
      flex-direction: column;
    }

    .element {
      position: relative;

      flex: 1;
      min-width: 350px;
      margin: 10px 10px 0;
      padding-top: 52px;

      @media only screen and (min-width: 1px) and (max-width: 900px) {
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      @media only screen and (min-width: 1px) and (max-width: 600px) {
        min-width: 0;
      }

      img {
        width: 32px;
        height: 32px;
        margin-bottom: 10px;
      }

      .h4 {
        margin-bottom: 20px;
      }

      p {
        font-size: 1.375em;
        line-height: 1.49em;

        opacity: 0.7;
      }
    }
  }
}
</style>

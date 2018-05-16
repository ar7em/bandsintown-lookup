<template>
  <div class="Info" v-if="info.mbid">
    <md-card class="Info__band">
      <md-card-media-cover>
        <md-card-media>
          <img :src="info.image_url" alt="info.name" ref="bandImage" class="Info__cover">
        </md-card-media>

        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ info.name }}</div>
            <div class="md-subhead">
                <slot name="events"></slot>
            </div>
          </md-card-header-text>
        </md-card-header>

        <md-card-actions v-if="info.facebook_page_url">
          <md-button :href="info.facebook_page_url" target="_blank">See on Facebook</md-button>
        </md-card-actions>
      </md-card-media-cover>
    </md-card>
  </div>
  <div v-else>
    <div v-if="notFound">
      No information found
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import defer from "lodash/defer";

export default {
  name: "Info",
  computed: {
    ...mapState({
      info: function(state) {
        // Flush band cover to avoid showing cached picture
        this.setCover("");
        defer(() => this.setCover(state.info.image_url));

        return state.info;
      },
      notFound: state => state.artist && !state.info.mbid && !state.infoFetching
    })
  },
  methods: {
    setCover: function(src) {
      if (this.$refs && this.$refs.bandImage) {
        this.$refs.bandImage.src = src;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.Info {
  &__band.md-card {
    display: inline-block;
    width: auto;
    text-align: center;
  }

  &__cover {
    max-height: 300px;
    width: auto;
  }
}
</style>

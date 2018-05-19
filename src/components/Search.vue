<template>
  <div class="Search">
    <md-field>
      <label>Artist's Name</label>
      <md-input :value="value" @input="requestInfo" ref="input" class="Search__input"></md-input>
    </md-field>
    <div class="Search__spinner">
      <div v-show="fetching">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Search",
  mounted: function() {
    this.$refs.input.$el.focus();
  },
  computed: {
    ...mapState({
      value: state => state.artist,
      fetching: state => state.infoFetching
    })
  },
  methods: {
    ...mapActions({
      requestInfo: "requestInfo"
    })
  }
};
</script>

<style scoped lang="scss">
.Search {
  display: flex;
  align-items: center;
  justify-content: center;

  &__spinner {
    width: 100px;
    flex-shrink: 0;
  }

  .md-field &__input.md-input,
  .md-field.md-has-value &__input.md-input {
    font-size: 100px;
    height: auto;
  }
}
</style>

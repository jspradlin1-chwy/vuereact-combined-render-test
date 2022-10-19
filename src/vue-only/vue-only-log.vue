<template>
  <div>
    <p>
    <b>Render Log:</b>
      <div v-for="log in vueOnlyLog">{{log}}</div>
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState(['vueOnlyLog']),
  }
})
</script>
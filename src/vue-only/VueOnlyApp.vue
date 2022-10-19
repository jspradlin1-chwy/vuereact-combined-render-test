<template>
  <div>
    <h1>Vue-only app</h1>
    <p>Store has three properties: var1, var2, and var3.  Only var1 is connected to this component, so only changes to var1 trigger a re-render of the component.</p>
    <div> var1: {{var1}}</div>
    <button @click="incrementVar1">Increment var1</button>
    <button @click="incrementVar2">Increment var2</button>
    <button @click="incrementVar3">Increment var3</button>
    <vue-only-log/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import VueOnlyLog from './vue-only-log.vue';

export default Vue.extend({
  components: {VueOnlyLog},
  computed: {
    ...mapState(['var1']),
  },
  created() {
    this.$store.state.vueOnlyLog.push('Created connected vue component!');
  },
  updated() {
    this.$store.state.vueOnlyLog.push('Updated connected vue component!');
  },
  methods: {
    incrementVar1() {
      this.$store.state.var1 += 1;
    },
    incrementVar2() {
      this.$store.state.var2 += 1;
    },
    incrementVar3() {
      this.$store.state.var3 += 1;
    }
  }
});
</script>
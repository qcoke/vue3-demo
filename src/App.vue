<template>
  <div class="test">Hello</div>  
</template>

<script lang="ts">
export default {
  setup() {
    
  },
  data(){
    return {
      color: "#ff0000"
    }
  },
  name: "App",
  components: {
  },
  mounted(){

  },
  methods: {
    
  },
};
</script>
<style scoped>
.test {
  color: v-bind(color)
}
</style>

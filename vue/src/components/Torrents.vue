
<template>
  <div class="name">
    <h2>{{ torrents.name }} - {{ torrents.size }}</h2>
    <div class="quantity">
      <button class="inc" @click="counter > 0 ? counter -= 1 : 0">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
    </div>
    <button class="submit">Submit</button>
  </div><!--item-->
</template>


<script>
  export default {
   data() {
      return {
        torrents: []
      }
    },
    // props: ["name", "size"]
  }
</script>

<style scoped>
  
</style>
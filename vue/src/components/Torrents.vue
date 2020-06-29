
<template>
  <div class="name">
    <h2>{{ name }} {{size}}</h2>
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
        counter: 0
      }
    },
    props: ["name", "size"]
  }
</script>

<style scoped>
  
</style>
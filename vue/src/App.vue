<template>
  <div>
    <div id="app">
      <img src="./assets/utlogo.jpeg">
      <router-view/>
      <h2><span>Torrent Name: </span><span>Torrent Size: </span></h2>
      <div v-for="torrent in torrents">
        <torrents :name="torrent.name" :size="torrent.size"></torrents>
      </div>
    </div>
  </div>
</template>

<script>

import Torrents from './components/Torrents.vue'
export default {
  name: 'App',
  components: {
    Torrents
  },
  data() {
    return {
      torrents: [
        {
          name: "Jefferson Starship - 1981-07-01 Columbia, Md. (Mellow Yellow) remaster",
          size: 682122601
        },
        {
          name: "Primus  1992-03-12  J.P. version",
          size: 213055850
        },
         {
          name: "The Kinks 1995-07-11 West Hollywood, CA",
          size: 574591652
        },
      ]
    };
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

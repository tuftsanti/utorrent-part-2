
<template>
  <div class="name">
    <div v-for="torrent in torrents">
      <h2>{{ torrent.name }} {{ torrent.size }}</h2>
    </div>
      <section>
    <div v-if="torrents.length === 0" class="loading">Loading...</div>
    <div v-for="torrent in torrents" class="torrent-contain">
      <div class="torrent-img">
        <img :src="torrent.img" height="350" />
      </div>
      <div class="torrent-info">
        <h2>{{ torrent.name }}</h2>
        <p class="bright">{{ torrent.tagline }}</p>
        <p><span class="bright">Description:</span> {{ torrent.desc }}</p>
        <p><span class="bright">Tips:</span> {{ torrent.tips }}</p>
        <h3 class="bright">Food Pairings</h3>
        <ul>
          <li v-for="item in torrent.food">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  </div>
</template>


<script>
//  const UTorrent = require('library-utorrent')
  // import UTorrent from '../assets/utorrent.js'
  // import listTorrents from 'library-utorrent'
  export default {
   data() {
      return {
        bottom: false,
        torrents: []
      }
    },
    // props: ["name", "size"],
    watch: {
      bottom(bottom) {
        if (bottom) {
          this.addTorrent
        }
      }
    },
    created() {
        window.addEventListener('scroll', () => {
          this.bottom = this.bottomVisible()
        })
        this.addTorrent()
        },
    methods: {
          bottomVisible() {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible
          },
          addTorrent() {
            axios.get('https://api.punkapi.com/v2/torrents/random')
              .then(response => {
                let api = response.data[0];
                let info = {
                  name : api.name,
                  desc : api.description,
                  img : api.image_url,
                  tips : api.brewers_tips,
                  tagline : api.tagline,
                  food : api.food_pairing
                };
                this.torrents.push(info)
                if (this.bottomVisible()) {
                  this.addTorrent()
                }
      })
          }
    }    
        // UTorrent.listTorrents({
        //     host: 'ldeveraux.ddns.net',
        //     port: 9999,
        //     username: 'guest',
        //     password: '',
        //   }).exec({
        //     error: function (error){
        //       console.log(`error is: ` + error) 
        //     },
        //     success: function (torrents){
        //         for (item in torrents)
        //         console.log(torrents[item].parsed.name)
        //     }
        //   });
    }
  // }
</script>

<style scoped>
  
</style>
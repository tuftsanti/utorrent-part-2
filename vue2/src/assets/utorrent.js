const UTorrent = require('library-utorrent');
UTorrent.listTorrents({
    host: 'ldeveraux.ddns.net',
    port: 9999,
    username: 'guest',
    password: '',
  }).exec({
    error: function (err){ 
    },
    success: function (torrents){
        for (item in torrents)
        console.log(torrents[item].parsed.name)
    }
  });
        /*
      torrents is an array of objects:
      [{
        parsed: {
          hash,
          name,
          size
          percentProgressMils,
          downloadedBytes,
          uploadedBytes,
          ratioMils,
          uploadspeedBytesSec,
          downloadspeedBytesSec,
          etaSec,
          peersConnected,
          peersSwarm,
          seedsConnected,
          seedsSwarm,
          availability,
          queueOrder,
          remainingBytes,
          torrentUrl,
          status,
          downloadDir
        },
        raw
      }, ...]
      */
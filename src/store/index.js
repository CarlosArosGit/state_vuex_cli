import { createStore } from 'vuex'
import router from '@/router';
export default createStore({
  state: {
    musica: {
      rap: [
        {
          id: 1,
          artist: "Tupac",
          category: "rap",
          album: "All Eyez on Me",
          image: "https://is5-ssl.mzstatic.com/image/thumb/Music/4f/49/20/dj.lbjggise.jpg/1000x1000bb.webp"
        },
        {
          id: 2,
          artist: "Tupac",
          category: "rap",
          album: "Greatest Hits",
          image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/72/00/89/720089d8-c063-a323-e0cc-de921e50b968/00602527051789.rgb.jpg/1200x1200bb.jpg"
        },
        {
          id: 3,
          artist: "Kendrick Lamar",
          category: "rap",
          album: "DAMN.",
          image: "https://i1.sndcdn.com/artworks-000657703867-cm4g8h-t500x500.jpg"
        },
        {
          id: 4,
          artist: "Kendrick Lamar",
          category: "rap",
          album: "good kid, m.A.A.d city",
          image: "https://musicjungle.cl/wp-content/uploads/2020/08/R-3975953-1570404795-5694.jpeg.jpg"
        },
        {
          id: 5,
          artist: "Eminem",
          category: "rap",
          album: "The Marshall Mathers LP",
          image: "https://dojiw2m9tvv09.cloudfront.net/36300/product/r-9172743-1476040310-4891-jpeg0756.jpg"
        },
      ],
      pop: [
        {
          id: 6,
          artist: "Michel Jackson",
          category: "pop",
          album: "Thriller",
          image: "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/3c/60/903c6069-b321-563c-bbc5-28e26f8fb1bd/074643811224.jpg/1000x1000bb.webp"
        },
        {
          id: 7,
          artist: "Michel Jackson",
          category: "pop",
          album: "Bad",
          image: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/d2/97/4c/d2974cc9-19cc-09a2-a359-7b8fe8cae377/886443546264.jpg/1000x1000bb.webp"
        },
        {

          id: 8,
          artist: "Madonna",
          category: "pop",
          album: "Madonna",
          image: "https://is2-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.ykiinwgl.jpg/1000x1000bb.webp"
        },
        {
          id: 9,
          artist: "Madonna",
          category: "pop",
          album: "Like a Virgin",
          image: "https://is5-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.wxptosaa.jpg/1000x1000bb.webp"
        },
        {
          id: 10,
          artist: "Madonna",
          category: "pop",
          album: "Like a Virgin",
          image: "https://is5-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.wxptosaa.jpg/1000x1000bb.webp"
        },
      ],
      rock: [
        {
          id: 11,
          artist: "Foo Fighters",
          category: "rock",
          album: "Greatest Hits",
          image: "https://www.backonvinyl.cl/wp-content/uploads/2017/08/foo-fighters-greatest-hits.jpg"
        },
        {
          id: 12,
          artist: "Metallica",
          category: "rock",
          album: "Master of Puppets",
          image: "https://img.europapress.es/fotoweb/fotonoticia_20160305095544_1200.jpg"
        },
        {
          id: 13,
          artist: "AC/DC",
          category: "rock",
          album: "Highway to Hell",
          image: "https://is4-ssl.mzstatic.com/image/thumb/Features6/v4/ee/bd/69/eebd6962-9b25-c177-c175-b3b3e641a29d/dj.edqjfvzd.jpg/1000x1000bb.webp"
        },
        {
          id: 14,
          artist: "AC/DC",
          category: "rock",
          album: "Back in Black",
          image: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/1000x1000bb.webp"
        },
        {
          id: 15,
          artist: "Deep Purple",
          category: "rock",
          album: "Machine Head",
          image: "https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/8b/1e/fa/8b1efa15-24c4-2190-5d7b-22e2945e281a/603497877393.jpg/1000x1000bb.webp"
        },
      ]
    }

  },
  getters: {
    countPop: state => {
      return state.musica.pop.length;
    },
    countRock: state => {
      return state.musica.rock.length;
    },
    countRap: state => {
      return state.musica.rap.length;
    },
    countGeneral: state => {
      return state.musica.rap.length + state.musica.rock.length + state.musica.pop.length;
    }
  },
  mutations: {
    ADD_ALBUM: (state, album) => {
      if(album.category == 'pop'){
        album.id = Math.floor(Math.random() * 1000);
        state.musica.pop.push(album);
        router.push('/pop');
      }else if(album.category == 'rock'){
        album.id = Math.floor(Math.random() * 1000);
        state.musica.rock.push(album);
        router.push('/rock');
      }else if(album.category == 'rap'){
        album.id = Math.floor(Math.random() * 1000);
        state.musica.rap.push(album);
        router.push('/rap');
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

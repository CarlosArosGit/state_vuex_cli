<template>
    <div class="rap">
        <div class="container mt-5">
            <h1>RAP</h1>
            <div class="grid_album mt-5">
                <div v-for="(album, index) in musica.rap" v-bind:key="index" class="card m-2" style="width: 22rem;">
                    <h3>{{album.album}}</h3>
                    <img v-bind:src="album.image" class="card-img-top imgg" alt="logo">
                    <div class="card-body">
                        <h5 class="card-title">{{ album.artist }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
    name: 'RapView',
    computed: {
        ...mapState(['musica']),
    },
    methods: {

    },
}
</script>
  
<style scoped>
.grid_album {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.imgg{
    width: 60%;
    margin: auto;
}
@media only screen and (max-width: 1000px) {
    .grid_album {
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>
<template>
  <div class="marcoBlanco">
    <div class="cajaGris">
      <h1>Open Music</h1>
    </div>
  </div>
  <h4>Categorias</h4>
  <h4>Número de Albums {{ countGeneral }}</h4>
  <nav class="mt-5">
    <router-link to="/pop" class="btn btn-success">POP ({{ countPop }})</router-link>
    <router-link to="/rock" class="btn btn-success">ROCK ({{ countRock }})</router-link>
    <router-link to="/rap" class="btn btn-success">RAP ({{ countRap }})</router-link>
  </nav>
  <NewAlbumComponent></NewAlbumComponent>
  <router-view />
</template>
<script>
import { mapGetters } from 'vuex';
import NewAlbumComponent from './components/NewAlbumComponent.vue';
export default {
  name: 'NewAlbum',
  components: {
    NewAlbumComponent,
  }, computed: {
    ...mapGetters(['countPop', 'countRock','countRap', 'countGeneral']),
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  margin-left: 10px;
  width: 200px;
}

.marcoBlanco {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

/* Estilos para el contenedor interno */
.cajaGris {
  background-color: #ccc;
  padding: 10px;
  width: 90%;

}

/* Estilos para el encabezado h1 */
h1 {
  margin: 0;
  /* Eliminamos el margen predeterminado */
}
</style>

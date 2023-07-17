<template>
    <div class="NewAlbum mt-5">
        
        <button type="button" class="btn btn-success mt-3" v-if="btnAgregarOpen" v-on:click="openForm">Agregar Albúm</button>
        <form class="container" v-if="mostrarForm">
            <h1>Agregar Album</h1>
            <div class="mb-3 mt-4">
                <label for="artista" class="form-label">Artista</label>
                <input type="text" class="form-control" id="artista" v-model="form.artist">
            </div>
            <div class="mb-3">
                <label for="album" class="form-label">Albúm</label>
                <input type="text" class="form-control" id="album" v-model="form.album">
            </div>
            <div class="mb-3">
                <label for="imgAlbum" class="form-label">Portada</label>
                <input type="text" class="form-control" id="imgAlbum" v-model="form.image">
            </div>
            <div class="mb-3">
                <label for="genero" class="form-label">Género</label>
                <select class="form-select" id="genero" v-on:change="seleccionGenero">
                    <option selected value="0">Selecciona el género</option>
                    <option value="pop">POP</option>
                    <option value="rock">ROCK</option>
                    <option value="rap">RAP</option>
                </select>
            </div>
            <button type="button" class="btn btn-success" id="btnAgregar" v-on:click="enviarDatos">Agregar Albúm</button>
            <button type="button" class="btn btn-danger" v-on:click="closeForm">Cancelar</button>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'NewAlbum',
    data: function () {
        return {
            form: {
                artist: '',
                category: '',
                album: '',
                image: ''
            },
            btnAgregarOpen: true,
            mostrarForm:false,


        }
    },
    methods:{
        seleccionGenero:function(){
            let selectValue = document.getElementById('genero').value;
            this.form.category = selectValue;
        },
        enviarDatos:function() {
            if (
                this.form.artist != ""
                && this.form.category != ""
                && this.form.album != ""
                && this.form.image != ""
                && document.getElementById('genero').value != 0
            ) {
                let data = { ...this.form }
                this.$store.commit('ADD_ALBUM', data);
                this.clean();
                this.closeForm();
            }
        },
        clean() {
            this.form.artist = ""
            this.form.category = ""
            this.form.album = ""
            this.form.image = ""
            document.getElementById('genero').value = 0;
        },
        openForm(){
            this.mostrarForm = true;
            this.btnAgregarOpen = false;
        },
        closeForm(){
            this.mostrarForm = false;
            this.btnAgregarOpen = true;
        }
    }
}
</script>
<style scoped>
form {
    text-align: left;
}
#btnAgregar{
    margin-right: 10px;
}
</style>
  
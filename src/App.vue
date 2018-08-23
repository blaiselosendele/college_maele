<template>
  <!-- le fichier app.vue permet d'afficher sur toutes le pages les fichiers importer-->
  <div id="app">
    <!--Permet de utiliser une fois importer toutes les proprietees contenue dans le fichier menu -->
    <Menu />
    <router-view/>
    <navfooter/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import navfooter from './components/navfooter'
export default {
  name: 'App',
  /** importation des fichier contenu dans components */
  components: {
    Menu,
    navfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f8f9fa;
}
body{
  display: inline;
  margin: 0px;
}
</style>

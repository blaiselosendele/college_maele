/** importation de fichier qui doivent etre considerer comme de page */
import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Accueil from '@/components/Accueil'

Vue.use(Router)
export default new Router({
  routes: [
    /* {
      pour choisir un fichier comme etant l'index on utilise
      Comme le cas suivant du Helloword, c'est cette page qui sera considerer comme l'index
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      /* path permet d'attribuer un chemin ou acces */
      path: '/',
      name: 'Accueill',
      component: Accueil
    }
  ]
})

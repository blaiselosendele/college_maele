<template>
  <div id="menu">
    <div id="contact-haut">
      <p>Tel :+243 851 812 631 || E-mail :losendelekanthe@gmail.com</p>
    </div>
    <div id="lien-logo">
        <img src="../assets/logoeduc.png" id="logoeduc">
          <!-- Pour ajouter un menu dans l'index-->
        <div id="lien-item">
          <router-link to="/" class="menu-item">Accueil</router-link>
          <!-- le class -->
          <router-link to="/accueil" class="menu-item">Niveau</router-link>
          <router-link to="/formation" class="menu-item">Formation</router-link>
          <router-link to="/Education" class="menu-item">Education</router-link>
        </div>
        <div style="clear: both;"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#lien-item{
  padding-top: 10px;
  float: right;
}
#logoeduc{
  margin-top: 10px;
  float: left;
  margin-left: 50px;
}
#contact-haut{
  color: #aaaaaa;
  padding-top: 5px;
  font-size: 15px;
  text-align: center;
  font-family: 'Adobe Ming Std L';
  height: 50px;
  background-color: black;
}
  .menu-item {
    float: left;
    text-decoration: none;
    padding: 5px 20px;
    margin-right: 10px;
    height: 50px;
    font-size: 18px;
    color: black;
    font-family: 'Adobe Ming Std L';
  }
  .menu-item:hover{
    color:#00cb54;
  }
  #lien-logo{
    width: 100%;
    display: block;
    background-color: #fff;
  }
</style>

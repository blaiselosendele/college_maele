<template>
  <div>
    <div>
      <nav id="faculty">
      <h2>Faculty</h2>
      <router-link to="/" class="lien-nav">Homme >></router-link>
      <router-link to="/" class="lien-nav">Page >></router-link>
      <router-link to="/" class="lien-nav">Faculty >></router-link>
      </nav>
    </div>
    <div id="nav-all">
      <nav class="nav-option">
        <img src="../assets/educ1.png" alt="photo1" class="image-nav">
      
        <h2><router-link to="/" class="lien-nav-option">Faculty of Psychology</router-link></h2>
        <ul>
          <li class="li"> Dean: Dr. G.Hussein Rassool</li>
          <li class="li">Professors: 12</li>
          <li class="li">Lecturers: 38</li>
          <li class="li">Students: 80</li>
        </ul>
      
      </nav>

      <nav class="nav-option">
        <img src="../assets/educ2.png" alt="photo2" class="image-nav">
      
        <h2><router-link to="/" class="lien-nav-option">Biological Sciences </router-link></h2>
        <ul>
          <li class="li"> Dean: Dr. G.Hussein Rassool</li>
          <li class="li">Professors: 12</li>
          <li class="li">Lecturers: 38</li>
          <li class="li">Students: 80</li>
        </ul>
      
      </nav>

      <nav class="nav-option">
        <img src="../assets/educ3.png" alt="photo3" class="image-nav">
      
        <h2><router-link to="/" class="lien-nav-option">Physical & Sciences </router-link></h2>
        <ul>
          <li class="li"> Dean: Dr. G.Hussein Rassool</li>
          <li class="li">Professors: 12</li>
          <li class="li">Lecturers: 38</li>
          <li class="li">Students: 80</li>
        </ul>
      
      </nav>
    </div>

    <div id="nav-all">
      <nav class="nav-option">
        <img src="../assets/educ4.png" alt="photo4" class="image-nav">
      
        <h2><router-link to="/" class="lien-nav-option">Faculty of Psychology</router-link></h2>
        <ul>
          <li class="li"> Dean: Dr. G.Hussein Rassool</li>
          <li class="li">Professors: 12</li>
          <li class="li">Lecturers: 38</li>
          <li class="li">Students: 80</li>
        </ul>
      
      </nav>

      <nav class="nav-option">
        <img src="../assets/educ5.png" alt="photo5" class="image-nav">
      
        <h2><router-link to="/" class="lien-nav-option">Faculty of Psychology</router-link></h2>
        <ul>
          <li class="li"> Dean: Dr. G.Hussein Rassool</li>
          <li class="li">Professors: 12</li>
          <li class="li">Lecturers: 38</li>
          <li class="li">Students: 80</li>
        </ul>
      
      </nav>

      <nav class="nav-option">
        <img src="../assets/educ1.png" alt="photo3" class="image-nav">
      
        <h2><router-link to="/" class="lien-nav-option">Faculty of Psychology</router-link></h2>
        <ul>
          <li class="li"> Dean: Dr. G.Hussein Rassool</li>
          <li class="li">Professors: 12</li>
          <li class="li">Lecturers: 38</li>
          <li class="li">Students: 80</li>
        </ul>
      
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#nav-all{
  display: inline-block;
  margin-left: 100px;
  margin-top: 50px;
}
.image-nav{
  margin-bottom: 10px;
}
.lien-nav-option{
  margin-left: 40px;
  text-decoration: none;
  color: black;
}
.lien-nav-option:hover{
  color :#00cb54;
}
.li{
  display: block;
  margin-left: 0px;
  text-decoration: none;
}
.nav-option{
  height: 540px;
  display: block;
  float: left;
  margin: 20px;
  width: 350px;
  box-shadow: 0px 0px 10px #c8c8c8;
  background-color: white;
}
  h2{
    color: whitesmoke;
  }
  #faculty{
    padding-top: 50px;
    padding-left: 100px;
    height: 180px;
    background-image: url("../assets/banner2.jpg");
  }
  li{
    margin-bottom: 8px;
  }
  .lien-nav{
    text-decoration: none;
    color: white;
    font-family: 'Adobe Ming Std L';
    padding-right:10px;
  }
</style>

<template>
<div id="footer-bar">
    <div class="footer">
      <nav class="nav-footer">
      <img src="../assets/logoeduc2.png" id="logoeduc">
      <p>Nunc placerat mi id nisi interdm <br>they mtolis. Praesient is haretra <br>justo ught scel erisque placer. </p>
      </nav>

      <nav class="nav-footer">
      <h3>Contact Us</h3>
      <img src="../assets/contact.png" class="icons">
      <p><router-link to="/" class="lien-contact">800 567.890.576</router-link></p>
      <img src="../assets/mail.png" class="icons">
      <p><router-link to="/" class="lien-contact">support@educati.com</router-link></p>
      <img src="../assets/place.png" class="icons">
      <p id="adresse">184 Main Collins Street Chicago, United States</p>

      </nav>

      <nav class="nav-footer">
        <h3>Quick links</h3>
        <router-link to="/" class="lien-quick">About Us</router-link>
        <router-link to="/" class="lien-quick">Contact Us</router-link>
        <router-link to="/" class="lien-quick">Students</router-link>
        <router-link to="/" class="lien-quick">Admission</router-link>
        <router-link to="/" class="lien-quick">Events</router-link>
        <router-link to="/" class="lien-quick">Latest News</router-link>
      </nav>

      <nav class="nav-footer-mail">
        <h3>Newslatter</h3>
        <p>Subscribe to get update and information. Don't worry, we won't send spam!</p>
        <form action="">
          <input type="mail" name="mails" id="saisie" placeholder="Enter your mail :"/>
          <input type="submit" name="submit" id="envoie" value="subscribe"/>
        </form>
      </nav>
    </div>
    <div id="copy">
        <p>© 2018 Educati. All rights reserved. Created by EchoTheme</p>
      </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
#saisie{
  padding-left: 20px;
  border: none;
  float: left;
  border-radius: 5px 0px 0px 5px;
  height: 50px;
  width: 200px;
}

#envoie{
  font-size: 15px;
  border: none;
  border-radius: 0px 5px 5px 0px;
  text-align: center;
  height: 52px;
  background-color: #00cb54;
  width: 100px;
}
#copy{
  height: 80px;
  padding-top: 40px;
  color: #c7c7c7;
  text-align: center;
  background-color: #191919;
}
  .nav-footer{
    width: 200px;
    float: left;
    margin-right: 50px;
    color: #c7c7c7;
  }
  .nav-footer-mail{
    width: 400px;
    float: left;
    margin-right: 10px;
    color: #c7c7c7;
  }
    .footer{
      padding-top: 50px;
      padding-left: 100px;
      margin-top: 100px;;
      height: 300px;
    }
    #footer-bar{
      background-color: #1e2022;
    }
    #logoeduc{
      margin-bottom: 20px;

    }
    h3{
      margin-top: 10px;
      margin-bottom: 50px;
    }
    .lien-contact{
      text-decoration: none;
      color: #c7c7c7;
    }
    .lien-contact:hover{
      color: aqua;
    }
    .icons{
      display: block;
      float: left;
      margin-right: 10px;
      width: 20px;
    }
    .lien-quick{
      display: block;
      margin-bottom: 10px;
      color: #c7c7c7;
      text-decoration: none;
    }
    .lien-quick:hover{
      color: #00cb54;
    }
    #adresse{
      margin-left: 30px;
    }
</style>

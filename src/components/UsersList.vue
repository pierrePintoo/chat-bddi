<template>
    <div class="users-part">
      <div class="header-left">
        <img src="../assets/litiere.svg">
        <img  v-on:click="store.logout()"  class="header-left__left-arrow" src="../assets/left-arrow.svg">
        <a class="lien-logout">
          <span href="#" class="liens-logout-envie">Envie de popo ?</span>
          <br>
          <span href="#" class="liens-logout-lien">Sortez s'il vous plait</span>
        </a>
      </div>
      <BigCat class="chat-component"/>
      <div class="big-cat__caresses__instructions">
          <div class="instructions-img-text">
              <img src="../assets/caresse.svg" alt="">
              <p class="text-instructions-caresses"><span class="envie-de-caresses">Envie de caresses ?</span><span>Cliquez sur les chats</span></p>
          </div>
          <p class="p-nb-users-connected"><span class="nb-users-connected">{{users.length}} chats </span><br>connectés.</p>
      </div>
      <div class="banner">
        <ul class="users-banner">
            <UsersListUser
            v-for="(user, i) in users"
             :key="i"
             :user="user"/> <!-- :key -> Faut que ce soit unique -->
        </ul>
      </div>
    </div>
</template>

<script>
import BigCat from './BigCat'
import UsersListUser from './UsersListUser'
import store from '../store'
export default {
  data () {
    return {
      store
    }
  },
  props: {
    users: {
      type: Array
    }
  },
  components: {
    UsersListUser,
    BigCat
  }
}
</script>

<style>
  .chat-component{
    height: 50% !important;
  }

  .chat-component > div{
    height: 100% !important;
    width: 100% !important;
  }

  .p-nb-users-connected{
    text-align: right;
  }

  .users-part > * {
    margin: 0 60px 0 60px;
    word-break: break-all;
  }
  .header-left{
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    position: relative;
  }

  .header-left__left-arrow{
    height: 100%;
    width: 8%;
    position: relative;
    transition: all 0.5s ease;
  }

  .header-left__left-arrow:hover{
    padding: 2%;
    cursor:pointer;
    transform: translateX(-20px);
  }

  .liens-logout-envie{
      font-family: "CarmenSemiBold";
  }

  .big-cat{
    height: 50%;
    display: flex;
    flex-direction: column;
  }

  .big-cat__caresses{
    display: flex;
    width: 45%;
    justify-content: space-between;
  }

  .big-cat__caresses > img{
    cursor: pointer;
  }

  .big-cat__img{
    align-self: center;
  }

  .big-cat__caresses__instructions{
    width: 81%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text-instructions-caresses{
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }

  .envie-de-caresses{
    font-family: "CarmenSemiBold";
  }

  .instructions-img-text{
    display: flex;
  }

  .big-cat__caresses__instructions > *{
    margin: 0;
  }

  .banner{
    height: 16%;
    background: rgba(233, 184, 67, 0.3);
    border-radius: 30px;
    overflow: scroll;
  }

  .users-banner{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin:auto;
    justify-content: center;
  }

  .users-banner > * {
        margin-top: 40px;
        flex: 1 1 160px;
      }

  .nb-users-connected{
    font-family: "CarmenSemiBold";
  }

  .nb-users-connected{
    padding-left: 21px;
  }
</style>

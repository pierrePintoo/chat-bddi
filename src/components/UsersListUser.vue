<template>
    <div class="user-banner__connected">
      <img class="img-chat-user--connection" src="../assets/chat-user.svg">
      <li>{{ user.username }}</li>
    </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true
    }
  }
}
</script>

<style>
  .user-banner__connected{
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .img-chat-user--connection{
    cursor: pointer;
  }
</style>

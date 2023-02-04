<!-- eslint-disable prettier/prettier -->
<template>
<div class="container row j-space-between pt-3 pb-3">
    <form class="row col-5-xl gap-1 a-center">
      <legend class="font-size-large col-12-xl">Entrar</legend>

      <div class="row col-12-xl gap-1">
        <label>Usuário</label>
        <input type="text" name="username" id="username" placeholder=" Insira seu usuário" class="input-primary col-12-xl" />
      </div>

      <div class="row col-12-xl gap-1">
        <label>Senha</label>
        <input type="password" name="password" id="password" placeholder=" Insira sua senha" class="input-primary col-12-xl" />
      </div>

      <input type="button" id="btn_login" class="btn-primary color-white" value="Entrar">

    </form>

    <form class="row col-5-xl gap-1 a-center">
      <legend class="font-size-large col-12-xl">Registrar</legend>

      <div class="row col-12-xl gap-1">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="new_userEmail" placeholder=" Coloque seu E-mail" class="input-primary col-12-xl" />
      </div>

      <div class="row col-12-xl gap-1">
        <label for="user2">Usuário</label>
        <input type="text" name="user2" id="new_userUsuario" placeholder=" Crie o seu usuário" class="input-primary col-12-xl" />
      </div>

      <div class="row col-12-xl gap-1">
        <label for="password2">Senha</label>
        <input type="password" name="password2" id="new_userPassword" placeholder=" Crie a sua senha" class="input-primary col-12-xl" />
      </div>

      <input class="btn-primary color-white" type="button" id="btn_register" value="Registrar">

    </form>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "LoginView",
};
</script>

<template>
  <main>
    <section class="container row j-center">
      <header class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs j-center">
        <h1 class="font-size-large">Como podemos ajudar você?</h1>
        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs j-center">
          <p>Escreva a sua mensagem e em breve retornaremos o seu contato!</p>
        </div>
      </header>

      <form
        action="contact-form"
        method="post"
        class="row col-6-xl col-6-lg col-6-md col-6-sm col-6-xs gap-2 pt-1 pb-1"
      >
        <legend>Preencha todos os campos</legend>
        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          <label for="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome Completo"
            required
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>
        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escreva seu e-mail"
            required
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>
        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          <label for="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="(xx)99999-9999"
            pattern="\([0-9]{2}\)[9]{1}[0-9]{4}-[0-9]{4}"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          />
        </div>
        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs">
          <label for="assunto">Assunto</label>
          <select
            name="assunto"
            id="assunto"
            class="input-primary col-12-xl col-12-lg col-12-md col-12-sm col-12-xs"
          >
            <option value="selecione">Selecione</option>
            <option value="cancelamento">Cancelamento de Reserva</option>
            <option value="comercial">Comercial</option>
            <option value="sac">Sac</option>
            <option value="ouvidoria">Ouvidoria</option>
            <option value="financeiro">Financeiro</option>
            <option value="duvidas">Dúvidas</option>
            <option value="sugestao">Sugestões</option>
            <option value="reclamacao">Reclamação</option>
          </select>
        </div>
        <div class="row col-12-xl col-12-lg col-12-md col-12-sm col-12-xs j-center">
          <input type="submit" value="Enviar" class="btn-primary color-white" />
        </div>
      </form>
    </section>
  </main>
</template>

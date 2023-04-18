<template>
  <div></div>
</template>

<!--&lt;!&ndash; eslint-disable prettier/prettier &ndash;&gt;-->


<!--&lt;!&ndash; SCRIPT PARA RESOLVER &ndash;&gt;-->
<!-- &lt;!&ndash; <script>-->
<!--        if (!localStorage.getItem("loggedUser")) {-->
<!--          window.location.href =-->
<!--            "http://localhost:5173/Hotel-DEVaneio/src/pages/login.html";-->
<!--        }-->

<!--        let user = JSON.parse(localStorage.getItem("loggedUser"));-->

<!--        if (user.roles !== "ROLE_ADMIN") {-->
<!--          window.location.href = "http://localhost:5173/Hotel-DEVaneio/";-->
<!--        }-->
<!--      </script> &ndash;&gt;-->
<!--<template>-->
<!-- -->
<!--  <HeaderAdmin />-->

<!--  <main class="container row j-center pb-3 pt-3">-->
<!--    <h1 class="font-size-extra-large">Área Administrativa - Funcionários</h1>-->

<!--    <table class="table-primary mb-3 mt-3 color-secondary col-12-xl">-->
<!--      <tr class="">-->
<!--        <th>Código</th>-->
<!--        <th>Nome</th>-->
<!--        <th>Tempo de empresa</th>-->
<!--        <th>Atividade Atual</th>-->
<!--        <th>Férias</th>-->
<!--        <th>Afastamento médico</th>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>1</td>-->
<!--        <td>Maria</td>-->
<!--        <td>5 anos</td>-->
<!--        <td>-->
<!--          <select name="atividade" class="input-secondary">-->
<!--            <option value="selecione">Selecione</option>-->
<!--            <option value="recepcao">Recepção</option>-->
<!--            <option value="restaurante">Restaurante</option>-->
<!--            <option value="garagem">Garagem</option>-->
<!--            <option value="serviço">Serviço de Quarto</option>-->
<!--            <option value="gerencia">Gerência</option>-->
<!--            <option value="concierge">Concierge</option>-->
<!--          </select>-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-1">Sim</label>-->
<!--          <input type="radio" name="ferias-1" id="ferias-nao-1" />-->
<!--          <label for="ferias-sim-1">Não</label>-->
<!--          <input type="radio" name="ferias-1" id="ferias-sim-1" />-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-2">Sim</label>-->
<!--          <input type="radio" name="ferias-2" id="ferias-nao-2" />-->
<!--          <label for="ferias-sim-2">Não</label>-->
<!--          <input type="radio" name="ferias-2" id="ferias-sim-2" />-->
<!--        </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>2</td>-->
<!--        <td>José</td>-->
<!--        <td>1 ano</td>-->
<!--        <td>-->
<!--          <select name="atividade" class="input-secondary">-->
<!--            <option value="selecione">Selecione</option>-->
<!--            <option value="recepcao">Recepção</option>-->
<!--            <option value="restaurante">Restaurante</option>-->
<!--            <option value="garagem">Garagem</option>-->
<!--            <option value="serviço">Serviço de Quarto</option>-->
<!--            <option value="gerencia">Gerência</option>-->
<!--            <option value="concierge">Concierge</option>-->
<!--          </select>-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-3">Sim</label>-->
<!--          <input type="radio" name="ferias-3" id="ferias-nao-3" />-->
<!--          <label for="ferias-sim-3">Não</label>-->
<!--          <input type="radio" name="ferias-3" id="ferias-sim-3" />-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-4">Sim</label>-->
<!--          <input type="radio" name="ferias-4" id="ferias-nao-4" />-->
<!--          <label for="ferias-sim-4">Não</label>-->
<!--          <input type="radio" name="ferias-4" id="ferias-sim-4" />-->
<!--        </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>3</td>-->
<!--        <td>Sérgio</td>-->
<!--        <td>10 anos</td>-->
<!--        <td>-->
<!--          <select name="atividade" class="input-secondary">-->
<!--            <option value="selecione">Selecione</option>-->
<!--            <option value="recepcao">Recepção</option>-->
<!--            <option value="restaurante">Restaurante</option>-->
<!--            <option value="garagem">Garagem</option>-->
<!--            <option value="serviço">Serviço de Quarto</option>-->
<!--            <option value="gerencia">Gerência</option>-->
<!--            <option value="concierge">Concierge</option>-->
<!--          </select>-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-5">Sim</label>-->
<!--          <input type="radio" name="ferias-5" id="ferias-nao-5" />-->
<!--          <label for="ferias-sim-5">Não</label>-->
<!--          <input type="radio" name="ferias-5" id="ferias-sim-5" />-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao7">Sim</label>-->
<!--          <input type="radio" name="ferias7" id="ferias-nao7" />-->
<!--          <label for="ferias-sim7">Não</label>-->
<!--          <input type="radio" name="ferias7" id="ferias-sim7" />-->
<!--        </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>4</td>-->
<!--        <td>João</td>-->
<!--        <td>6 meses</td>-->
<!--        <td>-->
<!--          <select name="atividade" class="input-secondary">-->
<!--            <option value="selecione">Selecione</option>-->
<!--            <option value="recepcao">Recepção</option>-->
<!--            <option value="restaurante">Restaurante</option>-->
<!--            <option value="garagem">Garagem</option>-->
<!--            <option value="serviço">Serviço de Quarto</option>-->
<!--            <option value="gerencia">Gerência</option>-->
<!--            <option value="concierge">Concierge</option>-->
<!--          </select>-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-8">Sim</label>-->
<!--          <input type="radio" name="ferias-8" id="ferias-nao-8" />-->
<!--          <label for="ferias-sim-8">Não</label>-->
<!--          <input type="radio" name="ferias-8" id="ferias-sim-8" />-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-9">Sim</label>-->
<!--          <input type="radio" name="ferias-9" id="ferias-nao-9" />-->
<!--          <label for="ferias-sim-9">Não</label>-->
<!--          <input type="radio" name="ferias-9" id="ferias-sim-9" />-->
<!--        </td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>5</td>-->
<!--        <td>Ana</td>-->
<!--        <td>3 anos</td>-->
<!--        <td>-->
<!--          <select name="atividade" class="input-secondary">-->
<!--            <option value="selecione">Selecione</option>-->
<!--            <option value="recepcao">Recepção</option>-->
<!--            <option value="restaurante">Restaurante</option>-->
<!--            <option value="garagem">Garagem</option>-->
<!--            <option value="serviço">Serviço de Quarto</option>-->
<!--            <option value="gerencia">Gerência</option>-->
<!--            <option value="concierge">Concierge</option>-->
<!--          </select>-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-10">Sim</label>-->
<!--          <input type="radio" name="ferias-10" id="ferias-nao-10" />-->
<!--          <label for="ferias-sim-10">Não</label>-->
<!--          <input type="radio" name="ferias-10" id="ferias-sim-10" />-->
<!--        </td>-->
<!--        <td>-->
<!--          <label for="ferias-nao-11">Sim</label>-->
<!--          <input type="radio" name="ferias-11" id="ferias-nao-11" />-->
<!--          <label for="ferias-sim-11">Não</label>-->
<!--          <input type="radio" name="ferias-11" id="ferias-sim-11" />-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->
<!--  </main>-->

<!--  <FooterAdmin />-->
<!--</template>-->
<!--<script src="@/main.js" type="module"></script>-->

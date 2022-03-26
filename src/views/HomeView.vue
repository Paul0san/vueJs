<template>
  <div class="home">
    <body class="my-login-page">
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-md-center h-100">
            <div class="card-wrapper">
              <div class="brand">
                <img src="@/assets/logo.png" alt="logo">
              </div>
              <div class="card fat">
                <div class="card-body">
                  <h4 class="card-title">Login</h4>
                  <form v-on:submit.prevent="login" class="my-login-validation" novalidate="">
                    <div class="form-group">
                      <label for="user">Username</label>
                      <input id="user" type="user" class="form-control" name="user" value="" v-model="user" required autofocus>
                      <div class="invalid-feedback">
                        Email is invalid
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="password">Password
                      </label>
                      <input id="password" type="password" class="form-control" name="password" v-model="password" required data-eye>
                        <div class="invalid-feedback">
                          Password is required
                        </div>
                    </div>

                    <div class="form-group m-0 mt-4">
                      <button type="submit" class="btn btn-primary btn-block">
                        Login
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      ¿No tienes una cuenta? <router-link to="/register">Crea una</router-link>
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="error">
                      {{error_msg}}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </div>
</template>

<script>
  // @ is an alias to /src

  import axios from 'axios';
  // import {mapActions} from 'vuex';
  export default {
    name: 'HomeView',
    components: {
    },
    data: function(){
      return {
        user: "",
        password: "",
        error: false,
        error_msg: "",
      }
    },
    methods:{
      login(){
        let formdata = new FormData();
        formdata.append("user",this.user);
        formdata.append("password",this.password);

//cambiar por la url de tu local
    axios.post("http://localhost:86/appTest/CodeIgniter/index.php/api/user/login",formdata)
        .then( data => {
            if(data.data.status != false){
              localStorage.token = data.data.data.token;
              this.$router.push('dashboard');
            }else{
              this.error = true;
              this.error_msg = data.data.message;
            }
        })  
      },
      // ...mapActions(['mockLogin'])
      
    }
  }
</script>

<style scoped>
  html,body {
    height: 100%;
    background-color: #f7f9fb;

  }

  body.my-login-page {
    font-size: 14px;
  }

  .my-login-page .brand {
    width: 90px;
    height: 90px;
    overflow: hidden;
    border-radius: 50%;
    margin: 40px auto;
    box-shadow: 0 4px 8px rgba(0,0,0,.05);
    position: relative;
    z-index: 1;
  }

  .my-login-page .brand img {
    width: 100%;
  }

  .my-login-page .card-wrapper {
    width: 400px;
  }

  .my-login-page .card {
    border-color: transparent;
    box-shadow: 0 4px 8px rgba(0,0,0,.1);
  }

  .my-login-page .card.fat {
    padding: 10px;
  }

  .my-login-page .card .card-title {
    margin-bottom: 30px;
  }

  .my-login-page .form-control {
    border-width: 2.3px;
  }

  .my-login-page .form-group label {
    width: 100%;
  }

  .my-login-page .btn.btn-block {
    padding: 12px 10px;
  }

  .my-login-page .footer {
    margin: 40px 0;
    color: #888;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    .my-login-page .card-wrapper {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 320px) {
    .my-login-page .card.fat {
      padding: 0;
    }

    .my-login-page .card.fat .card-body {
      padding: 15px;
    }
  }
</style>

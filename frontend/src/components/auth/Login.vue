<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/api/login', {
            username: this.username,
            password: this.password
          });
  
          const token = response.data.token;
          const user = response.data.user;
  
          localStorage.setItem('token', token);
          console.log("USER:"+user.role)
          if (user.role === 'ROLE_ADMIN') {
            router.push('/indexadmin');
          } else if (user.role === 'ROLE_USER') {
            router.push('/indexuser');
          } else {
            this.errorMessage = 'Rôle inconnu';
          }
        } catch (error) {
          this.errorMessage = 'Nom d’utilisateur ou mot de passe incorrect';
        }
      }
    }
  };
  </script>
  
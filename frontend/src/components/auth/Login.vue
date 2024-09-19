<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="custom-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit" class="btn-custom">Login</button>
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
        console.log("USER:" + user.role)
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

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.custom-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #f8c6d4;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: none;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #f8c6d4;
  box-shadow: 0 0 5px rgba(248, 198, 212, 0.5);
  outline: none;
}

.btn-custom {
  background-color: #f8c6d4;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 1rem;
  text-transform: uppercase;
}

.btn-custom:hover {
  background-color: #e4b2bf;
}

h2 {
  color: #f8c6d4;
  margin-bottom: 20px;
}

.error {
  color: red;
  margin-top: 15px;
}
</style>

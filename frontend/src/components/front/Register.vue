<template>
  <div class="container mt-5">
    <h2 class="text-center">Inscription</h2>
    <form @submit.prevent="submitForm" class="custom-form p-4 rounded shadow-sm">
      <div class="mb-3">
        <label for="username" class="form-label">Nom d'utilisateur</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          required
          minlength="3"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Adresse e-mail</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
          minlength="6"
        />
      </div>
      <button type="submit" class="btn btn-custom">S'inscrire</button>
      <div v-if="message" class="mt-3 alert" :class="alertClass">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        
        this.username = '';
        this.email = '';
        this.password = '';

        this.$router.push('/login'); 
      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
      }
    }
  }
};
</script>

<style scoped>
.custom-form {
  max-width: 500px;
  margin: auto;
  border: 2px solid #f8c6d4;
  background-color: #fff;
}

input {
  border-radius: 0.25rem;
  border: 1px solid #f8c6d4;
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
  border-radius: 0.25rem;
  transition: background-color 0.3s ease-in-out;
  font-size: 1rem;
}

.btn-custom:hover {
  background-color: #e4b2bf;
}

h2 {
  color: #f8c6d4;
}
</style>

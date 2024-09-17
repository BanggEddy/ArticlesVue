<template>
  <div class="container mt-5">
    <h2>Inscription</h2>
    <form @submit.prevent="submitForm">
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
      <button type="submit" class="btn btn-primary">S'inscrire</button>
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
</style>

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

export default {
  data() {
    return {
      users: {
        username: '',
        email: '',
        password: '',
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/api/register', this.users);
        alert('Bienvenue!');
        this.users.username = '';
        this.users.email = '';
        this.users.password = '';
      } catch (error) {
        console.error('Erreur lors de l"utilisateur:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.alert {
  padding: 1rem;
  border-radius: .375rem;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>

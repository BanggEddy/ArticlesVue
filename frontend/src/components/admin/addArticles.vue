<template>
  <div class="container my-4">
    <h1 class="mb-4">Ajouter un nouvel article</h1>
    <form @submit.prevent="submitForm" class="bg-light p-4 rounded shadow-sm">
      <div class="mb-3">
        <label for="namearticle" class="form-label">Nom de l'article:</label>
        <input type="text" v-model="article.namearticle" id="namearticle" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="descriptionarticle" class="form-label">Description de l'article:</label>
        <textarea v-model="article.descriptionarticle" id="descriptionarticle" class="form-control" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Ajouter l'article</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      article: {
        namearticle: '',
        descriptionarticle: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/addarticles', this.article);
        alert('Article ajouté avec succès!');
        this.article.namearticle = '';
        this.article.descriptionarticle = '';
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
      }
    }
  }
};
</script>

<style>
form {
  max-width: 600px;
  margin: auto;
}

input, textarea {
  border-radius: 0.25rem;
}

button {
  font-size: 1.1rem;
}
</style>

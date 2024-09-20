<template>
  <div class="container my-4">
    <h1 class="mb-4 text-center">Ajouter un nouvel article</h1>
    <form @submit.prevent="submitForm" class="bg-light p-4 rounded shadow-sm custom-form">
      <div class="mb-3">
        <label for="namearticle" class="form-label">Nom de l'article:</label>
        <input type="text" v-model="article.namearticle" id="namearticle" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="descriptionarticle" class="form-label">Description de l'article:</label>
        <textarea v-model="article.descriptionarticle" id="descriptionarticle" class="form-control" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-custom">Ajouter l'article</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      article: {
        namearticle: '',
        descriptionarticle: ''
      }
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    async submitForm() {
      console.log('isAuthenticated:', this.isAuthenticated); // Debugging
      if (!this.isAuthenticated) {
        alert('Vous devez être connecté pour ajouter un article.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/addarticles', this.article, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        alert('Article ajouté avec succès!');
        this.article.namearticle = '';
        this.article.descriptionarticle = '';
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
        alert('Erreur lors de l\'ajout de l\'article. Veuillez réessayer.');
      }
    }
  }
};
</script>

<style>
.custom-form {
  max-width: 600px;
  margin: auto;
  border: 2px solid #f8c6d4; 
}

input, textarea {
  border-radius: 0.25rem;
  border: 1px solid #f8c6d4;
  box-shadow: none;
}

.btn-custom {
  background-color: #f8c6d4;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 0.25rem;
  font-size: 1.1rem;
}

.btn-custom:hover {
  background-color: #f8c6d4;
}

h1 {
  color: #f8c6d4;
}
</style>

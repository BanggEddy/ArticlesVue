<template>
    <div class="container my-4">
      <h1 class="mb-4">Les articles du moments :</h1>
      <div class="row mt-4">
        <div class="col-md-4 mb-4" v-for="article in articles" :key="article._id">
          <div class="card h-100 bg-pink text-white">
            <div class="card-body">
              <h2 class="card-title">{{ article.namearticle }}</h2>
              <p class="card-text">{{ article.descriptionarticle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>  
  export default {
    data() {
      return {
        article: {
          namearticle: '',
          descriptionarticle: ''
        },
        articles: []
      };
    },
    async created() {
      try {
        const response = await fetch('http://localhost:3000/getarticles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.articles = await response.json();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    },
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
  
  .bg-pink {
    background-color: #f8c6d4 !important; 
  }
  
  .text-white {
    color: #ffffff;
  }
  </style>
    
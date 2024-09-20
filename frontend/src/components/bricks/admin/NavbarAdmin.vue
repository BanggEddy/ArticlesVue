<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/indexadmin">
        <img src="../../../../public/logo.png" alt="Logo" class="logo-radius">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/indexadmin">
              ArticleVue
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/addarticlesview">
              Ajouter un article
            </RouterLink>
          </li>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-pink" type="submit">Search</button>
          </form>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="nav-link" @click="logout">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg>
              Déconnexion
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

  
  <script>
  export default {
    methods: {
      async logout() {
        try {
          localStorage.removeItem('token'); 
          this.$router.push('/login'); 
        } catch (error) {
          console.error('Error during logout:', error);
        }
      }
    }
  };
  </script>
  

  <style scoped>
  .logo-radius {
    border-radius: 50%;
    width: 60px;
    height: auto;
    display: block;
  }
  
  .btn-pink {
    background-color: pink;
    border-color: pink;
  }
  </style>
  
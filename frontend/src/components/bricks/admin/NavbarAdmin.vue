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
              <RouterLink class="nav-link" to="/register">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                </svg>
                Déconnexion
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
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
  
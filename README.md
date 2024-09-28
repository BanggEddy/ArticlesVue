# Projet Vue.js & Express.js avec MongoDB

## Description

Ce projet est une application web qui permet de gérer des articles avec un système d'authentification JWT pour l'accès utilisateur. Il dispose d'une interface d'administration et d'une gestion des utilisateurs. Le backend est développé en Express.js et le frontend en Vue.js, avec une base de données MongoDB.

## Fonctionnalités

- **Gestion des articles** : Ajout et affichage des articles.
- **Authentification JWT** : Inscription, connexion et protection des routes avec des tokens JWT.
- **Gestion des rôles** : Interface dédiée pour l'administrateur.
- **Vue.js** : Frontend avec Vue.js, Vuex pour la gestion des états.
- **Express.js & MongoDB** : Backend avec Express.js et MongoDB pour stocker les utilisateurs et les articles.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Node.js (v14+)
- MongoDB (local ou cloud)
- Git

## Installation

1. Clonez ce dépôt sur votre machine locale :

    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd votre-repo
    ```

### Installation du Backend (Express.js)

1. Accédez au dossier du backend :

    ```bash
    cd backend
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Configurez les variables d'environnement dans un fichier `.env` :

    ```bash
    DATABASE_ACCESS=mongodb+srv://bangeddy:bangeddy@cluster0.mkhxfkw.mongodb.net/articlevue?retryWrites=true&w=majority
    JWT_SECRET="pqodpqosPOQSDKPQOKdqkd"
    ```

4. Démarrez le serveur Express :

    ```bash
    npm start
    ```

Le serveur sera accessible par défaut à l'adresse : [http://localhost:3000](http://localhost:3000).

### Installation du Frontend (Vue.js)

1. Accédez au dossier du frontend :

    ```bash
    cd frontend
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Démarrez l'application Vue.js :

    ```bash
    npm run dev
    ```

Le frontend sera accessible à l'adresse : [http://localhost:5173](http://localhost:5173).

## Utilisation

### Accès à l'interface

- **Utilisateur** : Accédez à l'application pour consulter les articles.
- **Administrateur** : Une interface dédiée pour gérer les articles.

### Endpoints du backend

- `GET /articles` : Récupère tous les articles.
- `POST /addarticles` : Ajoute un article (nécessite une authentification).
- `POST /register` : Inscription d'un nouvel utilisateur.
- `POST /api/login` : Connexion d'un utilisateur avec génération d'un token JWT.

    

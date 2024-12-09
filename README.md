# VisioConf

VisioConf est une application de visioconférence développée avec une architecture front-end et back-end. Ce projet utilise React pour le front-end et Express avec MongoDB pour le back-end.

## Prérequis

-   Node.js (version 14 ou supérieure)
-   MongoDB (version 4 ou supérieure)

## Installation

### Front-end

1. Naviguez vers le répertoire du front-end :

    ```bash
    cd visio-conf-front
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```

### Back-end

1. Naviguez vers le répertoire du back-end :

    ```bash
    cd visio-conf-backend
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Configurez les variables d'environnement en créant un fichier `.env` à la racine du répertoire back-end, en suivant le template `.env.template
`
4. Initialisez la base de données (création de la collection, des tables et insertions de données de tests) :

    ```bash
    npm run init-db
    ```

5. Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```

## Utilisation

### Authentification

-   Lors de la première utilisation, vous pouvez vous inscrire en tant qu'utilisateur via la page d'inscription, ou utiliser des identifiants de tests insérés en bas lors de l'initialisation.

## Scripts

### Front-end

-   `npm run dev` : Démarre le serveur de développement.
-   `npm run build` : Compile l'application pour la production.

### Back-end

-   `npm run start` : Compile et démarre le serveur.
-   `npm run dev` : Démarre le serveur en mode développement.
-   `npm run init-db` : Initialise la base de données avec des données par défaut.

## Technologies utilisées

-   **Front-end** : React, TypeScript, React Router, Sass
-   **Back-end** : Express, TypeScript, Mongoose, JWT
-   **Base de données** : MongoDB

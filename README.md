# VisioConf

VisioConf est une application de visioconférence développée avec une architecture front-end et back-end. Ce projet utilise React pour le front-end et Express avec MongoDB pour le back-end.

## Prérequis

-   Node.js (version 14 ou supérieure)
-   MongoDB (version 4 ou supérieure)
-   mongosh

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

## Configuration de MongoDB avec authentification

1. **Démarrer MongoDB**

    #### Pour Windows :

    ```bash
    net start MongoDB
    ```

    #### Pour macOS/Linux :

    ```bash
    sudo systemctl start mongod
    ```

2. **Se connecter à MongoDB avec mongosh**

    ```javascript
    mongosh
    ```

3. **Créer un utilisateur, dans le terminal mongosh**

    ```javascript
    use admin
    ```

    ```javascript
    db.createUser({
        user: "visio-conf-user",
        pwd: "visio-conf-password",
        roles: [{ role: "readWrite", db: "visio-conf" }],
    })
    ```

4. **Activer l'authentification dans le fichier de configuration** :  
   Dans le dossier où est installé MongoDB sur votre PC :
   Modifiez le fichier `mongod.cfg` pour activer l'authentification (en tant qu'administrateur).

    Ajoutez ou mettez à jour la section suivante :

    ```yaml
    security:
        authorization: enabled
    ```

5. **Redémarrer MongoDB** :

    #### Pour Windows :

    ```bash
    net stop MongoDB
    net start MongoDB
    ```

    #### Pour macOS/Linux :

    ```bash
    sudo systemctl restart mongod
    ```

6. **Tester la connexion avec authentification** :  
   Vérifiez que l'authentification fonctionne en exécutant :

    ```bash
    mongosh --username visio-conf-user --password visio-conf-password --authenticationDatabase admin
    ```

    Si la connexion est réussie, l'installation est correcte.

---

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

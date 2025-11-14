# install dependencies

# backend
$ install php >= 8.2

# install app's dependencies

$ composer install

$ cp .env.example .env

# edit connect database

DB_HOST=127.0.0.1
DB_PORT=8889
DB_DATABASE=
DB_USERNAME=root
DB_PASSWORD=root

### Next step

```bash
# in your app directory
# generate laravel APP_KEY
$ php artisan key:generate

# run database migration and seed
$ php artisan migrate:refresh --seed

# generate mixing
$ npm install or yarn install
$ npm run dev or npm run build or yarn build

# and repeat generate mixing
$ npm run dev

# generate interface and repository run command
$ php artisan make:repository name

# login with account admin@gmail.com/Laravel@2025

# generate jwt secret
$ php artisan jwt:secret

# frontend

$ cp .env.example .env

$ npm install or yarn install
$ npm run dev or npm run build or yarn build
```
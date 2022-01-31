# Desarrollo de proyecto

## Uso de proyecto

- Es necesario instalar las dependencias, tan pronto se clone el proyecto.

```shell
$ npm install
```

- Una vez hecho esto, crear un archivo `.env` para generar las variables de entorno.

`.env`

```
PORT=3000
MONGODB='THE URL_DB'
SECRET='THE SECRET WORD'
```

## Instalación de librerías

- bcryptjs
- dotenv
- express
- mongoose
- nodemon
- jsonwebtoken
- cors

```shell
$ npm install o npm i
```

## Correr el proyecto

Para correr el proyecto basta con ejecutar:

```shell
$ npm run dev
```

## USO DE EP's

##### API User:

- Registro de usuario

```shell
curl --location --request POST 'https://fa-plenna.herokuapp.com/users/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Fa",
    "email": "test1@gmail.com",
    "password": "password"
}'
```

- Inicio de sesión

```shell
curl --location --request POST 'https://fa-plenna.herokuapp.com/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test1@gmail.com",
    "password": "password"
}'
```

- Verificación de Token

```shell
curl --location --request GET 'https://fa-plenna.herokuapp.com/users/verifytoken' \
--header 'x-auth-token: x-auth-token'

```

##### API Consults:

- Crear una consulta

```shell
curl --location --request POST 'https://fa-plenna.herokuapp.com/consults/create' \
--header 'Content-Type: application/json' \
--data-raw '{
     "condition":"Gripa",
     "examination":"Escurrimiento nasal, fiebre, dolor de garganta",
     "diagnostic":"Gripa",
     "prescription":"Paracetamol, Lorataadina, Ibuprofeno",
     "treatment":"1 capsula cada 8 horas",
     "notes":"Descansar",
     "patient":"patientId"
}'
```

- Leer todas las consultas

```shell
curl --location --request GET 'https://fa-plenna.herokuapp.com/consults/readall'
```

- Leer una consulta

```shell
curl --location --request GET 'https://fa-plenna.herokuapp.com/consults/readone/:consultId'
```

- Editar una consulta

```shell
curl --location --request PUT 'https://fa-plenna.herokuapp.com/consults/edit/:consultId' \
--header 'Content-Type: application/json' \
--data-raw '{
     "condition":"Infección",
     "examination":"Flujo",
     "diagnostic":"Infección",
     "prescription":"Paracetamol",
     "treatment":"1 capsula cada 8 horas",
     "notes":"Descansar y tomar agua",
     "patient":"patientId"
}'
```

##### API Patients

- Leer todos los pacientes

```shell
curl --location --request GET 'https://fa-plenna.herokuapp.com/patients/readAll'
```

-Leer detalles de un paciente

```shell
curl --location --request GET 'https://fa-plenna.herokuapp.com/patients/readone/:patientId'
```

-Editar un paciente

```shell
curl --location --request PUT 'https://fa-plenna.herokuapp.com/patients/edit/:patientId' \
--header 'Content-Type: application/json' \
--data-raw '  {
        "name": "Diana",
        "lastname": "de Temiscira",
        "age": "20 años",
        "weight": "52 Kg",
        "height": "1.60 m",
        "allergies": "Abejas"
  }'
```

##### API Services

-Leer todos los servicios

```shell
curl --location --request GET 'https://fa-plenna.herokuapp.com/services/readall'
```

-Leer detalles de un servicio

```shell
curl --location --request GET 'https://fa-plenna.herokuapp.com/services/readone/:serviceId'
```

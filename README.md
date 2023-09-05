# (Nombre Proyecto)
## Objetivo
(Objetivo del proyecto)
# Diagrama base de datos
Prueba de **(nombre prueba)** para practicar MongoDB, se creó la base de datos según este diagrama

<img src="./assets/diagrama.png">

# Instalación

1. Clonar este repositorio
2. En la terminal del proyecto ejecute el comando `npm i`
3. Cambie el nombre del archivo `.env.example` a `.env`
4. Ejecutar el comando `npm run dev` el cual iniciará el servidor

# Api
## **uri:** `http://127.12.1.1:5511`
# Generar Token
En este proyecto para generar el token usumos un usuario de la base de datos en este caso utilizaremos estos datos para acceder a todos los endpoints.
- Endpoint: `login`
- **Importante** en el body debe poner los siguientes datos:
```json
{
    "User": 2,
    "Password": "Miguel"
}
```
Si todo sale correcto nos deberia generar el token de esta forma

<img src="./assets/token.png">

# Validar token
Para poder ingresar a cada endpoint de esta Api debe ingresar el token generado anteriormente en los **Headers** de nuestra consulta de esta forma

<img src="./assets/usoToken.png">

# Get
## Endpoints
1. `/ejemplo` Mostrar todos los usuarios registrados en la base de datos.
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f3e69b344540b8c5ce001c",
            "id": 1,
            "PW": "Santi123",
            "role": {
                "nombre": "empleado",
                "permisos": [
                    "collection"
                ]
            }
        },
        {
            "_id": "64f3e69b344540b8c5ce001d",
            "id": 2,
            "PW": "Miguel",
            "role": {
                "nombre": "admin",
                "permisos": [
                    "*"
                ]
            }
        }
    ]
    ```
    </details>

# Post
## Endpoints
1. `/empleados/add`
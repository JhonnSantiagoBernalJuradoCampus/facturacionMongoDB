# Farmacia Campus
## Objetivo
Como cliente de una farmacia, requiero un sistema de gestión que me permita gestionar las ventas y compras, interactuar con proveedores, empleados y pacientes,  generar informes de ventas y caducidad de medicamentos. Es esencial que este software pase por un proceso de análisis de requerimientos, diseño, implementación, pruebas, y eventual retiro, garantizando en todo momento la adaptabilidad, confiabilidad y eficiencia para las operaciones diarias de la farmacia.

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
    "User": 1,
    "Password": "Dr. Martinez"
}
```
Si todo sale correcto nos deberia generar el token de esta forma

<img src="./assets/token.png">

# Validar token
Para poder ingresar a cada endpoint de esta Api debe ingresar el token generado anteriormente en los **Headers** de nuestra consulta de esta forma

<img src="./assets/usoToken.png">

# Consultas
## Get
1. `/medicamentos/menor50` Obtener todos los medicamentos con menos de 50 unidades en stock
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bc9",
            "med_id": 2,
            "med_nombre": "Simvastatina",
            "contacto_proveedor": "Angie",
            "precio": 10000,
            "stock": 40,
            "caducidad": "2024-03-20"
        },
        {
            "_id": "64f7435065eee1a67b274bcb",
            "med_id": 4,
            "med_nombre": "Omeprazol",
            "contacto_proveedor": "Fernando",
            "precio": 50000,
            "stock": 20,
            "caducidad": "2022-07-30"
        }
    ]
    ```
    </details>

2. `/proveedor/contacto` Listar los proveedores con su información de contacto en medicamentos
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "prov_id": 1,
            "prov_nombre": "Santiago",
            "Info": [
                {
                    "med_nombre": "Paracetamol",
                    "contacto_proveedor": "Santiago"
                },
                {
                    "med_nombre": "Aspirina",
                    "contacto_proveedor": "Santiago"
                }
            ]
        },
        {
            "prov_id": 2,
            "prov_nombre": "Angie",
            "Info": [
                {
                    "med_nombre": "Simvastatina",
                    "contacto_proveedor": "Angie"
                }
            ]
        },
        {
            "prov_id": 3,
            "prov_nombre": "Fernando",
            "Info": [
                {
                    "med_nombre": "Omeprazol",
                    "contacto_proveedor": "Fernando"
                }
            ]
        }
    ]
    ```
    </details>

3. `/medicamentos/comprados` Medicamentos comprados a 'Santiago'
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bc8",
            "med_id": 1,
            "med_nombre": "Paracetamol",
            "contacto_proveedor": "Santiago",
            "precio": 2000,
            "stock": 200,
            "caducidad": "2023-10-11"
        },
        {
            "_id": "64f7435065eee1a67b274bca",
            "med_id": 3,
            "med_nombre": "Aspirina",
            "contacto_proveedor": "Santiago",
            "precio": 1000,
            "stock": 300,
            "caducidad": "2023-02-08"
        }
    ]
    ```
    </details>

4. `/receta/enero` Obtener recetas médicas emitidas después del 1 de enero de 2023
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bc6",
            "rec_id": 1,
            "id_paciente": 1,
            "id_medicamento": 1,
            "nombre_empleado": "Dr. Martinez",
            "cantidad": 2,
            "rec_fecha": "23-09-2023"
        }
    ]
    ```
    </details>

5. `/venta/medicamento` Total de ventas del medicamento 'Paracetamol'
    <details>
    <summary>Datos de salida</summary>

    ```json
    {
        "Cantidad": 2
    }
    ```
    </details>

6. `/medicamentos/caduca` Medicamentos que caducan antes del 1 de enero de 2024
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bc8",
            "med_id": 1,
            "med_nombre": "Paracetamol",
            "contacto_proveedor": "Santiago",
            "precio": 2000,
            "stock": 200,
            "caducidad": "2023-10-11"
        },
        {
            "_id": "64f7435065eee1a67b274bca",
            "med_id": 3,
            "med_nombre": "Aspirina",
            "contacto_proveedor": "Santiago",
            "precio": 1000,
            "stock": 300,
            "caducidad": "2023-02-08"
        },
        {
            "_id": "64f7435065eee1a67b274bcb",
            "med_id": 4,
            "med_nombre": "Omeprazol",
            "contacto_proveedor": "Fernando",
            "precio": 50000,
            "stock": 20,
            "caducidad": "2022-07-30"
        }
    ]
    ```
    </details>


7. `/proveedor/vendido` Total de medicamentos vendidos por cada proveedor
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": 3,
            "prov_nombre": "Fernando",
            "Ventas": 5
        },
        {
            "_id": 1,
            "prov_nombre": "Santiago",
            "Ventas": 5
        },
        {
            "_id": 2,
            "prov_nombre": "Angie",
            "Ventas": 2
        }
    ]
    ```
    </details>


8. `/venta/dinero` Cantidad total de dinero recaudado por las ventas de medicamentos
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": 1,
            "nombre_med": "Paracetamol",
            "cantidad": 13,
            "precio": 2000,
            "recuado": 26000
        },
        {
            "_id": 2,
            "nombre_med": "Simvastatina",
            "cantidad": 2,
            "precio": 10000,
            "recuado": 20000
        },
        {
            "_id": 4,
            "nombre_med": "Omeprazol",
            "cantidad": 5,
            "precio": 50000,
            "recuado": 250000
        }
    ]
    ```
    </details>

9. `/receta/doctor` Recetas prescritas por el Dr. Martínez
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bc6",
            "rec_id": 1,
            "id_paciente": 1,
            "id_medicamento": 1,
            "nombre_empleado": "Dr. Martinez",
            "cantidad": 2,
            "rec_fecha": "23-09-2023"
        }
    ]
    ```
    </details>


10. `/medicamentos/sinVender` Medicamentos que no han sido vendidos
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bca",
            "med_id": 3,
            "med_nombre": "Aspirina",
            "contacto_proveedor": "Santiago",
            "precio": 1000,
            "stock": 300,
            "caducidad": "2023-02-08"
        }
    ]
    ```
    </details>


11. `/medicamentos/caro` Obtener el medicamento más caro
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bcb",
            "med_id": 4,
            "med_nombre": "Omeprazol",
            "contacto_proveedor": "Fernando",
            "precio": 50000,
            "stock": 20,
            "caducidad": "2022-07-30"
        }
    ]
    ```
    </details>

12. `/proveedor/cantidad` Número de medicamentos por proveedor
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": 3,
            "proveedor": "Santiago",
            "medicamentos": 1
        },
        {
            "_id": 4,
            "proveedor": "Fernando",
            "medicamentos": 1
        },
        {
            "_id": 1,
            "proveedor": "Santiago",
            "medicamentos": 1
        },
        {
            "_id": 2,
            "proveedor": "Angie",
            "medicamentos": 1
        }
    ]
    ```
    </details>

13. `/paciente/compra` Pacientes que han comprado Paracetamol
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "pac_id": 3,
            "pac_nombre": "James Ronald"
        },
        {
            "pac_id": 1,
            "pac_nombre": "Daniel Felipe"
        }
    ]
    ```
    </details>

14. `/venta/sinVentas` Proveedores que no han vendido medicamentos en el último año
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7434e65eee1a67b274bb9",
            "venta_id": 1,
            "nombre_prov": "Santiago",
            "nombre_med": "Paracetamol",
            "nombre_pac": "Daniel Felipe",
            "venta_fecha": "2022-08-20",
            "cantidad": 5
        },
        {
            "_id": "64f7434e65eee1a67b274bbc",
            "venta_id": 4,
            "nombre_prov": "Fernando",
            "nombre_med": "Omeprazol",
            "nombre_pac": "Daniel Felipe",
            "venta_fecha": "2022-07-30",
            "cantidad": 5
        }
    ]
    ```
    </details>

15. `/venta/marzo` Obtener el total de medicamentos vendidos en marzo de 2023
     <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7434e65eee1a67b274bbb",
            "venta_id": 3,
            "nombre_prov": "Angela",
            "nombre_med": "Paracetamol",
            "nombre_pac": "James Ronald",
            "venta_fecha": "2023-03-10",
            "cantidad": 8
        },
        {
            "_id": "64f7434e65eee1a67b274bba",
            "venta_id": 2,
            "nombre_prov": "Angie",
            "nombre_med": "Simvastatina",
            "nombre_pac": "Loren Nathalia",
            "venta_fecha": "2023-03-15",
            "cantidad": 2
        }
    ]
    ```
    </details>

16. `/venta/menosVendido` Obtener el medicamento menos vendido en 2023
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7434e65eee1a67b274bba",
            "venta_id": 2,
            "nombre_prov": "Angie",
            "nombre_med": "Simvastatina",
            "nombre_pac": "Loren Nathalia",
            "venta_fecha": "2023-03-15",
            "cantidad": 2
        }
    ]
    ```
    </details>

17. `/venta/ganancia` Ganancia total por proveedor en 2023 (asumiendo un campo precioCompra en Compras)
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": 2,
            "nombre_prov": "Angie",
            "venta_fecha": "2023-03-15",
            "ganancia": 20000
        },
        {
            "_id": 3,
            "nombre_prov": "Angela",
            "venta_fecha": "2023-03-10",
            "ganancia": 16000
        },
        {
            "_id": 5,
            "nombre_prov": "Luis",
            "venta_fecha": "2023-05-22",
            "ganancia": 8000
        }
    ]
    ```
    </details>

18. `/venta/promedio` Promedio de medicamentos comprados por venta
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": 2,
            "medicamento": "Simvastatina",
            "promedio": 2
        },
        {
            "_id": 3,
            "medicamento": "Paracetamol",
            "promedio": 8
        },
        {
            "_id": 1,
            "medicamento": "Paracetamol",
            "promedio": 5
        },
        {
            "_id": 5,
            "medicamento": "Aspirina",
            "promedio": 8
        },
        {
            "_id": 4,
            "medicamento": "Omeprazol",
            "promedio": 5
        }
    ]
    ```
    </details>

19. `/medicamentos/menor50` Medicamentos que tienen menos de 50 unidades en stock
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f7435065eee1a67b274bc9",
            "med_id": 2,
            "med_nombre": "Simvastatina",
            "contacto_proveedor": "Angie",
            "precio": 10000,
            "stock": 40,
            "caducidad": "2024-03-20"
        },
        {
            "_id": "64f7435065eee1a67b274bcb",
            "med_id": 4,
            "med_nombre": "Omeprazol",
            "contacto_proveedor": "Fernando",
            "precio": 50000,
            "stock": 20,
            "caducidad": "2022-07-30"
        }
    ]
    ```
    </details>

20. `/venta/anio` Cantidad de ventas realizadas por cada empleado en 2023
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": 2,
            "empleado": "Angie",
            "ventas": 1
        },
        {
            "_id": 5,
            "empleado": "Luis",
            "ventas": 1
        },
        {
            "_id": 3,
            "empleado": "Angela",
            "ventas": 1
        }
    ]
    ```
    </details>

21. `/medicamentos/proximo` Obtener todos los medicamentos que expiren en 2024
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f76afcbe2bc214beb6c5ee",
            "med_id": 2,
            "med_nombre": "Simvastatina",
            "contacto_proveedor": "Angie",
            "precio": 10000,
            "stock": 40,
            "caducidad": "2024-03-20"
        }
    ]
    ```
    </details>

22. `/venta/mas` Empleados que hayan hecho más de 5 ventas en total
    <details>
    <summary>Datos de salida</summary>

    ```json
    [
        {
            "_id": "64f76afcbe2bc214beb6c5ee",
            "med_id": 2,
            "med_nombre": "Simvastatina",
            "contacto_proveedor": "Angie",
            "precio": 10000,
            "stock": 40,
            "caducidad": "2024-03-20"
        }
    ]
    ```
    </details>
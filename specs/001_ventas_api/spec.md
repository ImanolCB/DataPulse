# Especificación 001: Carga y visualización de datos de práctica

## Estado
Borrador. Debe contrastarse con el estado real del repositorio antes de aprobarse.

## 1. Objetivo
Permitir que el usuario solicite la carga de datos mediante la interfaz y visualice los resultados en una tabla HTML.

## 2. Contexto
En esta fase se utiliza JavaScript nativo y una API externa de práctica. Los datos obtenidos no representan ventas reales. El precio generado a partir del identificador es sintético.

## 3. Alcance
- Solicitar datos mediante HTTP.
- Comprobar si la respuesta HTTP es satisfactoria.
- Interpretar el cuerpo de respuesta como JSON.
- Transformar los registros al formato que necesita la interfaz.
- Mostrar los registros en una tabla.
- Mostrar información comprensible cuando ocurre un error.

## 4. Fuera de alcance
- Crear una API propia con Java o Spring Boot.
- Persistir información en una base de datos.
- Autenticación y autorización.
- Importación de archivos CSV.
- Métricas de negocio o gráficos avanzados.

## 5. Requisitos funcionales
- RF-01: el usuario puede iniciar la carga mediante un control de la interfaz.
- RF-02: la aplicación solicita los datos al servicio externo de práctica.
- RF-03: la aplicación transforma los datos recibidos antes de presentarlos.
- RF-04: la aplicación muestra los registros en una tabla.
- RF-05: la aplicación comunica los errores HTTP y de conectividad sin confundirlos.
- RF-06: los valores mostrados se insertan en el DOM mediante APIs apropiadas, sin interpretar datos externos como HTML.

## 6. Criterios de aceptación
- CA-01: al completar correctamente la petición, los registros aparecen en la tabla.
- CA-02: cada registro muestra los campos definidos en el modelo temporal.
- CA-03: una respuesta HTTP no satisfactoria genera un error gestionable.
- CA-04: un error de red se comunica al usuario.
- CA-05: los registros anteriores se gestionan de forma coherente al actualizar la tabla.
- CA-06: los datos de práctica se identifican como datos no reales.

## 7. Modelo temporal
- idProducto: identificador derivado del registro de práctica.
- producto: texto descriptivo derivado de la respuesta.
- precio: valor sintético utilizado únicamente para practicar transformaciones.

## 8. Decisiones pendientes
- Confirmar la URL y la estructura real de la respuesta externa.
- Confirmar los nombres exactos de los campos del modelo.
- Determinar las validaciones manuales disponibles en el entorno actual.
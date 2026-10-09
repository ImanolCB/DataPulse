# Plan técnico 001: Carga y visualización de datos

## Estado
Propuesta pendiente de revisión y aprobación.

## 1. Arquitectura actual
Navegador → JavaScript → API externa de práctica → JSON → transformación → DOM.

No existe todavía una API propia ni una base de datos en esta fase.

## 2. Responsabilidades
- HTML: estructura de la interfaz.
- CSS: presentación visual.
- JavaScript: petición HTTP, tratamiento de errores, transformación de datos y actualización del DOM.

## 3. Flujo previsto
1. El usuario pulsa el botón de carga.
2. El controlador del evento invoca la función de carga.
3. La función realiza la petición con fetch.
4. Se comprueba response.ok.
5. Se convierte la respuesta a JSON.
6. Los datos se transforman al modelo temporal.
7. La tabla se actualiza mediante operaciones del DOM.
8. Si ocurre un error, se comunica de forma comprensible.

## 4. Restricciones técnicas
- JavaScript nativo, sin framework.
- Sin dependencias nuevas.
- Sin backend propio en esta fase.
- No utilizar datos externos como HTML ejecutable.

## 5. Validación propuesta
- Probar la carga satisfactoria.
- Revisar la estructura y los valores de los registros.
- Comprobar el comportamiento ante una respuesta HTTP fallida.
- Comprobar el comportamiento sin conexión o con una URL inválida.
- Revisar que la tabla no conserve filas obsoletas tras una recarga.

## 6. Riesgos y límites
- El servicio externo puede dejar de estar disponible.
- Su respuesta puede cambiar.
- Los valores sintéticos no representan precios de negocio.
- La validación manual no sustituye a pruebas automatizadas.

## 7. Decisiones pendientes
Confirmar la estructura actual de los archivos y las funciones existentes antes de decidir cambios concretos.
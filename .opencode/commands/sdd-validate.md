---
description: SDD · Valida una spec requisito por requisito
agent: build
---

Lee la spec indicada:

specs/$1/spec.md

Para cada RF:

1. identifica qué test lo cubre;
2. ejecuta los tests;
3. comprueba el resultado;
4. si es un requisito de interfaz, compruébalo manualmente en navegador;
5. indica claramente cualquier requisito no cubierto.

No arregles problemas.

Al final indica:

- RF cumplidos;
- RF no cumplidos;
- tests;
- problemas encontrados;
- veredicto final.
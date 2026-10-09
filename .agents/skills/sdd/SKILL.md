---
name: sdd
description: Procedimiento para definir, planificar y validar funcionalidades de DataPulse mediante especificaciones y tareas verificables.
---

# Flujo SDD de DataPulse

## Principio
La especificación define qué se necesita; el plan explica cómo abordarlo; las tareas descomponen el trabajo. Ninguno de estos documentos autoriza por sí solo a modificar el código.

## Fase 1: Estado
Inspeccionar los archivos relevantes y distinguir comportamiento existente, comportamiento pendiente y decisiones desconocidas. No modificar archivos.

## Fase 2: Especificación
Definir objetivo, alcance, exclusiones, requisitos funcionales y criterios de aceptación. Identificar las preguntas que bloquean decisiones importantes. Esperar aprobación del usuario.

## Fase 3: Plan
Proponer arquitectura, responsabilidades, flujo de datos, riesgos y validaciones. Mantenerse dentro de la tecnología de la fase actual. Esperar aprobación cuando se solicite una decisión técnica.

## Fase 4: Tareas
Descomponer el plan en pasos pequeños y verificables. Indicar dependencias y criterios de finalización. No ejecutar las tareas automáticamente.

## Fase 5: Implementación autorizada
Solo implementar cuando el usuario lo solicite expresamente. Antes de editar, indicar el alcance y los archivos afectados. No introducir cambios adicionales.

## Fase 6: Validación
Ejecutar únicamente las comprobaciones disponibles y autorizadas. Informar de los comandos ejecutados, resultados, limitaciones y tareas pendientes. No afirmar que algo funciona si no se ha verificado.

## Fase 7: Actualización
Actualizar documentación y tareas cuando corresponda y exista autorización. Mantener coherencia con el repositorio real.

## Regla de parada
Si un requisito es ambiguo y afecta al alcance, la arquitectura o los datos, preguntar antes de continuar. Si el usuario pide aprender, explicar y guiar; no sustituir el aprendizaje por una implementación completa.
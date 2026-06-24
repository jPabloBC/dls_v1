# Flujo comercial futuro

Este flujo describe como deberia operar la plataforma cuando se conecten formularios, Supabase, WhatsApp Business, chatbot y automatizaciones.

## 1. Entrada del cliente

El cliente puede llegar por formulario publico, solicitud de cotizacion, WhatsApp Business, chatbot, email o carga manual desde ventas.

Cada entrada debe conservar su origen mediante `source` o `channel` para medir captacion y priorizar seguimiento.

## 2. Creacion o reutilizacion de contacto

Si el email, telefono o empresa ya existe, el sistema deberia reutilizar el contacto. Si no existe, se crea un `Contact` con datos minimos y metadata del canal.

## 3. Creacion de lead

La solicitud inicial crea un `Lead` asociado al contacto. El lead debe registrar interes de servicio, ubicacion, urgencia, mensaje y canal de origen.

## 4. Conversion a oportunidad

Cuando ventas califica el requerimiento, el lead puede convertirse en `Opportunity`. La oportunidad permite ordenar valor estimado, etapa, probabilidad, tareas y cotizaciones.

## 5. Cotizaciones asociadas

Una oportunidad puede tener una o mas `Quote`. Esto permite versiones, correcciones y propuestas alternativas para fabricacion, soldadura, montaje u obras menores.

## 6. Estados de cotizacion

La cotizacion puede quedar en:

- `draft`: en preparacion.
- `sent`: enviada al cliente.
- `accepted`: aceptada comercialmente.
- `rejected`: rechazada.
- `expired`: vencida por fecha de validez.

## 7. Tareas de seguimiento

Cada lead, oportunidad o cotizacion puede generar `CommercialTask`: llamar, pedir planos, confirmar ubicacion, preparar visita, enviar propuesta o hacer seguimiento post-envio.

## 8. Conversaciones y mensajes

Las conversaciones agrupan mensajes por canal. Un mensaje puede estar asociado a contacto, lead u oportunidad para mantener trazabilidad comercial.

## 9. Automatizaciones

Las automatizaciones deben ayudar a no perder clientes. Ejemplos:

- Crear tarea si una cotizacion enviada no recibe respuesta.
- Marcar mensaje como pendiente si llega fuera de horario.
- Avisar cuando un lead nuevo no ha sido contactado.
- Crear recordatorio antes de que una cotizacion venza.

## 10. Futuro operativo

Cuando una cotizacion sea aceptada, el flujo podria integrarse con venta, produccion, ordenes de trabajo, compra de materiales, planificacion de montaje y cierre financiero.

La plataforma debe mantener el CRM como fuente comercial, pero dejar preparada la conexion con operaciones.

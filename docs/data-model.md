# Modelo de datos comercial inicial

Este documento define una base conceptual para CRM, leads, contactos, cotizaciones, inbox y seguimiento comercial de DLS. No es SQL ejecutable y no debe aplicarse todavia sobre una base de datos.

## Principios

- Todas las entidades comerciales deben pertenecer a una empresa mediante `company_id`.
- La plataforma debe poder crecer a multiempresa sin reescribir el dominio.
- Las eliminaciones deberian ser logicas con `deleted_at`.
- Las operaciones criticas deben registrar auditoria.
- Los campos `metadata` permiten guardar datos flexibles de formularios, WhatsApp, chatbot e integraciones futuras sin romper el modelo principal.

## Campos comunes recomendados

| Campo | Proposito |
| --- | --- |
| `id` | Identificador unico de la entidad. |
| `company_id` | Empresa propietaria del registro. |
| `created_at` | Fecha de creacion. |
| `updated_at` | Fecha de ultima actualizacion. |
| `created_by` | Usuario o sistema que creo el registro. |
| `updated_by` | Usuario o sistema que actualizo el registro. |
| `deleted_at` | Fecha de eliminacion logica. |
| `status` | Estado operativo o comercial. |
| `metadata` | Datos adicionales no estructurados. |

## Entidades principales

### Company

Representa la empresa operadora de la plataforma. Permite preparar el sistema para multiempresa, sucursales o marcas comerciales.

Campos sugeridos: `id`, `name`, `legal_name`, `tax_id`, `industry`, `phone`, `email`, `website`, `status`, `metadata`, campos comunes.

### UserProfile

Representa usuarios internos: administracion, ventas, operaciones o supervisores. En el futuro se relaciona con autenticacion y roles.

Campos sugeridos: `id`, `company_id`, `full_name`, `email`, `role`, `status`, `last_seen_at`, `metadata`, campos comunes.

### Contact

Persona o empresa relacionada con solicitudes, cotizaciones, mensajes y oportunidades.

Campos sugeridos: `id`, `company_id`, `type`, `name`, `company_name`, `email`, `phone`, `preferred_channel`, `source`, `status`, `metadata`, campos comunes.

### Lead

Entrada comercial inicial desde formulario, WhatsApp, chatbot, campana o registro manual.

Campos sugeridos: `id`, `company_id`, `contact_id`, `source`, `title`, `service_interest`, `project_location`, `urgency`, `status`, `notes`, `metadata`, campos comunes.

### Opportunity

Oportunidad comercial calificada que puede agrupar conversaciones, tareas y una o mas cotizaciones.

Campos sugeridos: `id`, `company_id`, `contact_id`, `lead_id`, `title`, `stage`, `estimated_value`, `expected_close_date`, `status`, `metadata`, campos comunes.

### Quote

Propuesta comercial asociada a una oportunidad o contacto.

Campos sugeridos: `id`, `company_id`, `opportunity_id`, `contact_id`, `quote_number`, `title`, `subtotal`, `tax`, `total`, `currency`, `valid_until`, `status`, `metadata`, campos comunes.

### QuoteItem

Detalle de partidas de una cotizacion: materiales, mano de obra, montaje, transporte u otros costos.

Campos sugeridos: `id`, `company_id`, `quote_id`, `description`, `quantity`, `unit`, `unit_price`, `total`, `metadata`, campos comunes.

### InboxMessage

Mensaje recibido desde formulario, WhatsApp, chatbot, email u otro canal.

Campos sugeridos: `id`, `company_id`, `conversation_id`, `contact_id`, `channel`, `direction`, `subject`, `body`, `status`, `received_at`, `metadata`, campos comunes.

### Conversation

Agrupa mensajes de un canal o contexto comercial para mantener trazabilidad con contacto, lead u oportunidad.

Campos sugeridos: `id`, `company_id`, `contact_id`, `lead_id`, `opportunity_id`, `channel`, `status`, `last_message_at`, `metadata`, campos comunes.

### CommercialTask

Tarea de seguimiento para no perder oportunidades: llamar, enviar cotizacion, pedir antecedentes o confirmar visita.

Campos sugeridos: `id`, `company_id`, `contact_id`, `lead_id`, `opportunity_id`, `assigned_to`, `title`, `due_at`, `status`, `priority`, `metadata`, campos comunes.

### AutomationRule

Regla futura para automatizaciones comerciales: recordatorios, asignaciones, respuestas, alertas o cambios de estado.

Campos sugeridos: `id`, `company_id`, `name`, `trigger`, `conditions`, `actions`, `status`, `metadata`, campos comunes.

### AuditLog

Registro de cambios y acciones relevantes sobre entidades comerciales.

Campos sugeridos: `id`, `company_id`, `actor_id`, `entity_type`, `entity_id`, `action`, `before`, `after`, `created_at`, `metadata`.

## Relaciones sugeridas

| Relacion | Descripcion |
| --- | --- |
| Company -> UserProfile | Una empresa tiene usuarios internos. |
| Company -> Contact | Una empresa administra contactos propios. |
| Contact -> Lead | Un contacto puede originar varios leads. |
| Lead -> Opportunity | Un lead calificado puede convertirse en oportunidad. |
| Opportunity -> Quote | Una oportunidad puede tener una o mas cotizaciones. |
| Quote -> QuoteItem | Una cotizacion tiene multiples partidas. |
| Contact -> Conversation | Un contacto puede tener varias conversaciones. |
| Conversation -> InboxMessage | Una conversacion agrupa mensajes. |
| Contact/Lead/Opportunity -> CommercialTask | Las tareas pueden asociarse a cualquier etapa comercial. |
| Cualquier entidad -> AuditLog | Las operaciones relevantes deben quedar auditadas. |

## Estados comerciales

### Lead

`new`, `contacted`, `qualified`, `converted`, `lost`

### Opportunity

`open`, `quoting`, `negotiation`, `won`, `lost`, `paused`

### Quote

`draft`, `sent`, `accepted`, `rejected`, `expired`

### InboxMessage

`unread`, `read`, `archived`, `converted`

### CommercialTask

`pending`, `in_progress`, `completed`, `cancelled`, `overdue`

### AutomationRule

`draft`, `active`, `paused`, `disabled`

## Preparacion para multiempresa

Cada tabla comercial deberia incluir `company_id` y las consultas futuras deberian filtrar siempre por empresa. En Supabase, esto debera reforzarse con politicas RLS, roles internos y validaciones de pertenencia.

## Preparacion para WhatsApp, chatbot y automatizaciones

WhatsApp Business, chatbot y formularios deben llegar al mismo modelo mediante `Conversation`, `InboxMessage`, `Contact` y `Lead`. El campo `channel` separa el origen, mientras `metadata` permite guardar payloads especificos sin contaminar campos principales.

Las automatizaciones futuras deberian leer eventos como mensaje recibido, lead creado, cotizacion vencida o tarea atrasada, y ejecutar acciones controladas como crear tarea, cambiar estado o notificar a ventas.

## Tablas sugeridas

- `companies`
- `user_profiles`
- `contacts`
- `leads`
- `opportunities`
- `quotes`
- `quote_items`
- `conversations`
- `inbox_messages`
- `commercial_tasks`
- `automation_rules`
- `audit_logs`

Estas tablas son una propuesta inicial. La definicion final debe ajustarse antes de crear migraciones, RLS, indices y constraints.

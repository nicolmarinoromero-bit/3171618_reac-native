# 📋 Auditoría Nav – Semana 03 (React Navigation 7)

## 🏛️ Dominio: Empresa de Auditoría

Aplicación móvil que implementa **navegación avanzada** con React Navigation 7, aplicada a la gestión de auditorías. Permite:

- Ver una lista de auditorías (pestaña **Inicio**).
- Tocar cualquier auditoría para ver su **detalle completo** (stack anidado).
- Ver una lista estática de **auditorías favoritas** (pestaña **Favoritos**).

## 🧭 Estructura de navegación

- **Tab Navigator** (inferior) con dos pestañas:
  - `Inicio` → Contiene un **Stack Navigator** anidado (lista → detalle).
  - `Favoritos` → Pantalla independiente.
- **Stack anidado** dentro de `Inicio`:
  - `HomeList` (lista de auditorías)
  - `HomeDetail` (detalle con parámetros `id` y `name`)
- **Iconos**: `@expo/vector-icons` (Ionicons) con color activo `#61DAFB`.

## 🚀 Instalación y ejecución

```bash
cd week3/proyecto
pnpm install
npx expo start
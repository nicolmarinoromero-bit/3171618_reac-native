# 📋 Auditoría Guardados – Semana 04 (Zustand)

## Dominio: Empresa de Auditoría

Aplicación con navegación Tab + Stack y estado global con Zustand. Permite guardar auditorías favoritas, verlas en una pestaña separada y gestionarlas desde la lista y el detalle.

## ✅ Requisitos cumplidos

- Tab Navigator (Inicio y Guardados) con Stack anidado.
- Store Zustand con métodos: agregar, eliminar, limpiar, consultar.
- Badge en pestaña Guardados con conteo en tiempo real.
- Botón de guardar/quitar en lista y detalle.
- Selectores específicos de Zustand (sin usar `useStore()` sin selector).
- TypeScript sin errores.

## 🚀 Ejecutar

```bash
pnpm install
pnpm start

npx expo install react-dom react-native-web @expo/metro-runtime
pnpm start --web
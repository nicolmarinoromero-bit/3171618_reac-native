# 📋 Auditoría Search – Semana 02

## 🏛️ Dominio: Empresa de Auditoría

Aplicación móvil que permite listar auditorías y filtrarlas en tiempo real. Cada auditoría muestra:

- Cliente y su industria
- Auditor responsable
- Fecha de la auditoría
- Número de hallazgos encontrados
- Estado (Pendiente / En progreso / Completada)
- Imagen representativa (desde URL)

La app está desarrollada con **React Native (Expo)** y **TypeScript**, siguiendo las buenas prácticas de la semana 2.

## 📱 Funcionalidades

- **Lista de auditorías** con `FlatList` (10 items de ejemplo)
- **Búsqueda en tiempo real** por cliente, industria, auditor o estado
- **Estado vacío** cuando la búsqueda no devuelve resultados
- **Teclado adaptable** (`KeyboardAvoidingView`) para evitar que tape el contenido
- **Tarjeta reutilizable** (`ItemCard`) que muestra 5+ campos del dominio
- **Tema centralizado** (colores, tipografía, espaciado) en `src/theme/index.ts`
- **Componente separador** entre tarjetas (`ItemSeparatorComponent`)

## 🧠 Tecnologías utilizadas

- React Native 0.76
- Expo 52
- TypeScript (tipado estricto, sin `any`)
- Componentes nativos: `FlatList`, `TextInput`, `KeyboardAvoidingView`
- Estilos con `StyleSheet.create` y constantes temáticas

## 📁 Estructura del proyecto
proyecto/
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
├── README.md
└── src/
├── types/
│ └── index.ts # Interfaz Audit
├── theme/
│ └── index.ts # COLORS, TYPOGRAPHY, SPACING, SHADOW
├── data/
│ └── mockData.ts # 10 auditorías de ejemplo
├── components/
│ └── ItemCard.tsx # Tarjeta reutilizable
└── screens/
└── HomeScreen.tsx # Pantalla con búsqueda + FlatList


## 🚀 Instalación y ejecución

```bash
# Entrar a la carpeta del proyecto
cd 3171618/week2/proyecto

# Instalar dependencias (recomendado: npm)
npm install

# Instalar soporte web adicional (si no está)
npx expo install @expo/metro-runtime

# Iniciar la aplicación en web
npm run web

Autor:
Nicol Alejandra Mariño Romero
Proyecto desarrollado para el bootcamp React Native – Semana 02
Dominio asignado: Empresa de auditoría
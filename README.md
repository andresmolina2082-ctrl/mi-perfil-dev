# mi-perfil-dev

App de perfil personal construida con [Expo](https://expo.dev) y TypeScript.

## Características

- Avatar mostrado con el componente `<Image>`.
- Nombre, rol/carrera y biografía breve.
- Lista de tecnologías/habilidades favoritas en formato de badges.
- Contador de "Likes" funcional con `useState<number>` y `<Pressable>`.

## Requisitos

- Node.js
- npm
- [Expo Go](https://expo.dev/go) (opcional, para probar en un dispositivo físico)

## Instalación

```bash
npm install
```

## Ejecución

```bash
npx expo start
```

Desde ahí puedes abrir la app en Android, iOS o web usando las opciones que muestra la CLI de Expo.

## Estructura

- [`App.tsx`](./App.tsx) — pantalla principal con el perfil.
- [`assets/`](./assets) — íconos e imágenes usados por la app.

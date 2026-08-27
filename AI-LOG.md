# 🤖 Bitácora de Auditoría de IA (AI-LOG) - Semana 1
**Estudiante:** Andrés Molina
**Fecha:** 27 de agosto de 2026

---

## 1. Prompt de Configuración Utilizado

No usé un `.cursorrules` ni un system prompt personalizado tipo "actúa como Junior Tech Lead". Trabajé directo con Claude Code (la CLI de Anthropic), que ya trae su propio set de instrucciones por defecto orientadas a buenas prácticas de ingeniería (no sobre-ingeniería, no dependencias innecesarias, seguir convenciones del proyecto, etc.). Si tu curso pide explícitamente ese prompt de "Tech Lead" configurado a mano, no lo tengo documentado en esta sesión — lo dejo señalado aquí para no inventarlo.

---

## 2. Peticiones Realizadas (Prompts)

* **Prompt 1 (Interfaz):**
  > "Diseña la interfaz (App.tsx): muestra tu foto o un avatar (usando el componente `<Image>`), tu nombre completo, rol/carrera y una breve biografía en texto, lista 3 de tus tecnologías o habilidades favoritas (puedes representarlas con texto o badges), y un contador de 'Likes' o 'Reacciones' funcional usando `useState<number>` y el componente `<Pressable>`."

* **Prompt 2 (TypeScript):**
  > Fue parte del mismo pedido inicial, pero específicamente le pedí que el contador de likes usara `useState<number>` tipado explícitamente y `<Pressable>` en vez de otro componente táctil, para que el estado y el manejador de evento quedaran bien tipados desde el principio.

---

## 3. Análisis Crítico y Correcciones (Auditoría)

**¿La IA cometió algún error o usó código en desuso?**

No usó `TouchableOpacity` ni nada obsoleto — fue directo a `Pressable`, que es lo recomendado hoy en React Native. Pero sí hubo un par de tropiezos en el proceso, más de "obra" que de código:

- El primer `npm install` falló por un error de red (`ECONNRESET`) a mitad de la descarga, pero el proceso reportó como si hubiera terminado bien. `node_modules` quedó vacío y no me di cuenta hasta que intenté correr la app. Tuve que pedirle que verificara el resultado real en vez de confiar en el código de salida, y correrlo de nuevo.
- Al levantar la app en modo web, Expo tiró un error porque faltaban `react-dom` y `react-native-web` como dependencias — el template `blank-typescript` no las trae por defecto. Se corrigió con `npx expo install react-dom react-native-web`, pero fue algo que solo se detectó al intentar correr la app de verdad, no antes.
- El scaffolding de Claude Code dejó archivos propios (`.claude/`, `AGENTS.md`, `CLAUDE.md`) que casi terminan commiteados al repo. Tuve que revisarlos y agregarlos al `.gitignore` para mantener el historial limpio y enfocado solo en el proyecto de Expo.

**¿Qué aprendiste de la sugerencia que te dio la IA?**

Aprendí que un comando puede "reportar éxito" y aun así haber fallado a medias (como el `npm install` con `node_modules` vacío), así que no basta con ver el código de salida — hay que verificar el resultado real, sobre todo antes de dar algo por commiteado. También confirmé que `Pressable` es el estándar actual sobre `TouchableOpacity`, y que probar la app corriendo de verdad (no solo que compile) es lo que saca a la luz dependencias faltantes que uno no anticiparía leyendo el código.

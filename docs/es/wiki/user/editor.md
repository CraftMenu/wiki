# Editor In-Game

CraftMenu incluye un potente editor visual que te permite configurar menus directamente a traves de una interfaz de inventario, sin necesidad de editar archivos YAML manualmente.

## Primeros Pasos

### Abriendo el Editor

```
/cm editor              # Abrir el hub principal del editor
/cm editor <menu>       # Editar un menu especifico directamente
```

**Permiso Requerido:** `craftmenu.admin` o `craftmenu.edit`

### Navegacion del Editor

El editor utiliza un sistema de **navegacion basado en pila**:
- **Clic izquierdo** en elementos para entrar a submenus o editar valores
- **Clic derecho** para acciones secundarias (previsualizar, probar)
- **Shift + Clic izquierdo** para eliminar elementos (con confirmacion)
- **Elemento flecha** (boton atras) para regresar al menu anterior
- **Cerrar inventario** o clic afuera para salir

---

## Menu Principal del Editor

Cuando ejecutas `/cm editor`, veras el hub principal del editor con estas opciones:

| Elemento | Descripcion |
|----------|-------------|
| **Lista de Menus** | Explorar y editar todos los menus cargados |
| **Explorador de Imagenes** | Ver todas las imagenes disponibles |
| **Explorador de Sonidos** | Ver todos los sonidos disponibles |
| **Configuracion** | Configuracion global del plugin |

---

## Edicion de Menus

### Lista de Menus

Muestra todos los menus en tu carpeta `menus/`. Haz clic en un menu para abrir su editor.

- **Clic izquierdo**: Editar menu
- **Shift + Clic izquierdo**: Eliminar menu (con confirmacion)
- **Crear Nuevo**: Agregar un nuevo menu en tu ubicacion actual

### Hub de Acciones del Menu

Despues de seleccionar un menu, veras el editor principal del menu con estas secciones:

| Seccion | Descripcion |
|---------|-------------|
| **Propiedades** | Configuraciones basicas (nombre, titulo, menu principal, auto-abrir) |
| **Ubicacion** | Posicion y rotacion en el mundo |
| **Disposicion** | Configuracion del layout de grilla |
| **Atajos de Teclado** | Atajos de teclado |
| **Visibilidad** | Configuracion para ocultar jugadores/mobs/items |
| **Avanzado** | Sensibilidad del cursor, bloqueo de camara, limites |
| **Widgets** | Editar widgets en este menu |

---

## Propiedades del Menu

Edita la informacion basica del menu:

| Propiedad | Descripcion |
|-----------|-------------|
| **Nombre** | Identificador del menu (usado en comandos) |
| **Titulo** | Titulo a mostrar (soporta codigos de color &) |
| **Descripcion** | Descripcion opcional |
| **Menu Principal** | Marcar como el menu primario |
| **Abrir al Unirse** | Auto-abrir cuando el jugador entra al servidor |
| **Abrir al Teleportarse** | Auto-abrir cuando el jugador se teleporta a este mundo |
| **Mundo** | Mundo donde existe el menu |

### Editando Valores de Texto

Cuando haces clic en una propiedad de texto:
1. El inventario se cierra
2. Aparece un mensaje en el chat
3. Escribe tu nuevo valor en el chat
4. Presiona Enter para confirmar (o escribe `cancel` para cancelar)

---

## Ubicacion del Menu

Configura donde aparece el menu en el mundo:

| Propiedad | Descripcion |
|-----------|-------------|
| **Mundo** | Seleccionar de los mundos disponibles |
| **X / Y / Z** | Coordenadas (clic para editar via chat) |
| **Yaw** | Rotacion horizontal (-180 a 180) |
| **Pitch** | Rotacion vertical (-90 a 90) |
| **Establecer Actual** | Usar tu posicion/rotacion actual |

---

## Disposicion del Menu (Grilla)

Configura el posicionamiento de widgets basado en grilla:

| Propiedad | Descripcion |
|-----------|-------------|
| **Habilitado** | Activar/desactivar layout de grilla |
| **Columnas** | Numero de columnas de la grilla |
| **Filas** | Numero de filas de la grilla |
| **Espaciado X / Y / Z** | Espacio entre celdas |
| **Alineacion** | Alineacion de la grilla (CENTER, TOP_LEFT, etc.) |

Cuando el layout de grilla esta habilitado, los widgets usan `grid-position: {row: X, col: Y}` en lugar de coordenadas manuales.

---

## Atajos de Teclado del Menu

Configura atajos de teclado:

| Accion | Descripcion |
|--------|-------------|
| **Agregar Atajo** | Crear un nuevo atajo de teclado |
| **Editar Atajo** | Modificar atajo existente |
| **Eliminar Atajo** | Remover un atajo |

### Propiedades de Atajo

- **Tecla**: La tecla o combinacion (ej., `SHIFT`, `CTRL+E`, `F`)
- **Accion**: `activate`, `toggle`, o `close`
- **Widget**: Nombre del widget objetivo (para activate/toggle)

---

## Visibilidad del Menu

Controla que es visible mientras el menu esta abierto:

| Propiedad | Descripcion |
|-----------|-------------|
| **Ocultar Jugadores** | Ocultar otros jugadores de la vista |
| **Ocultar Mobs** | Ocultar todos los mobs |
| **Ocultar Items** | Ocultar items en el suelo |
| **Lista Blanca** | Jugadores que permanecen visibles (editar lista) |

---

## Configuraciones Avanzadas

Ajusta finamente el comportamiento del menu:

| Propiedad | Descripcion |
|-----------|-------------|
| **Sensibilidad del Cursor** | Velocidad de movimiento del mouse (0.1 - 5.0) |
| **Max Offset Yaw** | Limite horizontal del cursor (grados) |
| **Max Offset Pitch** | Limite vertical del cursor (grados) |
| **Bloqueo de Camara Habilitado** | Bloquear la camara del jugador mientras el menu esta abierto |
| **Fuerza de Bloqueo de Camara** | Que tan fuerte esta bloqueada la camara (0.0 - 1.0) |
| **Sonido de Limite** | Sonido cuando el cursor toca el limite |
| **Volumen/Pitch del Limite** | Propiedades del sonido |
| **Mensaje de Limite** | Mensaje mostrado en el limite |

---

## Edicion de Widgets

### Lista de Widgets

Muestra todos los widgets en el menu actual:

- **Clic izquierdo**: Editar widget
- **Shift + Clic izquierdo**: Eliminar widget
- **Crear Nuevo**: Agregar un nuevo widget

### Hub del Editor de Widget

Cada widget tiene estas secciones editables:

| Seccion | Descripcion |
|---------|-------------|
| **Tipo** | IMAGE, TEXT, o CURSOR |
| **Transformacion** | Posicion, tamano, rotacion |
| **Estados Visuales** | Apariencias normal, hover, presionado, deshabilitado |
| **Colision** | Configuracion de caja de colision |
| **Eventos** | Eventos de interaccion y acciones |
| **[Especifico del Tipo]** | Opciones adicionales basadas en el tipo de widget |

---

## Editor de Transformacion

Configura el posicionamiento y tamano del widget:

### Posicion
- **X**: Posicion horizontal
- **Y**: Posicion vertical
- **Z**: Posicion de profundidad

### Tamano
- **X**: Escala de ancho
- **Y**: Escala de alto
- **Z**: Escala de profundidad

### Rotacion
- **Pitch**: Rotacion arriba/abajo
- **Yaw**: Rotacion izquierda/derecha
- **Roll**: Rotacion de inclinacion

**Consejo**: Haz clic en cualquier valor para editarlo via entrada de chat.

---

## Estados Visuales

Los widgets pueden tener diferentes apariencias para diferentes estados:

| Estado | Cuando se Aplica |
|--------|------------------|
| **normal** | Estado por defecto |
| **hover** | El cursor esta sobre el widget |
| **pressed** | El widget esta siendo clicado |
| **disabled** | El widget esta inactivo |
| **Personalizado** | Cualquier nombre de estado personalizado |

### Editor de Estado Visual

Cada estado tiene:

| Propiedad | Descripcion |
|-----------|-------------|
| **Tipo** | `image`, `text`, o `unicode` |
| **Valor** | Ruta de imagen, contenido de texto, o caracter unicode |
| **Overrides** | Overrides opcionales de transformacion/colision/tamano-de-texto |

---

## Editor de Colision

Configura el area clickeable del widget:

| Propiedad | Descripcion |
|-----------|-------------|
| **Habilitado** | Activar/desactivar deteccion de colision |
| **Posicion X/Y/Z** | Offset del centro de la caja de colision |
| **Tamano X/Y/Z** | Dimensiones de la caja de colision |
| **Offset X/Y/Z** | Offset adicional |

**Consejo**: Usa `/cm depurar particles` para visualizar las cajas de colision en el juego.

---

## Editor de Eventos

### Tipos de Eventos

| Evento | Disparador |
|--------|------------|
| **on_menu_open** | Cuando el menu se abre |
| **on_cursor_hover** | Cuando el cursor entra al widget |
| **on_cursor_hover_exit** | Cuando el cursor sale del widget |
| **on_cursor_click** | Cuando el widget es clicado |

### Lista de Acciones

Cada evento contiene una lista de acciones que se ejecutan en orden:

- **Clic izquierdo**: Editar accion
- **Shift + Clic izquierdo**: Eliminar accion
- **Agregar Accion**: Crear nueva accion
- **Reordenar**: Arrastrar para cambiar el orden de ejecucion

---

## Editores de Acciones

Cada tipo de accion tiene un editor especializado:

### Accion de Animacion

| Propiedad | Descripcion |
|-----------|-------------|
| **Efecto** | Tipo de animacion (rotate, scale, bounce, etc.) |
| **Duracion** | Duracion de la animacion en milisegundos |
| **Escala X/Y/Z** | Multiplicadores de escala (para animaciones de escala) |
| **Intensidad** | Fuerza del efecto (0.1 - 5.0) |
| **Easing** | Funcion de tiempo (linear, ease_in, ease_out, etc.) |
| **Prioridad** | Bloquear interacciones durante la animacion |

### Accion de Sonido

| Propiedad | Descripcion |
|-----------|-------------|
| **Archivo** | Ruta del sonido (minecraft:... o ruta personalizada) |
| **Volumen** | Volumen del sonido (0.0 - 1.0) |
| **Pitch** | Pitch del sonido (0.5 - 2.0) |

**Explorar**: Clic para abrir el explorador de sonidos y seleccionar un sonido.

### Accion de Comando

| Propiedad | Descripcion |
|-----------|-------------|
| **Comando** | Comando a ejecutar (con comandos especiales) |
| **Retraso** | Retraso en milisegundos antes de la ejecucion |

**Comandos Especiales:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aTu mensaje aqui`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /comando`
- `[CONSOLE] /comando`

### Accion de Estado

| Propiedad | Descripcion |
|-----------|-------------|
| **Tipo de Accion** | `toggle_state` o `set_state` |
| **Estados** | Lista de estados para alternar entre (toggle_state) |
| **Estado** | Nombre del estado objetivo (set_state) |

### Accion de Cambio Visual

| Propiedad | Descripcion |
|-----------|-------------|
| **A** | Nombre del estado visual objetivo |

### Accion de Widget

| Propiedad | Descripcion |
|-----------|-------------|
| **Accion** | `hide_widget`, `show_widget`, etc. |
| **Widget** | Nombre del widget objetivo |

### Accion de Efecto

| Propiedad | Descripcion |
|-----------|-------------|
| **Efecto** | Tipo de efecto a aplicar |
| **Parametros** | Parametros especificos del efecto |

### Accion Detener Animacion

| Propiedad | Descripcion |
|-----------|-------------|
| **Tipo de Animacion** | Cual animacion detener |

### Accion Detener Efecto

| Propiedad | Descripcion |
|-----------|-------------|
| **Tipo de Efecto** | Cual efecto detener |

### Accion Establecer Estado Base

| Propiedad | Descripcion |
|-----------|-------------|
| **Estado** | Nuevo estado base para el widget |

---

## Exploradores de Assets

### Explorador de Imagenes

Explora todas las imagenes en tu carpeta `images/`:

- **Paginacion**: Navegar a traves de paginas de imagenes
- **Previsualizacion**: Ver ruta de imagen y detalles
- **Seleccionar**: Clic para usar en el contexto actual

Las imagenes estan organizadas por carpeta (ej., `template/button.png`).

### Explorador de Sonidos

Explora todos los sonidos en tu carpeta `sounds/` mas los sonidos integrados de Minecraft:

- **Sonidos Personalizados**: Tus archivos .ogg de `sounds/`
- **Sonidos de Minecraft**: Sonidos integrados (minecraft:ui.button.click, etc.)
- **Seleccionar**: Clic para usar en el contexto actual

---

## Consejos y Mejores Practicas

### Consejos de Flujo de Trabajo

1. **Comienza con Propiedades**: Configura nombre, titulo y ubicacion primero
2. **Agrega Widgets**: Crea tus widgets con transformaciones basicas
3. **Configura Visuales**: Configura estados normal y hover
4. **Agrega Colision**: Habilita y dimensiona las cajas de colision
5. **Agrega Eventos**: Configura sonidos hover y acciones de clic
6. **Prueba Frecuentemente**: Usa `/cm abrir <menu>` para probar cambios

### Atajos de Teclado

| Atajo | Accion |
|-------|--------|
| **Escape** | Cerrar editor |
| **Teclas numericas (1-9)** | Seleccion rapida de slot |

### Problemas Comunes

**Los cambios no aparecen:**
- Ejecuta `/cm recargar` despues de hacer cambios
- Asegurate de haber hecho clic en "Guardar" en el editor

**La colision no detecta:**
- Verifica que la colision este habilitada
- Verifica que el tamano de colision sea suficientemente grande
- Usa `/cm depurar particles` para visualizar

**Las imagenes no se muestran:**
- Ejecuta `/cm paquete` para regenerar el resource pack
- Asegurate de que la imagen este en una subcarpeta (ej., `images/mimenu/`)
- Aplica el resource pack al cliente

---

## Ver Tambien

- [Referencia de Comandos](commands.md)
- [Creando Menus](menu-creation.md)
- [Tipos de Widgets](widgets.md)
- [Sistema de Eventos](events.md)
- [Animaciones](animations.md)

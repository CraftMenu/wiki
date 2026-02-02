# Creación de Menús

Esta guía cubre la creación de menús personalizados en CraftMenu.

## Estructura del Menú

Los menús se definen en archivos YAML en `plugins/CraftMenu/menus/`.

### Plantilla Básica de Menú

```yaml
menu:
  name: mi_menu
  title: "&b&lMi Menú Personalizado"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # Definiciones de widgets aquí
```

## Propiedades del Menú

### Propiedades Básicas

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `name` | String | Identificador único para el menú |
| `title` | String | Título a mostrar (soporta códigos de color) |
| `main` | Boolean | ¿Es este el menú principal? |
| `open-on-join` | Boolean | Abrir automáticamente cuando el jugador entra al mundo |
| `open-on-teleport` | Boolean | Abrir automáticamente cuando el jugador se teletransporta al mundo |

### Ubicación

```yaml
location:
  world: world               # Nombre del mundo
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Rotación horizontal (-180 a 180)
    pitch: 0.0               # Rotación vertical (-90 a 90)
```

### Configuraciones

```yaml
settings:
  cursor-sensitivity: 1.0    # Sensibilidad del ratón (1.0 = normal)
  max-yaw-offset: 61.0       # Límite horizontal en grados
  max-pitch-offset: 36.0     # Límite vertical en grados
  camera-lock-enabled: true  # Bloquear cámara del jugador cuando el menú está abierto
  camera-lock-strength: 0.4  # Fuerza del bloqueo (0.0-1.0)
```

### Configuraciones de Visibilidad

```yaml
settings:
  visibility:
    hide_players: false      # Ocultar otros jugadores
    hide_mobs: false         # Ocultar mobs
    hide_items: false        # Ocultar items tirados
    whitelist_players: []    # Jugadores que permanecen visibles
```

## Agregando Widgets

Los widgets son los elementos interactivos de tu menú.

### Widget de Imagen

```yaml
widgets:
  mi_boton:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### Widget de Texto

```yaml
widgets:
  texto_titulo:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&l¡Bienvenido!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Creación Rápida con Comando

Usa `/cm crear <nombre>` para crear rápidamente un menú en tu ubicación actual.

## Agregando Imágenes Personalizadas

1. Crea una carpeta: `plugins/CraftMenu/images/mi_menu/`
2. Agrega tus imágenes PNG a esta carpeta
3. Ejecuta `/cm paquete` para regenerar el resource pack
4. Referencia las imágenes como `mi_menu/nombre_imagen.png`

## Probando Tu Menú

1. Guarda tu archivo YAML
2. Ejecuta `/cm recargar`
3. Ejecuta `/cm abrir mi_menu`

## Mejores Prácticas

- Usa subcarpetas para organizar imágenes por menú
- Mantén tamaños de imagen razonables (máximo 128x128 para botones)
- Prueba los menús exhaustivamente antes de desplegarlos
- Usa nombres descriptivos para los widgets
- Comenta configuraciones complejas

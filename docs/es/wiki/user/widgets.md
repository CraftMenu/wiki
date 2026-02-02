# Tipos de Widget

CraftMenu soporta tres tipos de widgets para construir menús.

## Resumen de Tipos de Widget

| Tipo | Descripción | Interactivo |
|------|-------------|-------------|
| IMAGE | Muestra imágenes | Sí |
| TEXT | Muestra texto formateado | Sí |
| CURSOR | El cursor del ratón | Especial |

## Widget IMAGE

Usado para botones, fondos y elementos decorativos.

### Imagen Básica

```yaml
mi_imagen:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Imagen con Estados

```yaml
mi_boton:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### Overrides de Estado

Cada estado puede tener overrides de transform y colisión:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Ligeramente más grande en hover
```

## Widget TEXT

Muestra texto formateado con soporte para PlaceholderAPI.

### Texto Básico

```yaml
texto_bienvenida:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&b¡Bienvenido al servidor!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Texto con Placeholders

```yaml
info_jugador:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Jugador: &f%player_name%\n&7Nivel: &a%player_level%"
      text-size: 0.8
```

### Texto Multi-línea

Usa `\n` para saltos de línea:

```yaml
descripcion:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Línea 1\nLínea 2\nLínea 3"
```

## Widget CURSOR

El cursor sigue el movimiento del ratón del jugador.

### Cursor Básico

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Propiedades de Transform

Todos los widgets soportan propiedades de transform:

```yaml
transform:
  position:
    x: 0.0    # Desplazamiento horizontal
    y: 0.0    # Desplazamiento vertical
    z: 0.0    # Desplazamiento de profundidad
  size:
    x: 0.1    # Escala de ancho
    y: 0.1    # Escala de alto
    z: 0.1    # Escala de profundidad
  rotation:
    pitch: 0  # Rotación eje X
    yaw: 0    # Rotación eje Y
    roll: 0   # Rotación eje Z
```

## Propiedades de Colisión

Habilitar o personalizar la detección de colisión:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Orden de Widgets

Los widgets se renderizan en el orden en que aparecen en el archivo YAML. Los widgets posteriores aparecen frente a los anteriores.

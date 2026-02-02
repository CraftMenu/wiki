# CraftMenu - Inicio Rápido

## Guía de 5 Minutos

Esta guía te lleva de cero a un menú funcional en 5 minutos.

---

## 1. Instalación (1 min)

1. **Descargar**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (dependencia)

2. **Instalar**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Iniciar servidor**

4. **Verificar**:
   ```
   /cm info
   ```

---

## 2. Crear Tu Primer Menú (2 min)

1. **En el juego**, ve a la ubicación deseada
2. Ejecuta:
   ```
   /cm crear mimenu
   ```

3. **¡Menú creado!** Archivo generado en:
   ```
   /plugins/CraftMenu/menus/mimenu.yml
   ```

---

## 3. Agregar Imágenes (1 min)

1. **Crear carpeta**:
   ```
   /plugins/CraftMenu/images/mimenu/
   ```

2. **Agregar imágenes PNG** (64x64 o 128x128):
   ```
   images/mimenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Generar resource pack**:
   ```
   /cm paquete
   ```

---

## 4. Configurar Menú (1 min)

Editar `/plugins/CraftMenu/menus/mimenu.yml`:

```yaml
menu:
  name: mimenu
  title: '&b&lMi Primer Menú'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Donde lo creaste
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Botón simple (usando IMAGE con eventos hover/click)
    mi_boton:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mimenu/button.png       # ← TU IMAGEN
        hover:
          type: image
          value: mimenu/button-hover.png # ← IMAGEN HOVER
        fallback:
          type: text
          value: "CLIC AQUÍ"              # Si la imagen falla
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.04, z: 0.02}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        on_cursor_click:
        - action: command
          command: '[MESSAGE] &a¡Hiciste clic en el botón!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Cursor
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mimenu/cursor.png  # ← TU IMAGEN
        fallback:
          type: text
          value: "§f→"
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
```

---

## 5. Probar

1. **Recargar**:
   ```
   /cm recargar
   ```

2. **Abrir menú**:
   ```
   /cm abrir mimenu
   ```

3. **Mover el ratón** para controlar el cursor
4. **Hacer clic** en el botón

---

## Lista de Verificación

- [ ] Plugin instalado y funcionando
- [ ] Menú creado con `/cm crear`
- [ ] Imágenes agregadas en `/images/mimenu/`
- [ ] Resource pack generado con `/cm paquete`
- [ ] Menú configurado en YAML
- [ ] Menú funciona con `/cm abrir mimenu`
- [ ] Resource pack aplicado en el cliente

---

## Problemas Comunes

### "Menú no cargado"

```bash
/cm recargar
/cm listar  # Verificar si el menú aparece
```

### El cursor no aparece

**Solución**: Verifica que el cursor esté en el YAML y tenga visual configurado

### Las imágenes muestran "?"

```bash
/cm imagenes escanear    # Verificar si las imágenes fueron encontradas
/cm paquete            # Regenerar resource pack
/cm recargar         # Recargar
```

### El resource pack no descarga

El jugador necesita:
1. Instalar manualmente: copiar `/plugins/CraftMenu/craftmenu.zip` a `.minecraft/resourcepacks/`
2. O configurar en `server.properties` (requiere hosting web)

---

## Próximos Pasos

1. [Documentación Completa de Menús](MENU_CREATION.md)
3. [Funciones Avanzadas](FEATURES.md)

---

## Recursos Útiles

- **Imágenes de ejemplo**: Busca "minecraft UI icons" o crea las tuyas
- **Tamaños recomendados**: 64x64, 128x128
- **Formato**: PNG con transparencia
- **Sonidos de Minecraft**: [Lista completa](https://minecraft.fandom.com/wiki/Sounds.json)

---

Última actualización: 2026-02-02

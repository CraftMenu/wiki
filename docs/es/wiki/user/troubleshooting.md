# Solución de Problemas

Problemas comunes y soluciones para CraftMenu.

## Imágenes No Aparecen

**Síntoma:** Las imágenes muestran "?" o caracteres faltantes.

**Soluciones:**

1. **Regenerar resource pack:**
   ```
   /cm paquete
   ```

2. **Verificar ubicación de imágenes:**
   - Las imágenes deben estar en subcarpetas: `plugins/CraftMenu/images/carpeta/imagen.png`
   - NO en la raíz: `plugins/CraftMenu/images/imagen.png`

3. **Verificar formato de imagen:**
   - Solo se soportan archivos PNG
   - Asegurar extensión correcta (`.png`, no `.PNG`)

4. **Verificar que el resource pack esté cargado:**
   - El resource pack del servidor debe estar configurado
   - El jugador debe aceptar el resource pack

5. **Recargar el plugin:**
   ```
   /cm recargar
   ```

## El Menú No Abre

**Síntoma:** El comando `/cm abrir` no hace nada.

**Soluciones:**

1. **Verificar que el menú existe:**
   ```
   /cm listar
   ```

2. **Revisar la consola por errores** después de ejecutar el comando

3. **Verificar sintaxis YAML:**
   - Usar un validador de YAML
   - Verificar indentación incorrecta

4. **Asegurar que la ubicación de spawn es válida:**
   - El mundo debe estar cargado
   - La ubicación debe ser accesible

## La Colisión No Funciona

**Síntoma:** El cursor no detecta widgets.

**Soluciones:**

1. **Habilitar partículas de debug:**
   ```
   /debugcollision toggle
   ```

2. **Verificar configuración de colisión:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Aumentar tamaño de caja de colisión** si es muy pequeña

4. **Verificar posición del widget** - la colisión podría estar desplazada

## Los Sonidos No Reproducen

**Síntoma:** Las acciones de sonido no tienen efecto.

**Soluciones:**

1. **Para sonidos personalizados:**
   - Colocar archivos `.ogg` en `plugins/CraftMenu/sounds/carpeta/`
   - Regenerar resource pack: `/cm paquete`

2. **Para sonidos de Minecraft:**
   - Usar formato correcto: `minecraft:ui.button.click`

3. **Verificar configuración de volumen** en la configuración de la acción

## Problemas de Rendimiento

**Síntoma:** Lag al usar menús.

**Soluciones:**

1. **Optimizar imágenes:**
   ```
   /cm imagenes escanear
   /cm imagenes corregir --backup
   ```

2. **Reducir frecuencia de animaciones** en menús complejos

3. **Deshabilitar modo debug:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Aumentar intervalo de actualización:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## El Plugin No Carga

**Síntoma:** El plugin muestra errores al iniciar.

**Soluciones:**

1. **Verificar versión de Java:**
   - Requiere Java 17 o superior

2. **Verificar dependencias:**
   - PacketEvents debe estar instalado

3. **Verificar versión del servidor:**
   - Requiere Minecraft 1.20.4+

4. **Revisar logs de inicio** por errores específicos

5. **Intentar recuperación:**
   ```
   /cm recuperar
   ```

## Errores de YAML

**Síntoma:** Errores mencionan parsing de YAML.

**Problemas Comunes:**

1. **Indentación incorrecta:**
   ```yaml
   # Incorrecto
   widgets:
   mi_widget:
     type: IMAGE

   # Correcto
   widgets:
     mi_widget:
       type: IMAGE
   ```

2. **Comillas faltantes alrededor de valores especiales:**
   ```yaml
   # Incorrecto - & tiene significado especial
   title: &bHola

   # Correcto
   title: "&bHola"
   ```

3. **Formato de lista incorrecto:**
   ```yaml
   # Incorrecto
   events:
     on_cursor_click:
       action: sound

   # Correcto
   events:
     on_cursor_click:
       - action: sound
   ```

## Obtener Ayuda

Si aún tienes problemas:

1. Habilita el modo debug y revisa la salida de la consola
2. Revisa los issues de GitHub por problemas conocidos
3. Crea un nuevo issue con:
   - Versión del servidor
   - Versión del plugin
   - Logs de consola
   - Archivos de configuración (elimina datos sensibles)

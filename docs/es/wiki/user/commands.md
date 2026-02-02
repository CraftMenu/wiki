# Referencia de Comandos

CraftMenu proporciona un conjunto completo de comandos para administrar menús.

## Comando Base

Todos los comandos usan `/craftmenu` (alias: `/cm`).

## Comandos Generales

### Ayuda
```
/cm ayuda [comando]
```
Muestra información de ayuda para todos los comandos o un comando específico.

### Listar Menús
```
/cm listar
```
Lista todas las plantillas de menú cargadas.

### Info del Plugin
```
/cm info
```
Muestra la versión del plugin y estadísticas.

## Comandos de Menú

### Abrir Menú
```
/cm abrir <nombre_menu> [jugador]
```
Abre un menú para ti o para otro jugador.

**Ejemplos:**
- `/cm abrir template` - Abrir menú template para ti
- `/cm abrir lobby Steve` - Abrir menú lobby para el jugador Steve

### Cerrar Menú
```
/cm cerrar [jugador]
```
Cierra el menú activo para ti o para otro jugador.

### Crear Menú
```
/cm crear <nombre_menu>
```
Crea una nueva plantilla de menú en tu ubicación actual.

## Comandos de Resource Pack

### Generar Resource Pack
```
/cm paquete
```
Genera el resource pack desde las imágenes y sonidos en la carpeta de CraftMenu.

### Comandos de Imágenes
```
/cm imagenes escanear
/cm imagenes corregir [--backup]
/cm imagenes redimensionar <ruta_imagen> <tamaño_objetivo>
/cm imagenes respaldo
/cm imagenes restaurar <nombre_backup>
/cm imagenes listar
/cm imagenes respaldos
```
- `escanear` - Escanea imágenes sobredimensionadas
- `corregir` - Optimiza imágenes sobredimensionadas automáticamente
- `redimensionar` - Redimensiona una imagen específica al tamaño objetivo (16-4096 píxeles)
- `respaldo` - Crea una copia de seguridad de las imágenes
- `restaurar` - Restaura imágenes desde una copia de seguridad
- `listar` - Lista todas las imágenes en la carpeta de imágenes
- `respaldos` - Lista todas las copias de seguridad disponibles

## Comandos de Configuración

### Recargar
```
/cm recargar
```
Recarga todas las configuraciones y plantillas de menú.

### Idioma
```
/cm idioma <idioma>
/cm idioma listar
```
- `/cm idioma <idioma>` - Cambia el idioma del plugin directamente (sin necesidad de "establecer")
- `/cm idioma listar` - Lista todos los idiomas disponibles

Idiomas disponibles:
- `en_US` - Inglés
- `pt_BR` - Portugués (Brasil)
- `es_ES` - Español
- `fr_FR` - Francés
- `de_DE` - Alemán
- `it_IT` - Italiano
- `nl_NL` - Holandés
- `ru_RU` - Ruso
- `pl_PL` - Polaco
- `tr_TR` - Turco
- `uk_UA` - Ucraniano
- `ar_SA` - Árabe
- `ja_JP` - Japonés
- `ko_KR` - Coreano
- `zh_CN` - Chino (Simplificado)
- `hi_IN` - Hindi
- `id_ID` - Indonesio
- `th_TH` - Tailandés
- `vi_VN` - Vietnamita

## Comandos de Debug

### Partículas de Debug
```
/cm depurar particulas
/cm depurar particulas tamano <valor>
```
- `/cm depurar particulas` - Alterna TODAS las partículas de debug (cajas de colisión + rastro del cursor + centros de widgets)
- `/cm depurar particulas tamano <valor>` - Establece el tamaño de las partículas (0.001 a 2.0)

### Debug de Cuadrícula
```
/cm depurar cuadricula
/cm depurar cuadricula numeros
```
- `/cm depurar cuadricula` - Alterna la visualización de debug de cuadrícula
- `/cm depurar cuadricula numeros` - Alterna la visualización de números de celdas

### Verificación de Salud
```
/cm salud
```
Muestra el estado de salud de los componentes.

### Recuperar
```
/cm recuperar
```
Intenta recuperarse de errores.

## Comando del Editor

Abre el editor visual en el juego para menús y widgets.

### Abrir Editor
```
/cm editor
/cm editor <nombre_menu>
```
- `/cm editor` - Abre el hub del editor
- `/cm editor <nombre_menu>` - Abre el editor para un menú específico

**Permiso Requerido:** `craftmenu.admin`

## Permisos

| Permiso | Descripción |
|---------|-------------|
| `craftmenu.use` | Uso básico (abrir menús) |
| `craftmenu.admin` | Comandos de administrador |
| `craftmenu.open` | Abrir menús |
| `craftmenu.create` | Crear menús |
| `craftmenu.reload` | Recargar plugin |
| `craftmenu.debug` | Comandos de debug |

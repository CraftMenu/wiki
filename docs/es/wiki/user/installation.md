# Guía de Instalación

Esta guía cubre la instalación y configuración de CraftMenu en tu servidor de Minecraft.

## Requisitos Previos

Antes de instalar CraftMenu, asegúrate de tener:

- Servidor de Minecraft ejecutando Paper, Spigot o Purpur 1.20.4+
- Java 17 o superior instalado
- Plugin PacketEvents instalado

## Pasos de Instalación

### 1. Descargar CraftMenu

Descarga el último JAR de CraftMenu desde la página de releases.

### 2. Instalar Dependencias

Asegúrate de que PacketEvents esté instalado en tu carpeta `plugins/` antes de CraftMenu.

### 3. Instalar CraftMenu

Coloca `CraftMenu.jar` en la carpeta `plugins/` de tu servidor.

### 4. Iniciar el Servidor

Inicia tu servidor. CraftMenu creará sus archivos de configuración:

```
plugins/CraftMenu/
├── config.yml           # Configuración global
├── menus/              # Plantillas de menú
│   └── template.yml    # Menú de ejemplo predeterminado
├── images/             # Imágenes personalizadas
│   └── template/       # Imágenes para el menú template
├── sounds/             # Sonidos personalizados
│   └── template/       # Sonidos para el menú template
└── language/           # Archivos de idioma
```

### 5. Generar Resource Pack

Ejecuta `/cm paquete` para generar el resource pack. Esto crea:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Configurar Distribución del Resource Pack

Tienes varias opciones:

**Opción A: Resource Pack del Servidor**
```properties
# En server.properties
resource-pack=https://tu-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Opción B: Distribución Manual**
Comparte el archivo ZIP con los jugadores y pídeles que lo instalen manualmente.

**Opción C: Usar un Plugin de Resource Pack**
Usa plugins como ItemsAdder u Oraxen para distribución automática.

## Configuración

### Configuraciones Básicas

Edita `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "es_ES"          # en_US, es_ES, pt_BR, fr_FR
    debug: false               # Habilitar para solución de problemas

  resourcepack:
    auto-generate: true        # Auto-generar al iniciar
    compression: true          # Comprimir archivo ZIP
```

### Configuraciones de Rendimiento

```yaml
craftmenu:
  performance:
    async-loading: true        # Cargar menús asincrónicamente
    cache-enabled: true        # Cachear plantillas de menú
    update-interval: 1         # Ticks entre actualizaciones
```

## Verificar Instalación

1. Ejecuta `/cm ayuda` para ver los comandos disponibles
2. Ejecuta `/cm listar` para ver los menús cargados
3. Ejecuta `/cm abrir template` para probar el menú predeterminado

## Próximos Pasos

- [Crea tu primer menú](menu-creation.md)
- [Aprende sobre widgets](widgets.md)
- [Configura eventos](events.md)

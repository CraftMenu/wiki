# Installation Guide

This guide covers installing and configuring CraftMenu on your Minecraft server.

## Prerequisites

Before installing CraftMenu, ensure you have:

- Minecraft server running Paper, Spigot, or Purpur 1.20.4+
- Java 17 or higher installed
- PacketEvents plugin installed

## Installation Steps

### 1. Download CraftMenu

Download the latest CraftMenu JAR from the releases page.

### 2. Install Dependencies

Ensure PacketEvents is installed in your `plugins/` folder before CraftMenu.

### 3. Install CraftMenu

Place `CraftMenu.jar` in your server's `plugins/` folder.

### 4. Start the Server

Start your server. CraftMenu will create its configuration files:

```
plugins/CraftMenu/
├── config.yml           # Global configuration
├── menus/              # Menu templates
│   └── template.yml    # Default example menu
├── images/             # Custom images
│   └── template/       # Images for template menu
├── sounds/             # Custom sounds
│   └── template/       # Sounds for template menu
└── language/           # Language files
```

### 5. Generate Resource Pack

Run `/cm zip` to generate the resource pack. This creates:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Configure Resource Pack Distribution

You have several options:

**Option A: Server Resource Pack**
```properties
# In server.properties
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Option B: Manual Distribution**
Share the ZIP file with players and have them install it manually.

**Option C: Use a Resource Pack Plugin**
Use plugins like ItemsAdder or Oraxen for automatic distribution.

## Configuration

### Basic Settings

Edit `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "en_US"          # en_US, pt_BR, or fr_FR
    debug: false               # Enable for troubleshooting

  resourcepack:
    auto-generate: true        # Auto-generate on startup
    compression: true          # Compress ZIP file
```

### Performance Settings

```yaml
craftmenu:
  performance:
    async-loading: true        # Load menus asynchronously
    cache-enabled: true        # Cache menu templates
    update-interval: 1         # Ticks between updates
```

## Verifying Installation

1. Run `/cm help` to see available commands
2. Run `/cm list` to see loaded menus
3. Run `/cm open template` to test the default menu

## Next Steps

- [Create your first menu](menu-creation.md)
- [Learn about widgets](widgets.md)
- [Configure events](events.md)

# Commands Reference

CraftMenu provides a comprehensive set of commands for managing menus.

## Base Command

All commands use `/craftmenu` (alias: `/cm`).

## General Commands

### Help
```
/cm help [command]
```
Shows help information for all commands or a specific command.

### List Menus
```
/cm list
```
Lists all loaded menu templates.

### Plugin Info
```
/cm info
```
Shows plugin version and statistics.

## Menu Commands

### Open Menu
```
/cm open <menu_name> [player]
```
Opens a menu for yourself or another player.

**Examples:**
- `/cm open template` - Open template menu for yourself
- `/cm open lobby Steve` - Open lobby menu for player Steve

### Close Menu
```
/cm close [player]
```
Closes the active menu for yourself or another player.

### Create Menu
```
/cm create <menu_name>
```
Creates a new menu template at your current location.

### Delete Menu
```
/cm delete <menu_name>
```
Deletes a menu template.

## Resource Pack Commands

### Generate Resource Pack
```
/cm zip
```
Generates the resource pack from images and sounds in the CraftMenu folder.

### Image Commands
```
/cm images scan
/cm images fix [--backup]
/cm images resize <image_path> <target_size>
/cm images backup
/cm images restore <backup_name>
/cm images list
/cm images backups
```
- `scan` - Scans for oversized images
- `fix` - Optimizes oversized images automatically
- `resize` - Resizes a specific image to target size (16-4096 pixels)
- `backup` - Creates a backup of images
- `restore` - Restores images from a backup
- `list` - Lists all images in the images folder
- `backups` - Lists all available backups

## Configuration Commands

### Reload
```
/cm reload
```
Reloads all configurations and menu templates.

### Language
```
/cm language <lang>
/cm language list
```
- `/cm language <lang>` - Changes the plugin language directly (no "set" required)
- `/cm language list` - Lists all available languages

Available languages:
- `en_US` - English
- `pt_BR` - Portuguese (Brazil)
- `es_ES` - Spanish
- `fr_FR` - French
- `de_DE` - German
- `it_IT` - Italian
- `nl_NL` - Dutch
- `ru_RU` - Russian
- `pl_PL` - Polish
- `tr_TR` - Turkish
- `uk_UA` - Ukrainian
- `ar_SA` - Arabic
- `ja_JP` - Japanese
- `ko_KR` - Korean
- `zh_CN` - Chinese (Simplified)
- `hi_IN` - Hindi
- `id_ID` - Indonesian
- `th_TH` - Thai
- `vi_VN` - Vietnamese

## Debug Commands

### Debug Particles
```
/cm debug particles
/cm debug particles size <value>
```
- `/cm debug particles` - Toggles ALL debug particles (collision boxes + cursor trail + widget centers)
- `/cm debug particles size <value>` - Sets the particle size (0.001 to 2.0)

### Debug Grid
```
/cm debug grid
/cm debug grid numbers
```
- `/cm debug grid` - Toggles grid debug visualization
- `/cm debug grid numbers` - Toggles cell numbers display

### Health Check
```
/cm health
```
Shows component health status.

### Recover
```
/cm recover
```
Attempts to recover from errors.

## Editor Command

Opens the in-game visual editor for menus and widgets.

### Open Editor
```
/cm editor
/cm editor <menu_name>
```
- `/cm editor` - Opens the editor hub
- `/cm editor <menu_name>` - Opens editor for a specific menu

**Permission Required:** `craftmenu.admin`

## Permissions

| Permission | Description |
|------------|-------------|
| `craftmenu.use` | Basic usage (open menus) |
| `craftmenu.admin` | Admin commands |
| `craftmenu.open` | Open menus |
| `craftmenu.create` | Create menus |
| `craftmenu.reload` | Reload plugin |
| `craftmenu.debug` | Debug commands |

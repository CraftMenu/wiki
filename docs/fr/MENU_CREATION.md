# Creation de Menus dans CraftMenu

## Table des Matieres
1. [Creation via Commande](#creation-via-commande)
2. [Structure YAML](#structure-yaml)
3. [Widgets Disponibles](#widgets-disponibles)
4. [Transform (Positionnement)](#transform-positionnement)
5. [Collision](#collision)
6. [Evenements et Actions](#evenements-et-actions)
7. [Exemples Pratiques](#exemples-pratiques)

---

## Creation via Commande

### Methode Recommandee

1. **Entrez dans le jeu** et allez a l'emplacement ou vous voulez le menu
2. **Regardez dans la direction** que les joueurs devraient avoir en ouvrant le menu
3. **Executez** :
   ```
   /cm create nom_du_menu
   ```

Le menu sera cree avec votre position et rotation actuelles !

### Structure Generee

```
/plugins/CraftMenu/menus/nom_du_menu.yml
```

**Le template par defaut inclut** :
- Widget d'avertissement FOV (peut etre supprime)
- Curseur configure
- Parametres optimises
- Retour des limites
- **Le curseur utilise TEXT par defaut** - passez a IMAGE apres avoir ajoute les textures

---

## Structure YAML

### Sections Principales

```yaml
menu:
  name: String              # Nom du menu
  title: String             # Titre (supporte les &codes)
  main: boolean             # Menu principal ? (futur)
  location:                 # Emplacement dans le monde
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Parametres
    # ... (voir ci-dessous)
  widgets:                  # Widgets du menu
    nom_widget:
      # ... (voir ci-dessous)
```

### Parametres Detailles

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Musique de fond (optionnel)

  # Mouvement du curseur
  cursor-sensitivity: 1.0          # Sensibilite (0.1 - 5.0)
  max-yaw-offset: 61.0             # Limite horizontale en degres
  max-pitch-offset: 36.0           # Limite verticale en degres
  mount-time: 100                  # Temps de montage en ticks

  # Positionnement du menu
  distance-multiplier: -0.01       # Multiplicateur de distance
  menu-distance: 0.3               # Distance du menu

  # Performance
  debug-mode: false                # Mode debug
  update-rate: 1                   # Taux de mise a jour
  collision-detection: true        # Detection de collision active

  # Camera
  camera-lock-enabled: true        # Verrouiller la camera
  camera-lock-strength: 0.4        # Force du verrouillage (0.0-1.0)

  # Retour des limites
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lLimite du curseur atteinte !"
```

---

## Widgets Disponibles

### BUTTON

Bouton interactif avec hover et clic.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ JOUER"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

Image statique (peut avoir un hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Optionnel
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Pas d'interaction
```

### TEXT

Texte formate.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lBIENVENUE
        &7sur le serveur
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Taille du texte
  shadow: true              # Ombre
  background-color: '#000000'  # Couleur de fond (hex)
```

### CURSOR

Curseur controle par la souris (**1 seul par menu**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # z eleve = devant
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Parametres du curseur
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animation
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Zone de collision
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Positionnement)

### Position

Position dans l'espace 3D relative au point d'apparition du menu.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x** : Gauche (-) / Droite (+)
- **y** : Bas (-) / Haut (+)
- **z** : Loin (-) / Proche (+)

**Conseil** : z=0.1 est bon pour l'arriere-plan, z=1.0 pour le curseur (toujours visible)

### Taille

Taille du widget.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Echelles typiques** :
- Petit bouton : `0.015`
- Bouton moyen : `0.02`
- Grand bouton : `0.03`
- Logo : `0.04-0.05`
- Curseur : `0.005`

### Rotation (Optionnel)

Rotation en degres.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Note** : Generalement pas necessaire (ViewFrame ajuste deja)

---

## Collision

### Configuration de Base

```yaml
collision:
  enabled: true                     # Activer la collision
  position: {x: 0, y: 0, z: 0.1}   # Optionnel : remplacement de position
  size: {x: 0.08, y: 0.04, z: 0.02} # Taille de la boite
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Optionnel
```

### Debug Visuel

```yaml
collision:
  debug:
    enabled: true     # Afficher les particules
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, etc
    size: 0.005       # Taille des particules
```

**Activer globalement** :
```
/cm debug particles toggle
/cm debug particles collision
```

### Conseils pour la Collision

1. **Taille visuelle ≠ taille de collision**
   - La collision peut etre plus grande pour faciliter le clic
   - Exemple : visuel 0.02, collision 0.08x0.04

2. **Position de collision**
   - Si non specifiee, utilise transform.position
   - Specifiez si vous voulez une zone differente

3. **Collision-area (Curseur)**
   - Le curseur utilise `collision-area` au lieu de `collision`
   - Raison : Le curseur a un comportement special

---

## Evenements et Actions

### Evenements Disponibles

| Evenement | Quand il se Declenche | Widgets |
|-----------|----------------------|---------|
| `on_menu_open` | Le menu s'ouvre | Tous |
| `on_cursor_hover` | Le curseur entre | Button, Image, Text |
| `on_cursor_hover_exit` | Le curseur sort | Button, Image, Text |
| `on_cursor_click` | Widget clique | Button |
| `on_click_any` | N'importe quel clic | Cursor |

### Actions Disponibles

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, etc
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # OU "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # Optionnel, en ms
```

**Commandes speciales** :
- `[TELEPORT] monde x y z yaw pitch`
- `[MESSAGE] texte avec &couleurs`
- `[CLOSE]`
- `[PLAY_MUSIC] chemin/son.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: nom_widget
```

---

## Exemples Pratiques

### Bouton Simple avec Son

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
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
      command: '[MESSAGE] &aBouton clique !'
```

### Bouton avec Teleportation

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eTeleportation...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Bouton Bascule (On/Off)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change_conditional
      if_state: normal
      to: hover
    - action: visual_change_conditional
      if_state: disabled
      to: disabled_hover
    on_cursor_hover_exit:
    - action: visual_change_conditional
      if_state: normal
      to: normal
    - action: visual_change_conditional
      if_state: disabled
      to: disabled
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[MESSAGE] &cDesactive !'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aActive !'
```

### Widget Texte Cliquable

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lAVERTISSEMENT
        &7Cliquez pour fermer
    hover:
      type: text
      value: |-
        &c&lAVERTISSEMENT
        &e&oCliquez pour fermer
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## Bonnes Pratiques

1. **Organisez par couches (z)** :
   - z=0.05 : Arriere-plan
   - z=0.1 : Boutons
   - z=0.15 : Superpositions
   - z=1.0 : Curseur

2. **Nommez les widgets de maniere descriptive** :
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Incluez toujours un fallback** :
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXTE"}
   ```

4. **Collision plus grande que le visuel** :
   - Visuel : 0.02
   - Collision : 0.08x0.04 (plus facile a cliquer)

5. **Utilisez les sons Minecraft quand possible** :
   - Pas de resource pack necessaire
   - Fonctionne sans configuration supplementaire

6. **Testez incrementalement** :
   - Ajoutez 1 widget a la fois
   - Utilisez `/cm reload` frequemment
   - Testez chaque interaction

---

Derniere mise a jour : 2026-02-02

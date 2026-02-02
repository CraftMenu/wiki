# Fonctionnalites de CraftMenu

## Table des Matieres
1. [Systeme de Son Unifie](#systeme-de-son-unifie)
2. [Evenements des Widgets](#evenements-des-widgets)
3. [Systeme d'Etats](#systeme-detats)
4. [Retour Configurable des Limites](#retour-configurable-des-limites)
5. [Commandes Speciales](#commandes-speciales)

---

## Systeme de Son Unifie

Tous les champs de son supportent maintenant deux types :

### Sons Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Son natif Minecraft
  volume: 0.8
  pitch: 1.0
```

**Exemples de sons Minecraft** :
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Sons Personnalises (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Resolution automatique
  # OU
  file: "craftmenu:template/click"   # Explicitement avec namespace
  volume: 1.0
  pitch: 1.2
```

**Etapes pour les sons personnalises** :
1. Ajoutez le `.ogg` dans `/plugins/CraftMenu/sounds/template/click.ogg`
2. Executez `/cm zip`
3. Le resource pack inclut le son automatiquement

---

## Evenements des Widgets

### on_menu_open

Se declenche automatiquement a l'ouverture du menu. Utile pour la musique de fond.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Quand le curseur entre dans la zone du widget.

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

Quand le curseur quitte la zone du widget.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Quand le widget est clique.

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (Curseur uniquement)

Se declenche sur N'IMPORTE QUEL clic, meme en dehors des widgets.

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## Systeme d'Etats

Permet aux widgets d'avoir plusieurs comportements (ex: bouton bascule on/off).

### Etats par Defaut

- `normal` : Etat initial
- `hover` : Souris sur le widget
- `pressed` : Widget clique
- `disabled` : Widget desactive
- `fallback` : Quand le visuel ne se charge pas

### Etats Personnalises

Vous pouvez creer vos propres etats :

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Son active
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Son desactive (etat personnalise)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover quand desactive (etat personnalise)
      type: image
      value: template/sound-mute-hover.png
```

### Actions d'Etat

#### toggle_state

Bascule entre une liste d'etats.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Cycle entre les etats
```

#### visual_change_conditional

Change le visuel uniquement si l'etat actuel est X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Si l'etat est "normal"
  to: hover                      # Changer vers "hover"
- action: visual_change_conditional
  if_state: disabled            # Si l'etat est "disabled"
  to: disabled_hover             # Changer vers "disabled_hover"
```

#### command_conditional

Execute une commande uniquement si l'etat est X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Si devient "disabled"
  command: '[STOP_MUSIC]'        # Arreter la musique
- action: command_conditional
  if_state: normal              # Si devient "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Jouer la musique
```

### Exemple Complet : Bouton Bascule

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## Retour Configurable des Limites

Personnalise le retour quand le curseur atteint les limites de mouvement.

### Configuration

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Son a la limite
      volume: 0.5                          # Volume 0.0-1.0
      pitch: 0.6                           # Tonalite 0.5-2.0
      message: "&c&lLimite du curseur atteinte !" # Message dans la barre d'action
```

### Sons Recommandes

- `minecraft:ui.button.click` - Clic doux
- `minecraft:block.note_block.bass` - Ton grave
- `craftmenu:template/warning.ogg` - Son personnalise

---

## Commandes Speciales

Utilisees avec `action: command`.

### [TELEPORT]

Teleporte le joueur.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    monde  x   y   z yaw pitch
```

### [MESSAGE]

Envoie un message au joueur.

```yaml
- action: command
  command: '[MESSAGE] &aBienvenue dans le jeu !'
  delay: 500  # Attendre 500ms avant d'envoyer
```

### [CLOSE]

Ferme le menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Fermer apres 1 seconde
```

### [PLAY_MUSIC]

Joue de la musique pour le widget (un seul son par widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Supporte les namespaces** :
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Arrete le son en cours pour ce widget.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Important** : `[STOP_MUSIC]` arrete seulement le son de ce widget, n'affecte pas les autres widgets ou sons globaux.

### [OPEN_URL]

Ouvre une URL dans le navigateur du joueur (necessite confirmation).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/votre-serveur'
```

---

## Arret Automatique des Sons

**Quand le menu se ferme**, TOUS les sons sont automatiquement arretes pour le joueur. Cela inclut :

- La musique de fond jouee via `[PLAY_MUSIC]`
- Les sons de hover/click des widgets
- Tout son actif au moment de la fermeture

**Pourquoi Cela Arrive** : En raison d'une limitation de Minecraft, le jeu ne prend pas en charge l'arrêt des sons personnalisés individuels des resource packs. Par conséquent, TOUS les sons doivent être arrêtés lorsque le menu se ferme pour éviter que les sons ne continuent après la fermeture du menu.

### Alternative : Controle Manuel

Si vous preferez ne pas arreter les sons automatiquement, utilisez un bouton bascule dans le menu :

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Arreter la musique manuellement
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Actions Visuelles

### visual_change

Change l'etat visuel inconditionnellement.

```yaml
- action: visual_change
  to: hover
```

### scale

Anime l'echelle du widget temporairement.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% de la taille
  duration: 300                     # Duree en ms
```

### scale_reset

Remet l'echelle a la taille originale.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Supprime completement le widget (visuel, collision, sons).

```yaml
- action: hide_widget
  widget: fov_warning  # Nom du widget a cacher
```

**Note** : Un widget cache ne peut pas etre recupere sans rouvrir le menu.

---

## Exemple Complet : Menu avec Toutes les Fonctionnalites

```yaml
menu:
  name: exemple_complet
  title: '&b&lExemple de Menu Complet'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cLe curseur a atteint le bord !"

  widgets:
    # Bouton avec musique de fond
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # Bouton d'action avec retour complet
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aDemarrage du jeu...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Curseur avec retour sonore
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
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
          volume: 0.4
          pitch: 1.0
```

---

Derniere mise a jour : 2026-02-02
Version du Plugin : 1.0.0

# Systeme d'Evenements

CraftMenu utilise un systeme d'evenements pour gerer les interactions utilisateur avec les widgets.

## Types d'Evenements

| Evenement | Declencheur | Disponible Sur |
|-----------|-------------|----------------|
| `on_menu_open` | Le menu s'ouvre | Tous les widgets |
| `on_cursor_hover` | Le curseur entre dans le widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Le curseur quitte le widget | IMAGE, TEXT |
| `on_cursor_click` | Le widget est clique | IMAGE, TEXT |
| `on_click_any` | N'importe quel clic | CURSOR uniquement |

## Structure de Base des Evenements

```yaml
widgets:
  mon_bouton:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &aVous avez clique !"
```

## Types d'Actions

### Action Son

Joue un effet sonore :

```yaml
- action: sound
  file: minecraft:ui.button.click  # Son Minecraft
  volume: 1.0                       # 0.0 a 1.0
  pitch: 1.0                        # 0.5 a 2.0
```

Sons personnalises :
```yaml
- action: sound
  file: template/click.ogg         # Fichier son personnalise
```

### Action Animation

Declenche une animation :

```yaml
- action: animation
  effect: scale                    # Type d'animation
  duration: 200                    # Duree en ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Echelle cible
  easing_style: ease_out           # Fonction d'acceleration
  priority: false                  # Bloquer les autres actions ?
```

### Action Commande

Execute des commandes :

```yaml
- action: command
  command: "[MESSAGE] Bonjour !"   # Commande speciale
  delay: 0                         # Delai en ms
```

**Commandes Speciales :**
- `[MESSAGE] texte` - Envoyer un message au joueur
- `[TELEPORT] monde x y z yaw pitch` - Teleporter le joueur
- `[CLOSE]` - Fermer le menu
- `[PLAY_MUSIC] chemin/fichier.ogg` - Jouer de la musique de fond
- `[STOP_MUSIC]` - Arreter la musique
- `[OPEN_URL] https://...` - Ouvrir une URL (cliquable)
- `[PLAYER] /commande` - Executer la commande en tant que joueur
- `[CONSOLE] /commande` - Executer la commande en tant que console

### Actions d'Etat

Changer les etats des widgets :

```yaml
# Basculer entre les etats
- action: toggle_state
  states: [normal, disabled]

# Definir un etat specifique
- action: set_state
  state: disabled
```

### Action de Changement Visuel

Changer l'apparence du widget :

```yaml
- action: visual_change
  to: hover

# Changement conditionnel
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Action Cacher Widget

Retirer un widget de la vue :

```yaml
- action: hide_widget
  widget: nom_de_mon_widget
```

### Action Arreter Animation

Arreter les animations en cours :

```yaml
- action: stop_animation
  animation_type: rotate          # Animation a arreter
```

## Ordre d'Execution des Evenements

Les actions s'executent dans l'ordre liste. Pour de meilleurs resultats :

1. Effets sonores (retour immediat)
2. Changements d'etat
3. Commandes
4. Animations (peuvent avoir des delais)

## Animations Prioritaires

Utilisez `priority: true` pour bloquer les autres actions jusqu'a ce que l'animation soit terminee :

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Bloque les actions suivantes
    - action: command
      command: "[MESSAGE] Termine !"  # S'execute apres l'animation
```

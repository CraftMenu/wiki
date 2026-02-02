# Guide Complet des Animations - CraftMenu

Ce document presente tous les types d'animations disponibles dans CraftMenu, avec des exemples pratiques d'utilisation YAML.

---

## Table des Matieres

1. [Animations de Base](#animations-de-base)
2. [Animations de Mouvement](#animations-de-mouvement)
3. [Animations Avancees](#animations-avancees)
4. [Combiner des Animations](#combiner-des-animations)
5. [Proprietes Communes](#proprietes-communes)

---

## Animations de Base

### SCALE - Changement de Taille

Change la taille du widget sur les axes X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% de la taille originale
    easing_style: out
```

**Proprietes** :
- `scaleX` : Echelle sur l'axe X (defaut : intensity)
- `scaleY` : Echelle sur l'axe Y (defaut : intensity)
- `scaleZ` : Echelle sur l'axe Z (defaut : intensity)

---

### ROTATE - Rotation

Fait tourner le widget autour des axes X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Rotation complete sur l'axe Y
    easing_style: in_out
```

**Proprietes** :
- `rotationX` : Rotation sur l'axe X en degres
- `rotationY` : Rotation sur l'axe Y en degres
- `rotationZ` : Rotation sur l'axe Z en degres

---

### TRANSLATE - Translation

Deplace le widget vers une nouvelle position.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Deplacement en blocs
    easing_style: out
```

**Proprietes** :
- `offsetX` : Deplacement sur l'axe X
- `offsetY` : Deplacement sur l'axe Y
- `offsetZ` : Deplacement sur l'axe Z

---

### FADE - Fondu entrant/sortant

Controle l'opacite/visibilite du widget.

```yaml
# Fondu sortant (disparition)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = fondu sortant, false = fondu entrant
    easing_style: in

# Fondu entrant (apparition)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Proprietes** :
- `fadeOut` : true pour disparaitre, false pour apparaitre

---

## Animations de Mouvement

### PULSE - Pulsation

Effet de respiration/battement de coeur avec mise a l'echelle rythmique.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Animation continue
    easing_style: in_out
```

---

### BOUNCE - Rebond

Simule la physique d'une balle qui rebondit verticalement.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Hauteur du saut
    easing_style: out
```

---

### SWING - Balancement de Pendule

Mouvement de pendule/balancoire.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Amplitude du balancement
    loop: true
    easing_style: in_out
```

---

### FLOAT - Flottement

Mouvement vertical doux de haut en bas.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Hauteur de flottement
    loop: true
    easing_style: in_out
```

---

### SHAKE - Tremblement

Vibration rapide et aleatoire.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Intensite de la vibration
    easing_style: linear
```

---

### JIGGLE - Tremblement Elastique

Secousse plus douce et controlee avec effet elastique.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Amplitude du tremblement
    easing_style: out
```

---

## Animations Avancees

### SLIDE - Glissement depuis Hors-Ecran

Le widget entre en glissant depuis hors de l'ecran.

```yaml
# Glissement depuis la gauche
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Distance en blocs
    easing_style: out

# Glissement depuis le haut
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Proprietes** :
- `direction` : Direction d'entree (left, right, top, bottom, front, back)
- `distance` : Distance initiale en blocs (defaut : intensity * 2.0)

**Utilisation Courante** : Ideal pour les animations `on_menu_open` avec priorite CRITICAL.

---

### ZOOM_IN - Entree avec Depassement

Echelle de 0 a 1 avec "overshoot" (depasse et revient).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Echelle maximale avant de revenir a 1.0
    easing_style: out
```

**Proprietes** :
- `overshoot` : Echelle maximale avant de se stabiliser a 1.0 (defaut : 1.2)

**Utilisation Courante** : Animation d'entree dramatique dans `on_menu_open`.

---

### SQUEEZE - Effet de Compression

Aplatit un axe tout en etendant les autres.

```yaml
# Compression horizontale
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Intensite de la compression
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Compression verticale
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Proprietes** :
- `axis` : Axe a comprimer (x, y, z)
- `intensity` : Intensite de la compression

---

### FLIP - Rotation de 180°

Rotation de 180 degres sur un axe specifique.

```yaml
# Retournement vertical (comme une carte)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Retournement horizontal
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Proprietes** :
- `axis` : Axe de rotation (x, y, z)

**Utilisation Courante** : Transitions d'etat, revelation de contenu alternatif.

---

### WOBBLE - Balancement Gelatineux

Balancement style "gelee" de gauche a droite.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Intensite du balancement
    loop: true
    easing_style: in_out
```

**Utilisation Courante** : Animations d'attention, retour au survol.

---

### ORBIT - Mouvement Orbital

Le widget orbite en cercle autour d'un point central.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Rayon de l'orbite en blocs
    speed: 1.0  # Multiplicateur de vitesse
    loop: true
    easing_style: linear
```

**Proprietes** :
- `radius` : Rayon de l'orbite (defaut : intensity * 0.5)
- `speed` : Vitesse de rotation (defaut : 1.0)

**Utilisation Courante** : Animations decoratives d'arriere-plan.

---

### SPIRAL - Mouvement en Spirale

Combine rotation avec mouvement circulaire.

```yaml
# Spirale dans le sens horaire
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Rayon de la spirale
    clockwise: true  # Sens horaire
    loop: true
    easing_style: linear

# Spirale dans le sens anti-horaire
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Proprietes** :
- `radius` : Rayon de la spirale (defaut : intensity * 0.3)
- `clockwise` : Direction du mouvement (true/false)

---

### WAVE - Mouvement en Vague

Vague douce utilisant la fonction sinus.

```yaml
# Vague horizontale
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Amplitude de la vague
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Vague verticale
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Proprietes** :
- `axis` : Direction de la vague (horizontal, vertical)

---

### GLOW - Lueur Pulsante

Combine une pulsation subtile avec des changements d'opacite.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Intensite de la lueur
    loop: true
    easing_style: in_out
```

**Utilisation Courante** : Mise en evidence d'elements importants, indicateurs d'attention.

---

## Combiner des Animations

Vous pouvez combiner plusieurs animations sequentiellement ou simultanement.

### Exemple 1 : Entree Dramatique

```yaml
on_menu_open:
  # 1. Glissement depuis la gauche
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - bloque les actions suivantes
      easing_style: out

  # 2. Zoom avec depassement (s'execute APRES le glissement)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Flottement continu (demarre apres le zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Exemple 2 : Bouton Interactif Complexe

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Son de survol
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Changement visuel
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Pulsation subtile
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Restauration visuelle
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Son de clic
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Sequence d'animation
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # Commande (s'execute APRES les animations)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/votre-serveur'
          delay: 1600
```

---

### Exemple 3 : Widget Decoratif avec Animations Multiples

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Orbite circulaire
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Rotation pendant l'orbite
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Lueur pulsante
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Proprietes Communes

Toutes les animations supportent ces proprietes :

### type
Type d'action (toujours `animation`).

### effect
Nom de l'animation (scale, rotate, pulse, etc.).

### duration
Duree en millisecondes.

```yaml
duration: 1000  # 1 seconde
```

### intensity
Intensite generale de l'animation (signification varie selon le type).

```yaml
intensity: 0.5  # Moitie de l'intensite par defaut
```

### loop
Si l'animation doit se repeter indefiniment.

```yaml
loop: true  # Animation continue
loop: false # Animation unique (defaut)
```

### delay
Delai avant le demarrage de l'animation (en ms).

```yaml
delay: 500  # Attendre 500ms avant de commencer
```

### easing_style
Type d'easing pour lisser l'animation.

```yaml
easing_style: linear      # Vitesse constante
easing_style: in          # Accelere au debut
easing_style: out         # Decelere a la fin
easing_style: in_out      # Accelere et decelere
```

### priority
Priorite de l'animation (affecte l'interruption).

```yaml
priority: true   # CRITICAL - jamais interrompue, bloque les actions suivantes
priority: false  # INTERRUPTIBLE - peut etre interrompue (defaut)
```

**Note** : Les animations continues (`loop: true`) ont toujours une priorite BACKGROUND.

---

## Guide d'Utilisation par Contexte

### Animations pour on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Entree glissante
  - effect: zoom_in     # Entree avec depassement
  - effect: fade        # Fondu doux entrant
```

### Animations pour on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Augmenter la taille
  - effect: pulse       # Pulser doucement
  - effect: glow        # Lueur de mise en evidence
  - effect: wobble      # Balancement d'attention
```

### Animations pour on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Retour de pression
  - effect: bounce      # Saut de confirmation
  - effect: shake       # Tremblement d'impact
  - effect: flip        # Retournement/revelation
```

### Animations Continues (Decoratives)

```yaml
continuous-animations:
  - effect: float       # Flottement doux
  - effect: rotate      # Rotation constante
  - effect: orbit       # Mouvement orbital
  - effect: spiral      # Spirale decorative
  - effect: wave        # Mouvement en vague
  - effect: glow        # Lueur pulsante
```

---

## Tableau de Reference Rapide

| Animation | Type | Utilisation Principale | Boucle ? | Priorite par Defaut |
|-----------|------|----------------------|----------|---------------------|
| SCALE | Transformation | Hover, Click | Non | INTERRUPTIBLE |
| ROTATE | Transformation | Decoratif | Oui | BACKGROUND |
| TRANSLATE | Transformation | Mouvement | Non | CRITICAL |
| PULSE | Mouvement | Continue | Oui | BACKGROUND |
| BOUNCE | Mouvement | Click | Non | INTERRUPTIBLE |
| SWING | Mouvement | Hover | Oui | INTERRUPTIBLE |
| FLOAT | Mouvement | Continue | Oui | BACKGROUND |
| SHAKE | Mouvement | Click | Non | INTERRUPTIBLE |
| FADE | Visuel | Entree/Sortie | Non | CRITICAL |
| SLIDE | Avancee | Entree | Non | CRITICAL |
| ZOOM_IN | Avancee | Entree | Non | CRITICAL |
| SQUEEZE | Avancee | Click | Non/Oui | INTERRUPTIBLE |
| FLIP | Avancee | Etat | Non | CRITICAL |
| WOBBLE | Avancee | Hover | Oui | BACKGROUND |
| ORBIT | Avancee | Decoratif | Oui | BACKGROUND |
| SPIRAL | Avancee | Decoratif | Oui | BACKGROUND |
| WAVE | Avancee | Decoratif | Oui | BACKGROUND |
| JIGGLE | Avancee | Hover | Non | INTERRUPTIBLE |
| GLOW | Avancee | Mise en Evidence | Oui | BACKGROUND |

---

**Derniere Mise a Jour** : 2025-10-15
**Version du Plugin** : 2.0
**Auteur** : Zodunix

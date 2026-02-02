# Editeur In-Game

CraftMenu inclut un puissant editeur visuel qui vous permet de configurer les menus directement via une interface d'inventaire, sans modifier manuellement les fichiers YAML.

## Pour Commencer

### Ouvrir l'Editeur

```
/cm editeur              # Ouvrir le hub principal de l'editeur
/cm editeur <menu>       # Editer un menu specifique directement
```

**Permission Requise:** `craftmenu.admin` ou `craftmenu.edit`

### Navigation de l'Editeur

L'editeur utilise un systeme de **navigation basee sur une pile**:
- **Clic gauche** sur les elements pour entrer dans les sous-menus ou modifier les valeurs
- **Clic droit** pour les actions secondaires (apercu, test)
- **Shift + Clic gauche** pour supprimer des elements (avec confirmation)
- **Element fleche** (bouton retour) pour revenir au menu precedent
- **Fermer l'inventaire** ou cliquer a l'exterieur pour quitter

---

## Menu Principal de l'Editeur

Lorsque vous executez `/cm editeur`, vous verrez le hub principal de l'editeur avec ces options:

| Element | Description |
|---------|-------------|
| **Liste des Menus** | Parcourir et editer tous les menus charges |
| **Navigateur d'Images** | Voir toutes les images disponibles |
| **Navigateur de Sons** | Voir tous les sons disponibles |
| **Configuration** | Configuration globale du plugin |

---

## Edition de Menus

### Liste des Menus

Affiche tous les menus dans votre dossier `menus/`. Cliquez sur un menu pour ouvrir son editeur.

- **Clic gauche**: Editer le menu
- **Shift + Clic gauche**: Supprimer le menu (avec confirmation)
- **Creer Nouveau**: Ajouter un nouveau menu a votre position actuelle

### Hub d'Actions du Menu

Apres avoir selectionne un menu, vous verrez l'editeur principal du menu avec ces sections:

| Section | Description |
|---------|-------------|
| **Proprietes** | Parametres de base (nom, titre, menu principal, ouverture auto) |
| **Emplacement** | Position et rotation dans le monde |
| **Disposition** | Configuration de la grille |
| **Raccourcis Clavier** | Raccourcis clavier |
| **Visibilite** | Parametres pour cacher joueurs/mobs/items |
| **Avance** | Sensibilite du curseur, verrouillage de camera, limites |
| **Widgets** | Editer les widgets dans ce menu |

---

## Proprietes du Menu

Editez les informations de base du menu:

| Propriete | Description |
|-----------|-------------|
| **Nom** | Identifiant du menu (utilise dans les commandes) |
| **Titre** | Titre affiche (supporte les codes couleur &) |
| **Description** | Description optionnelle |
| **Menu Principal** | Marquer comme menu primaire |
| **Ouvrir a la Connexion** | Ouvrir automatiquement quand le joueur rejoint le serveur |
| **Ouvrir a la Teleportation** | Ouvrir automatiquement quand le joueur se teleporte dans ce monde |
| **Monde** | Monde ou le menu existe |

### Edition des Valeurs Texte

Quand vous cliquez sur une propriete texte:
1. L'inventaire se ferme
2. Un message apparait dans le chat
3. Tapez votre nouvelle valeur dans le chat
4. Appuyez sur Entree pour confirmer (ou tapez `cancel` pour annuler)

---

## Emplacement du Menu

Configurez ou le menu apparait dans le monde:

| Propriete | Description |
|-----------|-------------|
| **Monde** | Selectionner parmi les mondes disponibles |
| **X / Y / Z** | Coordonnees (cliquez pour editer via chat) |
| **Yaw** | Rotation horizontale (-180 a 180) |
| **Pitch** | Rotation verticale (-90 a 90) |
| **Definir Actuel** | Utiliser votre position/rotation actuelle |

---

## Disposition du Menu (Grille)

Configurez le positionnement des widgets base sur une grille:

| Propriete | Description |
|-----------|-------------|
| **Active** | Activer/desactiver la disposition en grille |
| **Colonnes** | Nombre de colonnes de la grille |
| **Lignes** | Nombre de lignes de la grille |
| **Espacement X / Y / Z** | Espacement entre les cellules |
| **Alignement** | Alignement de la grille (CENTER, TOP_LEFT, etc.) |

Quand la disposition en grille est activee, les widgets utilisent `grid-position: {row: X, col: Y}` au lieu de coordonnees manuelles.

---

## Raccourcis Clavier du Menu

Configurez les raccourcis clavier:

| Action | Description |
|--------|-------------|
| **Ajouter Raccourci** | Creer un nouveau raccourci clavier |
| **Editer Raccourci** | Modifier un raccourci existant |
| **Supprimer Raccourci** | Retirer un raccourci |

### Proprietes du Raccourci

- **Touche**: La touche ou combinaison (ex., `SHIFT`, `CTRL+E`, `F`)
- **Action**: `activate`, `toggle`, ou `close`
- **Widget**: Nom du widget cible (pour activate/toggle)

---

## Visibilite du Menu

Controlez ce qui est visible pendant que le menu est ouvert:

| Propriete | Description |
|-----------|-------------|
| **Cacher Joueurs** | Cacher les autres joueurs de la vue |
| **Cacher Mobs** | Cacher tous les mobs |
| **Cacher Items** | Cacher les items au sol |
| **Liste Blanche** | Joueurs qui restent visibles (editer la liste) |

---

## Parametres Avances

Affinez le comportement du menu:

| Propriete | Description |
|-----------|-------------|
| **Sensibilite du Curseur** | Vitesse de mouvement de la souris (0.1 - 5.0) |
| **Offset Yaw Max** | Limite horizontale du curseur (degres) |
| **Offset Pitch Max** | Limite verticale du curseur (degres) |
| **Verrouillage Camera Active** | Verrouiller la camera du joueur quand le menu est ouvert |
| **Force du Verrouillage** | Force du verrouillage de la camera (0.0 - 1.0) |
| **Son de Limite** | Son quand le curseur atteint la limite |
| **Volume/Pitch de Limite** | Proprietes du son |
| **Message de Limite** | Message affiche a la limite |

---

## Edition de Widgets

### Liste des Widgets

Affiche tous les widgets dans le menu actuel:

- **Clic gauche**: Editer le widget
- **Shift + Clic gauche**: Supprimer le widget
- **Creer Nouveau**: Ajouter un nouveau widget

### Hub de l'Editeur de Widget

Chaque widget a ces sections editables:

| Section | Description |
|---------|-------------|
| **Type** | IMAGE, TEXT, ou CURSOR |
| **Transformation** | Position, taille, rotation |
| **Etats Visuels** | Apparences normal, survol, presse, desactive |
| **Collision** | Configuration de la boite de collision |
| **Evenements** | Evenements d'interaction et actions |
| **[Specifique au Type]** | Options additionnelles basees sur le type de widget |

---

## Editeur de Transformation

Configurez le positionnement et le dimensionnement du widget:

### Position
- **X**: Position horizontale
- **Y**: Position verticale
- **Z**: Position en profondeur

### Taille
- **X**: Echelle de largeur
- **Y**: Echelle de hauteur
- **Z**: Echelle de profondeur

### Rotation
- **Pitch**: Rotation haut/bas
- **Yaw**: Rotation gauche/droite
- **Roll**: Rotation d'inclinaison

**Astuce**: Cliquez sur n'importe quelle valeur pour l'editer via le chat.

---

## Etats Visuels

Les widgets peuvent avoir differentes apparences pour differents etats:

| Etat | Quand Applique |
|------|----------------|
| **normal** | Etat par defaut |
| **hover** | Le curseur est sur le widget |
| **pressed** | Le widget est clique |
| **disabled** | Le widget est inactif |
| **Personnalise** | N'importe quel nom d'etat personnalise |

### Editeur d'Etat Visuel

Chaque etat a:

| Propriete | Description |
|-----------|-------------|
| **Type** | `image`, `text`, ou `unicode` |
| **Valeur** | Chemin d'image, contenu texte, ou caractere unicode |
| **Overrides** | Overrides optionnels de transformation/collision/taille-de-texte |

---

## Editeur de Collision

Configurez la zone cliquable du widget:

| Propriete | Description |
|-----------|-------------|
| **Active** | Activer/desactiver la detection de collision |
| **Position X/Y/Z** | Decalage du centre de la boite de collision |
| **Taille X/Y/Z** | Dimensions de la boite de collision |
| **Offset X/Y/Z** | Decalage additionnel |

**Astuce**: Utilisez `/cm debogueur particles` pour visualiser les boites de collision en jeu.

---

## Editeur d'Evenements

### Types d'Evenements

| Evenement | Declencheur |
|-----------|-------------|
| **on_menu_open** | Quand le menu s'ouvre |
| **on_cursor_hover** | Quand le curseur entre dans le widget |
| **on_cursor_hover_exit** | Quand le curseur quitte le widget |
| **on_cursor_click** | Quand le widget est clique |

### Liste d'Actions

Chaque evenement contient une liste d'actions qui s'executent dans l'ordre:

- **Clic gauche**: Editer l'action
- **Shift + Clic gauche**: Supprimer l'action
- **Ajouter Action**: Creer une nouvelle action
- **Reordonner**: Glisser pour changer l'ordre d'execution

---

## Editeurs d'Actions

Chaque type d'action a un editeur specialise:

### Action Animation

| Propriete | Description |
|-----------|-------------|
| **Effet** | Type d'animation (rotate, scale, bounce, etc.) |
| **Duree** | Longueur de l'animation en millisecondes |
| **Echelle X/Y/Z** | Multiplicateurs d'echelle (pour les animations de scale) |
| **Intensite** | Force de l'effet (0.1 - 5.0) |
| **Easing** | Fonction de timing (linear, ease_in, ease_out, etc.) |
| **Priorite** | Bloquer les interactions pendant l'animation |

### Action Son

| Propriete | Description |
|-----------|-------------|
| **Fichier** | Chemin du son (minecraft:... ou chemin personnalise) |
| **Volume** | Volume du son (0.0 - 1.0) |
| **Pitch** | Pitch du son (0.5 - 2.0) |

**Parcourir**: Cliquez pour ouvrir le navigateur de sons et selectionner un son.

### Action Commande

| Propriete | Description |
|-----------|-------------|
| **Commande** | Commande a executer (avec commandes speciales) |
| **Delai** | Delai en millisecondes avant l'execution |

**Commandes Speciales:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aVotre message ici`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /commande`
- `[CONSOLE] /commande`

### Action Etat

| Propriete | Description |
|-----------|-------------|
| **Type d'Action** | `toggle_state` ou `set_state` |
| **Etats** | Liste d'etats entre lesquels alterner (toggle_state) |
| **Etat** | Nom de l'etat cible (set_state) |

### Action Changement Visuel

| Propriete | Description |
|-----------|-------------|
| **Vers** | Nom de l'etat visuel cible |

### Action Widget

| Propriete | Description |
|-----------|-------------|
| **Action** | `hide_widget`, `show_widget`, etc. |
| **Widget** | Nom du widget cible |

### Action Effet

| Propriete | Description |
|-----------|-------------|
| **Effet** | Type d'effet a appliquer |
| **Parametres** | Parametres specifiques a l'effet |

### Action Arreter Animation

| Propriete | Description |
|-----------|-------------|
| **Type d'Animation** | Quelle animation arreter |

### Action Arreter Effet

| Propriete | Description |
|-----------|-------------|
| **Type d'Effet** | Quel effet arreter |

### Action Definir Etat de Base

| Propriete | Description |
|-----------|-------------|
| **Etat** | Nouvel etat de base pour le widget |

---

## Navigateurs d'Assets

### Navigateur d'Images

Parcourez toutes les images dans votre dossier `images/`:

- **Pagination**: Naviguer a travers les pages d'images
- **Apercu**: Voir le chemin de l'image et les details
- **Selectionner**: Cliquer pour utiliser dans le contexte actuel

Les images sont organisees par dossier (ex., `template/button.png`).

### Navigateur de Sons

Parcourez tous les sons dans votre dossier `sounds/` plus les sons integres de Minecraft:

- **Sons Personnalises**: Vos fichiers .ogg de `sounds/`
- **Sons Minecraft**: Sons integres (minecraft:ui.button.click, etc.)
- **Selectionner**: Cliquer pour utiliser dans le contexte actuel

---

## Conseils et Meilleures Pratiques

### Conseils de Workflow

1. **Commencez par les Proprietes**: Configurez nom, titre et emplacement d'abord
2. **Ajoutez les Widgets**: Creez vos widgets avec des transformations de base
3. **Configurez les Visuels**: Mettez en place les etats normal et hover
4. **Ajoutez la Collision**: Activez et dimensionnez les boites de collision
5. **Ajoutez les Evenements**: Configurez les sons de survol et actions de clic
6. **Testez Frequemment**: Utilisez `/cm ouvrir <menu>` pour tester les changements

### Raccourcis Clavier

| Raccourci | Action |
|-----------|--------|
| **Echap** | Fermer l'editeur |
| **Touches numeriques (1-9)** | Selection rapide de slot |

### Problemes Courants

**Les changements n'apparaissent pas:**
- Executez `/cm recharger` apres avoir fait des changements
- Assurez-vous d'avoir clique sur "Sauvegarder" dans l'editeur

**La collision ne detecte pas:**
- Verifiez que la collision est activee
- Verifiez que la taille de collision est assez grande
- Utilisez `/cm debogueur particles` pour visualiser

**Les images ne s'affichent pas:**
- Executez `/cm pack` pour regenerer le resource pack
- Assurez-vous que l'image est dans un sous-dossier (ex., `images/monmenu/`)
- Appliquez le resource pack au client

---

## Voir Aussi

- [Reference des Commandes](commands.md)
- [Creation de Menus](menu-creation.md)
- [Types de Widgets](widgets.md)
- [Systeme d'Evenements](events.md)
- [Animations](animations.md)

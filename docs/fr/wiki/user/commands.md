# Reference des Commandes

CraftMenu fournit un ensemble complet de commandes pour gerer les menus.

## Commande de Base

Toutes les commandes utilisent `/craftmenu` (alias : `/cm`).

## Commandes Generales

### Aide
```
/cm aide [commande]
```
Affiche les informations d'aide pour toutes les commandes ou une commande specifique.

### Lister les Menus
```
/cm lister
```
Liste tous les templates de menus charges.

### Informations du Plugin
```
/cm info
```
Affiche la version du plugin et les statistiques.

## Commandes de Menu

### Ouvrir un Menu
```
/cm ouvrir <nom_menu> [joueur]
```
Ouvre un menu pour vous-meme ou un autre joueur.

**Exemples :**
- `/cm ouvrir template` - Ouvrir le menu template pour vous-meme
- `/cm ouvrir lobby Steve` - Ouvrir le menu lobby pour le joueur Steve

### Fermer un Menu
```
/cm fermer [joueur]
```
Ferme le menu actif pour vous-meme ou un autre joueur.

### Creer un Menu
```
/cm creer <nom_menu>
```
Cree un nouveau template de menu a votre position actuelle.

### Supprimer un Menu
```
/cm supprimer <nom_menu>
```
Supprime un template de menu.

## Commandes de Resource Pack

### Generer le Resource Pack
```
/cm pack
```
Genere le resource pack a partir des images et sons dans le dossier CraftMenu.

### Commandes d'Images
```
/cm images scanner
/cm images reparer [--backup]
/cm images redimensionner <chemin_image> <taille_cible>
/cm images sauvegarde
/cm images restaurer <nom_backup>
/cm images liste
/cm images sauvegardes
```
- `scanner` - Recherche les images surdimensionnees
- `reparer` - Optimise automatiquement les images surdimensionnees
- `redimensionner` - Redimensionne une image specifique a la taille cible (16-4096 pixels)
- `sauvegarde` - Cree une sauvegarde des images
- `restaurer` - Restaure les images depuis une sauvegarde
- `liste` - Liste toutes les images dans le dossier images
- `sauvegardes` - Liste toutes les sauvegardes disponibles

## Commandes de Configuration

### Recharger
```
/cm recharger
```
Recharge toutes les configurations et templates de menus.

### Langue
```
/cm langue <lang>
/cm langue liste
```
- `/cm langue <lang>` - Change la langue du plugin directement (pas besoin de "set")
- `/cm langue liste` - Affiche les langues disponibles

Langues disponibles :
- `en_US` - Anglais
- `pt_BR` - Portugais (Bresil)
- `es_ES` - Espagnol
- `fr_FR` - Francais
- `de_DE` - Allemand
- `it_IT` - Italien
- `nl_NL` - Neerlandais
- `ru_RU` - Russe
- `pl_PL` - Polonais
- `tr_TR` - Turc
- `uk_UA` - Ukrainien
- `ar_SA` - Arabe
- `ja_JP` - Japonais
- `ko_KR` - Coreen
- `zh_CN` - Chinois (Simplifie)
- `hi_IN` - Hindi
- `id_ID` - Indonesien
- `th_TH` - Thai
- `vi_VN` - Vietnamien

## Commandes de Debug

### Debug de Particules
```
/cm debogueur particules
/cm debogueur particules taille <valeur>
```
- `/cm debogueur particules` - Active/desactive TOUTES les particules de debug (collision boxes, cursor trail, widget centers)
- `/cm debogueur particules taille <valeur>` - Definit la taille des particules (0.001 a 2.0)

### Debug de Grille
```
/cm debogueur grille
/cm debogueur grille numeros
```
- `/cm debogueur grille` - Active/desactive la visualisation de la grille
- `/cm debogueur grille numeros` - Affiche/masque les numeros de cellules

### Statut du Debug
```
/cm debogueur statut
```
Affiche le statut actuel du debug.

### Verification de Sante
```
/cm sante
```
Affiche l'etat de sante des composants.

### Recuperation
```
/cm recuperer
```
Tente de recuperer des erreurs.

## Commande de l'Editeur

Ouvre l'editeur visuel en jeu pour les menus et widgets.

### Ouvrir l'Editeur
```
/cm editeur
/cm editeur <nom_menu>
```
- `/cm editeur` - Ouvre le hub de l'editeur
- `/cm editeur <nom_menu>` - Ouvre l'editeur pour un menu specifique

**Permission Requise:** `craftmenu.admin`

## Permissions

| Permission | Description |
|------------|-------------|
| `craftmenu.use` | Utilisation de base (ouvrir les menus) |
| `craftmenu.admin` | Commandes admin |
| `craftmenu.open` | Ouvrir les menus |
| `craftmenu.create` | Creer des menus |
| `craftmenu.reload` | Recharger le plugin |
| `craftmenu.debug` | Commandes de debug |

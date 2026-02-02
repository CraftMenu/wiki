# CraftMenu - Demarrage Rapide

## Guide en 5 Minutes

Ce guide vous permet de passer de zero a un menu fonctionnel en 5 minutes.

---

## 1. Installation (1 min)

1. **Telecharger** :
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (dependance)

2. **Installer** :
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Demarrer le serveur**

4. **Verifier** :
   ```
   /cm info
   ```

---

## 2. Creer Votre Premier Menu (2 min)

1. **En jeu**, allez a l'emplacement souhaite
2. Executez :
   ```
   /cm create monmenu
   ```

3. **Menu cree !** Fichier genere a :
   ```
   /plugins/CraftMenu/menus/monmenu.yml
   ```

---

## 3. Ajouter des Images (1 min)

1. **Creer le dossier** :
   ```
   /plugins/CraftMenu/images/monmenu/
   ```

2. **Ajouter des images PNG** (64x64 ou 128x128) :
   ```
   images/monmenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Generer le resource pack** :
   ```
   /cm zip
   ```

---

## 4. Configurer le Menu (1 min)

Editez `/plugins/CraftMenu/menus/monmenu.yml` :

```yaml
menu:
  name: monmenu
  title: '&b&lMon Premier Menu'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Ou vous l'avez cree
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Bouton simple (utilisant IMAGE avec evenements hover/click)
    mon_bouton:
      type: IMAGE
      visual:
        normal:
          type: image
          value: monmenu/button.png       # ← VOTRE IMAGE
        hover:
          type: image
          value: monmenu/button-hover.png # ← IMAGE HOVER
        fallback:
          type: text
          value: "CLIQUEZ-MOI"            # Si l'image echoue
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
          command: '[MESSAGE] &aVous avez clique sur le bouton !'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Curseur
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: monmenu/cursor.png  # ← VOTRE IMAGE
        fallback:
          type: text
          value: "§f→"
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
          volume: 0.3
```

---

## 5. Test

1. **Recharger** :
   ```
   /cm reload
   ```

2. **Ouvrir le menu** :
   ```
   /cm open monmenu
   ```

3. **Deplacer la souris** pour controler le curseur
4. **Cliquer** sur le bouton

---

## Liste de Verification

- [ ] Plugin installe et fonctionnel
- [ ] Menu cree avec `/cm create`
- [ ] Images ajoutees dans `/images/monmenu/`
- [ ] Resource pack genere avec `/cm zip`
- [ ] Menu configure en YAML
- [ ] Menu fonctionne avec `/cm open monmenu`
- [ ] Resource pack applique sur le client

---

## Problemes Courants

### "Menu non charge"

```bash
/cm reload
/cm list  # Verifier si le menu apparait
```

### Curseur n'apparait pas

**Solution** : Verifier que le curseur est dans le YAML et a un visuel configure

### Les images affichent "?"

```bash
/cm images scan    # Verifier si les images ont ete trouvees
/cm zip            # Regenerer le resource pack
/cm reload         # Recharger
```

### Resource pack ne se telecharge pas

Le joueur doit :
1. Installer manuellement : copier `/plugins/CraftMenu/craftmenu.zip` vers `.minecraft/resourcepacks/`
2. OU configurer dans `server.properties` (necessite un hebergement web)

---

## Prochaines Etapes

1. [Documentation Complete des Menus](MENU_CREATION.md)
3. [Fonctionnalites Avancees](FEATURES.md)

---

## Ressources Utiles

- **Exemples d'images** : Recherchez "minecraft UI icons" ou creez les votres
- **Tailles recommandees** : 64x64, 128x128
- **Format** : PNG avec transparence
- **Sons Minecraft** : [Liste complete](https://minecraft.fandom.com/wiki/Sounds.json)

---

Derniere mise a jour : 2026-02-02

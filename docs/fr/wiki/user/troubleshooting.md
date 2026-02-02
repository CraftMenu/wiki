# Depannage

Problemes courants et solutions pour CraftMenu.

## Images Non Affichees

**Symptome :** Les images s'affichent comme "?" ou caracteres manquants.

**Solutions :**

1. **Regenerer le resource pack :**
   ```
   /cm zip
   ```

2. **Verifier l'emplacement des images :**
   - Les images doivent etre dans des sous-dossiers : `plugins/CraftMenu/images/dossier/image.png`
   - PAS a la racine : `plugins/CraftMenu/images/image.png`

3. **Verifier le format d'image :**
   - Seuls les fichiers PNG sont supportes
   - Assurez-vous de la bonne extension de fichier (`.png`, pas `.PNG`)

4. **Verifier que le resource pack est charge :**
   - Le resource pack serveur doit etre configure
   - Le joueur doit accepter le resource pack

5. **Recharger le plugin :**
   ```
   /cm reload
   ```

## Menu Ne S'ouvre Pas

**Symptome :** La commande `/cm open` ne fait rien.

**Solutions :**

1. **Verifier que le menu existe :**
   ```
   /cm list
   ```

2. **Verifier la console pour les erreurs** apres avoir execute la commande

3. **Verifier la syntaxe YAML :**
   - Utilisez un validateur YAML
   - Verifiez l'indentation incorrecte

4. **S'assurer que l'emplacement de spawn est valide :**
   - Le monde doit etre charge
   - L'emplacement doit etre accessible

## Collision Ne Fonctionne Pas

**Symptome :** Le curseur ne detecte pas les widgets.

**Solutions :**

1. **Activer les particules de debug :**
   ```
   /debugcollision toggle
   ```

2. **Verifier la config de collision :**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Augmenter la taille de la boite de collision** si elle est trop petite

4. **Verifier la position du widget** - la collision peut etre decalee

## Sons Ne Jouent Pas

**Symptome :** Les actions de son n'ont aucun effet.

**Solutions :**

1. **Pour les sons personnalises :**
   - Placez les fichiers `.ogg` dans `plugins/CraftMenu/sounds/dossier/`
   - Regenerez le resource pack : `/cm zip`

2. **Pour les sons Minecraft :**
   - Utilisez le bon format : `minecraft:ui.button.click`

3. **Verifier les parametres de volume** dans la config de l'action

## Problemes de Performance

**Symptome :** Lag lors de l'utilisation des menus.

**Solutions :**

1. **Optimiser les images :**
   ```
   /cm images scan
   /cm images fix --backup
   ```

2. **Reduire la frequence des animations** dans les menus complexes

3. **Desactiver le mode debug :**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Augmenter l'intervalle de mise a jour :**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin Ne Se Charge Pas

**Symptome :** Le plugin affiche des erreurs au demarrage.

**Solutions :**

1. **Verifier la version Java :**
   - Necessite Java 17 ou superieur

2. **Verifier les dependances :**
   - PacketEvents doit etre installe

3. **Verifier la version du serveur :**
   - Necessite Minecraft 1.20.4+

4. **Examiner les logs de demarrage** pour les erreurs specifiques

5. **Essayer la recuperation :**
   ```
   /cm recover
   ```

## Erreurs YAML

**Symptome :** Les erreurs mentionnent l'analyse YAML.

**Problemes Courants :**

1. **Indentation incorrecte :**
   ```yaml
   # Incorrect
   widgets:
   mon_widget:
     type: IMAGE

   # Correct
   widgets:
     mon_widget:
       type: IMAGE
   ```

2. **Guillemets manquants autour des valeurs speciales :**
   ```yaml
   # Incorrect - & a une signification speciale
   title: &bBonjour

   # Correct
   title: "&bBonjour"
   ```

3. **Format de liste incorrect :**
   ```yaml
   # Incorrect
   events:
     on_cursor_click:
       action: sound

   # Correct
   events:
     on_cursor_click:
       - action: sound
   ```

## Obtenir de l'Aide

Si vous avez toujours des problemes :

1. Activez le mode debug et verifiez la sortie de la console
2. Verifiez les issues GitHub pour les problemes connus
3. Creez une nouvelle issue avec :
   - Version du serveur
   - Version du plugin
   - Logs de la console
   - Fichiers de configuration (supprimez les donnees sensibles)

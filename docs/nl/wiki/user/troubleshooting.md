# Probleemoplossing

Veelvoorkomende problemen en oplossingen voor CraftMenu.

## Afbeeldingen Verschijnen Niet

**Symptoom:** Afbeeldingen worden weergegeven als "?" of ontbrekende karakters.

**Oplossingen:**

1. **Genereer resource pack opnieuw:**
   ```
   /cm zip
   ```

2. **Controleer afbeeldingslocatie:**
   - Afbeeldingen moeten in submappen staan: `plugins/CraftMenu/images/map/afbeelding.png`
   - NIET in de root: `plugins/CraftMenu/images/afbeelding.png`

3. **Controleer afbeeldingsformaat:**
   - Alleen PNG-bestanden worden ondersteund
   - Zorg voor correcte bestandsextensie (`.png`, niet `.PNG`)

4. **Controleer of resource pack is geladen:**
   - Server resource pack moet geconfigureerd zijn
   - Speler moet het resource pack accepteren

5. **Herlaad de plugin:**
   ```
   /cm reload
   ```

## Menu Opent Niet

**Symptoom:** `/cm open` commando doet niets.

**Oplossingen:**

1. **Controleer of menu bestaat:**
   ```
   /cm list
   ```

2. **Controleer console op fouten** na het uitvoeren van het commando

3. **Controleer YAML syntax:**
   - Gebruik een YAML validator
   - Controleer op incorrecte inspringing

4. **Zorg dat spawn locatie geldig is:**
   - Wereld moet geladen zijn
   - Locatie moet toegankelijk zijn

## Collision Werkt Niet

**Symptoom:** Cursor detecteert widgets niet.

**Oplossingen:**

1. **Schakel debug particles in:**
   ```
   /debugcollision toggle
   ```

2. **Controleer collision config:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Vergroot collision box grootte** als deze te klein is

4. **Controleer widget positie** - collision kan verschoven zijn

## Geluiden Spelen Niet

**Symptoom:** Sound acties hebben geen effect.

**Oplossingen:**

1. **Voor aangepaste geluiden:**
   - Plaats `.ogg` bestanden in `plugins/CraftMenu/sounds/map/`
   - Genereer resource pack opnieuw: `/cm zip`

2. **Voor Minecraft geluiden:**
   - Gebruik correct formaat: `minecraft:ui.button.click`

3. **Controleer volume instellingen** in actie config

## Prestatieproblemen

**Symptoom:** Lag bij gebruik van menu's.

**Oplossingen:**

1. **Optimaliseer afbeeldingen:**
   ```
   /cm images scan
   /cm images fix --backup
   ```

2. **Verminder animatiefrequentie** in complexe menu's

3. **Schakel debug mode uit:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Verhoog update interval:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin Laadt Niet

**Symptoom:** Plugin toont fouten bij opstarten.

**Oplossingen:**

1. **Controleer Java versie:**
   - Vereist Java 17 of hoger

2. **Controleer afhankelijkheden:**
   - PacketEvents moet geinstalleerd zijn

3. **Controleer server versie:**
   - Vereist Minecraft 1.20.4+

4. **Bekijk startup logs** voor specifieke fouten

5. **Probeer herstel:**
   ```
   /cm recover
   ```

## YAML Fouten

**Symptoom:** Fouten vermelden YAML parsing.

**Veelvoorkomende Problemen:**

1. **Incorrecte inspringing:**
   ```yaml
   # Fout
   widgets:
   mijn_widget:
     type: IMAGE

   # Correct
   widgets:
     mijn_widget:
       type: IMAGE
   ```

2. **Ontbrekende aanhalingstekens rond speciale waarden:**
   ```yaml
   # Fout - & heeft speciale betekenis
   title: &bHallo

   # Correct
   title: "&bHallo"
   ```

3. **Incorrect lijstformaat:**
   ```yaml
   # Fout
   events:
     on_cursor_click:
       action: sound

   # Correct
   events:
     on_cursor_click:
       - action: sound
   ```

## Hulp Krijgen

Als je nog steeds problemen hebt:

1. Schakel debug mode in en controleer console output
2. Bekijk de GitHub issues voor bekende problemen
3. Maak een nieuwe issue aan met:
   - Server versie
   - Plugin versie
   - Console logs
   - Configuratiebestanden (verwijder gevoelige data)

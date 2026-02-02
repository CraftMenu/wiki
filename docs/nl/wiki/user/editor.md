# In-Game Editor

CraftMenu bevat een krachtige visuele editor waarmee je menu's direct kunt configureren via een inventaris-GUI, zonder YAML-bestanden handmatig te bewerken.

## Aan de slag

### De Editor openen

```
/cm editor              # Open de hoofdhub van de editor
/cm editor <menu>       # Bewerk een specifiek menu direct
```

**Vereiste permissie:** `craftmenu.admin` of `craftmenu.edit`

### Editor-navigatie

De editor gebruikt een **stapelgebaseerd navigatiesysteem**:
- **Linksklik** op items om submenu's te openen of waarden te bewerken
- **Rechtsklik** voor secundaire acties (voorbeeld, test)
- **Shift + Linksklik** om items te verwijderen (met bevestiging)
- **Pijl-item** (terug-knop) om terug te keren naar het vorige menu
- **Inventaris sluiten** of buiten klikken om af te sluiten

---

## Editor Hoofdmenu

Wanneer je `/cm editor` uitvoert, zie je de hoofdhub van de editor met deze opties:

| Item | Beschrijving |
|------|--------------|
| **Menu Lijst** | Blader door en bewerk alle geladen menu's |
| **Afbeelding Browser** | Bekijk alle beschikbare afbeeldingen |
| **Geluid Browser** | Bekijk alle beschikbare geluiden |
| **Configuratie** | Globale plugin-configuratie |

---

## Menu Bewerken

### Menu Lijst

Toont alle menu's in je `menus/` map. Klik op een menu om de editor te openen.

- **Linksklik**: Menu bewerken
- **Shift + Linksklik**: Menu verwijderen (met bevestiging)
- **Nieuw maken**: Een nieuw menu toevoegen op je huidige locatie

### Menu Acties Hub

Na het selecteren van een menu zie je de hoofdmenu-editor met deze secties:

| Sectie | Beschrijving |
|--------|--------------|
| **Eigenschappen** | Basisinstellingen (naam, titel, hoofdmenu, auto-openen) |
| **Locatie** | Wereldpositie en rotatie |
| **Lay-out** | Rasterlay-out configuratie |
| **Sneltoetsen** | Toetsenbordsnelkoppelingen |
| **Zichtbaarheid** | Spelers/mobs/items verbergen instellingen |
| **Geavanceerd** | Cursor-gevoeligheid, cameravergrendeling, grenzen |
| **Widgets** | Widgets in dit menu bewerken |

---

## Menu Eigenschappen

Bewerk basis menu-informatie:

| Eigenschap | Beschrijving |
|------------|--------------|
| **Naam** | Menu-identificatie (gebruikt in commando's) |
| **Titel** | Weergavetitel (ondersteunt & kleurcodes) |
| **Beschrijving** | Optionele beschrijving |
| **Hoofdmenu** | Markeren als primair menu |
| **Openen bij deelname** | Automatisch openen wanneer speler de server joint |
| **Openen bij teleport** | Automatisch openen wanneer speler naar deze wereld teleporteert |
| **Wereld** | Wereld waar het menu bestaat |

### Tekstwaarden bewerken

Wanneer je op een teksteigenschap klikt:
1. De inventaris sluit
2. Een prompt verschijnt in de chat
3. Typ je nieuwe waarde in de chat
4. Druk op Enter om te bevestigen (of typ `cancel` om te annuleren)

---

## Menu Locatie

Configureer waar het menu in de wereld verschijnt:

| Eigenschap | Beschrijving |
|------------|--------------|
| **Wereld** | Selecteer uit beschikbare werelden |
| **X / Y / Z** | Coordinaten (klik om te bewerken via chat) |
| **Yaw** | Horizontale rotatie (-180 tot 180) |
| **Pitch** | Verticale rotatie (-90 tot 90) |
| **Instellen op huidig** | Gebruik je huidige positie/rotatie |

---

## Menu Lay-out (Raster)

Configureer rastergebaseerde widget-positionering:

| Eigenschap | Beschrijving |
|------------|--------------|
| **Ingeschakeld** | Rasterlay-out aan/uit schakelen |
| **Kolommen** | Aantal rasterkolommen |
| **Rijen** | Aantal rasterrijen |
| **Tussenruimte X / Y / Z** | Afstand tussen cellen |
| **Uitlijning** | Rasteruitlijning (CENTER, TOP_LEFT, etc.) |

Wanneer rasterlay-out is ingeschakeld, gebruiken widgets `grid-position: {row: X, col: Y}` in plaats van handmatige coordinaten.

---

## Menu Sneltoetsen

Configureer toetsenbordsnelkoppelingen:

| Actie | Beschrijving |
|-------|--------------|
| **Sneltoets toevoegen** | Maak een nieuwe toetsenbordsnelkoppeling |
| **Sneltoets bewerken** | Wijzig bestaande sneltoets |
| **Sneltoets verwijderen** | Verwijder een sneltoets |

### Sneltoets Eigenschappen

- **Toets**: De toets of combinatie (bijv. `SHIFT`, `CTRL+E`, `F`)
- **Actie**: `activate`, `toggle` of `close`
- **Widget**: Doel-widget naam (voor activate/toggle)

---

## Menu Zichtbaarheid

Beheer wat zichtbaar is terwijl het menu open is:

| Eigenschap | Beschrijving |
|------------|--------------|
| **Spelers verbergen** | Andere spelers uit zicht verbergen |
| **Mobs verbergen** | Alle mobs verbergen |
| **Items verbergen** | Items op de grond verbergen |
| **Whitelist** | Spelers die zichtbaar blijven (lijst bewerken) |

---

## Geavanceerde Instellingen

Verfijn menu-gedrag:

| Eigenschap | Beschrijving |
|------------|--------------|
| **Cursor-gevoeligheid** | Muisbewegingssnelheid (0.1 - 5.0) |
| **Max Yaw Offset** | Horizontale cursorgrens (graden) |
| **Max Pitch Offset** | Verticale cursorgrens (graden) |
| **Cameravergrendeling ingeschakeld** | Camera van speler vergrendelen terwijl menu open is |
| **Cameravergrendeling sterkte** | Hoe sterk de camera vergrendeld is (0.0 - 1.0) |
| **Grensgeluid** | Geluid wanneer cursor de grens raakt |
| **Grensvolume/Toonhoogte** | Geluidseigenschappen |
| **Grensbericht** | Bericht getoond aan de grens |

---

## Widget Bewerken

### Widget Lijst

Toont alle widgets in het huidige menu:

- **Linksklik**: Widget bewerken
- **Shift + Linksklik**: Widget verwijderen
- **Nieuw maken**: Een nieuwe widget toevoegen

### Widget Editor Hub

Elke widget heeft deze bewerkbare secties:

| Sectie | Beschrijving |
|--------|--------------|
| **Type** | IMAGE, TEXT of CURSOR |
| **Transformatie** | Positie, grootte, rotatie |
| **Visuele Staten** | Normal, hover, pressed, disabled uiterlijken |
| **Botsing** | Botsingsbox configuratie |
| **Gebeurtenissen** | Interactie-gebeurtenissen en acties |
| **[Type-specifiek]** | Extra opties gebaseerd op widget-type |

---

## Transformatie Editor

Configureer widget-positionering en -grootte:

### Positie
- **X**: Horizontale positie
- **Y**: Verticale positie
- **Z**: Dieptepositie

### Grootte
- **X**: Breedteschaal
- **Y**: Hoogteschaal
- **Z**: Diepteschaal

### Rotatie
- **Pitch**: Op/neer rotatie
- **Yaw**: Links/rechts rotatie
- **Roll**: Kanteling rotatie

**Tip**: Klik op een waarde om deze te bewerken via chat-invoer.

---

## Visuele Staten

Widgets kunnen verschillende uiterlijken hebben voor verschillende staten:

| Staat | Wanneer toegepast |
|-------|-------------------|
| **normal** | Standaardstaat |
| **hover** | Cursor is boven de widget |
| **pressed** | Widget wordt geklikt |
| **disabled** | Widget is inactief |
| **Aangepast** | Elke aangepaste staatsnaam |

### Visuele Staat Editor

Elke staat heeft:

| Eigenschap | Beschrijving |
|------------|--------------|
| **Type** | `image`, `text` of `unicode` |
| **Waarde** | Afbeeldingspad, tekstinhoud of unicode-teken |
| **Overschrijvingen** | Optionele transformatie/botsing/tekstgrootte overschrijvingen |

---

## Botsing Editor

Configureer het klikbare gebied van de widget:

| Eigenschap | Beschrijving |
|------------|--------------|
| **Ingeschakeld** | Botsingsdetectie schakelen |
| **Positie X/Y/Z** | Botsingsbox centrum-offset |
| **Grootte X/Y/Z** | Botsingsbox afmetingen |
| **Offset X/Y/Z** | Extra offset |

**Tip**: Gebruik `/cm debug particles` om botsingsboxen in-game te visualiseren.

---

## Gebeurtenissen Editor

### Gebeurtenistypen

| Gebeurtenis | Trigger |
|-------------|---------|
| **on_menu_open** | Wanneer het menu opent |
| **on_cursor_hover** | Wanneer cursor de widget betreedt |
| **on_cursor_hover_exit** | Wanneer cursor de widget verlaat |
| **on_cursor_click** | Wanneer de widget wordt geklikt |

### Actielijst

Elke gebeurtenis bevat een lijst met acties die in volgorde worden uitgevoerd:

- **Linksklik**: Actie bewerken
- **Shift + Linksklik**: Actie verwijderen
- **Actie toevoegen**: Nieuwe actie maken
- **Herschikken**: Sleep om uitvoeringsvolgorde te wijzigen

---

## Actie Editors

Elk actietype heeft een gespecialiseerde editor:

### Animatie Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Effect** | Animatietype (rotate, scale, bounce, etc.) |
| **Duur** | Animatielengte in milliseconden |
| **Schaal X/Y/Z** | Schaalmultiplicatoren (voor schaalanimaties) |
| **Intensiteit** | Effectsterkte (0.1 - 5.0) |
| **Easing** | Timing-functie (linear, ease_in, ease_out, etc.) |
| **Prioriteit** | Interacties blokkeren tijdens animatie |

### Geluid Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Bestand** | Geluidspad (minecraft:... of aangepast pad) |
| **Volume** | Geluidsvolume (0.0 - 1.0) |
| **Toonhoogte** | Geluidstoonhoogte (0.5 - 2.0) |

**Bladeren**: Klik om de geluidsbrowser te openen en een geluid te selecteren.

### Commando Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Commando** | Uit te voeren commando (met speciale commando's) |
| **Vertraging** | Vertraging in milliseconden voor uitvoering |

**Speciale Commando's:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aJe bericht hier`
- `[CLOSE]`
- `[PLAY_MUSIC] pad/bestand.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /commando`
- `[CONSOLE] /commando`

### Staat Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Actietype** | `toggle_state` of `set_state` |
| **Staten** | Lijst met staten om tussen te schakelen (toggle_state) |
| **Staat** | Doel-staatsnaam (set_state) |

### Visuele Wijziging Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Naar** | Doel visuele staatsnaam |

### Widget Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Actie** | `hide_widget`, `show_widget`, etc. |
| **Widget** | Doel-widget naam |

### Effect Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Effect** | Toe te passen effecttype |
| **Parameters** | Effect-specifieke parameters |

### Stop Animatie Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Animatietype** | Welke animatie te stoppen |

### Stop Effect Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Effecttype** | Welk effect te stoppen |

### Stel Basisstaat In Actie

| Eigenschap | Beschrijving |
|------------|--------------|
| **Staat** | Nieuwe basisstaat voor de widget |

---

## Asset Browsers

### Afbeelding Browser

Blader door alle afbeeldingen in je `images/` map:

- **Paginering**: Navigeer door pagina's met afbeeldingen
- **Voorbeeld**: Bekijk afbeeldingspad en details
- **Selecteer**: Klik om te gebruiken in huidige context

Afbeeldingen zijn georganiseerd per map (bijv. `template/button.png`).

### Geluid Browser

Blader door alle geluiden in je `sounds/` map plus Minecraft ingebouwde geluiden:

- **Aangepaste geluiden**: Je .ogg-bestanden uit `sounds/`
- **Minecraft geluiden**: Ingebouwde geluiden (minecraft:ui.button.click, etc.)
- **Selecteer**: Klik om te gebruiken in huidige context

---

## Tips & Best Practices

### Workflow Tips

1. **Begin met eigenschappen**: Stel eerst naam, titel en locatie in
2. **Voeg widgets toe**: Maak je widgets met basistransformaties
3. **Configureer visuele**: Stel normal en hover staten in
4. **Voeg botsing toe**: Schakel botsingsboxen in en dimensioneer ze
5. **Voeg gebeurtenissen toe**: Configureer hover-geluiden en klikacties
6. **Test regelmatig**: Gebruik `/cm openen <menu>` om wijzigingen te testen

### Toetsenbordsnelkoppelingen

| Sneltoets | Actie |
|-----------|-------|
| **Escape** | Editor sluiten |
| **Cijfertoetsen (1-9)** | Snelle slot-selectie |

### Veelvoorkomende Problemen

**Wijzigingen verschijnen niet:**
- Voer `/cm herladen` uit na wijzigingen
- Zorg ervoor dat je "Opslaan" hebt geklikt in de editor

**Botsing detecteert niet:**
- Controleer of botsing is ingeschakeld
- Verifieer dat botsingsgrootte groot genoeg is
- Gebruik `/cm debug particles` om te visualiseren

**Afbeeldingen worden niet getoond:**
- Voer `/cm pakket` uit om resourcepack opnieuw te genereren
- Zorg ervoor dat afbeelding in een submap staat (bijv. `images/mijnmenu/`)
- Pas resourcepack toe op client

---

## Zie ook

- [Commando Referentie](commands.md)
- [Menu's maken](menu-creation.md)
- [Widget Types](widgets.md)
- [Gebeurtenissysteem](events.md)
- [Animaties](animations.md)

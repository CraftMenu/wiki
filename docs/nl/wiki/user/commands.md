# Commando Referentie

CraftMenu biedt een uitgebreide set commando's voor het beheren van menu's.

## Basiscommando

Alle commando's gebruiken `/craftmenu` (alias: `/cm`).

## Algemene Commando's

### Hulp
```
/cm hulp [commando]
```
Toont helpinformatie voor alle commando's of een specifiek commando.

### Menu's Weergeven
```
/cm lijst
```
Geeft een lijst van alle geladen menu templates.

### Plugin Info
```
/cm info
```
Toont plugin versie en statistieken.

## Menu Commando's

### Menu Openen
```
/cm open <menu_naam> [speler]
```
Opent een menu voor jezelf of een andere speler.

**Voorbeelden:**
- `/cm open template` - Open template menu voor jezelf
- `/cm open lobby Steve` - Open lobby menu voor speler Steve

### Menu Sluiten
```
/cm sluit [speler]
```
Sluit het actieve menu voor jezelf of een andere speler.

### Menu Maken
```
/cm maak <menu_naam>
```
Maakt een nieuw menu template op je huidige locatie.

### Menu Verwijderen
```
/cm verwijder <menu_naam>
```
Verwijdert een menu template.

## Resource Pack Commando's

### Resource Pack Genereren
```
/cm pakket
```
Genereert het resource pack van afbeeldingen en geluiden in de CraftMenu map.

### Afbeelding Commando's
```
/cm afbeeldingen scan
/cm afbeeldingen repareer [--backup]
/cm afbeeldingen formaat <afbeelding_pad> <doelgrootte>
/cm afbeeldingen backup
/cm afbeeldingen herstel <backup_naam>
/cm afbeeldingen lijst
/cm afbeeldingen backups
```
- `scan` - Scant op te grote afbeeldingen
- `repareer` - Optimaliseert te grote afbeeldingen automatisch
- `formaat` - Verkleint een specifieke afbeelding naar doelgrootte (16-4096 pixels)
- `backup` - Maakt een backup van afbeeldingen
- `herstel` - Herstelt afbeeldingen van een backup
- `lijst` - Geeft alle afbeeldingen in de images map weer
- `backups` - Geeft alle beschikbare backups weer

## Configuratie Commando's

### Herladen
```
/cm herlaad
```
Herlaadt alle configuraties en menu templates.

### Taal
```
/cm taal <taal>
/cm taal lijst
```
- `/cm taal <taal>` - Wijzigt de plugin taal direct (geen "set" nodig)
- `/cm taal lijst` - Toont alle beschikbare talen

Beschikbare talen:
- `en_US` - Engels
- `pt_BR` - Portugees (Brazilie)
- `es_ES` - Spaans
- `fr_FR` - Frans
- `de_DE` - Duits
- `it_IT` - Italiaans
- `nl_NL` - Nederlands
- `ru_RU` - Russisch
- `pl_PL` - Pools
- `tr_TR` - Turks
- `uk_UA` - Oekraiens
- `ar_SA` - Arabisch
- `ja_JP` - Japans
- `ko_KR` - Koreaans
- `zh_CN` - Chinees (Vereenvoudigd)
- `hi_IN` - Hindi
- `id_ID` - Indonesisch
- `th_TH` - Thai
- `vi_VN` - Vietnamees

## Debug Commando's

### Debug Deeltjes
```
/cm debug deeltjes
/cm debug deeltjes grootte <waarde>
```
- `/cm debug deeltjes` - Schakelt ALLE debug particles in/uit (collision boxes + cursor trail + widget centers)
- `/cm debug deeltjes grootte <waarde>` - Stelt de particle grootte in (0.001 tot 2.0)

### Debug Raster
```
/cm debug raster
/cm debug raster nummers
```
- `/cm debug raster` - Schakelt grid visualisatie in/uit
- `/cm debug raster nummers` - Schakelt grid celnummers in/uit

### Gezondheidscontrole
```
/cm gezondheid
```
Toont component health status.

### Herstel
```
/cm herstel
```
Probeert te herstellen van fouten.

## Editor Commando

Opent de visuele in-game editor voor menu's en widgets.

### Open Editor
```
/cm editor
/cm editor <menu_naam>
```
- `/cm editor` - Opent de editor hub
- `/cm editor <menu_naam>` - Opent de editor voor een specifiek menu

**Vereiste Permissie:** `craftmenu.admin`

## Permissies

| Permissie | Beschrijving |
|-----------|--------------|
| `craftmenu.use` | Basisgebruik (menu's openen) |
| `craftmenu.admin` | Admin commando's |
| `craftmenu.open` | Menu's openen |
| `craftmenu.create` | Menu's maken |
| `craftmenu.reload` | Plugin herladen |
| `craftmenu.debug` | Debug commando's |

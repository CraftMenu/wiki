# Riferimento Comandi

CraftMenu fornisce un set completo di comandi per la gestione dei menu.

## Comando Base

Tutti i comandi usano `/craftmenu` (alias: `/cm`).

## Comandi Generali

### Aiuto
```
/cm aiuto [comando]
```
Mostra informazioni di aiuto per tutti i comandi o per un comando specifico.

### Lista Menu
```
/cm lista
```
Elenca tutti i template di menu caricati.

### Info Plugin
```
/cm info
```
Mostra la versione del plugin e le statistiche.

## Comandi Menu

### Apri Menu
```
/cm apri <nome_menu> [giocatore]
```
Apre un menu per te stesso o per un altro giocatore.

**Esempi:**
- `/cm apri template` - Apre il menu template per te stesso
- `/cm apri lobby Steve` - Apre il menu lobby per il giocatore Steve

### Chiudi Menu
```
/cm chiudi [giocatore]
```
Chiude il menu attivo per te stesso o per un altro giocatore.

### Crea Menu
```
/cm crea <nome_menu>
```
Crea un nuovo template di menu alla tua posizione attuale.

### Elimina Menu
```
/cm elimina <nome_menu>
```
Elimina un template di menu.

## Comandi Resource Pack

### Genera Resource Pack
```
/cm pacchetto
```
Genera il resource pack dalle immagini e dai suoni nella cartella CraftMenu.

### Comandi Immagini
```
/cm immagini scansiona
/cm immagini ripara [--backup]
/cm immagini ridimensiona <percorso_immagine> <dimensione_target>
/cm immagini backup
/cm immagini ripristina <nome_backup>
/cm immagini lista
/cm immagini backups
```
- `scansiona` - Scansiona le immagini sovradimensionate
- `ripara` - Ottimizza automaticamente le immagini sovradimensionate
- `ridimensiona` - Ridimensiona un'immagine specifica alla dimensione target (16-4096 pixel)
- `backup` - Crea un backup delle immagini
- `ripristina` - Ripristina le immagini da un backup
- `lista` - Elenca tutte le immagini nella cartella images
- `backups` - Elenca tutti i backup disponibili

## Comandi di Configurazione

### Ricarica
```
/cm ricarica
```
Ricarica tutte le configurazioni e i template dei menu.

### Lingua
```
/cm lingua <lang>
/cm lingua lista
```
- `/cm lingua <lang>` - Cambia la lingua del plugin direttamente (senza "set")
- `/cm lingua lista` - Mostra tutte le lingue disponibili

Lingue disponibili:
- `en_US` - Inglese
- `pt_BR` - Portoghese (Brasile)
- `es_ES` - Spagnolo
- `fr_FR` - Francese
- `de_DE` - Tedesco
- `it_IT` - Italiano
- `nl_NL` - Olandese
- `ru_RU` - Russo
- `pl_PL` - Polacco
- `tr_TR` - Turco
- `uk_UA` - Ucraino
- `ar_SA` - Arabo
- `ja_JP` - Giapponese
- `ko_KR` - Coreano
- `zh_CN` - Cinese (Semplificato)
- `hi_IN` - Hindi
- `id_ID` - Indonesiano
- `th_TH` - Tailandese
- `vi_VN` - Vietnamita

## Comandi Debug

### Debug Particelle
```
/cm debug particelle
/cm debug particelle dimensione <valore>
```
- `/cm debug particelle` - Attiva/disattiva TUTTE le particelle di debug (collision box, cursor trail, centri widget)
- `/cm debug particelle dimensione <valore>` - Imposta la dimensione delle particelle (da 0.001 a 2.0)

### Debug Griglia
```
/cm debug griglia
/cm debug griglia numeri
```
- `/cm debug griglia` - Attiva/disattiva la visualizzazione della griglia
- `/cm debug griglia numeri` - Attiva/disattiva i numeri delle celle

### Controllo Salute
```
/cm salute
```
Mostra lo stato di salute dei componenti.

### Recupera
```
/cm recupera
```
Tenta di recuperare dagli errori.

## Comando Editor

Apre l'editor visuale in-game per menu e widget.

### Apri Editor
```
/cm editor
/cm editor <nome_menu>
```
- `/cm editor` - Apre l'hub dell'editor
- `/cm editor <nome_menu>` - Apre l'editor per un menu specifico

**Permesso Richiesto:** `craftmenu.admin`

## Permessi

| Permesso | Descrizione |
|----------|-------------|
| `craftmenu.use` | Uso base (apri menu) |
| `craftmenu.admin` | Comandi admin |
| `craftmenu.open` | Apri menu |
| `craftmenu.create` | Crea menu |
| `craftmenu.reload` | Ricarica plugin |
| `craftmenu.debug` | Comandi debug |

# Editor In-Game

CraftMenu include un potente editor visuale che ti permette di configurare i menu direttamente tramite un'interfaccia di inventario, senza modificare manualmente i file YAML.

## Per Iniziare

### Aprire l'Editor

```
/cm editor              # Apri l'hub principale dell'editor
/cm editor <menu>       # Modifica un menu specifico direttamente
```

**Permesso Richiesto:** `craftmenu.admin` o `craftmenu.edit`

### Navigazione dell'Editor

L'editor utilizza un sistema di **navigazione basato su stack**:
- **Clic sinistro** sugli elementi per entrare nei sottomenu o modificare valori
- **Clic destro** per azioni secondarie (anteprima, test)
- **Shift + Clic sinistro** per eliminare elementi (con conferma)
- **Elemento freccia** (pulsante indietro) per tornare al menu precedente
- **Chiudi inventario** o clicca fuori per uscire

---

## Menu Principale dell'Editor

Quando esegui `/cm editor`, vedrai l'hub principale dell'editor con queste opzioni:

| Elemento | Descrizione |
|----------|-------------|
| **Lista Menu** | Sfoglia e modifica tutti i menu caricati |
| **Browser Immagini** | Visualizza tutte le immagini disponibili |
| **Browser Suoni** | Visualizza tutti i suoni disponibili |
| **Configurazione** | Configurazione globale del plugin |

---

## Modifica Menu

### Lista Menu

Mostra tutti i menu nella tua cartella `menus/`. Clicca su un menu per aprire il suo editor.

- **Clic sinistro**: Modifica menu
- **Shift + Clic sinistro**: Elimina menu (con conferma)
- **Crea Nuovo**: Aggiungi un nuovo menu nella tua posizione attuale

### Hub Azioni Menu

Dopo aver selezionato un menu, vedrai l'editor principale del menu con queste sezioni:

| Sezione | Descrizione |
|---------|-------------|
| **Proprieta** | Impostazioni base (nome, titolo, menu principale, apertura auto) |
| **Posizione** | Posizione e rotazione nel mondo |
| **Layout** | Configurazione della griglia |
| **Scorciatoie** | Scorciatoie da tastiera |
| **Visibilita** | Impostazioni per nascondere giocatori/mob/oggetti |
| **Avanzate** | Sensibilita cursore, blocco camera, confini |
| **Widget** | Modifica i widget in questo menu |

---

## Proprieta del Menu

Modifica le informazioni base del menu:

| Proprieta | Descrizione |
|-----------|-------------|
| **Nome** | Identificatore del menu (usato nei comandi) |
| **Titolo** | Titolo visualizzato (supporta codici colore &) |
| **Descrizione** | Descrizione opzionale |
| **Menu Principale** | Segna come menu primario |
| **Apri all'Accesso** | Apri automaticamente quando il giocatore entra nel server |
| **Apri al Teletrasporto** | Apri automaticamente quando il giocatore si teletrasporta in questo mondo |
| **Mondo** | Mondo dove esiste il menu |

### Modifica Valori Testo

Quando clicchi su una proprieta testo:
1. L'inventario si chiude
2. Appare un messaggio nella chat
3. Scrivi il nuovo valore nella chat
4. Premi Invio per confermare (o scrivi `cancel` per annullare)

---

## Posizione del Menu

Configura dove appare il menu nel mondo:

| Proprieta | Descrizione |
|-----------|-------------|
| **Mondo** | Seleziona dai mondi disponibili |
| **X / Y / Z** | Coordinate (clicca per modificare via chat) |
| **Yaw** | Rotazione orizzontale (-180 a 180) |
| **Pitch** | Rotazione verticale (-90 a 90) |
| **Imposta Attuale** | Usa la tua posizione/rotazione attuale |

---

## Layout Menu (Griglia)

Configura il posizionamento dei widget basato su griglia:

| Proprieta | Descrizione |
|-----------|-------------|
| **Abilitato** | Attiva/disattiva layout a griglia |
| **Colonne** | Numero di colonne della griglia |
| **Righe** | Numero di righe della griglia |
| **Spaziatura X / Y / Z** | Spazio tra le celle |
| **Allineamento** | Allineamento della griglia (CENTER, TOP_LEFT, etc.) |

Quando il layout a griglia e abilitato, i widget usano `grid-position: {row: X, col: Y}` invece di coordinate manuali.

---

## Scorciatoie Menu

Configura le scorciatoie da tastiera:

| Azione | Descrizione |
|--------|-------------|
| **Aggiungi Scorciatoia** | Crea una nuova scorciatoia da tastiera |
| **Modifica Scorciatoia** | Modifica scorciatoia esistente |
| **Elimina Scorciatoia** | Rimuovi una scorciatoia |

### Proprieta Scorciatoia

- **Tasto**: Il tasto o combinazione (es., `SHIFT`, `CTRL+E`, `F`)
- **Azione**: `activate`, `toggle`, o `close`
- **Widget**: Nome del widget target (per activate/toggle)

---

## Visibilita Menu

Controlla cosa e visibile mentre il menu e aperto:

| Proprieta | Descrizione |
|-----------|-------------|
| **Nascondi Giocatori** | Nasconde altri giocatori dalla vista |
| **Nascondi Mob** | Nasconde tutti i mob |
| **Nascondi Oggetti** | Nasconde oggetti a terra |
| **Whitelist** | Giocatori che rimangono visibili (modifica lista) |

---

## Impostazioni Avanzate

Regola finemente il comportamento del menu:

| Proprieta | Descrizione |
|-----------|-------------|
| **Sensibilita Cursore** | Velocita di movimento del mouse (0.1 - 5.0) |
| **Offset Yaw Max** | Limite orizzontale del cursore (gradi) |
| **Offset Pitch Max** | Limite verticale del cursore (gradi) |
| **Blocco Camera Abilitato** | Blocca la camera del giocatore mentre il menu e aperto |
| **Forza Blocco Camera** | Quanto forte e il blocco della camera (0.0 - 1.0) |
| **Suono Confine** | Suono quando il cursore raggiunge il confine |
| **Volume/Pitch Confine** | Proprieta del suono |
| **Messaggio Confine** | Messaggio mostrato al confine |

---

## Modifica Widget

### Lista Widget

Mostra tutti i widget nel menu attuale:

- **Clic sinistro**: Modifica widget
- **Shift + Clic sinistro**: Elimina widget
- **Crea Nuovo**: Aggiungi un nuovo widget

### Hub Editor Widget

Ogni widget ha queste sezioni modificabili:

| Sezione | Descrizione |
|---------|-------------|
| **Tipo** | IMAGE, TEXT, o CURSOR |
| **Trasformazione** | Posizione, dimensione, rotazione |
| **Stati Visivi** | Aspetto normale, hover, premuto, disabilitato |
| **Collisione** | Configurazione box di collisione |
| **Eventi** | Eventi di interazione e azioni |
| **[Specifico del Tipo]** | Opzioni aggiuntive basate sul tipo di widget |

---

## Editor Trasformazione

Configura posizionamento e dimensionamento del widget:

### Posizione
- **X**: Posizione orizzontale
- **Y**: Posizione verticale
- **Z**: Posizione di profondita

### Dimensione
- **X**: Scala larghezza
- **Y**: Scala altezza
- **Z**: Scala profondita

### Rotazione
- **Pitch**: Rotazione su/giu
- **Yaw**: Rotazione sinistra/destra
- **Roll**: Rotazione di inclinazione

**Suggerimento**: Clicca su qualsiasi valore per modificarlo via chat.

---

## Stati Visivi

I widget possono avere aspetti diversi per stati diversi:

| Stato | Quando Applicato |
|-------|------------------|
| **normal** | Stato predefinito |
| **hover** | Il cursore e sopra il widget |
| **pressed** | Il widget sta venendo cliccato |
| **disabled** | Il widget e inattivo |
| **Personalizzato** | Qualsiasi nome di stato personalizzato |

### Editor Stato Visivo

Ogni stato ha:

| Proprieta | Descrizione |
|-----------|-------------|
| **Tipo** | `image`, `text`, o `unicode` |
| **Valore** | Percorso immagine, contenuto testo, o carattere unicode |
| **Override** | Override opzionali di trasformazione/collisione/dimensione-testo |

---

## Editor Collisione

Configura l'area cliccabile del widget:

| Proprieta | Descrizione |
|-----------|-------------|
| **Abilitato** | Attiva/disattiva rilevamento collisione |
| **Posizione X/Y/Z** | Offset del centro del box di collisione |
| **Dimensione X/Y/Z** | Dimensioni del box di collisione |
| **Offset X/Y/Z** | Offset aggiuntivo |

**Suggerimento**: Usa `/cm debug particles` per visualizzare i box di collisione in gioco.

---

## Editor Eventi

### Tipi di Eventi

| Evento | Trigger |
|--------|---------|
| **on_menu_open** | Quando il menu si apre |
| **on_cursor_hover** | Quando il cursore entra nel widget |
| **on_cursor_hover_exit** | Quando il cursore esce dal widget |
| **on_cursor_click** | Quando il widget viene cliccato |

### Lista Azioni

Ogni evento contiene una lista di azioni che vengono eseguite in ordine:

- **Clic sinistro**: Modifica azione
- **Shift + Clic sinistro**: Elimina azione
- **Aggiungi Azione**: Crea nuova azione
- **Riordina**: Trascina per cambiare l'ordine di esecuzione

---

## Editor Azioni

Ogni tipo di azione ha un editor specializzato:

### Azione Animazione

| Proprieta | Descrizione |
|-----------|-------------|
| **Effetto** | Tipo di animazione (rotate, scale, bounce, etc.) |
| **Durata** | Lunghezza animazione in millisecondi |
| **Scala X/Y/Z** | Moltiplicatori di scala (per animazioni di scala) |
| **Intensita** | Forza dell'effetto (0.1 - 5.0) |
| **Easing** | Funzione di timing (linear, ease_in, ease_out, etc.) |
| **Priorita** | Blocca interazioni durante l'animazione |

### Azione Suono

| Proprieta | Descrizione |
|-----------|-------------|
| **File** | Percorso del suono (minecraft:... o percorso personalizzato) |
| **Volume** | Volume del suono (0.0 - 1.0) |
| **Pitch** | Pitch del suono (0.5 - 2.0) |

**Sfoglia**: Clicca per aprire il browser dei suoni e selezionare un suono.

### Azione Comando

| Proprieta | Descrizione |
|-----------|-------------|
| **Comando** | Comando da eseguire (con comandi speciali) |
| **Ritardo** | Ritardo in millisecondi prima dell'esecuzione |

**Comandi Speciali:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aIl tuo messaggio qui`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /comando`
- `[CONSOLE] /comando`

### Azione Stato

| Proprieta | Descrizione |
|-----------|-------------|
| **Tipo Azione** | `toggle_state` o `set_state` |
| **Stati** | Lista di stati tra cui alternare (toggle_state) |
| **Stato** | Nome dello stato target (set_state) |

### Azione Cambio Visivo

| Proprieta | Descrizione |
|-----------|-------------|
| **A** | Nome dello stato visivo target |

### Azione Widget

| Proprieta | Descrizione |
|-----------|-------------|
| **Azione** | `hide_widget`, `show_widget`, etc. |
| **Widget** | Nome del widget target |

### Azione Effetto

| Proprieta | Descrizione |
|-----------|-------------|
| **Effetto** | Tipo di effetto da applicare |
| **Parametri** | Parametri specifici dell'effetto |

### Azione Ferma Animazione

| Proprieta | Descrizione |
|-----------|-------------|
| **Tipo Animazione** | Quale animazione fermare |

### Azione Ferma Effetto

| Proprieta | Descrizione |
|-----------|-------------|
| **Tipo Effetto** | Quale effetto fermare |

### Azione Imposta Stato Base

| Proprieta | Descrizione |
|-----------|-------------|
| **Stato** | Nuovo stato base per il widget |

---

## Browser Asset

### Browser Immagini

Sfoglia tutte le immagini nella tua cartella `images/`:

- **Paginazione**: Naviga attraverso le pagine di immagini
- **Anteprima**: Vedi percorso immagine e dettagli
- **Seleziona**: Clicca per usare nel contesto attuale

Le immagini sono organizzate per cartella (es., `template/button.png`).

### Browser Suoni

Sfoglia tutti i suoni nella tua cartella `sounds/` piu i suoni integrati di Minecraft:

- **Suoni Personalizzati**: I tuoi file .ogg da `sounds/`
- **Suoni Minecraft**: Suoni integrati (minecraft:ui.button.click, etc.)
- **Seleziona**: Clicca per usare nel contesto attuale

---

## Suggerimenti e Migliori Pratiche

### Suggerimenti per il Workflow

1. **Inizia con le Proprieta**: Configura nome, titolo e posizione prima
2. **Aggiungi Widget**: Crea i tuoi widget con trasformazioni base
3. **Configura i Visivi**: Imposta gli stati normale e hover
4. **Aggiungi Collisione**: Abilita e dimensiona i box di collisione
5. **Aggiungi Eventi**: Configura suoni hover e azioni click
6. **Testa Frequentemente**: Usa `/cm aprire <menu>` per testare i cambiamenti

### Scorciatoie da Tastiera

| Scorciatoia | Azione |
|-------------|--------|
| **Escape** | Chiudi editor |
| **Tasti numerici (1-9)** | Selezione rapida slot |

### Problemi Comuni

**I cambiamenti non appaiono:**
- Esegui `/cm ricarica` dopo aver fatto modifiche
- Assicurati di aver cliccato "Salva" nell'editor

**La collisione non rileva:**
- Verifica che la collisione sia abilitata
- Verifica che la dimensione della collisione sia abbastanza grande
- Usa `/cm debug particles` per visualizzare

**Le immagini non appaiono:**
- Esegui `/cm pacchetto` per rigenerare il resource pack
- Assicurati che l'immagine sia in una sottocartella (es., `images/miomenu/`)
- Applica il resource pack al client

---

## Vedi Anche

- [Riferimento Comandi](commands.md)
- [Creazione Menu](menu-creation.md)
- [Tipi di Widget](widgets.md)
- [Sistema Eventi](events.md)
- [Animazioni](animations.md)

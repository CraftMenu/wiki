# Risoluzione Problemi

Problemi comuni e soluzioni per CraftMenu.

## Le Immagini Non Appaiono

**Sintomo:** Le immagini mostrano "?" o caratteri mancanti.

**Soluzioni:**

1. **Rigenera il resource pack:**
   ```
   /cm pacchetto
   ```

2. **Controlla la posizione dell'immagine:**
   - Le immagini devono essere in sottocartelle: `plugins/CraftMenu/images/cartella/immagine.png`
   - NON nella root: `plugins/CraftMenu/images/immagine.png`

3. **Verifica il formato immagine:**
   - Solo file PNG sono supportati
   - Assicurati che l'estensione sia corretta (`.png`, non `.PNG`)

4. **Controlla che il resource pack sia caricato:**
   - Il resource pack del server deve essere configurato
   - Il giocatore deve accettare il resource pack

5. **Ricarica il plugin:**
   ```
   /cm ricarica
   ```

## Il Menu Non Si Apre

**Sintomo:** Il comando `/cm apri` non fa nulla.

**Soluzioni:**

1. **Controlla che il menu esista:**
   ```
   /cm lista
   ```

2. **Controlla la console per errori** dopo aver eseguito il comando

3. **Verifica la sintassi YAML:**
   - Usa un validatore YAML
   - Controlla l'indentazione corretta

4. **Assicurati che la posizione spawn sia valida:**
   - Il mondo deve essere caricato
   - La posizione deve essere accessibile

## La Collisione Non Funziona

**Sintomo:** Il cursore non rileva i widget.

**Soluzioni:**

1. **Abilita le particelle debug:**
   ```
   /debugcollision toggle
   ```

2. **Controlla la configurazione collision:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Aumenta la dimensione della collision box** se e troppo piccola

4. **Controlla la posizione del widget** - la collision potrebbe essere spostata

## I Suoni Non Vengono Riprodotti

**Sintomo:** Le azioni suono non hanno effetto.

**Soluzioni:**

1. **Per suoni personalizzati:**
   - Posiziona i file `.ogg` in `plugins/CraftMenu/sounds/cartella/`
   - Rigenera il resource pack: `/cm pacchetto`

2. **Per suoni Minecraft:**
   - Usa il formato corretto: `minecraft:ui.button.click`

3. **Controlla le impostazioni volume** nella configurazione dell'azione

## Problemi di Performance

**Sintomo:** Lag durante l'uso dei menu.

**Soluzioni:**

1. **Ottimizza le immagini:**
   ```
   /cm immagini scan
   /cm immagini fix --backup
   ```

2. **Riduci la frequenza delle animazioni** nei menu complessi

3. **Disabilita la modalita debug:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Aumenta l'intervallo di aggiornamento:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Il Plugin Non Si Carica

**Sintomo:** Il plugin mostra errori all'avvio.

**Soluzioni:**

1. **Controlla la versione Java:**
   - Richiede Java 17 o superiore

2. **Verifica le dipendenze:**
   - PacketEvents deve essere installato

3. **Controlla la versione del server:**
   - Richiede Minecraft 1.20.4+

4. **Controlla i log di avvio** per errori specifici

5. **Prova il recupero:**
   ```
   /cm recupera
   ```

## Errori YAML

**Sintomo:** Gli errori menzionano il parsing YAML.

**Problemi Comuni:**

1. **Indentazione incorretta:**
   ```yaml
   # Sbagliato
   widgets:
   mio_widget:
     type: IMAGE

   # Corretto
   widgets:
     mio_widget:
       type: IMAGE
   ```

2. **Virgolette mancanti intorno a valori speciali:**
   ```yaml
   # Sbagliato - & ha significato speciale
   title: &bCiao

   # Corretto
   title: "&bCiao"
   ```

3. **Formato lista incorretto:**
   ```yaml
   # Sbagliato
   events:
     on_cursor_click:
       action: sound

   # Corretto
   events:
     on_cursor_click:
       - action: sound
   ```

## Ottenere Aiuto

Se hai ancora problemi:

1. Abilita la modalita debug e controlla l'output della console
2. Controlla le issue su GitHub per problemi noti
3. Crea una nuova issue con:
   - Versione server
   - Versione plugin
   - Log della console
   - File di configurazione (rimuovi dati sensibili)

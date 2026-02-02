# Rozwiazywanie problemow

Typowe problemy i rozwiazania dla CraftMenu.

## Obrazy sie nie wyswietlaja

**Objaw:** Obrazy pokazuja sie jako "?" lub brakujace znaki.

**Rozwiazania:**

1. **Zregeneruj resource pack:**
   ```
   /cm zip
   ```

2. **Sprawdz lokalizacje obrazu:**
   - Obrazy musza byc w podfolderach: `plugins/CraftMenu/images/folder/obraz.png`
   - NIE w katalogu glownym: `plugins/CraftMenu/images/obraz.png`

3. **Zweryfikuj format obrazu:**
   - Tylko pliki PNG sa obslugiwane
   - Upewnij sie, ze rozszerzenie jest poprawne (`.png`, nie `.PNG`)

4. **Sprawdz czy resource pack jest zaladowany:**
   - Serwerowy resource pack musi byc skonfigurowany
   - Gracz musi zaakceptowac resource pack

5. **Przeladuj plugin:**
   ```
   /cm reload
   ```

## Menu sie nie otwiera

**Objaw:** Komenda `/cm open` nic nie robi.

**Rozwiazania:**

1. **Sprawdz czy menu istnieje:**
   ```
   /cm list
   ```

2. **Sprawdz konsole w poszukiwaniu bledow** po uruchomieniu komendy

3. **Zweryfikuj skladnie YAML:**
   - Uzyj walidatora YAML
   - Sprawdz niepoprawne wciecia

4. **Upewnij sie, ze lokalizacja spawn jest poprawna:**
   - Swiat musi byc zaladowany
   - Lokalizacja musi byc dostepna

## Kolizja nie dziala

**Objaw:** Kursor nie wykrywa widgetow.

**Rozwiazania:**

1. **Wlacz czasteczki debugowania:**
   ```
   /debugcollision toggle
   ```

2. **Sprawdz konfiguracje kolizji:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Zwieksz rozmiar pudelka kolizji** jesli jest za maly

4. **Sprawdz pozycje widgeta** - kolizja moze byc przesunieta

## Dzwieki sie nie odtwarzaja

**Objaw:** Akcje dzwiekowe nie maja efektu.

**Rozwiazania:**

1. **Dla niestandardowych dzwiekow:**
   - Umiesc pliki `.ogg` w `plugins/CraftMenu/sounds/folder/`
   - Zregeneruj resource pack: `/cm zip`

2. **Dla dzwiekow Minecraft:**
   - Uzyj poprawnego formatu: `minecraft:ui.button.click`

3. **Sprawdz ustawienia glosnosci** w konfiguracji akcji

## Problemy z wydajnoscia

**Objaw:** Lag podczas uzywania menu.

**Rozwiazania:**

1. **Zoptymalizuj obrazy:**
   ```
   /cm images scan
   /cm images fix --backup
   ```

2. **Zmniejsz czestotliwosc animacji** w zlozonych menu

3. **Wylacz tryb debugowania:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Zwieksz interwal aktualizacji:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin sie nie laduje

**Objaw:** Plugin pokazuje bledy podczas uruchamiania.

**Rozwiazania:**

1. **Sprawdz wersje Java:**
   - Wymaga Java 17 lub wyzsza

2. **Zweryfikuj zaleznosci:**
   - PacketEvents musi byc zainstalowany

3. **Sprawdz wersje serwera:**
   - Wymaga Minecraft 1.20.4+

4. **Przejrzyj logi startowe** w poszukiwaniu konkretnych bledow

5. **Sprobuj odzyskiwania:**
   ```
   /cm recover
   ```

## Bledy YAML

**Objaw:** Bledy wspominaja o parsowaniu YAML.

**Typowe problemy:**

1. **Niepoprawne wciecia:**
   ```yaml
   # Zle
   widgets:
   my_widget:
     type: IMAGE

   # Dobrze
   widgets:
     my_widget:
       type: IMAGE
   ```

2. **Brakujace cudzyslowy wokol specjalnych wartosci:**
   ```yaml
   # Zle - & ma specjalne znaczenie
   title: &bWitaj

   # Dobrze
   title: "&bWitaj"
   ```

3. **Niepoprawny format listy:**
   ```yaml
   # Zle
   events:
     on_cursor_click:
       action: sound

   # Dobrze
   events:
     on_cursor_click:
       - action: sound
   ```

## Uzyskiwanie pomocy

Jesli nadal masz problemy:

1. Wlacz tryb debugowania i sprawdz output konsoli
2. Sprawdz problemy na GitHub w poszukiwaniu znanych problemow
3. Utworz nowy problem z:
   - Wersja serwera
   - Wersja pluginu
   - Logi konsoli
   - Pliki konfiguracyjne (usun wrazliwe dane)

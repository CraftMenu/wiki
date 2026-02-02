# Edytor w grze

CraftMenu zawiera potezny wizualny edytor, ktory pozwala konfigurowac menu bezposrednio przez GUI ekwipunku, bez recznej edycji plikow YAML.

## Pierwsze kroki

### Otwieranie Edytora

```
/cm edytor              # Otwiera glowny hub edytora
/cm edytor <menu>       # Edytuje konkretne menu bezposrednio
```

**Wymagane uprawnienie:** `craftmenu.admin` lub `craftmenu.edit`

### Nawigacja w Edytorze

Edytor uzywa **systemu nawigacji opartego na stosie**:
- **Lewy klik** na elementy, aby wejsc do podmenu lub edytowac wartosci
- **Prawy klik** dla akcji dodatkowych (podglad, test)
- **Shift + Lewy klik** aby usunac elementy (z potwierdzeniem)
- **Element strzalki** (przycisk wstecz) aby wrocic do poprzedniego menu
- **Zamknij ekwipunek** lub kliknij na zewnatrz aby wyjsc

---

## Glowne Menu Edytora

Gdy uruchomisz `/cm edytor`, zobaczysz glowny hub edytora z tymi opcjami:

| Element | Opis |
|---------|------|
| **Lista Menu** | Przegladaj i edytuj wszystkie zaladowane menu |
| **Przegladarka Obrazow** | Zobacz wszystkie dostepne obrazy |
| **Przegladarka Dzwiekow** | Zobacz wszystkie dostepne dzwieki |
| **Konfiguracja** | Globalna konfiguracja pluginu |

---

## Edycja Menu

### Lista Menu

Pokazuje wszystkie menu w folderze `menus/`. Kliknij menu, aby otworzyc jego edytor.

- **Lewy klik**: Edytuj menu
- **Shift + Lewy klik**: Usun menu (z potwierdzeniem)
- **Utworz nowe**: Dodaj nowe menu w twojej aktualnej lokalizacji

### Hub Akcji Menu

Po wybraniu menu zobaczysz glowny edytor menu z tymi sekcjami:

| Sekcja | Opis |
|--------|------|
| **Wlasciwosci** | Podstawowe ustawienia (nazwa, tytul, menu glowne, auto-otwieranie) |
| **Lokalizacja** | Pozycja w swiecie i rotacja |
| **Uklad** | Konfiguracja ukladu siatki |
| **Skroty klawiszowe** | Skroty klawiaturowe |
| **Widocznosc** | Ustawienia ukrywania graczy/mobow/przedmiotow |
| **Zaawansowane** | Czulosc kursora, blokada kamery, granice |
| **Widgety** | Edytuj widgety w tym menu |

---

## Wlasciwosci Menu

Edytuj podstawowe informacje o menu:

| Wlasciwosc | Opis |
|------------|------|
| **Nazwa** | Identyfikator menu (uzywany w komendach) |
| **Tytul** | Wyswietlany tytul (wspiera kody kolorow &) |
| **Opis** | Opcjonalny opis |
| **Menu Glowne** | Oznacz jako glowne menu |
| **Otworz przy dolaczeniu** | Automatycznie otworz gdy gracz dolaczy do serwera |
| **Otworz przy teleportacji** | Automatycznie otworz gdy gracz teleportuje sie do tego swiata |
| **Swiat** | Swiat, w ktorym istnieje menu |

### Edycja wartosci tekstowych

Gdy klikniesz na wlasciwosc tekstowa:
1. Ekwipunek sie zamyka
2. Monit pojawia sie na czacie
3. Wpisz nowa wartosc na czacie
4. Nacisnij Enter aby potwierdzic (lub wpisz `cancel` aby anulowac)

---

## Lokalizacja Menu

Skonfiguruj gdzie menu pojawia sie w swiecie:

| Wlasciwosc | Opis |
|------------|------|
| **Swiat** | Wybierz z dostepnych swiatow |
| **X / Y / Z** | Wspolrzedne (kliknij aby edytowac przez czat) |
| **Yaw** | Rotacja pozioma (-180 do 180) |
| **Pitch** | Rotacja pionowa (-90 do 90) |
| **Ustaw na aktualna** | Uzyj twojej aktualnej pozycji/rotacji |

---

## Uklad Menu (Siatka)

Skonfiguruj pozycjonowanie widgetow oparte na siatce:

| Wlasciwosc | Opis |
|------------|------|
| **Wlaczony** | Wlacz/wylacz uklad siatki |
| **Kolumny** | Liczba kolumn siatki |
| **Wiersze** | Liczba wierszy siatki |
| **Odstep X / Y / Z** | Odstep miedzy komorkami |
| **Wyrownanie** | Wyrownanie siatki (CENTER, TOP_LEFT, itp.) |

Gdy uklad siatki jest wlaczony, widgety uzywaja `grid-position: {row: X, col: Y}` zamiast recznych wspolrzednych.

---

## Skroty Klawiszowe Menu

Skonfiguruj skroty klawiaturowe:

| Akcja | Opis |
|-------|------|
| **Dodaj skrot** | Utworz nowy skrot klawiaturowy |
| **Edytuj skrot** | Zmodyfikuj istniejacy skrot |
| **Usun skrot** | Usun skrot |

### Wlasciwosci Skrotu

- **Klawisz**: Klawisz lub kombinacja (np. `SHIFT`, `CTRL+E`, `F`)
- **Akcja**: `activate`, `toggle` lub `close`
- **Widget**: Nazwa docelowego widgetu (dla activate/toggle)

---

## Widocznosc Menu

Kontroluj co jest widoczne gdy menu jest otwarte:

| Wlasciwosc | Opis |
|------------|------|
| **Ukryj graczy** | Ukryj innych graczy z widoku |
| **Ukryj moby** | Ukryj wszystkie moby |
| **Ukryj przedmioty** | Ukryj przedmioty na ziemi |
| **Biala lista** | Gracze ktorzy pozostaja widoczni (edytuj liste) |

---

## Ustawienia Zaawansowane

Dostosuj zachowanie menu:

| Wlasciwosc | Opis |
|------------|------|
| **Czulosc kursora** | Szybkosc ruchu myszy (0.1 - 5.0) |
| **Maks. przesuniecie Yaw** | Pozioma granica kursora (stopnie) |
| **Maks. przesuniecie Pitch** | Pionowa granica kursora (stopnie) |
| **Blokada kamery wlaczona** | Zablokuj kamere gracza gdy menu jest otwarte |
| **Sila blokady kamery** | Jak mocno kamera jest zablokowana (0.0 - 1.0) |
| **Dzwiek granicy** | Dzwiek gdy kursor uderzy w granice |
| **Glosnosc/Wysokosc granicy** | Wlasciwosci dzwieku |
| **Wiadomosc granicy** | Wiadomosc pokazana przy granicy |

---

## Edycja Widgetow

### Lista Widgetow

Pokazuje wszystkie widgety w aktualnym menu:

- **Lewy klik**: Edytuj widget
- **Shift + Lewy klik**: Usun widget
- **Utworz nowy**: Dodaj nowy widget

### Hub Edytora Widgetow

Kazdy widget ma te edytowalne sekcje:

| Sekcja | Opis |
|--------|------|
| **Typ** | IMAGE, TEXT lub CURSOR |
| **Transformacja** | Pozycja, rozmiar, rotacja |
| **Stany wizualne** | Wyglady normal, hover, pressed, disabled |
| **Kolizja** | Konfiguracja pola kolizji |
| **Zdarzenia** | Zdarzenia interakcji i akcje |
| **[Specyficzne dla typu]** | Dodatkowe opcje oparte na typie widgetu |

---

## Edytor Transformacji

Skonfiguruj pozycjonowanie i rozmiar widgetu:

### Pozycja
- **X**: Pozycja pozioma
- **Y**: Pozycja pionowa
- **Z**: Pozycja glebokosci

### Rozmiar
- **X**: Skala szerokosci
- **Y**: Skala wysokosci
- **Z**: Skala glebokosci

### Rotacja
- **Pitch**: Rotacja gora/dol
- **Yaw**: Rotacja lewo/prawo
- **Roll**: Rotacja przechylu

**Wskazowka**: Kliknij dowolna wartosc aby ja edytowac przez wprowadzanie na czacie.

---

## Stany Wizualne

Widgety moga miec rozne wyglady dla roznych stanow:

| Stan | Kiedy zastosowany |
|------|-------------------|
| **normal** | Stan domyslny |
| **hover** | Kursor jest nad widgetem |
| **pressed** | Widget jest klikany |
| **disabled** | Widget jest nieaktywny |
| **Niestandardowy** | Dowolna niestandardowa nazwa stanu |

### Edytor Stanu Wizualnego

Kazdy stan ma:

| Wlasciwosc | Opis |
|------------|------|
| **Typ** | `image`, `text` lub `unicode` |
| **Wartosc** | Sciezka obrazu, zawartosc tekstu lub znak unicode |
| **Nadpisania** | Opcjonalne nadpisania transformacji/kolizji/rozmiaru-tekstu |

---

## Edytor Kolizji

Skonfiguruj klikalny obszar widgetu:

| Wlasciwosc | Opis |
|------------|------|
| **Wlaczona** | Przelacz wykrywanie kolizji |
| **Pozycja X/Y/Z** | Przesuniecie srodka pola kolizji |
| **Rozmiar X/Y/Z** | Wymiary pola kolizji |
| **Offset X/Y/Z** | Dodatkowe przesuniecie |

**Wskazowka**: Uzyj `/cm debug particles` aby wizualizowac pola kolizji w grze.

---

## Edytor Zdarzen

### Typy Zdarzen

| Zdarzenie | Wyzwalacz |
|-----------|-----------|
| **on_menu_open** | Gdy menu sie otwiera |
| **on_cursor_hover** | Gdy kursor wchodzi na widget |
| **on_cursor_hover_exit** | Gdy kursor opuszcza widget |
| **on_cursor_click** | Gdy widget jest klikniety |

### Lista Akcji

Kazde zdarzenie zawiera liste akcji wykonywanych w kolejnosci:

- **Lewy klik**: Edytuj akcje
- **Shift + Lewy klik**: Usun akcje
- **Dodaj akcje**: Utworz nowa akcje
- **Zmien kolejnosc**: Przeciagnij aby zmienic kolejnosc wykonywania

---

## Edytory Akcji

Kazdy typ akcji ma wyspecjalizowany edytor:

### Akcja Animacji

| Wlasciwosc | Opis |
|------------|------|
| **Efekt** | Typ animacji (rotate, scale, bounce, itp.) |
| **Czas trwania** | Dlugosc animacji w milisekundach |
| **Skala X/Y/Z** | Mnozniki skali (dla animacji skalowania) |
| **Intensywnosc** | Sila efektu (0.1 - 5.0) |
| **Easing** | Funkcja czasowa (linear, ease_in, ease_out, itp.) |
| **Priorytet** | Blokuj interakcje podczas animacji |

### Akcja Dzwieku

| Wlasciwosc | Opis |
|------------|------|
| **Plik** | Sciezka dzwieku (minecraft:... lub niestandardowa sciezka) |
| **Glosnosc** | Glosnosc dzwieku (0.0 - 1.0) |
| **Wysokosc** | Wysokosc dzwieku (0.5 - 2.0) |

**Przegladaj**: Kliknij aby otworzyc przegladarke dzwiekow i wybrac dzwiek.

### Akcja Komendy

| Wlasciwosc | Opis |
|------------|------|
| **Komenda** | Komenda do wykonania (ze specjalnymi komendami) |
| **Opoznienie** | Opoznienie w milisekundach przed wykonaniem |

**Specjalne Komendy:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aTwoja wiadomosc tutaj`
- `[CLOSE]`
- `[PLAY_MUSIC] sciezka/plik.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /komenda`
- `[CONSOLE] /komenda`

### Akcja Stanu

| Wlasciwosc | Opis |
|------------|------|
| **Typ akcji** | `toggle_state` lub `set_state` |
| **Stany** | Lista stanow do przelaczania (toggle_state) |
| **Stan** | Nazwa docelowego stanu (set_state) |

### Akcja Zmiany Wizualnej

| Wlasciwosc | Opis |
|------------|------|
| **Do** | Nazwa docelowego stanu wizualnego |

### Akcja Widgetu

| Wlasciwosc | Opis |
|------------|------|
| **Akcja** | `hide_widget`, `show_widget`, itp. |
| **Widget** | Nazwa docelowego widgetu |

### Akcja Efektu

| Wlasciwosc | Opis |
|------------|------|
| **Efekt** | Typ efektu do zastosowania |
| **Parametry** | Parametry specyficzne dla efektu |

### Akcja Zatrzymania Animacji

| Wlasciwosc | Opis |
|------------|------|
| **Typ animacji** | Ktora animacje zatrzymac |

### Akcja Zatrzymania Efektu

| Wlasciwosc | Opis |
|------------|------|
| **Typ efektu** | Ktory efekt zatrzymac |

### Akcja Ustawienia Stanu Bazowego

| Wlasciwosc | Opis |
|------------|------|
| **Stan** | Nowy stan bazowy dla widgetu |

---

## Przegladarki Zasobow

### Przegladarka Obrazow

Przegladaj wszystkie obrazy w folderze `images/`:

- **Paginacja**: Nawiguj przez strony obrazow
- **Podglad**: Zobacz sciezke obrazu i szczegoly
- **Wybierz**: Kliknij aby uzyc w aktualnym kontekscie

Obrazy sa zorganizowane wg folderu (np. `template/button.png`).

### Przegladarka Dzwiekow

Przegladaj wszystkie dzwieki w folderze `sounds/` plus wbudowane dzwieki Minecraft:

- **Niestandardowe dzwieki**: Twoje pliki .ogg z `sounds/`
- **Dzwieki Minecraft**: Wbudowane dzwieki (minecraft:ui.button.click, itp.)
- **Wybierz**: Kliknij aby uzyc w aktualnym kontekscie

---

## Wskazowki i Najlepsze Praktyki

### Wskazowki dotyczace Workflow

1. **Zacznij od wlasciwosci**: Najpierw ustaw nazwe, tytul i lokalizacje
2. **Dodaj widgety**: Utworz swoje widgety z podstawowymi transformacjami
3. **Skonfiguruj wizualne**: Ustaw stany normal i hover
4. **Dodaj kolizje**: Wlacz i dostosuj rozmiar pol kolizji
5. **Dodaj zdarzenia**: Skonfiguruj dzwieki hover i akcje klikniecia
6. **Testuj czesto**: Uzyj `/cm otworz <menu>` aby przetestowac zmiany

### Skroty Klawiaturowe

| Skrot | Akcja |
|-------|-------|
| **Escape** | Zamknij edytor |
| **Klawisze numeryczne (1-9)** | Szybki wybor slotu |

### Czeste Problemy

**Zmiany nie pojawiaja sie:**
- Uruchom `/cm przeladuj` po wprowadzeniu zmian
- Upewnij sie, ze kliknales "Zapisz" w edytorze

**Kolizja nie wykrywa:**
- Sprawdz czy kolizja jest wlaczona
- Zweryfikuj czy rozmiar kolizji jest wystarczajaco duzy
- Uzyj `/cm debug particles` aby wizualizowac

**Obrazy nie wyswietlaja sie:**
- Uruchom `/cm pakiet` aby zregenerowac paczke zasobow
- Upewnij sie, ze obraz jest w podfolderze (np. `images/mojemenu/`)
- Zastosuj paczke zasobow na kliencie

---

## Zobacz takze

- [Dokumentacja Komend](commands.md)
- [Tworzenie Menu](menu-creation.md)
- [Typy Widgetow](widgets.md)
- [System Zdarzen](events.md)
- [Animacje](animations.md)

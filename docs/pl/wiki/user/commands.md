# Referencja komend

CraftMenu zapewnia kompleksowy zestaw komend do zarzadzania menu.

## Komenda bazowa

Wszystkie komendy uzywaja `/craftmenu` (alias: `/cm`).

## Komendy ogolne

### Pomoc
```
/cm pomoc [komenda]
```
Pokazuje informacje pomocy dla wszystkich komend lub konkretnej komendy.

### Lista menu
```
/cm lista
```
Wyswietla wszystkie zaladowane szablony menu.

### Informacje o pluginie
```
/cm info
```
Pokazuje wersje pluginu i statystyki.

## Komendy menu

### Otworz menu
```
/cm otworz <nazwa_menu> [gracz]
```
Otwiera menu dla ciebie lub innego gracza.

**Przyklady:**
- `/cm otworz template` - Otworz menu template dla siebie
- `/cm otworz lobby Steve` - Otworz menu lobby dla gracza Steve

### Zamknij menu
```
/cm zamknij [gracz]
```
Zamyka aktywne menu dla ciebie lub innego gracza.

### Utworz menu
```
/cm utworz <nazwa_menu>
```
Tworzy nowy szablon menu w twojej aktualnej lokalizacji.

### Usun menu
```
/cm usun <nazwa_menu>
```
Usuwa szablon menu.

## Komendy Resource Pack

### Wygeneruj Resource Pack
```
/cm paczka
```
Generuje resource pack z obrazow i dzwiekow w folderze CraftMenu.

### Komendy obrazow
```
/cm obrazy skanuj
/cm obrazy napraw [--backup]
/cm obrazy rozmiar <sciezka_obrazu> <docelowy_rozmiar>
/cm obrazy kopia
/cm obrazy przywroc <nazwa_kopii>
/cm obrazy lista
/cm obrazy kopie
```
- `skanuj` - Skanuje w poszukiwaniu zbyt duzych obrazow
- `napraw` - Automatycznie optymalizuje zbyt duze obrazy
- `rozmiar` - Zmienia rozmiar konkretnego obrazu do docelowego rozmiaru (16-4096 pikseli)
- `kopia` - Tworzy kopie zapasowa obrazow
- `przywroc` - Przywraca obrazy z kopii zapasowej
- `lista` - Wyswietla wszystkie obrazy w folderze images
- `kopie` - Wyswietla wszystkie dostepne kopie zapasowe

## Komendy konfiguracji

### Przeladuj
```
/cm przeladuj
```
Przeladowuje wszystkie konfiguracje i szablony menu.

### Jezyk
```
/cm jezyk <jezyk>
/cm jezyk lista
```
- `/cm jezyk <jezyk>` - Zmienia jezyk pluginu bezposrednio (bez "set")
- `/cm jezyk lista` - Wyswietla liste dostepnych jezykow

**Dostepne jezyki:**
- `en_US` - Angielski
- `pt_BR` - Portugalski (Brazylia)
- `es_ES` - Hiszpanski
- `fr_FR` - Francuski
- `de_DE` - Niemiecki
- `it_IT` - Wloski
- `nl_NL` - Holenderski
- `ru_RU` - Rosyjski
- `pl_PL` - Polski
- `tr_TR` - Turecki
- `uk_UA` - Ukrainski
- `ar_SA` - Arabski
- `ja_JP` - Japonski
- `ko_KR` - Koreanscki
- `zh_CN` - Chinski (uproszczony)
- `hi_IN` - Hindi
- `id_ID` - Indonezyjski
- `th_TH` - Tajski
- `vi_VN` - Wietnamski

## Komendy debugowania

### Czasteczki debugowania
```
/cm debuguj czastki
/cm debuguj czastki rozmiar <wartosc>
```
- `/cm debuguj czastki` - Przelacza WSZYSTKIE czasteczki debugowania (pudelka kolizji, pozycja kursora, srodki widgetow)
- `/cm debuguj czastki rozmiar <wartosc>` - Ustawia rozmiar czasteczek (0.001 do 2.0)

### Debugowanie siatki
```
/cm debuguj siatka
/cm debuguj siatka numery
```
- `/cm debuguj siatka` - Przelacza wizualizacje siatki debugowania
- `/cm debuguj siatka numery` - Przelacza wyswietlanie numerow komorek siatki

### Sprawdzenie stanu
```
/cm zdrowie
```
Pokazuje stan komponentow.

### Odzyskiwanie
```
/cm odzyskaj
```
Probuje odzyskac po bledach.

## Polecenie edytora

Otwiera wizualny edytor w grze dla menu i widgetow.

### Otworz edytor
```
/cm edytor
/cm edytor <nazwa_menu>
```
- `/cm edytor` - Otwiera glowne menu edytora
- `/cm edytor <nazwa_menu>` - Otwiera edytor dla okreslonego menu

**Wymagane uprawnienie:** `craftmenu.admin`

## Uprawnienia

| Uprawnienie | Opis |
|-------------|------|
| `craftmenu.use` | Podstawowe uzycie (otwieranie menu) |
| `craftmenu.admin` | Komendy administratora |
| `craftmenu.open` | Otwieranie menu |
| `craftmenu.create` | Tworzenie menu |
| `craftmenu.reload` | Przeladowanie pluginu |
| `craftmenu.debug` | Komendy debugowania |

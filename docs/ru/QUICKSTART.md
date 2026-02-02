# CraftMenu - Быстрый старт

## 5-минутное руководство

Это руководство поможет вам создать рабочее меню за 5 минут.

---

## 1. Установка (1 мин)

1. **Скачайте**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (зависимость)

2. **Установите**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Запустите сервер**

4. **Проверьте**:
   ```
   /cm info
   ```

---

## 2. Создайте ваше первое меню (2 мин)

1. **В игре** перейдите в нужную локацию
2. Выполните:
   ```
   /cm create mymenu
   ```

3. **Меню создано!** Файл сгенерирован по адресу:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. Добавьте изображения (1 мин)

1. **Создайте папку**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **Добавьте PNG изображения** (64x64 или 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Сгенерируйте ресурс-пак**:
   ```
   /cm zip
   ```

---

## 4. Настройте меню (1 мин)

Отредактируйте `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lМоё первое меню'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Где вы создали его
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Простая кнопка (использует IMAGE с событиями hover/click)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← ВАШЕ ИЗОБРАЖЕНИЕ
        hover:
          type: image
          value: mymenu/button-hover.png # ← ИЗОБРАЖЕНИЕ ПРИ НАВЕДЕНИИ
        fallback:
          type: text
          value: "НАЖМИ"                 # Если изображение не загрузилось
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.04, z: 0.02}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        on_cursor_click:
        - action: command
          command: '[MESSAGE] &aВы нажали на кнопку!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Курсор
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← ВАШЕ ИЗОБРАЖЕНИЕ
        fallback:
          type: text
          value: "§f→"
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
```

---

## 5. Тестирование

1. **Перезагрузите**:
   ```
   /cm reload
   ```

2. **Откройте меню**:
   ```
   /cm open mymenu
   ```

3. **Двигайте мышью** для управления курсором
4. **Нажмите** на кнопку

---

## Чек-лист

- [ ] Плагин установлен и работает
- [ ] Меню создано с помощью `/cm create`
- [ ] Изображения добавлены в `/images/mymenu/`
- [ ] Ресурс-пак сгенерирован с помощью `/cm zip`
- [ ] Меню настроено в YAML
- [ ] Меню работает с `/cm open mymenu`
- [ ] Ресурс-пак применён на клиенте

---

## Частые проблемы

### "Меню не загружено"

```bash
/cm reload
/cm list  # Проверьте, появилось ли меню
```

### Курсор не появляется

**Решение**: Проверьте, что курсор добавлен в YAML и имеет настроенный визуал

### Изображения показывают "?"

```bash
/cm images scan    # Проверьте, найдены ли изображения
/cm zip            # Перегенерируйте ресурс-пак
/cm reload         # Перезагрузите
```

### Ресурс-пак не скачивается

Игрок должен:
1. Установить вручную: скопировать `/plugins/CraftMenu/craftmenu.zip` в `.minecraft/resourcepacks/`
2. ИЛИ настроить в `server.properties` (требуется веб-хостинг)

---

## Следующие шаги

1. [Полная документация по меню](MENU_CREATION.md)
3. [Расширенные функции](FEATURES.md)

---

## Полезные ресурсы

- **Примеры изображений**: Ищите "minecraft UI icons" или создайте свои
- **Рекомендуемые размеры**: 64x64, 128x128
- **Формат**: PNG с прозрачностью
- **Звуки Minecraft**: [Полный список](https://minecraft.fandom.com/wiki/Sounds.json)

---

Последнее обновление: 2026-02-02

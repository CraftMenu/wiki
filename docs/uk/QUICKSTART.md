# CraftMenu - Швидкий старт

## 5-хвилинний посібник

Цей посібник допоможе вам перейти від нуля до працюючого меню за 5 хвилин.

---

## 1. Встановлення (1 хв)

1. **Завантажте**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (залежність)

2. **Встановіть**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Запустіть сервер**

4. **Перевірте**:
   ```
   /cm info
   ```

---

## 2. Створіть своє перше меню (2 хв)

1. **У грі** перейдіть до потрібного місця
2. Виконайте:
   ```
   /cm create mymenu
   ```

3. **Меню створено!** Файл згенеровано за адресою:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. Додайте зображення (1 хв)

1. **Створіть папку**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **Додайте PNG зображення** (64x64 або 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Згенеруйте ресурспак**:
   ```
   /cm zip
   ```

---

## 4. Налаштуйте меню (1 хв)

Відредагуйте `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lМоє перше меню'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Де ви його створили
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Проста кнопка (використовує IMAGE з подіями hover/click)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← ВАШЕ ЗОБРАЖЕННЯ
        hover:
          type: image
          value: mymenu/button-hover.png # ← ЗОБРАЖЕННЯ ПРИ НАВЕДЕННІ
        fallback:
          type: text
          value: "НАТИСНИ МЕНЕ"           # Якщо зображення не завантажиться
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
          command: '[MESSAGE] &aВи натиснули кнопку!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Курсор
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← ВАШЕ ЗОБРАЖЕННЯ
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

## 5. Тестування

1. **Перезавантажте**:
   ```
   /cm reload
   ```

2. **Відкрийте меню**:
   ```
   /cm open mymenu
   ```

3. **Рухайте мишею** для керування курсором
4. **Натисніть** на кнопку

---

## Контрольний список

- [ ] Плагін встановлено та працює
- [ ] Меню створено за допомогою `/cm create`
- [ ] Зображення додано до `/images/mymenu/`
- [ ] Ресурспак згенеровано за допомогою `/cm zip`
- [ ] Меню налаштовано в YAML
- [ ] Меню працює з `/cm open mymenu`
- [ ] Ресурспак застосовано на клієнті

---

## Типові проблеми

### "Меню не завантажено"

```bash
/cm reload
/cm list  # Перевірте, чи відображається меню
```

### Курсор не з'являється

**Рішення**: Перевірте, що курсор є в YAML і має налаштований visual

### Зображення показують "?"

```bash
/cm images scan    # Перевірте, чи знайдено зображення
/cm zip            # Перегенеруйте ресурспак
/cm reload         # Перезавантажте
```

### Ресурспак не завантажується

Гравцю потрібно:
1. Встановити вручну: скопіюйте `/plugins/CraftMenu/craftmenu.zip` до `.minecraft/resourcepacks/`
2. АБО налаштуйте в `server.properties` (потрібен веб-хостинг)

---

## Наступні кроки

1. [Повна документація меню](MENU_CREATION.md)
3. [Розширені функції](FEATURES.md)

---

## Корисні ресурси

- **Приклади зображень**: Шукайте "minecraft UI icons" або створіть власні
- **Рекомендовані розміри**: 64x64, 128x128
- **Формат**: PNG з прозорістю
- **Звуки Minecraft**: [Повний список](https://minecraft.fandom.com/wiki/Sounds.json)

---

Останнє оновлення: 2026-02-02

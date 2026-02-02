# Посібник з встановлення

Цей посібник охоплює встановлення та налаштування CraftMenu на вашому сервері Minecraft.

## Передумови

Перед встановленням CraftMenu переконайтеся, що у вас є:

- Minecraft сервер з Paper, Spigot або Purpur 1.20.4+
- Java 17 або вище
- Встановлений плагін PacketEvents

## Кроки встановлення

### 1. Завантаження CraftMenu

Завантажте останній JAR CraftMenu зі сторінки релізів.

### 2. Встановлення залежностей

Переконайтеся, що PacketEvents встановлено у папці `plugins/` перед CraftMenu.

### 3. Встановлення CraftMenu

Помістіть `CraftMenu.jar` у папку `plugins/` вашого сервера.

### 4. Запуск сервера

Запустіть сервер. CraftMenu створить свої конфігураційні файли:

```
plugins/CraftMenu/
+-- config.yml           # Глобальна конфігурація
+-- menus/               # Шаблони меню
|   +-- template.yml     # Стандартний приклад меню
+-- images/              # Кастомні зображення
|   +-- template/        # Зображення для шаблонного меню
+-- sounds/              # Кастомні звуки
|   +-- template/        # Звуки для шаблонного меню
+-- language/            # Мовні файли
```

### 5. Генерація ресурс-паку

Виконайте `/cm zip` для генерації ресурс-паку. Це створить:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Налаштування розповсюдження ресурс-паку

У вас є кілька варіантів:

**Варіант A: Серверний ресурс-пак**
```properties
# В server.properties
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Варіант B: Ручне розповсюдження**
Поділіться ZIP-файлом з гравцями і нехай вони встановлять його вручну.

**Варіант C: Використання плагіна ресурс-паку**
Використовуйте плагіни типу ItemsAdder або Oraxen для автоматичного розповсюдження.

## Конфігурація

### Базові налаштування

Відредагуйте `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "uk_UA"          # uk_UA, en_US, pt_BR або fr_FR
    debug: false               # Увімкніть для налагодження

  resourcepack:
    auto-generate: true        # Автогенерація при запуску
    compression: true          # Стиснення ZIP-файлу
```

### Налаштування продуктивності

```yaml
craftmenu:
  performance:
    async-loading: true        # Завантаження меню асинхронно
    cache-enabled: true        # Кешування шаблонів меню
    update-interval: 1         # Тіки між оновленнями
```

## Перевірка встановлення

1. Виконайте `/cm help` для перегляду доступних команд
2. Виконайте `/cm list` для перегляду завантажених меню
3. Виконайте `/cm open template` для тестування стандартного меню

## Наступні кроки

- [Створіть своє перше меню](menu-creation.md)
- [Дізнайтеся про віджети](widgets.md)
- [Налаштуйте події](events.md)

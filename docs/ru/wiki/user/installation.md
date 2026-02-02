# Руководство по установке

Это руководство охватывает установку и настройку CraftMenu на вашем сервере Minecraft.

## Предварительные требования

Перед установкой CraftMenu убедитесь, что у вас есть:

- Сервер Minecraft с Paper, Spigot или Purpur 1.20.4+
- Установленная Java 17 или выше
- Установленный плагин PacketEvents

## Шаги установки

### 1. Скачайте CraftMenu

Скачайте последнюю версию CraftMenu JAR со страницы релизов.

### 2. Установите зависимости

Убедитесь, что PacketEvents установлен в папке `plugins/` до CraftMenu.

### 3. Установите CraftMenu

Поместите `CraftMenu.jar` в папку `plugins/` вашего сервера.

### 4. Запустите сервер

Запустите сервер. CraftMenu создаст свои конфигурационные файлы:

```
plugins/CraftMenu/
├── config.yml           # Глобальная конфигурация
├── menus/              # Шаблоны меню
│   └── template.yml    # Пример меню по умолчанию
├── images/             # Пользовательские изображения
│   └── template/       # Изображения для шаблонного меню
├── sounds/             # Пользовательские звуки
│   └── template/       # Звуки для шаблонного меню
└── language/           # Языковые файлы
```

### 5. Сгенерируйте Resource Pack

Выполните `/cm zip` для генерации ресурспака. Это создаст:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Настройте распространение Resource Pack

У вас есть несколько вариантов:

**Вариант A: Серверный Resource Pack**
```properties
# В server.properties
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Вариант B: Ручное распространение**
Поделитесь ZIP-файлом с игроками и попросите их установить его вручную.

**Вариант C: Используйте плагин Resource Pack**
Используйте плагины, такие как ItemsAdder или Oraxen, для автоматического распространения.

## Конфигурация

### Базовые настройки

Отредактируйте `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "ru_RU"          # en_US, pt_BR, ru_RU и др.
    debug: false               # Включите для отладки

  resourcepack:
    auto-generate: true        # Автогенерация при запуске
    compression: true          # Сжатие ZIP-файла
```

### Настройки производительности

```yaml
craftmenu:
  performance:
    async-loading: true        # Асинхронная загрузка меню
    cache-enabled: true        # Кэширование шаблонов меню
    update-interval: 1         # Тики между обновлениями
```

## Проверка установки

1. Выполните `/cm help` для просмотра доступных команд
2. Выполните `/cm list` для просмотра загруженных меню
3. Выполните `/cm open template` для тестирования стандартного меню

## Следующие шаги

- [Создайте свое первое меню](menu-creation.md)
- [Узнайте о виджетах](widgets.md)
- [Настройте события](events.md)

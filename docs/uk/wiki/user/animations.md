# Система анімацій

CraftMenu надає потужну систему анімацій з 19 типами анімацій та 6 функціями згладжування.

## Типи анімацій

### Анімації руху

| Тип | Опис |
|-----|------|
| `translate` | Переміщення позиції віджета |
| `bounce` | Ефект підстрибування |
| `float` | Плавний рух вгору/вниз |
| `orbit` | Круговий орбітальний рух |

### Анімації обертання

| Тип | Опис |
|-----|------|
| `rotate` | Безперервне обертання |
| `swing` | Маятникове хитання |
| `flip` | Переворот на 180 градусів |
| `wobble` | Хиткий рух |
| `spiral` | Спіральний рух |

### Анімації масштабу

| Тип | Опис |
|-----|------|
| `scale` | Зміна розміру |
| `pulse` | Ритмічна пульсація |
| `squeeze` | Стискання/розтягування |
| `zoom_in` | Ефект збільшення |

### Візуальні анімації

| Тип | Опис |
|-----|------|
| `fade` | Затухання прозорості |
| `glow` | Ефект свічення |
| `shake` | Трясущий рух |
| `jiggle` | Тремтячий рух |
| `wave` | Хвильовий рух |

## Базове використання анімації

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Властивості анімації

### Загальні властивості

```yaml
- action: animation
  effect: pulse           # Тип анімації (обов'язково)
  duration: 1000          # Тривалість в мілісекундах
  easing_style: ease_out  # Функція згладжування
  intensity: 1.0          # Інтенсивність ефекту
  priority: false         # Блокувати інші дії?
```

### Специфічні властивості ефектів

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Градуси
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = затухання, false = проявлення
```

## Функції згладжування

| Згладжування | Опис |
|--------------|------|
| `linear` | Постійна швидкість |
| `ease_in` | Починається повільно |
| `ease_out` | Закінчується повільно |
| `ease_in_out` | Повільний початок і кінець |
| `bounce` | Ефект підстрибування |
| `elastic` | Пружинний ефект |

### Приклади згладжування

```yaml
# Плавний ефект наведення
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Пружний зворотний зв'язок кліку
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Пріоритет анімації

Використовуйте `priority: true` щоб переконатися, що анімація завершиться перед іншими діями:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Блокує наступну дію

    - action: command
      command: "[CLOSE]"      # Чекає на анімацію
```

## Зупинка анімацій

```yaml
- action: stop_animation
  animation_type: rotate      # Зупинити конкретний тип
  # або
  type: all                   # Зупинити всі анімації
```

## Безперервні анімації

Визначення анімацій що працюють постійно в конфігурації віджета:

```yaml
widgets:
  spinning_icon:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Найкращі практики

1. Тримайте тривалість менше 500мс для швидкого зворотного зв'язку
2. Використовуйте `ease_out` для ефектів наведення
3. Використовуйте `bounce` для зворотного зв'язку кліку
4. Уникайте кількох одночасних анімацій на одному віджеті
5. Тестуйте анімації на різному обладнанні

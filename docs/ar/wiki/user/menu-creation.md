# إنشاء القوائم

يغطي هذا الدليل إنشاء قوائم مخصصة في CraftMenu.

## هيكل القائمة

يتم تعريف القوائم في ملفات YAML في `plugins/CraftMenu/menus/`.

### قالب القائمة الأساسي

```yaml
menu:
  name: my_menu
  title: "&b&lقائمتي المخصصة"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # تعريفات الودجات هنا
```

## خصائص القائمة

### الخصائص الأساسية

| الخاصية | النوع | الوصف |
|---------|-------|-------|
| `name` | نص | معرف فريد للقائمة |
| `title` | نص | عنوان العرض (يدعم رموز الألوان) |
| `main` | منطقي | هل هذه القائمة الرئيسية؟ |
| `open-on-join` | منطقي | فتح تلقائي عند انضمام اللاعب للعالم |
| `open-on-teleport` | منطقي | فتح تلقائي عند انتقال اللاعب للعالم |

### الموقع

```yaml
location:
  world: world               # اسم العالم
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # الدوران الأفقي (-180 إلى 180)
    pitch: 0.0               # الدوران العمودي (-90 إلى 90)
```

### الإعدادات

```yaml
settings:
  cursor-sensitivity: 1.0    # حساسية الماوس (1.0 = عادي)
  max-yaw-offset: 61.0       # الحد الأفقي بالدرجات
  max-pitch-offset: 36.0     # الحد العمودي بالدرجات
  camera-lock-enabled: true  # قفل كاميرا اللاعب عند فتح القائمة
  camera-lock-strength: 0.4  # قوة القفل (0.0-1.0)
```

### إعدادات الرؤية

```yaml
settings:
  visibility:
    hide_players: false      # إخفاء اللاعبين الآخرين
    hide_mobs: false         # إخفاء الوحوش
    hide_items: false        # إخفاء العناصر المسقطة
    whitelist_players: []    # اللاعبون الذين يظلون مرئيين
```

## إضافة الودجات

الودجات هي العناصر التفاعلية في قائمتك.

### ودجت الصورة

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### ودجت النص

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lمرحبًا!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## الإنشاء السريع بالأمر

استخدم `/cm insha <الاسم>` لإنشاء قائمة بسرعة في موقعك الحالي.

## إضافة صور مخصصة

1. أنشئ مجلدًا: `plugins/CraftMenu/images/my_menu/`
2. أضف صور PNG الخاصة بك إلى هذا المجلد
3. شغّل `/cm hazma` لإعادة توليد حزمة الموارد
4. أشر إلى الصور كـ `my_menu/image_name.png`

## اختبار قائمتك

1. احفظ ملف YAML الخاص بك
2. شغّل `/cm iadat`
3. شغّل `/cm iftah my_menu`

## أفضل الممارسات

- استخدم المجلدات الفرعية لتنظيم الصور حسب القائمة
- حافظ على أحجام الصور معقولة (حد أقصى 128x128 للأزرار)
- اختبر القوائم جيدًا قبل النشر
- استخدم أسماء وصفية للودجات
- أضف تعليقات للتكوينات المعقدة

# إنشاء القوائم في CraftMenu

## جدول المحتويات
1. [الإنشاء عبر الأمر](#الإنشاء-عبر-الأمر)
2. [بنية YAML](#بنية-yaml)
3. [الودجات المتاحة](#الودجات-المتاحة)
4. [التحويل (التموضع)](#التحويل-التموضع)
5. [التصادم](#التصادم)
6. [الأحداث والإجراءات](#الأحداث-والإجراءات)
7. [أمثلة عملية](#أمثلة-عملية)

---

## الإنشاء عبر الأمر

### الطريقة الموصى بها

1. **ادخل اللعبة** واذهب إلى الموقع الذي تريد القائمة فيه
2. **انظر في الاتجاه** الذي يجب أن يواجهه اللاعبون عند فتح القائمة
3. **نفذ**:
   ```
   /cm create menu_name
   ```

سيتم إنشاء القائمة بموقعك الحالي ودورانك!

### البنية المولدة

```
/plugins/CraftMenu/menus/menu_name.yml
```

**القالب الافتراضي يتضمن**:
- ودجت تحذير FOV (يمكن إزالته)
- مؤشر مكون
- إعدادات محسنة
- تغذية راجعة للحدود
- **المؤشر يستخدم TEXT افتراضياً** - قم بالتبديل إلى IMAGE بعد إضافة القوام

---

## بنية YAML

### الأقسام الرئيسية

```yaml
menu:
  name: String              # اسم القائمة
  title: String             # العنوان (يدعم &codes)
  main: boolean             # قائمة رئيسية؟ (مستقبلي)
  location:                 # موقع العالم
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # الإعدادات
    # ... (انظر أدناه)
  widgets:                  # ودجات القائمة
    widget_name:
      # ... (انظر أدناه)
```

### الإعدادات التفصيلية

```yaml
settings:
  # الصوت
  background-music: "template/background.ogg"  # موسيقى خلفية (اختياري)

  # حركة المؤشر
  cursor-sensitivity: 1.0          # الحساسية (0.1 - 5.0)
  max-yaw-offset: 61.0             # الحد الأفقي بالدرجات
  max-pitch-offset: 36.0           # الحد العمودي بالدرجات
  mount-time: 100                  # وقت التركيب بالتكات

  # تموضع القائمة
  distance-multiplier: -0.01       # معامل المسافة
  menu-distance: 0.3               # مسافة القائمة

  # الأداء
  debug-mode: false                # وضع التصحيح
  update-rate: 1                   # معدل التحديث
  collision-detection: true        # كشف التصادم النشط

  # الكاميرا
  camera-lock-enabled: true        # قفل الكاميرا
  camera-lock-strength: 0.4        # قوة القفل (0.0-1.0)

  # تغذية راجعة الحدود
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lتم الوصول لحد المؤشر!"
```

---

## الودجات المتاحة

### BUTTON

زر تفاعلي مع التحويم والضغط.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ تشغيل"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

صورة ثابتة (يمكن أن تحتوي على التحويم).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # اختياري
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # بدون تفاعل
```

### TEXT

نص منسق.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lمرحباً
        &7في الخادم
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # حجم النص
  shadow: true              # الظل
  background-color: '#000000'  # لون الخلفية (hex)
```

### CURSOR

مؤشر يتحكم به الماوس (**واحد فقط لكل قائمة**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # z عالي = في الأمام
    size: {x: 0.005, y: 0.005, z: 0.005}

  # إعدادات المؤشر
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # الحركة
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # مللي ثانية
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # منطقة التصادم
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## التحويل (التموضع)

### الموضع

الموضع في الفضاء ثلاثي الأبعاد نسبة إلى نقطة ظهور القائمة.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: يسار (-) / يمين (+)
- **y**: أسفل (-) / أعلى (+)
- **z**: بعيد (-) / قريب (+)

**نصيحة**: z=0.1 جيد للخلفية، z=1.0 للمؤشر (مرئي دائماً)

### الحجم

حجم الودجت.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**المقاييس النموذجية**:
- زر صغير: `0.015`
- زر متوسط: `0.02`
- زر كبير: `0.03`
- شعار: `0.04-0.05`
- مؤشر: `0.005`

### الدوران (اختياري)

الدوران بالدرجات.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**ملاحظة**: عادة غير مطلوب (ViewFrame يضبط تلقائياً)

---

## التصادم

### التكوين الأساسي

```yaml
collision:
  enabled: true                     # تفعيل التصادم
  position: {x: 0, y: 0, z: 0.1}   # اختياري: تجاوز الموضع
  size: {x: 0.08, y: 0.04, z: 0.02} # حجم الصندوق
  rotation: {pitch: 0, yaw: 0, roll: 0}  # اختياري
```

### التصحيح المرئي

```yaml
collision:
  debug:
    enabled: true     # إظهار الجسيمات
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, إلخ
    size: 0.005       # حجم الجسيمات
```

**التفعيل العام**:
```
/cm debug particles toggle
/cm debug particles collision
```

### نصائح التصادم

1. **الحجم المرئي ≠ حجم التصادم**
   - التصادم يمكن أن يكون أكبر لسهولة الضغط
   - مثال: مرئي 0.02، تصادم 0.08x0.04

2. **موضع التصادم**
   - إذا لم يحدد، يستخدم transform.position
   - حدد إذا كنت تريد منطقة مختلفة

3. **Collision-area (المؤشر)**
   - المؤشر يستخدم `collision-area` بدلاً من `collision`
   - السبب: المؤشر له سلوك خاص

---

## الأحداث والإجراءات

### الأحداث المتاحة

| الحدث | متى يُطلق | الودجات |
|-------|------------|---------|
| `on_menu_open` | القائمة تفتح | الكل |
| `on_cursor_hover` | المؤشر يدخل | Button, Image, Text |
| `on_cursor_hover_exit` | المؤشر يغادر | Button, Image, Text |
| `on_cursor_click` | الودجت يُضغط | Button |
| `on_click_any` | أي ضغطة | Cursor |

### الإجراءات المتاحة

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, إلخ
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # أو "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # مللي ثانية
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # اختياري، بالمللي ثانية
```

**الأوامر الخاصة**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] نص مع &ألوان`
- `[CLOSE]`
- `[PLAY_MUSIC] path/sound.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: widget_name
```

---

## أمثلة عملية

### زر بسيط مع صوت

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
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
      command: '[MESSAGE] &aتم الضغط على الزر!'
```

### زر مع نقل

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eجاري النقل...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### زر تبديل (تشغيل/إيقاف)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change_conditional
      if_state: normal
      to: hover
    - action: visual_change_conditional
      if_state: disabled
      to: disabled_hover
    on_cursor_hover_exit:
    - action: visual_change_conditional
      if_state: normal
      to: normal
    - action: visual_change_conditional
      if_state: disabled
      to: disabled
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[MESSAGE] &cتم التعطيل!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aتم التفعيل!'
```

### ودجت نص قابل للضغط

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lتحذير
        &7اضغط للإخفاء
    hover:
      type: text
      value: |-
        &c&lتحذير
        &e&oاضغط للإخفاء
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## أفضل الممارسات

1. **نظم حسب الطبقات (z)**:
   - z=0.05: الخلفية
   - z=0.1: الأزرار
   - z=0.15: التراكبات
   - z=1.0: المؤشر

2. **سمِّ الودجات بوصف**:
   - `play_button`، `settings_menu`، `warning_banner`
   - ~~`widget1`، `button2`، `img`~~

3. **دائماً ضع fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "نص"}
   ```

4. **التصادم أكبر من المرئي**:
   - المرئي: 0.02
   - التصادم: 0.08x0.04 (أسهل للضغط)

5. **استخدم أصوات Minecraft عند الإمكان**:
   - لا حاجة لحزمة موارد
   - تعمل بدون تكوين إضافي

6. **اختبر تدريجياً**:
   - أضف ودجت واحد في المرة
   - استخدم `/cm reload` بشكل متكرر
   - اختبر كل تفاعل

---

آخر تحديث: 2026-02-02

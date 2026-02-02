# ميزات CraftMenu

## جدول المحتويات
1. [نظام الصوت الموحد](#نظام-الصوت-الموحد)
2. [أحداث الودجات](#أحداث-الودجات)
3. [نظام الحالات](#نظام-الحالات)
4. [تغذية راجعة قابلة للتكوين للحدود](#تغذية-راجعة-قابلة-للتكوين-للحدود)
5. [الأوامر الخاصة](#الأوامر-الخاصة)

---

## نظام الصوت الموحد

جميع حقول الصوت تدعم الآن نوعين:

### أصوات Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # صوت Minecraft الأصلي
  volume: 0.8
  pitch: 1.0
```

**أمثلة أصوات Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### الأصوات المخصصة (حزمة الموارد)

```yaml
- action: sound
  file: "template/click.ogg"         # يتم حلها تلقائياً
  # أو
  file: "craftmenu:template/click"   # صريح مع namespace
  volume: 1.0
  pitch: 1.2
```

**خطوات الأصوات المخصصة**:
1. أضف `.ogg` في `/plugins/CraftMenu/sounds/template/click.ogg`
2. نفذ `/cm zip`
3. حزمة الموارد تتضمن الصوت تلقائياً

---

## أحداث الودجات

### on_menu_open

يُطلق تلقائياً عند فتح القائمة. مفيد للموسيقى الخلفية.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

عندما يدخل المؤشر منطقة الودجت.

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

عندما يغادر المؤشر منطقة الودجت.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

عند الضغط على الودجت.

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (المؤشر فقط)

يُطلق عند أي ضغطة، حتى خارج الودجات.

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## نظام الحالات

يسمح للودجات بسلوكيات متعددة (مثل زر تبديل تشغيل/إيقاف).

### الحالات الافتراضية

- `normal`: الحالة الأولية
- `hover`: الماوس فوق الودجت
- `pressed`: تم الضغط على الودجت
- `disabled`: الودجت معطل
- `fallback`: عندما لا يتم تحميل المرئي

### الحالات المخصصة

يمكنك إنشاء حالاتك الخاصة:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # الصوت مشغل
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # الصوت مطفأ (حالة مخصصة)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # التحويم عند الإطفاء (حالة مخصصة)
      type: image
      value: template/sound-mute-hover.png
```

### إجراءات الحالات

#### toggle_state

يبدل بين قائمة من الحالات.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # يتنقل بين الحالات
```

#### visual_change_conditional

يغير المرئي فقط إذا كانت الحالة الحالية X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # إذا كانت الحالة "normal"
  to: hover                      # تغيير إلى "hover"
- action: visual_change_conditional
  if_state: disabled            # إذا كانت الحالة "disabled"
  to: disabled_hover             # تغيير إلى "disabled_hover"
```

#### command_conditional

ينفذ الأمر فقط إذا كانت الحالة X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # إذا أصبحت "disabled"
  command: '[STOP_MUSIC]'        # أوقف الموسيقى
- action: command_conditional
  if_state: normal              # إذا أصبحت "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # شغل الموسيقى
```

### مثال كامل: زر التبديل

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## تغذية راجعة قابلة للتكوين للحدود

يخصص التغذية الراجعة عندما يصل المؤشر إلى حدود الحركة.

### التكوين

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # الصوت عند الوصول للحد
      volume: 0.5                          # مستوى الصوت 0.0-1.0
      pitch: 0.6                           # درجة الصوت 0.5-2.0
      message: "&c&lتم الوصول لحد المؤشر!" # رسالة في شريط الإجراءات
```

### الأصوات الموصى بها

- `minecraft:ui.button.click` - نقرة خفيفة
- `minecraft:block.note_block.bass` - نغمة منخفضة
- `craftmenu:template/warning.ogg` - صوت مخصص

---

## الأوامر الخاصة

تستخدم مع `action: command`.

### [TELEPORT]

ينقل اللاعب.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

يرسل رسالة للاعب.

```yaml
- action: command
  command: '[MESSAGE] &aأهلاً بك في اللعبة!'
  delay: 500  # انتظر 500 مللي ثانية قبل الإرسال
```

### [CLOSE]

يغلق القائمة.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # أغلق بعد ثانية واحدة
```

### [PLAY_MUSIC]

يشغل موسيقى للودجت (صوت واحد فقط لكل ودجت).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**يدعم namespaces**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

يوقف الصوت الذي يشغل حالياً لهذا الودجت.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**هام**: `[STOP_MUSIC]` يوقف صوت هذا الودجت فقط، لا يؤثر على الودجات الأخرى أو الأصوات العامة.

**ملاحظة تقنية**: الأمر يستخدم `player.stopAllSounds()` داخلياً لأن `player.stopSound(key)` لا يعمل مع أصوات حزمة الموارد المخصصة. ومع ذلك، يتم تشغيله فقط بواسطة الودجت المحدد.

### [OPEN_URL]

يفتح URL في متصفح اللاعب (يتطلب تأكيد).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## إيقاف الصوت التلقائي

**عند إغلاق القائمة**، يتم إيقاف جميع الأصوات تلقائياً للاعب. هذا يشمل:

- الموسيقى الخلفية المشغلة عبر `[PLAY_MUSIC]`
- أصوات تحويم/ضغط الودجات
- أي صوت نشط وقت الإغلاق

### كيف يعمل

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← يُستدعى قبل close()
}
menuInstance.close();
```

### القيود التقنية

النظام يستخدم `player.stopAllSounds()` لأن:
- `player.stopSound(key)` **لا يعمل** مع أصوات حزمة الموارد المخصصة
- `player.stopSound(key, category)` **لا يعمل أيضاً**
- `stopAllSounds()` هو **الحل الموثوق الوحيد**

هذا يعني أن **جميع** أصوات اللاعب تتوقف عند إغلاق القائمة، ليس فقط أصوات القائمة. هذا قيد من Minecraft/Bukkit، وليس CraftMenu.

### البديل: التحكم اليدوي

إذا كنت تفضل عدم إيقاف الأصوات تلقائياً، استخدم زر تبديل في القائمة:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # أوقف الموسيقى يدوياً
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## الإجراءات المرئية

### visual_change

يغير الحالة المرئية بدون شروط.

```yaml
- action: visual_change
  to: hover
```

### scale

يحرك حجم الودجت مؤقتاً.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% من الحجم
  duration: 300                     # المدة بالمللي ثانية
```

### scale_reset

يعيد الحجم إلى الأصلي.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

يزيل الودجت بالكامل (المرئي، التصادم، الأصوات).

```yaml
- action: hide_widget
  widget: fov_warning  # اسم الودجت للإخفاء
```

**ملاحظة**: الودجت المخفي لا يمكن استرجاعه بدون إعادة فتح القائمة.

---

## مثال كامل: قائمة بجميع الميزات

```yaml
menu:
  name: complete_example
  title: '&b&lمثال قائمة كامل'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cالمؤشر وصل للحافة!"

  widgets:
    # زر مع موسيقى خلفية
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # زر إجراء مع تغذية راجعة كاملة
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aبدء اللعبة...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # مؤشر مع تغذية راجعة صوتية
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
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
          volume: 0.4
          pitch: 1.0
```

---

آخر تحديث: 2026-02-02
إصدار الإضافة: 2.0

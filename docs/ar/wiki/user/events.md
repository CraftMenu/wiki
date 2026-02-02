# نظام الأحداث

يستخدم CraftMenu نظام أحداث للتعامل مع تفاعلات المستخدم مع الودجات.

## أنواع الأحداث

| الحدث | المشغل | متاح على |
|-------|--------|----------|
| `on_menu_open` | القائمة تفتح | جميع الودجات |
| `on_cursor_hover` | المؤشر يدخل الودجت | IMAGE، TEXT |
| `on_cursor_hover_exit` | المؤشر يغادر الودجت | IMAGE، TEXT |
| `on_cursor_click` | الودجت يُنقر | IMAGE، TEXT |
| `on_click_any` | أي نقرة | CURSOR فقط |

## هيكل الحدث الأساسي

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &aلقد نقرت!"
```

## أنواع الإجراءات

### إجراء الصوت

يشغل مؤثر صوتي:

```yaml
- action: sound
  file: minecraft:ui.button.click  # صوت Minecraft
  volume: 1.0                       # 0.0 إلى 1.0
  pitch: 1.0                        # 0.5 إلى 2.0
```

أصوات مخصصة:
```yaml
- action: sound
  file: template/click.ogg         # ملف صوت مخصص
```

### إجراء الرسوم المتحركة

يشغل رسم متحرك:

```yaml
- action: animation
  effect: scale                    # نوع الرسم المتحرك
  duration: 200                    # المدة بالميلي ثانية
  scale: {x: 1.2, y: 1.2, z: 1.2}  # المقياس المستهدف
  easing_style: ease_out           # دالة التسهيل
  priority: false                  # حجب الإجراءات الأخرى؟
```

### إجراء الأمر

ينفذ الأوامر:

```yaml
- action: command
  command: "[MESSAGE] مرحبًا!"      # أمر خاص
  delay: 0                         # التأخير بالميلي ثانية
```

**الأوامر الخاصة:**
- `[MESSAGE] نص` - إرسال رسالة للاعب
- `[TELEPORT] world x y z yaw pitch` - نقل اللاعب
- `[CLOSE]` - إغلاق القائمة
- `[PLAY_MUSIC] path/file.ogg` - تشغيل موسيقى خلفية
- `[STOP_MUSIC]` - إيقاف الموسيقى
- `[OPEN_URL] https://...` - فتح URL (قابل للنقر)
- `[PLAYER] /command` - تشغيل أمر كلاعب
- `[CONSOLE] /command` - تشغيل أمر ككونسول

### إجراءات الحالة

تغيير حالات الودجت:

```yaml
# التبديل بين الحالات
- action: toggle_state
  states: [normal, disabled]

# تعيين حالة محددة
- action: set_state
  state: disabled
```

### إجراء تغيير المظهر

تغيير مظهر الودجت:

```yaml
- action: visual_change
  to: hover

# تغيير مشروط
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### إجراء إخفاء الودجت

إزالة ودجت من العرض:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### إجراء إيقاف الرسوم المتحركة

إيقاف الرسوم المتحركة الجارية:

```yaml
- action: stop_animation
  animation_type: rotate          # الرسم المتحرك المراد إيقافه
```

## ترتيب تنفيذ الأحداث

تُنفذ الإجراءات بالترتيب المدرج. للحصول على أفضل النتائج:

1. المؤثرات الصوتية (ردود فعل فورية)
2. تغييرات الحالة
3. الأوامر
4. الرسوم المتحركة (قد يكون لها تأخيرات)

## الرسوم المتحركة ذات الأولوية

استخدم `priority: true` لحجب الإجراءات الأخرى حتى اكتمال الرسم المتحرك:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # يحجب الإجراءات التالية
    - action: command
      command: "[MESSAGE] تم!"    # ينفذ بعد الرسم المتحرك
```

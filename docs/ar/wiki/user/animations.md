# نظام الرسوم المتحركة

يوفر CraftMenu نظام رسوم متحركة قوي يتضمن 19 نوعًا من الرسوم المتحركة و6 دوال تخفيف.

## أنواع الرسوم المتحركة

### رسوم الحركة

| النوع | الوصف |
|------|-------|
| `translate` | تحريك موضع الويدجت |
| `bounce` | تأثير الارتداد |
| `float` | طفو لطيف لأعلى/لأسفل |
| `orbit` | حركة مدارية دائرية |

### رسوم الدوران

| النوع | الوصف |
|------|-------|
| `rotate` | دوران مستمر |
| `swing` | تأرجح كالبندول |
| `flip` | انقلاب 180 درجة |
| `wobble` | اهتزاز متذبذب |
| `spiral` | حركة حلزونية |

### رسوم التحجيم

| النوع | الوصف |
|------|-------|
| `scale` | تغيير الحجم |
| `pulse` | نبض إيقاعي |
| `squeeze` | ضغط/تمدد |
| `zoom_in` | تأثير التكبير |

### الرسوم البصرية

| النوع | الوصف |
|------|-------|
| `fade` | تلاشي الشفافية |
| `glow` | تأثير التوهج |
| `shake` | حركة الاهتزاز |
| `jiggle` | حركة التذبذب |
| `wave` | حركة الموجة |

## الاستخدام الأساسي للرسوم المتحركة

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## خصائص الرسوم المتحركة

### الخصائص العامة

```yaml
- action: animation
  effect: pulse           # نوع الرسوم المتحركة (مطلوب)
  duration: 1000          # المدة بالميلي ثانية
  easing_style: ease_out  # دالة التخفيف
  intensity: 1.0          # شدة التأثير
  priority: false         # هل يمنع الإجراءات الأخرى؟
```

### الخصائص الخاصة بالتأثير

**الدوران:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # الدرجات
```

**التحجيم:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**التلاشي:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = تلاشي للخارج، false = تلاشي للداخل
```

## دوال التخفيف

| التخفيف | الوصف |
|---------|-------|
| `linear` | سرعة ثابتة |
| `ease_in` | يبدأ ببطء |
| `ease_out` | ينتهي ببطء |
| `ease_in_out` | بداية ونهاية بطيئة |
| `bounce` | تأثير الارتداد |
| `elastic` | تأثير الزنبرك |

### أمثلة على التخفيف

```yaml
# تأثير تحويم سلس
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# رد فعل نقرة مرتد
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## أولوية الرسوم المتحركة

استخدم `priority: true` لضمان اكتمال الرسوم المتحركة قبل الإجراءات الأخرى:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # يمنع الإجراء التالي

    - action: command
      command: "[CLOSE]"      # ينتظر الرسوم المتحركة
```

## إيقاف الرسوم المتحركة

```yaml
- action: stop_animation
  animation_type: rotate      # إيقاف نوع محدد
  # أو
  type: all                   # إيقاف جميع الرسوم المتحركة
```

## الرسوم المتحركة المستمرة

حدد الرسوم المتحركة التي تعمل باستمرار في تكوين الويدجت:

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

## أفضل الممارسات

1. حافظ على المدة أقل من 500 ميلي ثانية للحصول على استجابة سريعة
2. استخدم `ease_out` لتأثيرات التحويم
3. استخدم `bounce` لردود فعل النقر
4. تجنب الرسوم المتحركة المتزامنة المتعددة على ويدجت واحد
5. اختبر الرسوم المتحركة على أجهزة مختلفة


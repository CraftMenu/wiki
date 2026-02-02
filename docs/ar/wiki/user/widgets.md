# أنواع الودجات

يدعم CraftMenu ثلاثة أنواع من الودجات لبناء القوائم.

## نظرة عامة على أنواع الودجات

| النوع | الوصف | تفاعلي |
|-------|-------|--------|
| IMAGE | يعرض الصور | نعم |
| TEXT | يعرض نص منسق | نعم |
| CURSOR | مؤشر الماوس | خاص |

## ودجت IMAGE

يُستخدم للأزرار والخلفيات والعناصر الزخرفية.

### صورة أساسية

```yaml
my_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### صورة مع حالات

```yaml
my_button:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### تجاوزات الحالة

يمكن لكل حالة أن تحتوي على تجاوزات للتحويل والتصادم:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # أكبر قليلاً عند التحويم
```

## ودجت TEXT

يعرض نص منسق مع دعم PlaceholderAPI.

### نص أساسي

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bمرحبًا بك في الخادم!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### نص مع متغيرات

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7اللاعب: &f%player_name%\n&7المستوى: &a%player_level%"
      text-size: 0.8
```

### نص متعدد الأسطر

استخدم `\n` لفواصل الأسطر:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "السطر 1\nالسطر 2\nالسطر 3"
```

## ودجت CURSOR

المؤشر يتبع حركة ماوس اللاعب.

### مؤشر أساسي

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## خصائص التحويل

جميع الودجات تدعم خصائص التحويل:

```yaml
transform:
  position:
    x: 0.0    # الإزاحة الأفقية
    y: 0.0    # الإزاحة العمودية
    z: 0.0    # إزاحة العمق
  size:
    x: 0.1    # مقياس العرض
    y: 0.1    # مقياس الارتفاع
    z: 0.1    # مقياس العمق
  rotation:
    pitch: 0  # الدوران حول المحور X
    yaw: 0    # الدوران حول المحور Y
    roll: 0   # الدوران حول المحور Z
```

## خصائص التصادم

تمكين أو تخصيص اكتشاف التصادم:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## ترتيب الودجات

يتم عرض الودجات بالترتيب الذي تظهر به في ملف YAML. الودجات اللاحقة تظهر أمام السابقة.

# دليل الرسوم المتحركة الكامل - CraftMenu

يقدم هذا المستند جميع أنواع الرسوم المتحركة المتاحة في CraftMenu، مع أمثلة عملية لاستخدام YAML.

---

## جدول المحتويات

1. [الرسوم المتحركة الأساسية](#الرسوم-المتحركة-الأساسية)
2. [رسوم الحركة المتحركة](#رسوم-الحركة-المتحركة)
3. [الرسوم المتحركة المتقدمة](#الرسوم-المتحركة-المتقدمة)
4. [دمج الرسوم المتحركة](#دمج-الرسوم-المتحركة)
5. [الخصائص المشتركة](#الخصائص-المشتركة)

---

## الرسوم المتحركة الأساسية

### SCALE - تغيير الحجم

يغير حجم الودجت على المحاور X، Y، Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% من الحجم الأصلي
    easing_style: out
```

**الخصائص**:
- `scaleX`: المقياس على المحور X (الافتراضي: intensity)
- `scaleY`: المقياس على المحور Y (الافتراضي: intensity)
- `scaleZ`: المقياس على المحور Z (الافتراضي: intensity)

---

### ROTATE - الدوران

يدور الودجت حول المحاور X، Y، Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # دوران كامل على المحور Y
    easing_style: in_out
```

**الخصائص**:
- `rotationX`: الدوران على المحور X بالدرجات
- `rotationY`: الدوران على المحور Y بالدرجات
- `rotationZ`: الدوران على المحور Z بالدرجات

---

### TRANSLATE - الانتقال

ينقل الودجت إلى موضع جديد.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # الإزاحة بالكتل
    easing_style: out
```

**الخصائص**:
- `offsetX`: الإزاحة على المحور X
- `offsetY`: الإزاحة على المحور Y
- `offsetZ`: الإزاحة على المحور Z

---

### FADE - التلاشي

يتحكم في شفافية/رؤية الودجت.

```yaml
# التلاشي للخارج (الاختفاء)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = التلاشي للخارج، false = التلاشي للداخل
    easing_style: in

# التلاشي للداخل (الظهور)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**الخصائص**:
- `fadeOut`: true للاختفاء، false للظهور

---

## رسوم الحركة المتحركة

### PULSE - النبض

تأثير التنفس/نبضات القلب مع تغيير الحجم الإيقاعي.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # رسم متحرك مستمر
    easing_style: in_out
```

---

### BOUNCE - القفز

يحاكي فيزياء الكرة المرتدة عموديًا.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # ارتفاع القفزة
    easing_style: out
```

---

### SWING - التأرجح

حركة البندول/التأرجح.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # سعة التأرجح
    loop: true
    easing_style: in_out
```

---

### FLOAT - الطفو

حركة عمودية ناعمة للأعلى والأسفل.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # ارتفاع الطفو
    loop: true
    easing_style: in_out
```

---

### SHAKE - الاهتزاز

اهتزاز سريع وعشوائي.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # شدة الاهتزاز
    easing_style: linear
```

---

### JIGGLE - الارتجاج المرن

اهتزاز أنعم وأكثر تحكمًا مع تأثير مرن.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # سعة الارتجاج
    easing_style: out
```

---

## الرسوم المتحركة المتقدمة

### SLIDE - الانزلاق من خارج الشاشة

يدخل الودجت منزلقًا من خارج الشاشة.

```yaml
# الانزلاق من اليسار
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # المسافة بالكتل
    easing_style: out

# الانزلاق من الأعلى
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**الخصائص**:
- `direction`: اتجاه الدخول (left، right، top، bottom، front، back)
- `distance`: المسافة الأولية بالكتل (الافتراضي: intensity * 2.0)

**الاستخدام الشائع**: مثالي لرسوم `on_menu_open` مع أولوية CRITICAL.

---

### ZOOM_IN - الدخول مع التجاوز

التكبير من 0 إلى 1 مع "التجاوز" (يتجاوز ثم يعود).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # الحد الأقصى للمقياس قبل العودة إلى 1.0
    easing_style: out
```

**الخصائص**:
- `overshoot`: الحد الأقصى للمقياس قبل الاستقرار عند 1.0 (الافتراضي: 1.2)

**الاستخدام الشائع**: رسوم دخول دراماتيكية في `on_menu_open`.

---

### SQUEEZE - تأثير الضغط

يسطح محورًا واحدًا بينما يوسع الآخرين.

```yaml
# الضغط الأفقي
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # شدة الضغط
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# الضغط العمودي
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**الخصائص**:
- `axis`: المحور المراد ضغطه (x، y، z)
- `intensity`: شدة الضغط

---

### FLIP - الدوران 180°

دوران 180 درجة على محور معين.

```yaml
# القلب العمودي (مثل قلب البطاقة)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# القلب الأفقي
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**الخصائص**:
- `axis`: محور الدوران (x، y، z)

**الاستخدام الشائع**: انتقالات الحالة، الكشف عن محتوى بديل.

---

### WOBBLE - التمايل الهلامي

تمايل بأسلوب "الهلام" من جانب إلى آخر.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # شدة التمايل
    loop: true
    easing_style: in_out
```

**الاستخدام الشائع**: رسوم لفت الانتباه، ردود فعل التحويم.

---

### ORBIT - الحركة المدارية

يدور الودجت في دائرة حول نقطة مركزية.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # نصف قطر المدار بالكتل
    speed: 1.0  # معامل السرعة
    loop: true
    easing_style: linear
```

**الخصائص**:
- `radius`: نصف قطر المدار (الافتراضي: intensity * 0.5)
- `speed`: سرعة الدوران (الافتراضي: 1.0)

**الاستخدام الشائع**: رسوم الخلفية الزخرفية.

---

### SPIRAL - الحركة الحلزونية

يجمع بين الدوران والحركة الدائرية.

```yaml
# حلزوني في اتجاه عقارب الساعة
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # نصف قطر الحلزون
    clockwise: true  # الاتجاه مع عقارب الساعة
    loop: true
    easing_style: linear

# حلزوني عكس عقارب الساعة
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**الخصائص**:
- `radius`: نصف قطر الحلزون (الافتراضي: intensity * 0.3)
- `clockwise`: اتجاه الحركة (true/false)

---

### WAVE - حركة الموجة

موجة سلسة باستخدام دالة الجيب.

```yaml
# موجة أفقية
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # سعة الموجة
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# موجة عمودية
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**الخصائص**:
- `axis`: اتجاه الموجة (horizontal، vertical)

---

### GLOW - التوهج النابض

يجمع بين نبض خفيف وتغييرات الشفافية.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # شدة التوهج
    loop: true
    easing_style: in_out
```

**الاستخدام الشائع**: تسليط الضوء على العناصر المهمة، مؤشرات الانتباه.

---

## دمج الرسوم المتحركة

يمكنك دمج رسوم متحركة متعددة بشكل متتابع أو متزامن.

### مثال 1: دخول دراماتيكي

```yaml
on_menu_open:
  # 1. الانزلاق من اليسار
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - يحجب الإجراءات التالية
      easing_style: out

  # 2. التكبير مع التجاوز (ينفذ بعد الانزلاق)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. طفو مستمر (يبدأ بعد التكبير)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### مثال 2: زر تفاعلي معقد

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # صوت التحويم
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # تغيير بصري
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # نبض خفيف
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # استعادة البصري
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # صوت النقر
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # تسلسل الرسوم المتحركة
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # الأمر (ينفذ بعد الرسوم المتحركة)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### مثال 3: ودجت زخرفي برسوم متحركة متعددة

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # مدار دائري
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # الدوران أثناء المدار
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # توهج نابض
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## الخصائص المشتركة

تدعم جميع الرسوم المتحركة هذه الخصائص:

### type
نوع الإجراء (دائمًا `animation`).

### effect
اسم الرسم المتحرك (scale، rotate، pulse، إلخ).

### duration
المدة بالميلي ثانية.

```yaml
duration: 1000  # ثانية واحدة
```

### intensity
شدة الرسم المتحرك العامة (المعنى يختلف حسب النوع).

```yaml
intensity: 0.5  # نصف الشدة الافتراضية
```

### loop
هل يجب تكرار الرسم المتحرك إلى ما لا نهاية.

```yaml
loop: true  # رسم متحرك مستمر
loop: false # رسم متحرك واحد (الافتراضي)
```

### delay
التأخير قبل بدء الرسم المتحرك (بالميلي ثانية).

```yaml
delay: 500  # انتظر 500 مللي ثانية قبل البدء
```

### easing_style
نوع التسهيل لتنعيم الرسم المتحرك.

```yaml
easing_style: linear      # سرعة ثابتة
easing_style: in          # يتسارع في البداية
easing_style: out         # يتباطأ في النهاية
easing_style: in_out      # يتسارع ويتباطأ
```

### priority
أولوية الرسم المتحرك (تؤثر على المقاطعة).

```yaml
priority: true   # CRITICAL - لا يُقاطع أبدًا، يحجب الإجراءات التالية
priority: false  # INTERRUPTIBLE - يمكن مقاطعته (الافتراضي)
```

**ملاحظة**: الرسوم المتحركة المستمرة (`loop: true`) تكون دائمًا بأولوية BACKGROUND.

---

## دليل الاستخدام حسب السياق

### الرسوم المتحركة لـ on_menu_open

```yaml
on_menu_open:
  - effect: slide       # دخول منزلق
  - effect: zoom_in     # دخول مع تجاوز
  - effect: fade        # تلاشي ناعم للداخل
```

### الرسوم المتحركة لـ on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # زيادة الحجم
  - effect: pulse       # نبض خفيف
  - effect: glow        # توهج للتسليط
  - effect: wobble      # تمايل للانتباه
```

### الرسوم المتحركة لـ on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # ردود فعل الضغط
  - effect: bounce      # قفزة التأكيد
  - effect: shake       # اهتزاز التأثير
  - effect: flip        # القلب/الكشف
```

### الرسوم المتحركة المستمرة (الزخرفية)

```yaml
continuous-animations:
  - effect: float       # طفو ناعم
  - effect: rotate      # دوران ثابت
  - effect: orbit       # حركة مدارية
  - effect: spiral      # حلزوني زخرفي
  - effect: wave        # حركة موجية
  - effect: glow        # توهج نابض
```

---

## جدول المرجع السريع

| الرسم المتحرك | النوع | الاستخدام الرئيسي | حلقي؟ | الأولوية الافتراضية |
|---------------|-------|------------------|-------|---------------------|
| SCALE | تحويل | التحويم، النقر | لا | INTERRUPTIBLE |
| ROTATE | تحويل | زخرفي | نعم | BACKGROUND |
| TRANSLATE | تحويل | الحركة | لا | CRITICAL |
| PULSE | حركة | مستمر | نعم | BACKGROUND |
| BOUNCE | حركة | النقر | لا | INTERRUPTIBLE |
| SWING | حركة | التحويم | نعم | INTERRUPTIBLE |
| FLOAT | حركة | مستمر | نعم | BACKGROUND |
| SHAKE | حركة | النقر | لا | INTERRUPTIBLE |
| FADE | بصري | الدخول/الخروج | لا | CRITICAL |
| SLIDE | متقدم | الدخول | لا | CRITICAL |
| ZOOM_IN | متقدم | الدخول | لا | CRITICAL |
| SQUEEZE | متقدم | النقر | لا/نعم | INTERRUPTIBLE |
| FLIP | متقدم | الحالة | لا | CRITICAL |
| WOBBLE | متقدم | التحويم | نعم | BACKGROUND |
| ORBIT | متقدم | زخرفي | نعم | BACKGROUND |
| SPIRAL | متقدم | زخرفي | نعم | BACKGROUND |
| WAVE | متقدم | زخرفي | نعم | BACKGROUND |
| JIGGLE | متقدم | التحويم | لا | INTERRUPTIBLE |
| GLOW | متقدم | التسليط | نعم | BACKGROUND |

---

**آخر تحديث**: 2025-10-15
**إصدار الإضافة**: 2.0
**المؤلف**: Zodunix

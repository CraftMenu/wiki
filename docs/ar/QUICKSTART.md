# CraftMenu - البدء السريع

## دليل الخمس دقائق

هذا الدليل يأخذك من الصفر إلى قائمة تعمل في 5 دقائق.

---

## 1. التثبيت (1 دقيقة)

1. **التنزيل**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (تبعية مطلوبة)

2. **التثبيت**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **تشغيل الخادم**

4. **التحقق**:
   ```
   /cm info
   ```

---

## 2. إنشاء قائمتك الأولى (2 دقيقة)

1. **داخل اللعبة**، اذهب إلى الموقع المطلوب
2. نفذ:
   ```
   /cm create mymenu
   ```

3. **تم إنشاء القائمة!** الملف تم إنشاؤه في:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. إضافة الصور (1 دقيقة)

1. **إنشاء مجلد**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **إضافة صور PNG** (64x64 أو 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **توليد حزمة الموارد**:
   ```
   /cm zip
   ```

---

## 4. تكوين القائمة (1 دقيقة)

حرر `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lقائمتي الأولى'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # حيث أنشأتها
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # زر بسيط (باستخدام IMAGE مع أحداث hover/click)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← صورتك
        hover:
          type: image
          value: mymenu/button-hover.png # ← صورة التحويم
        fallback:
          type: text
          value: "اضغط هنا"               # إذا فشلت الصورة
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
          command: '[MESSAGE] &aلقد ضغطت على الزر!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # المؤشر
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← صورتك
        fallback:
          type: text
          value: "§f→"
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
          volume: 0.3
```

---

## 5. الاختبار

1. **إعادة التحميل**:
   ```
   /cm reload
   ```

2. **فتح القائمة**:
   ```
   /cm open mymenu
   ```

3. **حرك الماوس** للتحكم بالمؤشر
4. **اضغط** على الزر

---

## قائمة التحقق

- [ ] الإضافة مثبتة وتعمل
- [ ] القائمة تم إنشاؤها بـ `/cm create`
- [ ] الصور مضافة في `/images/mymenu/`
- [ ] حزمة الموارد تم توليدها بـ `/cm zip`
- [ ] القائمة مكونة في YAML
- [ ] القائمة تعمل بـ `/cm open mymenu`
- [ ] حزمة الموارد مطبقة على العميل

---

## المشاكل الشائعة

### "القائمة غير محملة"

```bash
/cm reload
/cm list  # تحقق إذا ظهرت القائمة
```

### المؤشر لا يظهر

**الحل**: تحقق أن المؤشر موجود في YAML ولديه visual مكون

### الصور تظهر "?"

```bash
/cm images scan    # تحقق إذا تم العثور على الصور
/cm zip            # أعد توليد حزمة الموارد
/cm reload         # أعد التحميل
```

### حزمة الموارد لا تتنزل

يحتاج اللاعب إلى:
1. التثبيت يدوياً: انسخ `/plugins/CraftMenu/craftmenu.zip` إلى `.minecraft/resourcepacks/`
2. أو قم بالتكوين في `server.properties` (يتطلب استضافة ويب)

---

## الخطوات التالية

1. [توثيق القائمة الكامل](MENU_CREATION.md)
3. [الميزات المتقدمة](FEATURES.md)

---

## موارد مفيدة

- **صور نموذجية**: ابحث عن "minecraft UI icons" أو أنشئ خاصتك
- **الأحجام الموصى بها**: 64x64، 128x128
- **التنسيق**: PNG مع الشفافية
- **أصوات Minecraft**: [القائمة الكاملة](https://minecraft.fandom.com/wiki/Sounds.json)

---

آخر تحديث: 2026-02-02

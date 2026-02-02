# دليل التثبيت

يغطي هذا الدليل تثبيت وتكوين CraftMenu على خادم Minecraft الخاص بك.

## المتطلبات الأساسية

قبل تثبيت CraftMenu، تأكد من أن لديك:

- خادم Minecraft يعمل بـ Paper أو Spigot أو Purpur 1.20.4+
- Java 17 أو أعلى مثبت
- إضافة PacketEvents مثبتة

## خطوات التثبيت

### 1. تحميل CraftMenu

قم بتحميل أحدث ملف JAR لـ CraftMenu من صفحة الإصدارات.

### 2. تثبيت الاعتماديات

تأكد من تثبيت PacketEvents في مجلد `plugins/` قبل CraftMenu.

### 3. تثبيت CraftMenu

ضع `CraftMenu.jar` في مجلد `plugins/` الخاص بالخادم.

### 4. تشغيل الخادم

شغّل الخادم. سيقوم CraftMenu بإنشاء ملفات التكوين الخاصة به:

```
plugins/CraftMenu/
|-- config.yml           # التكوين العام
|-- menus/              # قوالب القوائم
|   +-- template.yml    # قائمة المثال الافتراضية
|-- images/             # الصور المخصصة
|   +-- template/       # صور قائمة template
|-- sounds/             # الأصوات المخصصة
|   +-- template/       # أصوات قائمة template
+-- language/           # ملفات اللغة
```

### 5. توليد حزمة الموارد

شغّل `/cm hazma` لتوليد حزمة الموارد. هذا ينشئ:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. تكوين توزيع حزمة الموارد

لديك عدة خيارات:

**الخيار أ: حزمة موارد الخادم**
```properties
# في server.properties
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**الخيار ب: التوزيع اليدوي**
شارك ملف ZIP مع اللاعبين واطلب منهم تثبيته يدويًا.

**الخيار ج: استخدام إضافة حزمة الموارد**
استخدم إضافات مثل ItemsAdder أو Oraxen للتوزيع التلقائي.

## التكوين

### الإعدادات الأساسية

عدّل `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "ar_SA"          # ar_SA، en_US، أو pt_BR
    debug: false               # فعّل لاستكشاف الأخطاء

  resourcepack:
    auto-generate: true        # التوليد التلقائي عند البدء
    compression: true          # ضغط ملف ZIP
```

### إعدادات الأداء

```yaml
craftmenu:
  performance:
    async-loading: true        # تحميل القوائم بشكل غير متزامن
    cache-enabled: true        # تخزين قوالب القوائم مؤقتًا
    update-interval: 1         # عدد التكات بين التحديثات
```

## التحقق من التثبيت

1. شغّل `/cm musaada` لرؤية الأوامر المتاحة
2. شغّل `/cm qaima` لرؤية القوائم المحملة
3. شغّل `/cm iftah template` لاختبار القائمة الافتراضية

## الخطوات التالية

- [إنشاء أول قائمة لك](menu-creation.md)
- [تعرف على الودجات](widgets.md)
- [تكوين الأحداث](events.md)

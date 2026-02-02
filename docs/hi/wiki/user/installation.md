# इंस्टॉलेशन गाइड

यह गाइड आपके Minecraft सर्वर पर CraftMenu इंस्टॉल और कॉन्फ़िगर करने को कवर करती है।

## पूर्वापेक्षाएं

CraftMenu इंस्टॉल करने से पहले, सुनिश्चित करें कि आपके पास है:

- Paper, Spigot, या Purpur 1.20.4+ चलाने वाला Minecraft सर्वर
- Java 17 या उच्चतर इंस्टॉल
- PacketEvents प्लगइन इंस्टॉल

## इंस्टॉलेशन चरण

### 1. CraftMenu डाउनलोड करें

रिलीज़ पेज से नवीनतम CraftMenu JAR डाउनलोड करें।

### 2. डिपेंडेंसीज इंस्टॉल करें

CraftMenu से पहले सुनिश्चित करें कि PacketEvents आपके `plugins/` फोल्डर में इंस्टॉल है।

### 3. CraftMenu इंस्टॉल करें

`CraftMenu.jar` को अपने सर्वर के `plugins/` फोल्डर में रखें।

### 4. सर्वर शुरू करें

अपना सर्वर शुरू करें। CraftMenu अपनी कॉन्फ़िगरेशन फाइलें बनाएगा:

```
plugins/CraftMenu/
+-- config.yml           # ग्लोबल कॉन्फ़िगरेशन
+-- menus/              # मेन्यू टेम्पलेट्स
|   +-- template.yml    # डिफॉल्ट उदाहरण मेन्यू
+-- images/             # कस्टम इमेज
|   +-- template/       # टेम्पलेट मेन्यू के लिए इमेज
+-- sounds/             # कस्टम साउंड
|   +-- template/       # टेम्पलेट मेन्यू के लिए साउंड
+-- language/           # भाषा फाइलें
```

### 5. रिसोर्स पैक जनरेट करें

रिसोर्स पैक जनरेट करने के लिए `/cm paket` चलाएं। यह बनाता है:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. रिसोर्स पैक वितरण कॉन्फ़िगर करें

आपके पास कई विकल्प हैं:

**विकल्प A: सर्वर रिसोर्स पैक**
```properties
# server.properties में
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**विकल्प B: मैन्युअल वितरण**
खिलाड़ियों के साथ ZIP फाइल साझा करें और उन्हें मैन्युअल रूप से इंस्टॉल करने दें।

**विकल्प C: रिसोर्स पैक प्लगइन उपयोग करें**
स्वचालित वितरण के लिए ItemsAdder या Oraxen जैसे प्लगइन उपयोग करें।

## कॉन्फ़िगरेशन

### बेसिक सेटिंग्स

`plugins/CraftMenu/config.yml` संपादित करें:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "hi_IN"          # en_US, pt_BR, या hi_IN
    debug: false               # समस्या निवारण के लिए सक्षम करें

  resourcepack:
    auto-generate: true        # स्टार्टअप पर ऑटो-जनरेट
    compression: true          # ZIP फाइल कंप्रेस करें
```

### प्रदर्शन सेटिंग्स

```yaml
craftmenu:
  performance:
    async-loading: true        # मेन्यू असिंक्रोनस लोड करें
    cache-enabled: true        # मेन्यू टेम्पलेट्स कैश करें
    update-interval: 1         # अपडेट्स के बीच टिक्स
```

## इंस्टॉलेशन सत्यापन

1. उपलब्ध कमांड देखने के लिए `/cm madad` चलाएं
2. लोड किए गए मेन्यू देखने के लिए `/cm suchi` चलाएं
3. डिफॉल्ट मेन्यू टेस्ट करने के लिए `/cm kholo template` चलाएं

## अगले कदम

- [अपना पहला मेन्यू बनाएं](menu-creation.md)
- [विजेट्स के बारे में जानें](widgets.md)
- [इवेंट्स कॉन्फ़िगर करें](events.md)

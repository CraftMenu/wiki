# विजेट प्रकार

CraftMenu मेन्यू बनाने के लिए तीन प्रकार के विजेट्स समर्थित करता है।

## विजेट प्रकार अवलोकन

| प्रकार | विवरण | इंटरैक्टिव |
|--------|--------|------------|
| IMAGE | इमेज प्रदर्शित करता है | हाँ |
| TEXT | फॉर्मेटेड टेक्स्ट प्रदर्शित करता है | हाँ |
| CURSOR | माउस कर्सर | विशेष |

## IMAGE विजेट

बटन, बैकग्राउंड और डेकोरेटिव तत्वों के लिए उपयोग किया जाता है।

### बेसिक इमेज

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

### स्टेट्स के साथ इमेज

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

### स्टेट ओवरराइड्स

प्रत्येक स्टेट में ट्रांसफॉर्म और कोलिज़न ओवरराइड्स हो सकते हैं:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # होवर पर थोड़ा बड़ा
```

## TEXT विजेट

PlaceholderAPI समर्थन के साथ फॉर्मेटेड टेक्स्ट प्रदर्शित करता है।

### बेसिक टेक्स्ट

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bसर्वर में आपका स्वागत है!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### प्लेसहोल्डर के साथ टेक्स्ट

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7खिलाड़ी: &f%player_name%\n&7लेवल: &a%player_level%"
      text-size: 0.8
```

### मल्टी-लाइन टेक्स्ट

लाइन ब्रेक के लिए `\n` उपयोग करें:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "लाइन 1\nलाइन 2\nलाइन 3"
```

## CURSOR विजेट

कर्सर खिलाड़ी के माउस मूवमेंट को फॉलो करता है।

### बेसिक कर्सर

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

## ट्रांसफॉर्म प्रॉपर्टीज

सभी विजेट्स ट्रांसफॉर्म प्रॉपर्टीज समर्थित करते हैं:

```yaml
transform:
  position:
    x: 0.0    # क्षैतिज ऑफसेट
    y: 0.0    # ऊर्ध्वाधर ऑफसेट
    z: 0.0    # गहराई ऑफसेट
  size:
    x: 0.1    # चौड़ाई स्केल
    y: 0.1    # ऊंचाई स्केल
    z: 0.1    # गहराई स्केल
  rotation:
    pitch: 0  # X-अक्ष रोटेशन
    yaw: 0    # Y-अक्ष रोटेशन
    roll: 0   # Z-अक्ष रोटेशन
```

## कोलिज़न प्रॉपर्टीज

कोलिज़न डिटेक्शन सक्षम या कस्टमाइज़ करें:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## विजेट क्रम

विजेट्स YAML फाइल में दिखाई देने के क्रम में रेंडर होते हैं। बाद के विजेट्स पहले वाले के सामने दिखाई देते हैं।

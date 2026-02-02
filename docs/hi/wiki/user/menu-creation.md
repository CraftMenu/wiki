# मेन्यू बनाना

यह गाइड CraftMenu में कस्टम मेन्यू बनाने को कवर करती है।

## मेन्यू संरचना

मेन्यू `plugins/CraftMenu/menus/` में YAML फाइलों में परिभाषित किए जाते हैं।

### बेसिक मेन्यू टेम्पलेट

```yaml
menu:
  name: my_menu
  title: "&b&lमेरा कस्टम मेन्यू"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # विजेट परिभाषाएं यहाँ
```

## मेन्यू प्रॉपर्टीज

### बेसिक प्रॉपर्टीज

| प्रॉपर्टी | प्रकार | विवरण |
|----------|--------|--------|
| `name` | String | मेन्यू के लिए अद्वितीय पहचानकर्ता |
| `title` | String | प्रदर्शन शीर्षक (रंग कोड समर्थित) |
| `main` | Boolean | क्या यह मुख्य मेन्यू है? |
| `open-on-join` | Boolean | जब खिलाड़ी वर्ल्ड में शामिल हो तो ऑटो-ओपन |
| `open-on-teleport` | Boolean | जब खिलाड़ी वर्ल्ड में टेलीपोर्ट करे तो ऑटो-ओपन |

### लोकेशन

```yaml
location:
  world: world               # वर्ल्ड का नाम
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # क्षैतिज रोटेशन (-180 से 180)
    pitch: 0.0               # ऊर्ध्वाधर रोटेशन (-90 से 90)
```

### सेटिंग्स

```yaml
settings:
  cursor-sensitivity: 1.0    # माउस संवेदनशीलता (1.0 = सामान्य)
  max-yaw-offset: 61.0       # डिग्री में क्षैतिज सीमा
  max-pitch-offset: 36.0     # डिग्री में ऊर्ध्वाधर सीमा
  camera-lock-enabled: true  # जब मेन्यू खुला हो तो खिलाड़ी कैमरा लॉक करें
  camera-lock-strength: 0.4  # लॉक की ताकत (0.0-1.0)
```

### विजिबिलिटी सेटिंग्स

```yaml
settings:
  visibility:
    hide_players: false      # अन्य खिलाड़ियों को छुपाएं
    hide_mobs: false         # मॉब्स को छुपाएं
    hide_items: false        # गिराए गए आइटम छुपाएं
    whitelist_players: []    # वे खिलाड़ी जो दृश्य रहें
```

## विजेट्स जोड़ना

विजेट्स आपके मेन्यू के इंटरैक्टिव तत्व हैं।

### इमेज विजेट

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### टेक्स्ट विजेट

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lस्वागत है!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## कमांड के साथ त्वरित बनाएं

अपने वर्तमान स्थान पर त्वरित रूप से मेन्यू बनाने के लिए `/cm banana <name>` उपयोग करें।

## कस्टम इमेज जोड़ना

1. एक फोल्डर बनाएं: `plugins/CraftMenu/images/my_menu/`
2. इस फोल्डर में अपनी PNG इमेज जोड़ें
3. रिसोर्स पैक पुनः जनरेट करने के लिए `/cm paket` चलाएं
4. इमेज को `my_menu/image_name.png` के रूप में संदर्भित करें

## अपना मेन्यू टेस्ट करना

1. अपनी YAML फाइल सेव करें
2. `/cm punarlod` चलाएं
3. `/cm kholo my_menu` चलाएं

## सर्वोत्तम प्रथाएं

- मेन्यू के अनुसार इमेज व्यवस्थित करने के लिए सबफोल्डर उपयोग करें
- इमेज आकार उचित रखें (बटनों के लिए अधिकतम 128x128)
- डिप्लॉय करने से पहले मेन्यू का अच्छी तरह परीक्षण करें
- वर्णनात्मक विजेट नामों का उपयोग करें
- जटिल कॉन्फ़िगरेशन पर टिप्पणी करें

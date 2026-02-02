# CraftMenu में मेनू बनाना

## विषय सूची
1. [कमांड के माध्यम से निर्माण](#कमांड-के-माध्यम-से-निर्माण)
2. [YAML संरचना](#yaml-संरचना)
3. [उपलब्ध विजेट्स](#उपलब्ध-विजेट्स)
4. [ट्रांसफॉर्म (पोजिशनिंग)](#ट्रांसफॉर्म-पोजिशनिंग)
5. [कोलिज़न](#कोलिज़न)
6. [इवेंट्स और एक्शन](#इवेंट्स-और-एक्शन)
7. [व्यावहारिक उदाहरण](#व्यावहारिक-उदाहरण)

---

## कमांड के माध्यम से निर्माण

### अनुशंसित विधि

1. **गेम में प्रवेश करें** और उस स्थान पर जाएं जहां आप मेनू चाहते हैं
2. **उस दिशा में देखें** जहां खिलाड़ियों को मेनू खोलते समय देखना चाहिए
3. **चलाएं**:
   ```
   /cm create menu_name
   ```

मेनू आपके वर्तमान स्थान और रोटेशन के साथ बनाया जाएगा!

### जनरेट की गई संरचना

```
/plugins/CraftMenu/menus/menu_name.yml
```

**डिफ़ॉल्ट टेम्प्लेट में शामिल है**:
- FOV चेतावनी विजेट (हटाया जा सकता है)
- कॉन्फ़िगर किया गया कर्सर
- ऑप्टिमाइज़ सेटिंग्स
- बाउंडरी फीडबैक
- **कर्सर डिफ़ॉल्ट रूप से TEXT का उपयोग करता है** - टेक्सचर जोड़ने के बाद IMAGE में बदलें

---

## YAML संरचना

### मुख्य अनुभाग

```yaml
menu:
  name: String              # मेनू का नाम
  title: String             # शीर्षक (&codes का समर्थन करता है)
  main: boolean             # मुख्य मेनू? (भविष्य के लिए)
  location:                 # विश्व स्थान
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # सेटिंग्स
    # ... (नीचे देखें)
  widgets:                  # मेनू विजेट्स
    widget_name:
      # ... (नीचे देखें)
```

### विस्तृत सेटिंग्स

```yaml
settings:
  # ऑडियो
  background-music: "template/background.ogg"  # बैकग्राउंड म्यूज़िक (वैकल्पिक)

  # कर्सर मूवमेंट
  cursor-sensitivity: 1.0          # संवेदनशीलता (0.1 - 5.0)
  max-yaw-offset: 61.0             # डिग्री में क्षैतिज सीमा
  max-pitch-offset: 36.0           # डिग्री में ऊर्ध्वाधर सीमा
  mount-time: 100                  # टिक्स में माउंट समय

  # मेनू पोजिशनिंग
  distance-multiplier: -0.01       # दूरी गुणक
  menu-distance: 0.3               # मेनू दूरी

  # परफॉर्मेंस
  debug-mode: false                # डीबग मोड
  update-rate: 1                   # अपडेट दर
  collision-detection: true        # सक्रिय कोलिज़न डिटेक्शन

  # कैमरा
  camera-lock-enabled: true        # कैमरा लॉक
  camera-lock-strength: 0.4        # लॉक की ताकत (0.0-1.0)

  # बाउंडरी फीडबैक
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lकर्सर सीमा तक पहुंच गया!"
```

---

## उपलब्ध विजेट्स

### BUTTON

होवर और क्लिक के साथ इंटरैक्टिव बटन।

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ खेलें"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

स्थिर इमेज (होवर हो सकता है)।

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # वैकल्पिक
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # कोई इंटरैक्शन नहीं
```

### TEXT

फॉर्मेट किया गया टेक्स्ट।

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lस्वागत है
        &7सर्वर में
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # टेक्स्ट आकार
  shadow: true              # छाया
  background-color: '#000000'  # बैकग्राउंड रंग (hex)
```

### CURSOR

माउस-नियंत्रित कर्सर (**प्रति मेनू केवल 1**)।

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # उच्च z = सामने
    size: {x: 0.005, y: 0.005, z: 0.005}

  # कर्सर सेटिंग्स
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # एनिमेशन
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # कोलिज़न क्षेत्र
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## ट्रांसफॉर्म (पोजिशनिंग)

### पोज़िशन

मेनू स्पॉन पॉइंट के सापेक्ष 3D स्थान में स्थिति।

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: बाएं (-) / दाएं (+)
- **y**: नीचे (-) / ऊपर (+)
- **z**: दूर (-) / पास (+)

**सुझाव**: z=0.1 बैकग्राउंड के लिए अच्छा है, z=1.0 कर्सर के लिए (हमेशा दिखाई देता है)

### आकार

विजेट का आकार।

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**विशिष्ट स्केल**:
- छोटा बटन: `0.015`
- मध्यम बटन: `0.02`
- बड़ा बटन: `0.03`
- लोगो: `0.04-0.05`
- कर्सर: `0.005`

### रोटेशन (वैकल्पिक)

डिग्री में रोटेशन।

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**नोट**: आमतौर पर आवश्यक नहीं (ViewFrame पहले से समायोजित करता है)

---

## कोलिज़न

### बुनियादी कॉन्फ़िगरेशन

```yaml
collision:
  enabled: true                     # कोलिज़न सक्षम
  position: {x: 0, y: 0, z: 0.1}   # वैकल्पिक: पोज़िशन ओवरराइड
  size: {x: 0.08, y: 0.04, z: 0.02} # बॉक्स आकार
  rotation: {pitch: 0, yaw: 0, roll: 0}  # वैकल्पिक
```

### विज़ुअल डीबग

```yaml
collision:
  debug:
    enabled: true     # पार्टिकल्स दिखाएं
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, आदि
    size: 0.005       # पार्टिकल आकार
```

**ग्लोबली सक्षम करें**:
```
/cm debug particles toggle
/cm debug particles collision
```

### कोलिज़न टिप्स

1. **विज़ुअल आकार ≠ कोलिज़न आकार**
   - आसान क्लिक के लिए कोलिज़न बड़ा हो सकता है
   - उदाहरण: visual 0.02, collision 0.08x0.04

2. **कोलिज़न पोज़िशन**
   - अगर निर्दिष्ट नहीं है, transform.position का उपयोग करता है
   - अलग क्षेत्र चाहिए तो निर्दिष्ट करें

3. **Collision-area (कर्सर)**
   - कर्सर `collision` के बजाय `collision-area` का उपयोग करता है
   - कारण: कर्सर का विशेष व्यवहार होता है

---

## इवेंट्स और एक्शन

### उपलब्ध इवेंट्स

| इवेंट | कब फायर होता है | विजेट्स |
|-------|-----------------|---------|
| `on_menu_open` | मेनू खुलता है | सभी |
| `on_cursor_hover` | कर्सर प्रवेश करता है | Button, Image, Text |
| `on_cursor_hover_exit` | कर्सर निकलता है | Button, Image, Text |
| `on_cursor_click` | विजेट क्लिक | Button |
| `on_click_any` | कोई भी क्लिक | Cursor |

### उपलब्ध एक्शन

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, आदि
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # या "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # वैकल्पिक, ms में
```

**विशेष कमांड**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &colors के साथ टेक्स्ट`
- `[CLOSE]`
- `[PLAY_MUSIC] path/sound.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: widget_name
```

---

## व्यावहारिक उदाहरण

### ध्वनि के साथ सरल बटन

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
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
      command: '[MESSAGE] &aबटन क्लिक किया!'
```

### टेलीपोर्ट के साथ बटन

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eटेलीपोर्ट हो रहा है...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### टॉगल बटन (ऑन/ऑफ)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
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
      command: '[MESSAGE] &cअक्षम किया!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aसक्षम किया!'
```

### क्लिक करने योग्य टेक्स्ट विजेट

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lचेतावनी
        &7खारिज करने के लिए क्लिक करें
    hover:
      type: text
      value: |-
        &c&lचेतावनी
        &e&oखारिज करने के लिए क्लिक करें
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## सर्वोत्तम अभ्यास

1. **परतों (z) के अनुसार व्यवस्थित करें**:
   - z=0.05: बैकग्राउंड
   - z=0.1: बटन
   - z=0.15: ओवरले
   - z=1.0: कर्सर

2. **विजेट्स को वर्णनात्मक नाम दें**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **हमेशा fallback शामिल करें**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "टेक्स्ट"}
   ```

4. **कोलिज़न visual से बड़ा**:
   - Visual: 0.02
   - Collision: 0.08x0.04 (क्लिक करना आसान)

5. **जब संभव हो Minecraft ध्वनियों का उपयोग करें**:
   - रिसोर्स पैक की आवश्यकता नहीं
   - अतिरिक्त कॉन्फ़िगरेशन के बिना काम करता है

6. **क्रमिक रूप से परीक्षण करें**:
   - एक समय में 1 विजेट जोड़ें
   - `/cm reload` अक्सर उपयोग करें
   - हर इंटरैक्शन का परीक्षण करें

---

अंतिम अपडेट: 2026-02-02

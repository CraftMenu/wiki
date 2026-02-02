# CraftMenu सुविधाएं

## विषय सूची
1. [एकीकृत ध्वनि प्रणाली](#एकीकृत-ध्वनि-प्रणाली)
2. [विजेट इवेंट्स](#विजेट-इवेंट्स)
3. [स्टेट सिस्टम](#स्टेट-सिस्टम)
4. [कॉन्फ़िगर करने योग्य बाउंडरी फीडबैक](#कॉन्फ़िगर-करने-योग्य-बाउंडरी-फीडबैक)
5. [विशेष कमांड](#विशेष-कमांड)

---

## एकीकृत ध्वनि प्रणाली

सभी ध्वनि फ़ील्ड अब दो प्रकार का समर्थन करती हैं:

### Minecraft ध्वनियां

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # मूल Minecraft ध्वनि
  volume: 0.8
  pitch: 1.0
```

**Minecraft ध्वनि उदाहरण**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### कस्टम ध्वनियां (रिसोर्स पैक)

```yaml
- action: sound
  file: "template/click.ogg"         # स्वचालित रूप से हल
  # या
  file: "craftmenu:template/click"   # स्पष्ट रूप से नेमस्पेस के साथ
  volume: 1.0
  pitch: 1.2
```

**कस्टम ध्वनियों के लिए कदम**:
1. `.ogg` जोड़ें `/plugins/CraftMenu/sounds/template/click.ogg` में
2. `/cm zip` चलाएं
3. रिसोर्स पैक स्वचालित रूप से ध्वनि शामिल करेगा

---

## विजेट इवेंट्स

### on_menu_open

मेनू खुलने पर स्वचालित रूप से फायर होता है। बैकग्राउंड म्यूज़िक के लिए उपयोगी।

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

जब कर्सर विजेट क्षेत्र में प्रवेश करता है।

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

जब कर्सर विजेट क्षेत्र से बाहर निकलता है।

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

जब विजेट क्लिक होता है।

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (केवल कर्सर)

किसी भी क्लिक पर फायर होता है, विजेट के बाहर भी।

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## स्टेट सिस्टम

एकाधिक व्यवहारों वाले विजेट्स की अनुमति देता है (जैसे, टॉगल बटन ऑन/ऑफ)।

### डिफ़ॉल्ट स्टेट्स

- `normal`: प्रारंभिक स्टेट
- `hover`: विजेट पर माउस
- `pressed`: विजेट क्लिक
- `disabled`: विजेट अक्षम
- `fallback`: जब visual लोड नहीं होता

### कस्टम स्टेट्स

आप अपने स्टेट्स बना सकते हैं:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # ध्वनि चालू
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # ध्वनि बंद (कस्टम स्टेट)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # बंद होने पर होवर (कस्टम स्टेट)
      type: image
      value: template/sound-mute-hover.png
```

### स्टेट एक्शन

#### toggle_state

स्टेट्स की सूची के बीच टॉगल करता है।

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # स्टेट्स के बीच चक्र
```

#### visual_change_conditional

केवल तभी visual बदलता है जब वर्तमान स्टेट X है।

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # अगर स्टेट "normal" है
  to: hover                      # "hover" में बदलें
- action: visual_change_conditional
  if_state: disabled            # अगर स्टेट "disabled" है
  to: disabled_hover             # "disabled_hover" में बदलें
```

#### command_conditional

केवल तभी कमांड चलाता है जब स्टेट X है।

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # अगर "disabled" हो गया
  command: '[STOP_MUSIC]'        # म्यूज़िक बंद करें
- action: command_conditional
  if_state: normal              # अगर "normal" हो गया
  command: '[PLAY_MUSIC] template/background.ogg'  # म्यूज़िक बजाएं
```

### पूर्ण उदाहरण: टॉगल बटन

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## कॉन्फ़िगर करने योग्य बाउंडरी फीडबैक

जब कर्सर मूवमेंट सीमा तक पहुंचता है तब फीडबैक कस्टमाइज़ करता है।

### कॉन्फ़िगरेशन

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # सीमा पर ध्वनि
      volume: 0.5                          # वॉल्यूम 0.0-1.0
      pitch: 0.6                           # पिच 0.5-2.0
      message: "&c&lकर्सर सीमा तक पहुंच गया!" # एक्शन बार में संदेश
```

### अनुशंसित ध्वनियां

- `minecraft:ui.button.click` - हल्का क्लिक
- `minecraft:block.note_block.bass` - कम टोन
- `craftmenu:template/warning.ogg` - कस्टम ध्वनि

---

## विशेष कमांड

`action: command` के साथ उपयोग किए जाते हैं।

### [TELEPORT]

खिलाड़ी को टेलीपोर्ट करता है।

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

खिलाड़ी को संदेश भेजता है।

```yaml
- action: command
  command: '[MESSAGE] &aगेम में आपका स्वागत है!'
  delay: 500  # भेजने से पहले 500ms प्रतीक्षा
```

### [CLOSE]

मेनू बंद करता है।

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # 1 सेकंड बाद बंद करें
```

### [PLAY_MUSIC]

विजेट के लिए म्यूज़िक बजाता है (प्रति विजेट केवल एक ध्वनि)।

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**नेमस्पेस का समर्थन करता है**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

इस विजेट के लिए वर्तमान में बज रही ध्वनि बंद करता है।

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**महत्वपूर्ण**: `[STOP_MUSIC]` केवल इस विजेट की ध्वनि बंद करता है, अन्य विजेट्स या ग्लोबल ध्वनियों को प्रभावित नहीं करता।

**तकनीकी नोट**: कमांड आंतरिक रूप से `player.stopAllSounds()` का उपयोग करता है क्योंकि `player.stopSound(key)` कस्टम रिसोर्स पैक ध्वनियों के साथ काम नहीं करता। हालांकि, यह केवल विशिष्ट विजेट द्वारा ट्रिगर होता है।

### [OPEN_URL]

खिलाड़ी के ब्राउज़र में URL खोलता है (पुष्टि आवश्यक)।

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## स्वचालित ध्वनि बंद

**जब मेनू बंद होता है**, खिलाड़ी के लिए सभी ध्वनियां स्वचालित रूप से बंद हो जाती हैं। इसमें शामिल है:

- `[PLAY_MUSIC]` से बजी बैकग्राउंड म्यूज़िक
- विजेट hover/click ध्वनियां
- बंद करते समय सक्रिय कोई भी ध्वनि

### यह कैसे काम करता है

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← close() से पहले कॉल किया जाता है
}
menuInstance.close();
```

### तकनीकी सीमा

सिस्टम `player.stopAllSounds()` का उपयोग करता है क्योंकि:
- `player.stopSound(key)` कस्टम रिसोर्स पैक ध्वनियों के साथ **काम नहीं करता**
- `player.stopSound(key, category)` **भी काम नहीं करता**
- `stopAllSounds()` **एकमात्र विश्वसनीय समाधान** है

इसका मतलब है मेनू बंद करते समय **सभी** खिलाड़ी ध्वनियां बंद हो जाती हैं, न केवल मेनू ध्वनियां। यह Minecraft/Bukkit की सीमा है, CraftMenu की नहीं।

### विकल्प: मैन्युअल नियंत्रण

अगर आप स्वचालित रूप से ध्वनियां बंद नहीं करना चाहते, मेनू में टॉगल बटन का उपयोग करें:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # मैन्युअली म्यूज़िक बंद करें
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## विज़ुअल एक्शन

### visual_change

बिना शर्त visual स्टेट बदलता है।

```yaml
- action: visual_change
  to: hover
```

### scale

अस्थायी रूप से विजेट स्केल एनिमेट करता है।

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # आकार का 120%
  duration: 300                     # मिलीसेकंड में अवधि
```

### scale_reset

स्केल को मूल आकार पर रीसेट करता है।

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

विजेट को पूरी तरह से हटाता है (visual, collision, ध्वनियां)।

```yaml
- action: hide_widget
  widget: fov_warning  # छिपाने के लिए विजेट का नाम
```

**नोट**: छिपा हुआ विजेट मेनू दोबारा खोले बिना पुनर्प्राप्त नहीं किया जा सकता।

---

## पूर्ण उदाहरण: सभी सुविधाओं के साथ मेनू

```yaml
menu:
  name: complete_example
  title: '&b&lपूर्ण मेनू उदाहरण'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cकर्सर किनारे तक पहुंच गया!"

  widgets:
    # बैकग्राउंड म्यूज़िक वाला बटन
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # पूर्ण फीडबैक के साथ एक्शन बटन
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aगेम शुरू हो रहा है...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # ध्वनि फीडबैक के साथ कर्सर
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
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
          volume: 0.4
          pitch: 1.0
```

---

अंतिम अपडेट: 2026-02-02
प्लगइन संस्करण: 2.0

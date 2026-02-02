# इवेंट सिस्टम

CraftMenu विजेट्स के साथ उपयोगकर्ता इंटरैक्शन हैंडल करने के लिए इवेंट सिस्टम का उपयोग करता है।

## इवेंट प्रकार

| इवेंट | ट्रिगर | उपलब्धता |
|-------|--------|----------|
| `on_menu_open` | मेन्यू खुलता है | सभी विजेट्स |
| `on_cursor_hover` | कर्सर विजेट में प्रवेश करता है | IMAGE, TEXT |
| `on_cursor_hover_exit` | कर्सर विजेट से बाहर निकलता है | IMAGE, TEXT |
| `on_cursor_click` | विजेट क्लिक किया जाता है | IMAGE, TEXT |
| `on_click_any` | कोई भी क्लिक | केवल CURSOR |

## बेसिक इवेंट संरचना

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &aआपने क्लिक किया!"
```

## एक्शन प्रकार

### साउंड एक्शन

ध्वनि प्रभाव बजाता है:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Minecraft साउंड
  volume: 1.0                       # 0.0 से 1.0
  pitch: 1.0                        # 0.5 से 2.0
```

कस्टम साउंड:
```yaml
- action: sound
  file: template/click.ogg         # कस्टम साउंड फाइल
```

### एनिमेशन एक्शन

एनिमेशन ट्रिगर करता है:

```yaml
- action: animation
  effect: scale                    # एनिमेशन प्रकार
  duration: 200                    # मिलीसेकंड में अवधि
  scale: {x: 1.2, y: 1.2, z: 1.2}  # लक्ष्य स्केल
  easing_style: ease_out           # ईज़िंग फंक्शन
  priority: false                  # अन्य एक्शन ब्लॉक करें?
```

### कमांड एक्शन

कमांड निष्पादित करता है:

```yaml
- action: command
  command: "[MESSAGE] नमस्ते!"      # विशेष कमांड
  delay: 0                         # मिलीसेकंड में विलंब
```

**विशेष कमांड:**
- `[MESSAGE] text` - खिलाड़ी को संदेश भेजें
- `[TELEPORT] world x y z yaw pitch` - खिलाड़ी को टेलीपोर्ट करें
- `[CLOSE]` - मेन्यू बंद करें
- `[PLAY_MUSIC] path/file.ogg` - बैकग्राउंड म्यूज़िक बजाएं
- `[STOP_MUSIC]` - म्यूज़िक बंद करें
- `[OPEN_URL] https://...` - URL खोलें (क्लिक करने योग्य)
- `[PLAYER] /command` - खिलाड़ी के रूप में कमांड चलाएं
- `[CONSOLE] /command` - कंसोल के रूप में कमांड चलाएं

### स्टेट एक्शन

विजेट स्टेट्स बदलें:

```yaml
# स्टेट्स के बीच टॉगल करें
- action: toggle_state
  states: [normal, disabled]

# विशिष्ट स्टेट सेट करें
- action: set_state
  state: disabled
```

### विजुअल चेंज एक्शन

विजेट दिखावट बदलें:

```yaml
- action: visual_change
  to: hover

# सशर्त परिवर्तन
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### विजेट छुपाएं एक्शन

विजेट को दृश्य से हटाएं:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### एनिमेशन रोकें एक्शन

चल रहे एनिमेशन रोकें:

```yaml
- action: stop_animation
  animation_type: rotate          # रोकने के लिए एनिमेशन
```

## इवेंट निष्पादन क्रम

एक्शन सूचीबद्ध क्रम में निष्पादित होते हैं। सर्वोत्तम परिणामों के लिए:

1. ध्वनि प्रभाव (तत्काल फीडबैक)
2. स्टेट परिवर्तन
3. कमांड
4. एनिमेशन (विलंब हो सकता है)

## प्राथमिकता एनिमेशन

एनिमेशन पूरा होने तक अन्य एक्शन ब्लॉक करने के लिए `priority: true` उपयोग करें:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # बाद के एक्शन ब्लॉक करता है
    - action: command
      command: "[MESSAGE] हो गया!"  # एनिमेशन के बाद निष्पादित होता है
```

# एनिमेशन सिस्टम

CraftMenu 6 ईज़िंग फंक्शन के साथ 19 एनिमेशन प्रकारों के साथ एक शक्तिशाली एनिमेशन सिस्टम प्रदान करता है।

## एनिमेशन प्रकार

### मूवमेंट एनिमेशन

| प्रकार | विवरण |
|--------|--------|
| `translate` | विजेट पोजीशन मूव करें |
| `bounce` | बाउंसिंग इफेक्ट |
| `float` | हल्का ऊपर/नीचे फ्लोटिंग |
| `orbit` | सर्कुलर ऑर्बिट मोशन |

### रोटेशन एनिमेशन

| प्रकार | विवरण |
|--------|--------|
| `rotate` | निरंतर रोटेशन |
| `swing` | पेंडुलम स्विंगिंग |
| `flip` | 180-डिग्री फ्लिप |
| `wobble` | वॉबली रोटेशन |
| `spiral` | स्पाइरल मोशन |

### स्केल एनिमेशन

| प्रकार | विवरण |
|--------|--------|
| `scale` | आकार बदलें |
| `pulse` | लयबद्ध पल्सिंग |
| `squeeze` | कंप्रेस/स्ट्रेच |
| `zoom_in` | ज़ूम इफेक्ट |

### विजुअल एनिमेशन

| प्रकार | विवरण |
|--------|--------|
| `fade` | ऑपेसिटी फेड |
| `glow` | ग्लोइंग इफेक्ट |
| `shake` | शेकिंग मोशन |
| `jiggle` | जिग्लिंग मोशन |
| `wave` | वेव मोशन |

## बेसिक एनिमेशन उपयोग

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## एनिमेशन प्रॉपर्टीज

### सामान्य प्रॉपर्टीज

```yaml
- action: animation
  effect: pulse           # एनिमेशन प्रकार (आवश्यक)
  duration: 1000          # मिलीसेकंड में अवधि
  easing_style: ease_out  # ईज़िंग फंक्शन
  intensity: 1.0          # इफेक्ट तीव्रता
  priority: false         # अन्य एक्शन ब्लॉक करें?
```

### इफेक्ट-विशिष्ट प्रॉपर्टीज

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # डिग्री
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = फेड आउट, false = फेड इन
```

## ईज़िंग फंक्शन

| ईज़िंग | विवरण |
|--------|--------|
| `linear` | स्थिर गति |
| `ease_in` | धीरे शुरू |
| `ease_out` | धीरे समाप्त |
| `ease_in_out` | धीरे शुरू और समाप्त |
| `bounce` | बाउंसी इफेक्ट |
| `elastic` | स्प्रिंगी इफेक्ट |

### ईज़िंग उदाहरण

```yaml
# स्मूथ होवर इफेक्ट
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# बाउंसी क्लिक फीडबैक
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## एनिमेशन प्राथमिकता

अन्य एक्शन से पहले एनिमेशन पूरा होना सुनिश्चित करने के लिए `priority: true` उपयोग करें:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # अगला एक्शन ब्लॉक करता है

    - action: command
      command: "[CLOSE]"      # एनिमेशन का इंतज़ार करता है
```

## एनिमेशन रोकना

```yaml
- action: stop_animation
  animation_type: rotate      # विशिष्ट प्रकार रोकें
  # या
  type: all                   # सभी एनिमेशन रोकें
```

## निरंतर एनिमेशन

विजेट कॉन्फ़िग में लगातार चलने वाले एनिमेशन परिभाषित करें:

```yaml
widgets:
  spinning_icon:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## सर्वोत्तम प्रथाएं

1. रेस्पॉन्सिव फीडबैक के लिए अवधि 500ms से कम रखें
2. होवर इफेक्ट के लिए `ease_out` उपयोग करें
3. क्लिक फीडबैक के लिए `bounce` उपयोग करें
4. एक विजेट पर कई एक साथ एनिमेशन से बचें
5. विभिन्न हार्डवेयर पर एनिमेशन टेस्ट करें

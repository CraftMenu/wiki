# संपूर्ण एनिमेशन गाइड - CraftMenu

यह दस्तावेज़ CraftMenu में उपलब्ध सभी एनिमेशन प्रकारों को व्यावहारिक YAML उपयोग उदाहरणों के साथ प्रस्तुत करता है।

---

## विषय सूची

1. [बुनियादी एनिमेशन](#बुनियादी-एनिमेशन)
2. [मूवमेंट एनिमेशन](#मूवमेंट-एनिमेशन)
3. [उन्नत एनिमेशन](#उन्नत-एनिमेशन)
4. [एनिमेशन संयोजन](#एनिमेशन-संयोजन)
5. [सामान्य गुण](#सामान्य-गुण)

---

## बुनियादी एनिमेशन

### SCALE - आकार परिवर्तन

X, Y, Z अक्षों पर विजेट का आकार बदलता है।

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # मूल आकार का 120%
    easing_style: out
```

**गुण**:
- `scaleX`: X अक्ष पर स्केल (डिफ़ॉल्ट: intensity)
- `scaleY`: Y अक्ष पर स्केल (डिफ़ॉल्ट: intensity)
- `scaleZ`: Z अक्ष पर स्केल (डिफ़ॉल्ट: intensity)

---

### ROTATE - रोटेशन

X, Y, Z अक्षों के चारों ओर विजेट को घुमाता है।

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Y अक्ष पर पूर्ण रोटेशन
    easing_style: in_out
```

**गुण**:
- `rotationX`: डिग्री में X अक्ष पर रोटेशन
- `rotationY`: डिग्री में Y अक्ष पर रोटेशन
- `rotationZ`: डिग्री में Z अक्ष पर रोटेशन

---

### TRANSLATE - ट्रांसलेशन

विजेट को नई स्थिति में ले जाता है।

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # ब्लॉक में विस्थापन
    easing_style: out
```

**गुण**:
- `offsetX`: X अक्ष पर विस्थापन
- `offsetY`: Y अक्ष पर विस्थापन
- `offsetZ`: Z अक्ष पर विस्थापन

---

### FADE - फेड इन/आउट

विजेट की अपारदर्शिता/दृश्यता को नियंत्रित करता है।

```yaml
# फेड आउट (गायब)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = फेड आउट, false = फेड इन
    easing_style: in

# फेड इन (प्रकट)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**गुण**:
- `fadeOut`: गायब होने के लिए true, प्रकट होने के लिए false

---

## मूवमेंट एनिमेशन

### PULSE - धड़कन

लयबद्ध स्केलिंग के साथ श्वसन/दिल की धड़कन प्रभाव।

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # निरंतर एनिमेशन
    easing_style: in_out
```

---

### BOUNCE - उछाल

ऊर्ध्वाधर रूप से गेंद उछलने की भौतिकी का अनुकरण करता है।

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # कूदने की ऊंचाई
    easing_style: out
```

---

### SWING - पेंडुलम स्विंग

पेंडुलम/झूले की गति।

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # स्विंग आयाम
    loop: true
    easing_style: in_out
```

---

### FLOAT - तैरना

चिकनी ऊर्ध्वाधर ऊपर और नीचे गति।

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # तैरने की ऊंचाई
    loop: true
    easing_style: in_out
```

---

### SHAKE - कंपन

तेज और यादृच्छिक कंपन।

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # कंपन तीव्रता
    easing_style: linear
```

---

### JIGGLE - लोचदार कंपन

लोचदार प्रभाव के साथ नरम और अधिक नियंत्रित हिलना।

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # कंपन आयाम
    easing_style: out
```

---

## उन्नत एनिमेशन

### SLIDE - स्क्रीन से बाहर से स्लाइड

विजेट स्क्रीन के बाहर से स्लाइड करते हुए प्रवेश करता है।

```yaml
# बाएं से स्लाइड
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # ब्लॉक में दूरी
    easing_style: out

# ऊपर से स्लाइड
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**गुण**:
- `direction`: प्रवेश दिशा (left, right, top, bottom, front, back)
- `distance`: ब्लॉक में प्रारंभिक दूरी (डिफ़ॉल्ट: intensity * 2.0)

**सामान्य उपयोग**: CRITICAL प्राथमिकता के साथ `on_menu_open` एनिमेशन के लिए आदर्श।

---

### ZOOM_IN - ओवरशूट के साथ प्रवेश

"ओवरशूट" (अधिक जाता है और वापस आता है) के साथ 0 से 1 तक स्केल।

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # 1.0 पर वापस आने से पहले अधिकतम स्केल
    easing_style: out
```

**गुण**:
- `overshoot`: 1.0 पर स्थिर होने से पहले अधिकतम स्केल (डिफ़ॉल्ट: 1.2)

**सामान्य उपयोग**: `on_menu_open` में नाटकीय प्रवेश एनिमेशन।

---

### SQUEEZE - संपीड़न प्रभाव

एक अक्ष को समतल करता है जबकि अन्य का विस्तार करता है।

```yaml
# क्षैतिज संपीड़न
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # संपीड़न तीव्रता
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# ऊर्ध्वाधर संपीड़न
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**गुण**:
- `axis`: संपीड़ित करने का अक्ष (x, y, z)
- `intensity`: संपीड़न तीव्रता

---

### FLIP - 180° रोटेशन

विशिष्ट अक्ष पर 180 डिग्री रोटेशन।

```yaml
# ऊर्ध्वाधर फ्लिप (कार्ड पलटने जैसा)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# क्षैतिज फ्लिप
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**गुण**:
- `axis`: रोटेशन अक्ष (x, y, z)

**सामान्य उपयोग**: स्टेट ट्रांज़िशन, वैकल्पिक सामग्री प्रकट करना।

---

### WOBBLE - जेली स्विंग

"जेली" शैली में इधर-उधर स्विंग।

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # स्विंग तीव्रता
    loop: true
    easing_style: in_out
```

**सामान्य उपयोग**: ध्यान एनिमेशन, होवर फीडबैक।

---

### ORBIT - कक्षीय गति

विजेट केंद्रीय बिंदु के चारों ओर एक वृत्त में परिक्रमा करता है।

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # ब्लॉक में कक्षा त्रिज्या
    speed: 1.0  # गति गुणक
    loop: true
    easing_style: linear
```

**गुण**:
- `radius`: कक्षा त्रिज्या (डिफ़ॉल्ट: intensity * 0.5)
- `speed`: रोटेशन गति (डिफ़ॉल्ट: 1.0)

**सामान्य उपयोग**: सजावटी बैकग्राउंड एनिमेशन।

---

### SPIRAL - स्पाइरल गति

रोटेशन को वृत्ताकार गति के साथ जोड़ता है।

```yaml
# दक्षिणावर्त स्पाइरल
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # स्पाइरल त्रिज्या
    clockwise: true  # दक्षिणावर्त दिशा
    loop: true
    easing_style: linear

# वामावर्त स्पाइरल
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**गुण**:
- `radius`: स्पाइरल त्रिज्या (डिफ़ॉल्ट: intensity * 0.3)
- `clockwise`: गति की दिशा (true/false)

---

### WAVE - तरंग गति

साइन फ़ंक्शन का उपयोग करके चिकनी तरंग।

```yaml
# क्षैतिज तरंग
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # तरंग आयाम
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# ऊर्ध्वाधर तरंग
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**गुण**:
- `axis`: तरंग दिशा (horizontal, vertical)

---

### GLOW - स्पंदित चमक

सूक्ष्म पल्स को अपारदर्शिता परिवर्तनों के साथ जोड़ता है।

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # चमक तीव्रता
    loop: true
    easing_style: in_out
```

**सामान्य उपयोग**: महत्वपूर्ण तत्वों को हाइलाइट करना, ध्यान संकेतक।

---

## एनिमेशन संयोजन

आप क्रमिक या एक साथ कई एनिमेशन जोड़ सकते हैं।

### उदाहरण 1: नाटकीय प्रवेश

```yaml
on_menu_open:
  # 1. बाएं से स्लाइड
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - निम्नलिखित क्रियाओं को रोकता है
      easing_style: out

  # 2. ओवरशूट के साथ ज़ूम (स्लाइड के बाद निष्पादित)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. निरंतर तैरना (ज़ूम के बाद शुरू)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### उदाहरण 2: जटिल इंटरैक्टिव बटन

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # होवर ध्वनि
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # विज़ुअल परिवर्तन
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # सूक्ष्म पल्स
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # विज़ुअल पुनर्स्थापित करें
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # क्लिक ध्वनि
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # एनिमेशन अनुक्रम
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

      # कमांड (एनिमेशन के बाद निष्पादित)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### उदाहरण 3: कई एनिमेशन के साथ सजावटी विजेट

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # वृत्ताकार कक्षा
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # परिक्रमा करते समय घूमना
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # स्पंदित चमक
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## सामान्य गुण

सभी एनिमेशन इन गुणों का समर्थन करते हैं:

### type
एक्शन प्रकार (हमेशा `animation`)।

### effect
एनिमेशन नाम (scale, rotate, pulse, आदि)।

### duration
मिलीसेकंड में अवधि।

```yaml
duration: 1000  # 1 सेकंड
```

### intensity
सामान्य एनिमेशन तीव्रता (अर्थ प्रकार के अनुसार भिन्न होता है)।

```yaml
intensity: 0.5  # डिफ़ॉल्ट तीव्रता का आधा
```

### loop
क्या एनिमेशन अनंत रूप से दोहराना चाहिए।

```yaml
loop: true  # निरंतर एनिमेशन
loop: false # एकल एनिमेशन (डिफ़ॉल्ट)
```

### delay
एनिमेशन शुरू होने से पहले देरी (ms में)।

```yaml
delay: 500  # शुरू करने से पहले 500ms प्रतीक्षा
```

### easing_style
एनिमेशन स्मूथिंग के लिए ईज़िंग प्रकार।

```yaml
easing_style: linear      # स्थिर गति
easing_style: in          # शुरू में तेज़
easing_style: out         # अंत में धीमा
easing_style: in_out      # तेज़ और धीमा
```

### priority
एनिमेशन प्राथमिकता (रुकावट को प्रभावित करती है)।

```yaml
priority: true   # CRITICAL - कभी बाधित नहीं, निम्नलिखित क्रियाओं को रोकता है
priority: false  # INTERRUPTIBLE - बाधित किया जा सकता है (डिफ़ॉल्ट)
```

**नोट**: निरंतर एनिमेशन (`loop: true`) हमेशा BACKGROUND प्राथमिकता होते हैं।

---

## संदर्भ के अनुसार उपयोग गाइड

### on_menu_open के लिए एनिमेशन

```yaml
on_menu_open:
  - effect: slide       # स्लाइडिंग प्रवेश
  - effect: zoom_in     # ओवरशूट के साथ प्रवेश
  - effect: fade        # सॉफ्ट फेड इन
```

### on_cursor_hover के लिए एनिमेशन

```yaml
on_cursor_hover:
  - effect: scale       # आकार बढ़ाना
  - effect: pulse       # सॉफ्ट पल्स
  - effect: glow        # हाइलाइट चमक
  - effect: wobble      # ध्यान स्विंग
```

### on_cursor_click के लिए एनिमेशन

```yaml
on_cursor_click:
  - effect: squeeze     # दबाव फीडबैक
  - effect: bounce      # पुष्टि कूद
  - effect: shake       # प्रभाव कंपन
  - effect: flip        # पलटना/प्रकट
```

### निरंतर एनिमेशन (सजावटी)

```yaml
continuous-animations:
  - effect: float       # सॉफ्ट तैरना
  - effect: rotate      # स्थिर रोटेशन
  - effect: orbit       # कक्षीय गति
  - effect: spiral      # सजावटी स्पाइरल
  - effect: wave        # तरंग गति
  - effect: glow        # स्पंदित चमक
```

---

## त्वरित संदर्भ तालिका

| एनिमेशन | प्रकार | मुख्य उपयोग | लूप? | डिफ़ॉल्ट प्राथमिकता |
|---------|--------|------------|------|---------------------|
| SCALE | ट्रांसफॉर्मेशन | होवर, क्लिक | नहीं | INTERRUPTIBLE |
| ROTATE | ट्रांसफॉर्मेशन | सजावटी | हाँ | BACKGROUND |
| TRANSLATE | ट्रांसफॉर्मेशन | मूवमेंट | नहीं | CRITICAL |
| PULSE | मूवमेंट | निरंतर | हाँ | BACKGROUND |
| BOUNCE | मूवमेंट | क्लिक | नहीं | INTERRUPTIBLE |
| SWING | मूवमेंट | होवर | हाँ | INTERRUPTIBLE |
| FLOAT | मूवमेंट | निरंतर | हाँ | BACKGROUND |
| SHAKE | मूवमेंट | क्लिक | नहीं | INTERRUPTIBLE |
| FADE | विज़ुअल | प्रवेश/निकास | नहीं | CRITICAL |
| SLIDE | उन्नत | प्रवेश | नहीं | CRITICAL |
| ZOOM_IN | उन्नत | प्रवेश | नहीं | CRITICAL |
| SQUEEZE | उन्नत | क्लिक | नहीं/हाँ | INTERRUPTIBLE |
| FLIP | उन्नत | स्टेट | नहीं | CRITICAL |
| WOBBLE | उन्नत | होवर | हाँ | BACKGROUND |
| ORBIT | उन्नत | सजावटी | हाँ | BACKGROUND |
| SPIRAL | उन्नत | सजावटी | हाँ | BACKGROUND |
| WAVE | उन्नत | सजावटी | हाँ | BACKGROUND |
| JIGGLE | उन्नत | होवर | नहीं | INTERRUPTIBLE |
| GLOW | उन्नत | हाइलाइट | हाँ | BACKGROUND |

---

**अंतिम अपडेट**: 2025-10-15
**प्लगइन संस्करण**: 2.0
**लेखक**: Zodunix

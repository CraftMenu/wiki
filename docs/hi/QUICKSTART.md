# CraftMenu - त्वरित शुरुआत

## 5-मिनट गाइड

यह गाइड आपको शून्य से एक कार्यशील मेनू तक 5 मिनट में ले जाएगी।

---

## 1. इंस्टॉलेशन (1 मिनट)

1. **डाउनलोड करें**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (निर्भरता)

2. **इंस्टॉल करें**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **सर्वर शुरू करें**

4. **सत्यापित करें**:
   ```
   /cm info
   ```

---

## 2. अपना पहला मेनू बनाएं (2 मिनट)

1. **गेम में**, इच्छित स्थान पर जाएं
2. चलाएं:
   ```
   /cm create mymenu
   ```

3. **मेनू बन गया!** फ़ाइल यहाँ बनी:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. इमेज जोड़ें (1 मिनट)

1. **फ़ोल्डर बनाएं**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **PNG इमेज जोड़ें** (64x64 या 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **रिसोर्स पैक जनरेट करें**:
   ```
   /cm zip
   ```

---

## 4. मेनू कॉन्फ़िगर करें (1 मिनट)

`/plugins/CraftMenu/menus/mymenu.yml` संपादित करें:

```yaml
menu:
  name: mymenu
  title: '&b&lमेरा पहला मेनू'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # जहाँ आपने बनाया
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # सरल बटन (IMAGE के साथ hover/click इवेंट्स)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← आपकी इमेज
        hover:
          type: image
          value: mymenu/button-hover.png # ← होवर इमेज
        fallback:
          type: text
          value: "क्लिक करें"               # अगर इमेज फेल हो
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
          command: '[MESSAGE] &aआपने बटन क्लिक किया!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # कर्सर
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← आपकी इमेज
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

## 5. परीक्षण करें

1. **रीलोड**:
   ```
   /cm reload
   ```

2. **मेनू खोलें**:
   ```
   /cm open mymenu
   ```

3. **माउस मूव करें** कर्सर को नियंत्रित करने के लिए
4. **क्लिक करें** बटन पर

---

## चेकलिस्ट

- [ ] प्लगइन इंस्टॉल और कार्यशील
- [ ] `/cm create` से मेनू बनाया
- [ ] `/images/mymenu/` में इमेज जोड़ी
- [ ] `/cm zip` से रिसोर्स पैक जनरेट किया
- [ ] YAML में मेनू कॉन्फ़िगर किया
- [ ] `/cm open mymenu` से मेनू काम करता है
- [ ] क्लाइंट पर रिसोर्स पैक लागू है

---

## सामान्य समस्याएं

### "मेनू लोड नहीं हुआ"

```bash
/cm reload
/cm list  # जांचें कि मेनू दिखता है या नहीं
```

### कर्सर नहीं दिख रहा

**समाधान**: जांचें कि कर्सर YAML में है और visual कॉन्फ़िगर है

### इमेज में "?" दिख रहा

```bash
/cm images scan    # जांचें कि इमेज मिली या नहीं
/cm zip            # रिसोर्स पैक फिर से बनाएं
/cm reload         # रीलोड करें
```

### रिसोर्स पैक डाउनलोड नहीं हो रहा

खिलाड़ी को चाहिए:
1. मैन्युअली इंस्टॉल करें: `/plugins/CraftMenu/craftmenu.zip` को `.minecraft/resourcepacks/` में कॉपी करें
2. या `server.properties` में कॉन्फ़िगर करें (वेब होस्टिंग आवश्यक)

---

## अगले कदम

1. [संपूर्ण मेनू डॉक्यूमेंटेशन](MENU_CREATION.md)
3. [उन्नत सुविधाएं](FEATURES.md)

---

## उपयोगी संसाधन

- **उदाहरण इमेज**: "minecraft UI icons" खोजें या अपनी बनाएं
- **अनुशंसित आकार**: 64x64, 128x128
- **फॉर्मेट**: पारदर्शिता के साथ PNG
- **Minecraft ध्वनियां**: [पूरी सूची](https://minecraft.fandom.com/wiki/Sounds.json)

---

अंतिम अपडेट: 2026-02-02

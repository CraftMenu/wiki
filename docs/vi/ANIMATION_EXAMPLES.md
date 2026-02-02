# Huong Dan Hieu Ung Dong Day Du - CraftMenu

Tai lieu nay trinh bay tat ca cac loai hieu ung dong co san trong CraftMenu, voi cac vi du su dung YAML thuc te.

---

## Muc Luc

1. [Hieu Ung Dong Co Ban](#hieu-ung-dong-co-ban)
2. [Hieu Ung Dong Chuyen Dong](#hieu-ung-dong-chuyen-dong)
3. [Hieu Ung Dong Nang Cao](#hieu-ung-dong-nang-cao)
4. [Ket Hop Hieu Ung Dong](#ket-hop-hieu-ung-dong)
5. [Thuoc Tinh Chung](#thuoc-tinh-chung)

---

## Hieu Ung Dong Co Ban

### SCALE - Thay Doi Kich Thuoc

Thay doi kich thuoc widget tren cac truc X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% kich thuoc ban dau
    easing_style: out
```

**Thuoc tinh**:
- `scaleX`: Ti le tren truc X (mac dinh: intensity)
- `scaleY`: Ti le tren truc Y (mac dinh: intensity)
- `scaleZ`: Ti le tren truc Z (mac dinh: intensity)

---

### ROTATE - Xoay

Xoay widget quanh cac truc X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Xoay tron tren truc Y
    easing_style: in_out
```

**Thuoc tinh**:
- `rotationX`: Goc xoay tren truc X tinh bang do
- `rotationY`: Goc xoay tren truc Y tinh bang do
- `rotationZ`: Goc xoay tren truc Z tinh bang do

---

### TRANSLATE - Di Chuyen

Di chuyen widget den vi tri moi.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Do dich chuyen tinh bang block
    easing_style: out
```

**Thuoc tinh**:
- `offsetX`: Do dich chuyen tren truc X
- `offsetY`: Do dich chuyen tren truc Y
- `offsetZ`: Do dich chuyen tren truc Z

---

### FADE - Mo Dan/Hien Dan

Dieu khien do mo/do hien thi cua widget.

```yaml
# Mo dan (bien mat)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = mo dan, false = hien dan
    easing_style: in

# Hien dan (xuat hien)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Thuoc tinh**:
- `fadeOut`: true de bien mat, false de xuat hien

---

## Hieu Ung Dong Chuyen Dong

### PULSE - Nhip Dap

Hieu ung tho/nhip tim voi ty le nhip nhang.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Hieu ung dong lien tuc
    easing_style: in_out
```

---

### BOUNCE - Nay

Mo phong vat ly bong nay theo chieu doc.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Do cao nhay
    easing_style: out
```

---

### SWING - Dao Dong

Chuyen dong dao dong/lac.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Bien do dao dong
    loop: true
    easing_style: in_out
```

---

### FLOAT - Troi Noi

Chuyen dong len xuong muot ma theo chieu doc.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Do cao troi noi
    loop: true
    easing_style: in_out
```

---

### SHAKE - Rung

Rung nhanh va ngau nhien.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Cuong do rung
    easing_style: linear
```

---

### JIGGLE - Rung Dan Hoi

Rung mem hon va kiem soat hon voi hieu ung dan hoi.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Bien do rung
    easing_style: out
```

---

## Hieu Ung Dong Nang Cao

### SLIDE - Truot Tu Ngoai Man Hinh

Widget truot vao tu ngoai man hinh.

```yaml
# Truot tu ben trai
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Khoang cach tinh bang block
    easing_style: out

# Truot tu tren
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Thuoc tinh**:
- `direction`: Huong vao (left, right, top, bottom, front, back)
- `distance`: Khoang cach ban dau tinh bang block (mac dinh: intensity * 2.0)

**Su dung pho bien**: Ly tuong cho hieu ung dong `on_menu_open` voi uu tien CRITICAL.

---

### ZOOM_IN - Vao Voi Overshoot

Ti le tu 0 den 1 voi "overshoot" (vuot qua roi quay lai).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Ti le toi da truoc khi quay lai 1.0
    easing_style: out
```

**Thuoc tinh**:
- `overshoot`: Ti le toi da truoc khi on dinh o 1.0 (mac dinh: 1.2)

**Su dung pho bien**: Hieu ung dong vao an tuong trong `on_menu_open`.

---

### SQUEEZE - Hieu Ung Nen

Lam phang mot truc trong khi mo rong cac truc khac.

```yaml
# Nen ngang
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Cuong do nen
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Nen doc
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Thuoc tinh**:
- `axis`: Truc de nen (x, y, z)
- `intensity`: Cuong do nen

---

### FLIP - Xoay 180 Do

Xoay 180 do tren mot truc cu the.

```yaml
# Lat doc (nhu lat bai)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Lat ngang
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Thuoc tinh**:
- `axis`: Truc xoay (x, y, z)

**Su dung pho bien**: Chuyen doi trang thai, hien noi dung thay the.

---

### WOBBLE - Lac Thach

Lac kieu "thach" sang trai sang phai.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Cuong do lac
    loop: true
    easing_style: in_out
```

**Su dung pho bien**: Hieu ung dong thu hut su chu y, phan hoi hover.

---

### ORBIT - Chuyen Dong Quy Dao

Widget quay quanh mot diem trung tam theo hinh tron.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Ban kinh quy dao tinh bang block
    speed: 1.0  # He so toc do
    loop: true
    easing_style: linear
```

**Thuoc tinh**:
- `radius`: Ban kinh quy dao (mac dinh: intensity * 0.5)
- `speed`: Toc do quay (mac dinh: 1.0)

**Su dung pho bien**: Hieu ung dong trang tri nen.

---

### SPIRAL - Chuyen Dong Xoan Oc

Ket hop xoay voi chuyen dong tron.

```yaml
# Xoan oc theo chieu kim dong ho
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Ban kinh xoan oc
    clockwise: true  # Huong theo chieu kim dong ho
    loop: true
    easing_style: linear

# Xoan oc nguoc chieu kim dong ho
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Thuoc tinh**:
- `radius`: Ban kinh xoan oc (mac dinh: intensity * 0.3)
- `clockwise`: Huong chuyen dong (true/false)

---

### WAVE - Chuyen Dong Song

Song muot ma su dung ham sin.

```yaml
# Song ngang
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Bien do song
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Song doc
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Thuoc tinh**:
- `axis`: Huong song (horizontal, vertical)

---

### GLOW - Phat Sang Nhip

Ket hop nhip nhe voi thay doi do mo.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Cuong do phat sang
    loop: true
    easing_style: in_out
```

**Su dung pho bien**: Lam noi bat cac phan tu quan trong, chi bao chu y.

---

## Ket Hop Hieu Ung Dong

Ban co the ket hop nhieu hieu ung dong theo trinh tu hoac dong thoi.

### Vi Du 1: Vao An Tuong

```yaml
on_menu_open:
  # 1. Truot tu ben trai
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - chan cac hanh dong tiep theo
      easing_style: out

  # 2. Zoom voi overshoot (thuc hien SAU slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Troi noi lien tuc (bat dau sau zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Vi Du 2: Nut Tuong Tac Phuc Tap

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Am thanh hover
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Thay doi hinh anh
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Nhip nhe
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Khoi phuc hinh anh
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Am thanh click
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Chuoi hieu ung dong
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

      # Lenh (thuc hien SAU hieu ung dong)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Vi Du 3: Widget Trang Tri Voi Nhieu Hieu Ung Dong

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Quy dao tron
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Xoay trong khi quy dao
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Phat sang nhip
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Thuoc Tinh Chung

Tat ca cac hieu ung dong ho tro cac thuoc tinh sau:

### type
Loai hanh dong (luon la `animation`).

### effect
Ten hieu ung dong (scale, rotate, pulse, v.v.).

### duration
Thoi luong tinh bang mili giay.

```yaml
duration: 1000  # 1 giay
```

### intensity
Cuong do chung cua hieu ung dong (y nghia thay doi theo loai).

```yaml
intensity: 0.5  # Mot nua cuong do mac dinh
```

### loop
Hieu ung dong co nen lap lai vo han hay khong.

```yaml
loop: true  # Hieu ung dong lien tuc
loop: false # Hieu ung dong mot lan (mac dinh)
```

### delay
Do tre truoc khi hieu ung dong bat dau (tinh bang ms).

```yaml
delay: 500  # Cho 500ms truoc khi bat dau
```

### easing_style
Loai easing de lam muot hieu ung dong.

```yaml
easing_style: linear      # Toc do khong doi
easing_style: in          # Tang toc o dau
easing_style: out         # Giam toc o cuoi
easing_style: in_out      # Tang toc va giam toc
```

### priority
Uu tien hieu ung dong (anh huong den viec ngat).

```yaml
priority: true   # CRITICAL - khong bao gio bi ngat, chan cac hanh dong tiep theo
priority: false  # INTERRUPTIBLE - co the bi ngat (mac dinh)
```

**Luu y**: Hieu ung dong lien tuc (`loop: true`) luon la uu tien BACKGROUND.

---

## Huong Dan Su Dung Theo Ngu Canh

### Hieu Ung Dong cho on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Truot vao
  - effect: zoom_in     # Vao voi overshoot
  - effect: fade        # Mo dan nhe
```

### Hieu Ung Dong cho on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Tang kich thuoc
  - effect: pulse       # Nhip nhe
  - effect: glow        # Phat sang noi bat
  - effect: wobble      # Lac thu hut chu y
```

### Hieu Ung Dong cho on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Phan hoi ap luc
  - effect: bounce      # Nhay xac nhan
  - effect: shake       # Rung tac dong
  - effect: flip        # Lat/hien thi
```

### Hieu Ung Dong Lien Tuc (Trang Tri)

```yaml
continuous-animations:
  - effect: float       # Troi noi nhe
  - effect: rotate      # Xoay lien tuc
  - effect: orbit       # Chuyen dong quy dao
  - effect: spiral      # Xoan oc trang tri
  - effect: wave        # Chuyen dong song
  - effect: glow        # Phat sang nhip
```

---

## Bang Tham Khao Nhanh

| Hieu Ung Dong | Loai | Su Dung Chinh | Loop? | Uu Tien Mac Dinh |
|---------------|------|---------------|-------|------------------|
| SCALE | Bien doi | Hover, Click | Khong | INTERRUPTIBLE |
| ROTATE | Bien doi | Trang tri | Co | BACKGROUND |
| TRANSLATE | Bien doi | Di chuyen | Khong | CRITICAL |
| PULSE | Chuyen dong | Lien tuc | Co | BACKGROUND |
| BOUNCE | Chuyen dong | Click | Khong | INTERRUPTIBLE |
| SWING | Chuyen dong | Hover | Co | INTERRUPTIBLE |
| FLOAT | Chuyen dong | Lien tuc | Co | BACKGROUND |
| SHAKE | Chuyen dong | Click | Khong | INTERRUPTIBLE |
| FADE | Hinh anh | Vao/Ra | Khong | CRITICAL |
| SLIDE | Nang cao | Vao | Khong | CRITICAL |
| ZOOM_IN | Nang cao | Vao | Khong | CRITICAL |
| SQUEEZE | Nang cao | Click | Khong/Co | INTERRUPTIBLE |
| FLIP | Nang cao | Trang thai | Khong | CRITICAL |
| WOBBLE | Nang cao | Hover | Co | BACKGROUND |
| ORBIT | Nang cao | Trang tri | Co | BACKGROUND |
| SPIRAL | Nang cao | Trang tri | Co | BACKGROUND |
| WAVE | Nang cao | Trang tri | Co | BACKGROUND |
| JIGGLE | Nang cao | Hover | Khong | INTERRUPTIBLE |
| GLOW | Nang cao | Noi bat | Co | BACKGROUND |

---

**Cap Nhat Lan Cuoi**: 2025-10-15
**Phien Ban Plugin**: 2.0
**Tac Gia**: Zodunix

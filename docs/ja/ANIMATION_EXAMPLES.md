# 完全なアニメーションガイド - CraftMenu

このドキュメントでは、CraftMenuで利用可能なすべてのアニメーションタイプを、実践的なYAML使用例とともに紹介します。

---

## 目次

1. [基本アニメーション](#基本アニメーション)
2. [動きのアニメーション](#動きのアニメーション)
3. [高度なアニメーション](#高度なアニメーション)
4. [アニメーションの組み合わせ](#アニメーションの組み合わせ)
5. [共通プロパティ](#共通プロパティ)

---

## 基本アニメーション

### SCALE - サイズ変更

X、Y、Z軸でウィジェットのサイズを変更します。

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 元のサイズの120%
    easing_style: out
```

**プロパティ**:
- `scaleX`: X軸のスケール (デフォルト: intensity)
- `scaleY`: Y軸のスケール (デフォルト: intensity)
- `scaleZ`: Z軸のスケール (デフォルト: intensity)

---

### ROTATE - 回転

X、Y、Z軸の周りでウィジェットを回転させます。

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Y軸で完全な回転
    easing_style: in_out
```

**プロパティ**:
- `rotationX`: X軸の度単位の回転
- `rotationY`: Y軸の度単位の回転
- `rotationZ`: Z軸の度単位の回転

---

### TRANSLATE - 移動

ウィジェットを新しい位置に移動します。

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # ブロック単位の変位
    easing_style: out
```

**プロパティ**:
- `offsetX`: X軸の変位
- `offsetY`: Y軸の変位
- `offsetZ`: Z軸の変位

---

### FADE - フェードイン/アウト

ウィジェットの不透明度/可視性を制御します。

```yaml
# フェードアウト (消える)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = フェードアウト, false = フェードイン
    easing_style: in

# フェードイン (現れる)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**プロパティ**:
- `fadeOut`: 消えるならtrue、現れるならfalse

---

## 動きのアニメーション

### PULSE - 脈動

リズミカルなスケーリングによる呼吸/鼓動エフェクト。

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # 継続的なアニメーション
    easing_style: in_out
```

---

### BOUNCE - 跳ねる

垂直方向にボールが跳ねる物理をシミュレート。

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # ジャンプの高さ
    easing_style: out
```

---

### SWING - 振り子

振り子/ブランコの動き。

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # スイングの振幅
    loop: true
    easing_style: in_out
```

---

### FLOAT - 浮遊

滑らかな垂直の上下運動。

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # 浮遊の高さ
    loop: true
    easing_style: in_out
```

---

### SHAKE - 揺れ

速くランダムな振動。

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # 振動の強度
    easing_style: linear
```

---

### JIGGLE - 弾力的な揺れ

エラスティック効果のある、より柔らかく制御された揺れ。

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # 揺れの振幅
    easing_style: out
```

---

## 高度なアニメーション

### SLIDE - 画面外からスライド

ウィジェットが画面外からスライドして入ります。

```yaml
# 左からスライド
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # ブロック単位の距離
    easing_style: out

# 上からスライド
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**プロパティ**:
- `direction`: 入ってくる方向 (left, right, top, bottom, front, back)
- `distance`: ブロック単位の初期距離 (デフォルト: intensity * 2.0)

**一般的な使用法**: CRITICAL優先度での`on_menu_open`アニメーションに最適。

---

### ZOOM_IN - オーバーシュート付き入場

「オーバーシュート」（行き過ぎてから戻る）で0から1にスケール。

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # 1.0に戻る前の最大スケール
    easing_style: out
```

**プロパティ**:
- `overshoot`: 1.0で安定する前の最大スケール (デフォルト: 1.2)

**一般的な使用法**: `on_menu_open`でのドラマチックな入場アニメーション。

---

### SQUEEZE - 圧縮効果

一つの軸を平らにし、他の軸を拡張します。

```yaml
# 水平圧縮
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # 圧縮強度
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# 垂直圧縮
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**プロパティ**:
- `axis`: 圧縮する軸 (x, y, z)
- `intensity`: 圧縮強度

---

### FLIP - 180度回転

特定の軸で180度回転。

```yaml
# 垂直フリップ (カードをめくるように)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# 水平フリップ
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**プロパティ**:
- `axis`: 回転軸 (x, y, z)

**一般的な使用法**: 状態遷移、代替コンテンツの表示。

---

### WOBBLE - ゼリー状の揺れ

「ゼリー」スタイルの左右の揺れ。

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # 揺れの強度
    loop: true
    easing_style: in_out
```

**一般的な使用法**: 注目アニメーション、ホバーフィードバック。

---

### ORBIT - 軌道運動

ウィジェットが中心点の周りを円軌道で回ります。

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # ブロック単位の軌道半径
    speed: 1.0  # 速度倍率
    loop: true
    easing_style: linear
```

**プロパティ**:
- `radius`: 軌道半径 (デフォルト: intensity * 0.5)
- `speed`: 回転速度 (デフォルト: 1.0)

**一般的な使用法**: 装飾的な背景アニメーション。

---

### SPIRAL - らせん運動

回転と円運動を組み合わせます。

```yaml
# 時計回りのらせん
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # らせん半径
    clockwise: true  # 時計回り方向
    loop: true
    easing_style: linear

# 反時計回りのらせん
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**プロパティ**:
- `radius`: らせん半径 (デフォルト: intensity * 0.3)
- `clockwise`: 移動方向 (true/false)

---

### WAVE - 波運動

サイン関数を使った滑らかな波。

```yaml
# 水平の波
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # 波の振幅
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# 垂直の波
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**プロパティ**:
- `axis`: 波の方向 (horizontal, vertical)

---

### GLOW - 脈動する光

微妙なパルスと不透明度の変化を組み合わせます。

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # 光の強度
    loop: true
    easing_style: in_out
```

**一般的な使用法**: 重要な要素のハイライト、注意インジケーター。

---

## アニメーションの組み合わせ

複数のアニメーションを順番または同時に組み合わせることができます。

### 例1: ドラマチックな入場

```yaml
on_menu_open:
  # 1. 左からスライド
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - 後続のアクションをブロック
      easing_style: out

  # 2. オーバーシュート付きズーム (スライドの後に実行)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. 継続的な浮遊 (ズームの後に開始)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### 例2: 複雑なインタラクティブボタン

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # ホバーサウンド
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # ビジュアル変更
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # 微妙なパルス
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # ビジュアルを復元
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # クリックサウンド
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # アニメーションシーケンス
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

      # コマンド (アニメーションの後に実行)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### 例3: 複数のアニメーションを持つ装飾ウィジェット

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # 円軌道
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # 軌道しながら回転
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # 脈動する光
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## 共通プロパティ

すべてのアニメーションはこれらのプロパティをサポートしています:

### type
アクションタイプ (常に`animation`)。

### effect
アニメーション名 (scale, rotate, pulse, など)。

### duration
ミリ秒単位の持続時間。

```yaml
duration: 1000  # 1秒
```

### intensity
一般的なアニメーション強度 (意味はタイプによって異なります)。

```yaml
intensity: 0.5  # デフォルト強度の半分
```

### loop
アニメーションが無限に繰り返すかどうか。

```yaml
loop: true  # 継続的なアニメーション
loop: false # 単発アニメーション (デフォルト)
```

### delay
アニメーション開始前の遅延 (ミリ秒単位)。

```yaml
delay: 500  # 開始前に500ms待機
```

### easing_style
アニメーションのスムージングのためのイージングタイプ。

```yaml
easing_style: linear      # 一定速度
easing_style: in          # 開始時に加速
easing_style: out         # 終了時に減速
easing_style: in_out      # 加速して減速
```

### priority
アニメーションの優先度 (中断に影響)。

```yaml
priority: true   # CRITICAL - 中断されず、後続のアクションをブロック
priority: false  # INTERRUPTIBLE - 中断可能 (デフォルト)
```

**注意**: 継続的なアニメーション (`loop: true`) は常にBACKGROUND優先度です。

---

## コンテキスト別使用ガイド

### on_menu_open 用アニメーション

```yaml
on_menu_open:
  - effect: slide       # スライド入場
  - effect: zoom_in     # オーバーシュート付き入場
  - effect: fade        # ソフトフェードイン
```

### on_cursor_hover 用アニメーション

```yaml
on_cursor_hover:
  - effect: scale       # サイズ増加
  - effect: pulse       # 柔らかくパルス
  - effect: glow        # ハイライト光
  - effect: wobble      # 注目の揺れ
```

### on_cursor_click 用アニメーション

```yaml
on_cursor_click:
  - effect: squeeze     # 圧力フィードバック
  - effect: bounce      # 確認ジャンプ
  - effect: shake       # インパクト揺れ
  - effect: flip        # フリップ/表示
```

### 継続的アニメーション (装飾)

```yaml
continuous-animations:
  - effect: float       # ソフトな浮遊
  - effect: rotate      # 一定の回転
  - effect: orbit       # 軌道運動
  - effect: spiral      # 装飾的ならせん
  - effect: wave        # 波運動
  - effect: glow        # 脈動する光
```

---

## クイックリファレンステーブル

| アニメーション | タイプ | 主な用途 | ループ? | デフォルト優先度 |
|-----------|------|----------|-------|------------------|
| SCALE | 変形 | ホバー、クリック | いいえ | INTERRUPTIBLE |
| ROTATE | 変形 | 装飾 | はい | BACKGROUND |
| TRANSLATE | 変形 | 移動 | いいえ | CRITICAL |
| PULSE | 動き | 継続 | はい | BACKGROUND |
| BOUNCE | 動き | クリック | いいえ | INTERRUPTIBLE |
| SWING | 動き | ホバー | はい | INTERRUPTIBLE |
| FLOAT | 動き | 継続 | はい | BACKGROUND |
| SHAKE | 動き | クリック | いいえ | INTERRUPTIBLE |
| FADE | ビジュアル | 入場/退場 | いいえ | CRITICAL |
| SLIDE | 高度 | 入場 | いいえ | CRITICAL |
| ZOOM_IN | 高度 | 入場 | いいえ | CRITICAL |
| SQUEEZE | 高度 | クリック | いいえ/はい | INTERRUPTIBLE |
| FLIP | 高度 | 状態 | いいえ | CRITICAL |
| WOBBLE | 高度 | ホバー | はい | BACKGROUND |
| ORBIT | 高度 | 装飾 | はい | BACKGROUND |
| SPIRAL | 高度 | 装飾 | はい | BACKGROUND |
| WAVE | 高度 | 装飾 | はい | BACKGROUND |
| JIGGLE | 高度 | ホバー | いいえ | INTERRUPTIBLE |
| GLOW | 高度 | ハイライト | はい | BACKGROUND |

---

**最終更新**: 2025-10-15
**プラグインバージョン**: 2.0
**作者**: Zodunix

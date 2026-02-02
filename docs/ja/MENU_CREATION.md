# CraftMenu でのメニュー作成

## 目次
1. [コマンドによる作成](#コマンドによる作成)
2. [YAML構造](#yaml構造)
3. [利用可能なウィジェット](#利用可能なウィジェット)
4. [Transform (配置)](#transform-配置)
5. [コリジョン](#コリジョン)
6. [イベントとアクション](#イベントとアクション)
7. [実践的な例](#実践的な例)

---

## コマンドによる作成

### 推奨方法

1. **ゲームに入り**、メニューを設置したい場所に移動
2. **プレイヤーがメニューを開いたときに向くべき方向を向く**
3. **実行**:
   ```
   /cm create menu_name
   ```

現在の位置と回転でメニューが作成されます!

### 生成される構造

```
/plugins/CraftMenu/menus/menu_name.yml
```

**デフォルトテンプレートに含まれるもの**:
- FOV警告ウィジェット (削除可能)
- 設定済みカーソル
- 最適化された設定
- 境界フィードバック
- **カーソルはデフォルトでTEXTを使用** - テクスチャ追加後にIMAGEに切り替え

---

## YAML構造

### メインセクション

```yaml
menu:
  name: String              # メニュー名
  title: String             # タイトル (&コードをサポート)
  main: boolean             # メインメニュー? (将来)
  location:                 # ワールドの場所
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # 設定
    # ... (下記参照)
  widgets:                  # メニューウィジェット
    widget_name:
      # ... (下記参照)
```

### 詳細設定

```yaml
settings:
  # オーディオ
  background-music: "template/background.ogg"  # バックグラウンドミュージック (オプション)

  # カーソル移動
  cursor-sensitivity: 1.0          # 感度 (0.1 - 5.0)
  max-yaw-offset: 61.0             # 度単位の水平制限
  max-pitch-offset: 36.0           # 度単位の垂直制限
  mount-time: 100                  # ティック単位のマウント時間

  # メニュー配置
  distance-multiplier: -0.01       # 距離乗数
  menu-distance: 0.3               # メニュー距離

  # パフォーマンス
  debug-mode: false                # デバッグモード
  update-rate: 1                   # 更新レート
  collision-detection: true        # アクティブコリジョン検出

  # カメラ
  camera-lock-enabled: true        # カメラロック
  camera-lock-strength: 0.4        # ロック強度 (0.0-1.0)

  # 境界フィードバック
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lカーソルが制限に達しました!"
```

---

## 利用可能なウィジェット

### BUTTON

ホバーとクリック付きのインタラクティブボタン。

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
      value: "▶ PLAY"
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

静的画像 (ホバー可能)。

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # オプション
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # インタラクションなし
```

### TEXT

フォーマットされたテキスト。

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lようこそ
        &7サーバーへ
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # テキストサイズ
  shadow: true              # 影
  background-color: '#000000'  # 背景色 (16進数)
```

### CURSOR

マウスで制御されるカーソル (**メニューごとに1つのみ**)。

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
    position: {x: 0, y: 0, z: 1.0}  # 高いz = 手前
    size: {x: 0.005, y: 0.005, z: 0.005}

  # カーソル設定
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # アニメーション
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ミリ秒
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # コリジョンエリア
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (配置)

### Position

メニューのスポーン地点からの相対的な3D空間での位置。

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: 左 (-) / 右 (+)
- **y**: 下 (-) / 上 (+)
- **z**: 遠い (-) / 近い (+)

**ヒント**: z=0.1は背景に適し、z=1.0はカーソル用 (常に表示)

### Size

ウィジェットサイズ。

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**一般的なスケール**:
- 小さいボタン: `0.015`
- 中くらいのボタン: `0.02`
- 大きいボタン: `0.03`
- ロゴ: `0.04-0.05`
- カーソル: `0.005`

### Rotation (オプション)

度単位の回転。

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**注意**: 通常は不要です (ViewFrameが既に調整します)

---

## コリジョン

### 基本設定

```yaml
collision:
  enabled: true                     # コリジョンを有効化
  position: {x: 0, y: 0, z: 0.1}   # オプション: 位置オーバーライド
  size: {x: 0.08, y: 0.04, z: 0.02} # ボックスサイズ
  rotation: {pitch: 0, yaw: 0, roll: 0}  # オプション
```

### ビジュアルデバッグ

```yaml
collision:
  debug:
    enabled: true     # パーティクルを表示
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, など
    size: 0.005       # パーティクルサイズ
```

**グローバルで有効化**:
```
/cm debug particles toggle
/cm debug particles collision
```

### コリジョンのヒント

1. **ビジュアルサイズ ≠ コリジョンサイズ**
   - コリジョンはクリックしやすくするために大きくできます
   - 例: ビジュアル 0.02、コリジョン 0.08x0.04

2. **コリジョン位置**
   - 指定しない場合、transform.positionを使用
   - 異なるエリアが必要な場合に指定

3. **Collision-area (カーソル)**
   - カーソルは`collision`の代わりに`collision-area`を使用
   - 理由: カーソルには特別な動作があります

---

## イベントとアクション

### 利用可能なイベント

| イベント | 発火するとき | ウィジェット |
|-------|------------|---------|
| `on_menu_open` | メニューが開く | すべて |
| `on_cursor_hover` | カーソルが入る | Button, Image, Text |
| `on_cursor_hover_exit` | カーソルが出る | Button, Image, Text |
| `on_cursor_click` | ウィジェットがクリックされた | Button |
| `on_click_any` | 任意のクリック | Cursor |

### 利用可能なアクション

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, など
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
  file: "minecraft:ui.button.click"  # または "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ミリ秒
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
  delay: 1000  # オプション、ミリ秒単位
```

**特殊コマンド**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &カラー付きテキスト`
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

## 実践的な例

### サウンド付きシンプルボタン

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
      command: '[MESSAGE] &aボタンがクリックされました!'
```

### テレポート付きボタン

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
      command: '[MESSAGE] &eテレポート中...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### トグルボタン (オン/オフ)

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
      command: '[MESSAGE] &c無効にしました!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &a有効にしました!'
```

### クリック可能なテキストウィジェット

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&l警告
        &7クリックして閉じる
    hover:
      type: text
      value: |-
        &c&l警告
        &e&oクリックして閉じる
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

## ベストプラクティス

1. **レイヤー (z) で整理**:
   - z=0.05: 背景
   - z=0.1: ボタン
   - z=0.15: オーバーレイ
   - z=1.0: カーソル

2. **ウィジェットに分かりやすい名前を付ける**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **常にfallbackを含める**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXT"}
   ```

4. **コリジョンはビジュアルより大きく**:
   - ビジュアル: 0.02
   - コリジョン: 0.08x0.04 (クリックしやすい)

5. **可能な限りMinecraftサウンドを使用**:
   - リソースパック不要
   - 追加設定なしで動作

6. **段階的にテスト**:
   - 一度に1つのウィジェットを追加
   - `/cm reload`を頻繁に使用
   - 各インタラクションをテスト

---

最終更新: 2026-02-02

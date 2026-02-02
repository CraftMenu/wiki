# ウィジェットタイプ

CraftMenuは、メニュー構築用に3種類のウィジェットをサポートしています。

## ウィジェットタイプの概要

| タイプ | 説明 | インタラクティブ |
|------|-------------|-------------|
| IMAGE | 画像を表示 | はい |
| TEXT | フォーマットされたテキストを表示 | はい |
| CURSOR | マウスカーソル | 特殊 |

## IMAGE ウィジェット

ボタン、背景、装飾要素に使用されます。

### 基本的な画像

```yaml
my_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### ステートを持つ画像

```yaml
my_button:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### ステートオーバーライド

各ステートはtransformとcollisionのオーバーライドを持つことができます：

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # ホバー時に少し大きく
```

## TEXT ウィジェット

PlaceholderAPIをサポートしたフォーマット済みテキストを表示します。

### 基本的なテキスト

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bサーバーへようこそ！"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### プレースホルダー付きテキスト

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7プレイヤー: &f%player_name%\n&7レベル: &a%player_level%"
      text-size: 0.8
```

### 複数行テキスト

改行には`\n`を使用します：

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "1行目\n2行目\n3行目"
```

## CURSOR ウィジェット

カーソルはプレイヤーのマウス移動に追従します。

### 基本的なカーソル

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Transform プロパティ

すべてのウィジェットはtransformプロパティをサポートしています：

```yaml
transform:
  position:
    x: 0.0    # 水平オフセット
    y: 0.0    # 垂直オフセット
    z: 0.0    # 奥行きオフセット
  size:
    x: 0.1    # 幅のスケール
    y: 0.1    # 高さのスケール
    z: 0.1    # 奥行きのスケール
  rotation:
    pitch: 0  # X軸回転
    yaw: 0    # Y軸回転
    roll: 0   # Z軸回転
```

## Collision プロパティ

コリジョン検出を有効化またはカスタマイズします：

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## ウィジェットの順序

ウィジェットはYAMLファイルに記述された順序でレンダリングされます。後のウィジェットは前のウィジェットの手前に表示されます。

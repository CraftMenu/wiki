# メニューの作成

このガイドでは、CraftMenuでカスタムメニューを作成する方法を説明します。

## メニュー構造

メニューは`plugins/CraftMenu/menus/`内のYAMLファイルで定義されます。

### 基本的なメニューテンプレート

```yaml
menu:
  name: my_menu
  title: "&b&lマイカスタムメニュー"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # ウィジェット定義はここに
```

## メニュープロパティ

### 基本プロパティ

| プロパティ | タイプ | 説明 |
|----------|------|-------------|
| `name` | String | メニューの一意の識別子 |
| `title` | String | 表示タイトル（カラーコード対応） |
| `main` | Boolean | これはメインメニューですか？ |
| `open-on-join` | Boolean | プレイヤーがワールドに参加したときに自動で開く |
| `open-on-teleport` | Boolean | プレイヤーがワールドにテレポートしたときに自動で開く |

### ロケーション

```yaml
location:
  world: world               # ワールド名
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # 水平回転（-180から180）
    pitch: 0.0               # 垂直回転（-90から90）
```

### 設定

```yaml
settings:
  cursor-sensitivity: 1.0    # マウス感度（1.0 = 通常）
  max-yaw-offset: 61.0       # 水平方向の制限（度）
  max-pitch-offset: 36.0     # 垂直方向の制限（度）
  camera-lock-enabled: true  # メニューが開いているときにプレイヤーのカメラをロック
  camera-lock-strength: 0.4  # ロックの強さ（0.0-1.0）
```

### 可視性設定

```yaml
settings:
  visibility:
    hide_players: false      # 他のプレイヤーを非表示
    hide_mobs: false         # モブを非表示
    hide_items: false        # ドロップされたアイテムを非表示
    whitelist_players: []    # 常に表示されるプレイヤー
```

## ウィジェットの追加

ウィジェットはメニューのインタラクティブな要素です。

### 画像ウィジェット

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### テキストウィジェット

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lようこそ！"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## コマンドでクイック作成

`/cm sakusei <名前>`を使用して、現在の位置にメニューをすばやく作成できます。

## カスタム画像の追加

1. フォルダを作成：`plugins/CraftMenu/images/my_menu/`
2. このフォルダにPNG画像を追加
3. `/cm pakku`を実行してリソースパックを再生成
4. 画像を`my_menu/image_name.png`として参照

## メニューのテスト

1. YAMLファイルを保存
2. `/cm saiload`を実行
3. `/cm hiraku my_menu`を実行

## ベストプラクティス

- サブフォルダを使用してメニューごとに画像を整理
- 画像サイズを適切に保つ（ボタンは最大128x128）
- デプロイ前にメニューを十分にテスト
- わかりやすいウィジェット名を使用
- 複雑な設定にはコメントを追加

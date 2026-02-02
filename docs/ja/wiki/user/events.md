# イベントシステム

CraftMenuは、ウィジェットとのユーザーインタラクションを処理するためにイベントシステムを使用します。

## イベントタイプ

| イベント | トリガー | 利用可能なウィジェット |
|-------|---------|--------------|
| `on_menu_open` | メニューが開く | すべてのウィジェット |
| `on_cursor_hover` | カーソルがウィジェットに入る | IMAGE、TEXT |
| `on_cursor_hover_exit` | カーソルがウィジェットから出る | IMAGE、TEXT |
| `on_cursor_click` | ウィジェットがクリックされる | IMAGE、TEXT |
| `on_click_any` | 任意のクリック | CURSORのみ |

## 基本的なイベント構造

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
          command: "[MESSAGE] &aクリックしました！"
```

## アクションタイプ

### サウンドアクション

効果音を再生します：

```yaml
- action: sound
  file: minecraft:ui.button.click  # Minecraftサウンド
  volume: 1.0                       # 0.0から1.0
  pitch: 1.0                        # 0.5から2.0
```

カスタムサウンド：
```yaml
- action: sound
  file: template/click.ogg         # カスタムサウンドファイル
```

### アニメーションアクション

アニメーションをトリガーします：

```yaml
- action: animation
  effect: scale                    # アニメーションタイプ
  duration: 200                    # ミリ秒単位の長さ
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 目標スケール
  easing_style: ease_out           # イージング関数
  priority: false                  # 他のアクションをブロック？
```

### コマンドアクション

コマンドを実行します：

```yaml
- action: command
  command: "[MESSAGE] こんにちは！"  # 特殊コマンド
  delay: 0                          # ミリ秒単位の遅延
```

**特殊コマンド：**
- `[MESSAGE] テキスト` - プレイヤーにメッセージを送信
- `[TELEPORT] ワールド x y z yaw pitch` - プレイヤーをテレポート
- `[CLOSE]` - メニューを閉じる
- `[PLAY_MUSIC] パス/ファイル.ogg` - BGMを再生
- `[STOP_MUSIC]` - 音楽を停止
- `[OPEN_URL] https://...` - URLを開く（クリック可能）
- `[PLAYER] /コマンド` - プレイヤーとしてコマンドを実行
- `[CONSOLE] /コマンド` - コンソールとしてコマンドを実行

### ステートアクション

ウィジェットのステートを変更します：

```yaml
# ステート間を切り替え
- action: toggle_state
  states: [normal, disabled]

# 特定のステートを設定
- action: set_state
  state: disabled
```

### ビジュアル変更アクション

ウィジェットの外観を変更します：

```yaml
- action: visual_change
  to: hover

# 条件付き変更
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### ウィジェット非表示アクション

ウィジェットを非表示にします：

```yaml
- action: hide_widget
  widget: my_widget_name
```

### アニメーション停止アクション

実行中のアニメーションを停止します：

```yaml
- action: stop_animation
  animation_type: rotate          # 停止するアニメーション
```

## イベント実行順序

アクションはリストされた順序で実行されます。最良の結果を得るには：

1. 効果音（即時フィードバック）
2. ステート変更
3. コマンド
4. アニメーション（遅延がある場合）

## プライオリティアニメーション

`priority: true`を使用して、アニメーションが完了するまで他のアクションをブロックします：

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # 後続のアクションをブロック
    - action: command
      command: "[MESSAGE] 完了！"  # アニメーション後に実行
```

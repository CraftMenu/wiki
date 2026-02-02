# CraftMenu の機能

## 目次
1. [統合サウンドシステム](#統合サウンドシステム)
2. [ウィジェットイベント](#ウィジェットイベント)
3. [ステートシステム](#ステートシステム)
4. [設定可能な境界フィードバック](#設定可能な境界フィードバック)
5. [特殊コマンド](#特殊コマンド)

---

## 統合サウンドシステム

すべてのサウンドフィールドは2つのタイプをサポートしています:

### Minecraft サウンド

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # ネイティブMinecraftサウンド
  volume: 0.8
  pitch: 1.0
```

**Minecraftサウンドの例**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### カスタムサウンド (リソースパック)

```yaml
- action: sound
  file: "template/click.ogg"         # 自動解決
  # または
  file: "craftmenu:template/click"   # 名前空間を明示的に指定
  volume: 1.0
  pitch: 1.2
```

**カスタムサウンドの手順**:
1. `/plugins/CraftMenu/sounds/template/click.ogg`に`.ogg`を追加
2. `/cm zip`を実行
3. リソースパックにサウンドが自動的に含まれます

---

## ウィジェットイベント

### on_menu_open

メニューが開いたときに自動的に発火します。バックグラウンドミュージックに便利です。

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

カーソルがウィジェットエリアに入ったとき。

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

カーソルがウィジェットエリアから出たとき。

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

ウィジェットがクリックされたとき。

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (カーソル専用)

ウィジェット外でも、あらゆるクリックで発火します。

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## ステートシステム

複数の動作を持つウィジェットを可能にします（例：オン/オフのトグルボタン）。

### デフォルトステート

- `normal`: 初期状態
- `hover`: ウィジェット上にマウス
- `pressed`: ウィジェットがクリックされた
- `disabled`: ウィジェットが無効
- `fallback`: ビジュアルがロードされないとき

### カスタムステート

独自のステートを作成できます:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # サウンドオン
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # サウンドオフ (カスタムステート)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # オフ時のホバー (カスタムステート)
      type: image
      value: template/sound-mute-hover.png
```

### ステートアクション

#### toggle_state

ステートのリスト間でトグルします。

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # ステート間を循環
```

#### visual_change_conditional

現在のステートがXの場合のみビジュアルを変更します。

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # ステートが "normal" の場合
  to: hover                      # "hover" に変更
- action: visual_change_conditional
  if_state: disabled            # ステートが "disabled" の場合
  to: disabled_hover             # "disabled_hover" に変更
```

#### command_conditional

ステートがXの場合のみコマンドを実行します。

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # "disabled" になった場合
  command: '[STOP_MUSIC]'        # 音楽を停止
- action: command_conditional
  if_state: normal              # "normal" になった場合
  command: '[PLAY_MUSIC] template/background.ogg'  # 音楽を再生
```

### 完全な例: トグルボタン

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## 設定可能な境界フィードバック

カーソルが移動制限に達したときのフィードバックをカスタマイズします。

### 設定

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # 制限に達したときのサウンド
      volume: 0.5                          # ボリューム 0.0-1.0
      pitch: 0.6                           # ピッチ 0.5-2.0
      message: "&c&lカーソルが制限に達しました!" # アクションバーのメッセージ
```

### おすすめのサウンド

- `minecraft:ui.button.click` - ソフトなクリック
- `minecraft:block.note_block.bass` - 低音
- `craftmenu:template/warning.ogg` - カスタムサウンド

---

## 特殊コマンド

`action: command`と一緒に使用します。

### [TELEPORT]

プレイヤーをテレポートします。

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

プレイヤーにメッセージを送信します。

```yaml
- action: command
  command: '[MESSAGE] &aゲームへようこそ!'
  delay: 500  # 送信前に500ms待機
```

### [CLOSE]

メニューを閉じます。

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # 1秒後に閉じる
```

### [PLAY_MUSIC]

ウィジェット用の音楽を再生します（ウィジェットごとに1つのサウンドのみ）。

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**名前空間をサポート**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

このウィジェットの現在再生中のサウンドを停止します。

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**重要**: `[STOP_MUSIC]`はこのウィジェットのサウンドのみを停止し、他のウィジェットやグローバルサウンドには影響しません。

**技術的な注意**: `player.stopSound(key)`がカスタムリソースパックのサウンドで動作しないため、コマンドは内部的に`player.stopAllSounds()`を使用します。ただし、特定のウィジェットによってのみトリガーされます。

### [OPEN_URL]

プレイヤーのブラウザでURLを開きます（確認が必要）。

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## 自動サウンド停止

**メニューが閉じると**、プレイヤーのすべてのサウンドが自動的に停止されます。これには以下が含まれます:

- `[PLAY_MUSIC]`で再生されたバックグラウンドミュージック
- ウィジェットのホバー/クリックサウンド
- 閉じる時点でアクティブなすべてのサウンド

### 動作の仕組み

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← close()の前に呼び出される
}
menuInstance.close();
```

### 技術的な制限

システムが`player.stopAllSounds()`を使用する理由:
- `player.stopSound(key)`はカスタムリソースパックのサウンドで**動作しません**
- `player.stopSound(key, category)`も**動作しません**
- `stopAllSounds()`が**唯一の信頼できる解決策**です

これは、メニューを閉じるときにメニューのサウンドだけでなく、プレイヤーの**すべての**サウンドが停止されることを意味します。これはCraftMenuではなく、Minecraft/Bukkitの制限です。

### 代替: 手動制御

サウンドを自動的に停止させたくない場合は、メニュー内のトグルボタンを使用します:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # 手動で音楽を停止
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## ビジュアルアクション

### visual_change

ビジュアル状態を無条件で変更します。

```yaml
- action: visual_change
  to: hover
```

### scale

ウィジェットのスケールを一時的にアニメーションします。

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # サイズの120%
  duration: 300                     # ミリ秒単位の持続時間
```

### scale_reset

スケールを元のサイズにリセットします。

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

ウィジェットを完全に削除します（ビジュアル、コリジョン、サウンド）。

```yaml
- action: hide_widget
  widget: fov_warning  # 非表示にするウィジェット名
```

**注意**: 非表示のウィジェットは、メニューを再度開かないと復元できません。

---

## 完全な例: すべての機能を持つメニュー

```yaml
menu:
  name: complete_example
  title: '&b&l完全なメニュー例'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cカーソルが端に達しました!"

  widgets:
    # バックグラウンドミュージック付きボタン
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # 完全なフィードバック付きアクションボタン
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aゲームを開始しています...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # サウンドフィードバック付きカーソル
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
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
          volume: 0.4
          pitch: 1.0
```

---

最終更新: 2026-02-02
プラグインバージョン: 2.0

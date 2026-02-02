# CraftMenu - クイックスタート

## 5分ガイド

このガイドでは、ゼロから動作するメニューを5分で作成できます。

---

## 1. インストール (1分)

1. **ダウンロード**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (依存関係)

2. **インストール**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **サーバーを起動**

4. **確認**:
   ```
   /cm info
   ```

---

## 2. 最初のメニューを作成 (2分)

1. **ゲーム内で**、目的の場所に移動
2. 実行:
   ```
   /cm create mymenu
   ```

3. **メニュー作成完了!** ファイルが生成されます:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. 画像を追加 (1分)

1. **フォルダを作成**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **PNG画像を追加** (64x64または128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **リソースパックを生成**:
   ```
   /cm zip
   ```

---

## 4. メニューを設定 (1分)

`/plugins/CraftMenu/menus/mymenu.yml`を編集:

```yaml
menu:
  name: mymenu
  title: '&b&l初めてのメニュー'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # 作成した場所
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # シンプルなボタン (ホバー/クリックイベント付きのIMAGEを使用)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← あなたの画像
        hover:
          type: image
          value: mymenu/button-hover.png # ← ホバー画像
        fallback:
          type: text
          value: "CLICK ME"               # 画像が失敗した場合
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
          command: '[MESSAGE] &aボタンをクリックしました!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # カーソル
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← あなたの画像
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

## 5. テスト

1. **リロード**:
   ```
   /cm reload
   ```

2. **メニューを開く**:
   ```
   /cm open mymenu
   ```

3. **マウスを動かして**カーソルを操作
4. **ボタンをクリック**

---

## チェックリスト

- [ ] プラグインがインストールされ動作している
- [ ] `/cm create`でメニューが作成された
- [ ] `/images/mymenu/`に画像が追加された
- [ ] `/cm zip`でリソースパックが生成された
- [ ] YAMLでメニューが設定された
- [ ] `/cm open mymenu`でメニューが動作する
- [ ] クライアントでリソースパックが適用された

---

## よくある問題

### 「メニューがロードされていません」

```bash
/cm reload
/cm list  # メニューが表示されるか確認
```

### カーソルが表示されない

**解決策**: カーソルがYAMLにあり、ビジュアルが設定されているか確認

### 画像が「?」で表示される

```bash
/cm images scan    # 画像が見つかったか確認
/cm zip            # リソースパックを再生成
/cm reload         # リロード
```

### リソースパックがダウンロードされない

プレイヤーが必要なこと:
1. 手動でインストール: `/plugins/CraftMenu/craftmenu.zip`を`.minecraft/resourcepacks/`にコピー
2. または`server.properties`で設定 (Webホスティングが必要)

---

## 次のステップ

1. [メニュー作成の完全ドキュメント](MENU_CREATION.md)
3. [高度な機能](FEATURES.md)

---

## 便利なリソース

- **サンプル画像**: 「minecraft UI icons」で検索するか、自分で作成
- **推奨サイズ**: 64x64、128x128
- **フォーマット**: 透過付きPNG
- **Minecraftのサウンド**: [完全なリスト](https://minecraft.fandom.com/wiki/Sounds.json)

---

最終更新: 2026-02-02

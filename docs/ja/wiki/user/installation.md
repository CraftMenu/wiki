# インストールガイド

このガイドでは、MinecraftサーバーへのCraftMenuのインストールと設定について説明します。

## 前提条件

CraftMenuをインストールする前に、以下を確認してください：

- Paper、Spigot、またはPurpur 1.20.4以上のMinecraftサーバー
- Java 17以上がインストールされていること
- PacketEventsプラグインがインストールされていること

## インストール手順

### 1. CraftMenuのダウンロード

リリースページから最新のCraftMenu JARをダウンロードします。

### 2. 依存関係のインストール

CraftMenuより先に、PacketEventsが`plugins/`フォルダにインストールされていることを確認してください。

### 3. CraftMenuのインストール

`CraftMenu.jar`をサーバーの`plugins/`フォルダに配置します。

### 4. サーバーの起動

サーバーを起動します。CraftMenuが設定ファイルを作成します：

```
plugins/CraftMenu/
├── config.yml           # グローバル設定
├── menus/              # メニューテンプレート
│   └── template.yml    # デフォルトのサンプルメニュー
├── images/             # カスタム画像
│   └── template/       # テンプレートメニュー用の画像
├── sounds/             # カスタムサウンド
│   └── template/       # テンプレートメニュー用のサウンド
└── language/           # 言語ファイル
```

### 5. リソースパックの生成

`/cm pakku`を実行してリソースパックを生成します。以下が作成されます：

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. リソースパック配布の設定

いくつかのオプションがあります：

**オプションA: サーバーリソースパック**
```properties
# server.properties内で
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**オプションB: 手動配布**
ZIPファイルをプレイヤーと共有し、手動でインストールしてもらいます。

**オプションC: リソースパックプラグインの使用**
ItemsAdderやOraxenなどのプラグインを使用して自動配布します。

## 設定

### 基本設定

`plugins/CraftMenu/config.yml`を編集します：

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "ja_JP"          # en_US、pt_BR、ja_JPなど
    debug: false               # トラブルシューティング時に有効化

  resourcepack:
    auto-generate: true        # 起動時に自動生成
    compression: true          # ZIPファイルを圧縮
```

### パフォーマンス設定

```yaml
craftmenu:
  performance:
    async-loading: true        # メニューを非同期でロード
    cache-enabled: true        # メニューテンプレートをキャッシュ
    update-interval: 1         # 更新間隔（tick）
```

## インストールの確認

1. `/cm herupu`を実行して利用可能なコマンドを確認
2. `/cm risuto`を実行してロードされたメニューを確認
3. `/cm hiraku template`を実行してデフォルトメニューをテスト

## 次のステップ

- [最初のメニューを作成する](menu-creation.md)
- [ウィジェットについて学ぶ](widgets.md)
- [イベントを設定する](events.md)

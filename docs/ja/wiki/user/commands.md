# コマンドリファレンス

CraftMenuは、メニュー管理のための包括的なコマンドセットを提供します。

## 基本コマンド

すべてのコマンドは`/craftmenu`（エイリアス：`/cm`）を使用します。

## 一般コマンド

### ヘルプ
```
/cm herupu [コマンド]
```
すべてのコマンドまたは特定のコマンドのヘルプ情報を表示します。

### メニュー一覧
```
/cm risuto
```
ロードされたすべてのメニューテンプレートを一覧表示します。

### プラグイン情報
```
/cm joho
```
プラグインのバージョンと統計情報を表示します。

## メニューコマンド

### メニューを開く
```
/cm hiraku <メニュー名> [プレイヤー]
```
自分または他のプレイヤーのためにメニューを開きます。

**例：**
- `/cm hiraku template` - 自分用にテンプレートメニューを開く
- `/cm hiraku lobby Steve` - プレイヤーSteve用にlobbyメニューを開く

### メニューを閉じる
```
/cm tojiru [プレイヤー]
```
自分または他のプレイヤーのアクティブなメニューを閉じます。

### メニューを作成
```
/cm sakusei <メニュー名>
```
現在の位置に新しいメニューテンプレートを作成します。

### メニューを削除
```
/cm sakujo <メニュー名>
```
メニューテンプレートを削除します。

## リソースパックコマンド

### リソースパックを生成
```
/cm pakku
```
CraftMenuフォルダ内の画像とサウンドからリソースパックを生成します。

### 画像コマンド
```
/cm gazou sukyan
/cm gazou shusei [--backup]
/cm gazou saizu <画像パス> <目標サイズ>
/cm gazou bakkuappu
/cm gazou fukugen <バックアップ名>
/cm gazou risuto
/cm gazou bakkuappurisuto
```
- `sukyan` - 大きすぎる画像をスキャン
- `shusei` - 大きすぎる画像を自動的に最適化
- `saizu` - 特定の画像を目標サイズ（16-4096ピクセル）にリサイズ
- `bakkuappu` - 画像のバックアップを作成
- `fukugen` - バックアップから画像を復元
- `risuto` - imagesフォルダ内のすべての画像を一覧表示
- `bakkuappurisuto` - 利用可能なすべてのバックアップを一覧表示

## 設定コマンド

### リロード
```
/cm saiload
```
すべての設定とメニューテンプレートをリロードします。

### 言語
```
/cm gengo <言語>
/cm gengo risuto
```
- `/cm gengo <言語>` - プラグインの言語を直接変更（「set」不要）
- `/cm gengo risuto` - 利用可能な言語を一覧表示

利用可能な言語：
- `en_US` - 英語
- `pt_BR` - ポルトガル語（ブラジル）
- `es_ES` - スペイン語
- `fr_FR` - フランス語
- `de_DE` - ドイツ語
- `it_IT` - イタリア語
- `nl_NL` - オランダ語
- `ru_RU` - ロシア語
- `pl_PL` - ポーランド語
- `tr_TR` - トルコ語
- `uk_UA` - ウクライナ語
- `ar_SA` - アラビア語
- `ja_JP` - 日本語
- `ko_KR` - 韓国語
- `zh_CN` - 中国語（簡体字）
- `hi_IN` - ヒンディー語
- `id_ID` - インドネシア語
- `th_TH` - タイ語
- `vi_VN` - ベトナム語

## デバッグコマンド

### パーティクルデバッグ
```
/cm debaggu paatikuru
/cm debaggu paatikuru saizu <値>
```
- `/cm debaggu paatikuru` - すべてのデバッグパーティクル（コリジョンボックス、カーソルトレイル、ウィジェットセンター）を切り替え
- `/cm debaggu paatikuru saizu <値>` - デバッグパーティクルのサイズを設定（0.001～2.0）

### グリッドデバッグ
```
/cm debaggu guriddo
/cm debaggu guriddo suji
```
- `/cm debaggu guriddo` - グリッドの可視化を切り替え
- `/cm debaggu guriddo suji` - グリッド番号の表示を切り替え

### ヘルスチェック
```
/cm kenko
```
コンポーネントのヘルスステータスを表示します。

### リカバリー
```
/cm fukugen
```
エラーからの復旧を試みます。

## エディターコマンド

メニューとウィジェットのためのゲーム内ビジュアルエディターを開きます。

### エディターを開く
```
/cm edita
/cm edita <メニュー名>
```
- `/cm edita` - エディターハブを開く
- `/cm edita <メニュー名>` - 特定のメニューのエディターを開く

**必要な権限:** `craftmenu.admin`

## パーミッション

| パーミッション | 説明 |
|------------|-------------|
| `craftmenu.use` | 基本的な使用（メニューを開く） |
| `craftmenu.admin` | 管理者コマンド |
| `craftmenu.open` | メニューを開く |
| `craftmenu.create` | メニューを作成 |
| `craftmenu.reload` | プラグインをリロード |
| `craftmenu.debug` | デバッグコマンド |

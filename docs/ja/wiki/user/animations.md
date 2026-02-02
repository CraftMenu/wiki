# アニメーションシステム

CraftMenuは、19種類のアニメーションタイプと6つのイージング関数を備えた強力なアニメーションシステムを提供します。

## アニメーションタイプ

### 移動アニメーション

| タイプ | 説明 |
|------|-------------|
| `translate` | ウィジェットの位置を移動 |
| `bounce` | バウンド効果 |
| `float` | 緩やかな上下の浮遊 |
| `orbit` | 円形の軌道運動 |

### 回転アニメーション

| タイプ | 説明 |
|------|-------------|
| `rotate` | 連続回転 |
| `swing` | 振り子の揺れ |
| `flip` | 180度の反転 |
| `wobble` | グラグラする回転 |
| `spiral` | スパイラル運動 |

### スケールアニメーション

| タイプ | 説明 |
|------|-------------|
| `scale` | サイズを変更 |
| `pulse` | リズミカルな脈動 |
| `squeeze` | 圧縮/伸縮 |
| `zoom_in` | ズーム効果 |

### ビジュアルアニメーション

| タイプ | 説明 |
|------|-------------|
| `fade` | 不透明度のフェード |
| `glow` | グロー効果 |
| `shake` | 振動 |
| `jiggle` | ジグリング |
| `wave` | 波動 |

## 基本的なアニメーションの使用

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## アニメーションプロパティ

### 共通プロパティ

```yaml
- action: animation
  effect: pulse           # アニメーションタイプ（必須）
  duration: 1000          # ミリ秒単位の長さ
  easing_style: ease_out  # イージング関数
  intensity: 1.0          # 効果の強度
  priority: false         # 他のアクションをブロック？
```

### 効果固有のプロパティ

**Rotate：**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # 度
```

**Scale：**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade：**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = フェードアウト、false = フェードイン
```

## イージング関数

| イージング | 説明 |
|--------|-------------|
| `linear` | 一定速度 |
| `ease_in` | ゆっくり開始 |
| `ease_out` | ゆっくり終了 |
| `ease_in_out` | ゆっくり開始と終了 |
| `bounce` | バウンス効果 |
| `elastic` | バネのような効果 |

### イージングの例

```yaml
# スムーズなホバー効果
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# バウンドするクリックフィードバック
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## アニメーションプライオリティ

`priority: true`を使用して、他のアクションの前にアニメーションが完了することを保証します：

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # 次のアクションをブロック

    - action: command
      command: "[CLOSE]"      # アニメーションを待つ
```

## アニメーションの停止

```yaml
- action: stop_animation
  animation_type: rotate      # 特定のタイプを停止
  # または
  type: all                   # すべてのアニメーションを停止
```

## 連続アニメーション

ウィジェット設定で連続的に実行されるアニメーションを定義します：

```yaml
widgets:
  spinning_icon:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## ベストプラクティス

1. 応答性の良いフィードバックのために、長さは500ms以下に抑える
2. ホバー効果には`ease_out`を使用
3. クリックフィードバックには`bounce`を使用
4. 1つのウィジェットに複数の同時アニメーションを避ける
5. 異なるハードウェアでアニメーションをテスト

# 위젯 유형

CraftMenu는 메뉴 구축을 위해 세 가지 유형의 위젯을 지원합니다.

## 위젯 유형 개요

| 유형 | 설명 | 대화형 |
|------|------|--------|
| IMAGE | 이미지 표시 | 예 |
| TEXT | 서식이 있는 텍스트 표시 | 예 |
| CURSOR | 마우스 커서 | 특수 |

## IMAGE 위젯

버튼, 배경 및 장식 요소에 사용됩니다.

### 기본 이미지

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

### 상태가 있는 이미지

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

### 상태 오버라이드

각 상태는 transform 및 collision 오버라이드를 가질 수 있습니다:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # 호버 시 약간 더 크게
```

## TEXT 위젯

PlaceholderAPI를 지원하는 서식이 있는 텍스트를 표시합니다.

### 기본 텍스트

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&b서버에 오신 것을 환영합니다!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### 플레이스홀더가 있는 텍스트

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7플레이어: &f%player_name%\n&7레벨: &a%player_level%"
      text-size: 0.8
```

### 여러 줄 텍스트

줄 바꿈에 `\n`을 사용하세요:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "첫 번째 줄\n두 번째 줄\n세 번째 줄"
```

## CURSOR 위젯

커서는 플레이어의 마우스 움직임을 따라갑니다.

### 기본 커서

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

## Transform 속성

모든 위젯은 transform 속성을 지원합니다:

```yaml
transform:
  position:
    x: 0.0    # 수평 오프셋
    y: 0.0    # 수직 오프셋
    z: 0.0    # 깊이 오프셋
  size:
    x: 0.1    # 너비 스케일
    y: 0.1    # 높이 스케일
    z: 0.1    # 깊이 스케일
  rotation:
    pitch: 0  # X축 회전
    yaw: 0    # Y축 회전
    roll: 0   # Z축 회전
```

## Collision 속성

충돌 감지를 활성화하거나 사용자 정의합니다:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## 위젯 순서

위젯은 YAML 파일에 나타나는 순서대로 렌더링됩니다. 나중에 오는 위젯이 앞에 있는 위젯 위에 표시됩니다.

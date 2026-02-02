# CraftMenu에서 메뉴 만들기

## 목차
1. [명령어로 생성](#명령어로-생성)
2. [YAML 구조](#yaml-구조)
3. [사용 가능한 위젯](#사용-가능한-위젯)
4. [Transform (위치 지정)](#transform-위치-지정)
5. [충돌](#충돌)
6. [이벤트와 액션](#이벤트와-액션)
7. [실용적인 예제](#실용적인-예제)

---

## 명령어로 생성

### 권장 방법

1. **게임에 접속**하고 메뉴를 원하는 위치로 이동
2. 플레이어가 메뉴를 열 때 바라볼 **방향을 바라보기**
3. **실행**:
   ```
   /cm create menu_name
   ```

메뉴가 현재 위치와 회전으로 생성됩니다!

### 생성된 구조

```
/plugins/CraftMenu/menus/menu_name.yml
```

**기본 템플릿 포함**:
- FOV 경고 위젯 (제거 가능)
- 설정된 커서
- 최적화된 설정
- 경계 피드백
- **커서는 기본적으로 TEXT 사용** - 텍스처 추가 후 IMAGE로 전환

---

## YAML 구조

### 주요 섹션

```yaml
menu:
  name: String              # 메뉴 이름
  title: String             # 제목 (&코드 지원)
  main: boolean             # 메인 메뉴? (향후)
  location:                 # 월드 위치
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # 설정
    # ... (아래 참조)
  widgets:                  # 메뉴 위젯
    widget_name:
      # ... (아래 참조)
```

### 상세 설정

```yaml
settings:
  # 오디오
  background-music: "template/background.ogg"  # 배경 음악 (선택)

  # 커서 이동
  cursor-sensitivity: 1.0          # 감도 (0.1 - 5.0)
  max-yaw-offset: 61.0             # 수평 제한 (도)
  max-pitch-offset: 36.0           # 수직 제한 (도)
  mount-time: 100                  # 마운트 시간 (틱)

  # 메뉴 위치
  distance-multiplier: -0.01       # 거리 배율
  menu-distance: 0.3               # 메뉴 거리

  # 성능
  debug-mode: false                # 디버그 모드
  update-rate: 1                   # 업데이트 속도
  collision-detection: true        # 활성 충돌 감지

  # 카메라
  camera-lock-enabled: true        # 카메라 잠금
  camera-lock-strength: 0.4        # 잠금 강도 (0.0-1.0)

  # 경계 피드백
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&l커서 제한에 도달했습니다!"
```

---

## 사용 가능한 위젯

### BUTTON

호버와 클릭이 가능한 인터랙티브 버튼.

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
      value: "▶ 플레이"
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

정적 이미지 (호버 가능).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # 선택
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # 상호작용 없음
```

### TEXT

서식이 있는 텍스트.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&l환영합니다
        &7서버에
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # 텍스트 크기
  shadow: true              # 그림자
  background-color: '#000000'  # 배경색 (hex)
```

### CURSOR

마우스로 제어되는 커서 (**메뉴당 1개만**).

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
    position: {x: 0, y: 0, z: 1.0}  # 높은 z = 앞에
    size: {x: 0.005, y: 0.005, z: 0.005}

  # 커서 설정
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # 애니메이션
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # 충돌 영역
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (위치 지정)

### Position

메뉴 스폰 포인트 기준 3D 공간 위치.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: 왼쪽 (-) / 오른쪽 (+)
- **y**: 아래 (-) / 위 (+)
- **z**: 멀리 (-) / 가까이 (+)

**팁**: z=0.1은 배경에 좋고, z=1.0은 커서용 (항상 표시)

### Size

위젯 크기.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**일반적인 스케일**:
- 작은 버튼: `0.015`
- 중간 버튼: `0.02`
- 큰 버튼: `0.03`
- 로고: `0.04-0.05`
- 커서: `0.005`

### Rotation (선택)

도 단위 회전.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**참고**: 보통 필요 없음 (ViewFrame이 이미 조정)

---

## 충돌

### 기본 설정

```yaml
collision:
  enabled: true                     # 충돌 활성화
  position: {x: 0, y: 0, z: 0.1}   # 선택: 위치 오버라이드
  size: {x: 0.08, y: 0.04, z: 0.02} # 박스 크기
  rotation: {pitch: 0, yaw: 0, roll: 0}  # 선택
```

### 비주얼 디버그

```yaml
collision:
  debug:
    enabled: true     # 파티클 표시
    color: GREEN      # RED, BLUE, YELLOW, PURPLE 등
    size: 0.005       # 파티클 크기
```

**전역 활성화**:
```
/cm debug particles toggle
/cm debug particles collision
```

### 충돌 팁

1. **시각적 크기 ≠ 충돌 크기**
   - 쉬운 클릭을 위해 충돌이 더 클 수 있음
   - 예: 시각적 0.02, 충돌 0.08x0.04

2. **충돌 위치**
   - 지정하지 않으면 transform.position 사용
   - 다른 영역을 원하면 지정

3. **Collision-area (커서)**
   - 커서는 `collision` 대신 `collision-area` 사용
   - 이유: 커서는 특별한 동작을 가짐

---

## 이벤트와 액션

### 사용 가능한 이벤트

| 이벤트 | 발생 시점 | 위젯 |
|-------|----------|------|
| `on_menu_open` | 메뉴 열림 | 전체 |
| `on_cursor_hover` | 커서 진입 | Button, Image, Text |
| `on_cursor_hover_exit` | 커서 퇴장 | Button, Image, Text |
| `on_cursor_click` | 위젯 클릭됨 | Button |
| `on_click_any` | 모든 클릭 | Cursor |

### 사용 가능한 액션

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled 등
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
  file: "minecraft:ui.button.click"  # 또는 "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
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
  delay: 1000  # 선택, ms 단위
```

**특수 명령어**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &색상 포함 텍스트`
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

## 실용적인 예제

### 사운드가 있는 간단한 버튼

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
      command: '[MESSAGE] &a버튼을 클릭했습니다!'
```

### 텔레포트 버튼

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
      command: '[MESSAGE] &e텔레포트 중...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### 토글 버튼 (On/Off)

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
      command: '[MESSAGE] &c비활성화됨!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &a활성화됨!'
```

### 클릭 가능한 텍스트 위젯

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&l경고
        &7클릭하여 닫기
    hover:
      type: text
      value: |-
        &c&l경고
        &e&o클릭하여 닫기
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

## 모범 사례

1. **레이어별로 정리 (z)**:
   - z=0.05: 배경
   - z=0.1: 버튼
   - z=0.15: 오버레이
   - z=1.0: 커서

2. **위젯에 설명적인 이름 사용**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **항상 fallback 포함**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "텍스트"}
   ```

4. **시각적보다 큰 충돌**:
   - 시각적: 0.02
   - 충돌: 0.08x0.04 (클릭하기 쉬움)

5. **가능하면 마인크래프트 사운드 사용**:
   - 리소스팩 필요 없음
   - 추가 설정 없이 작동

6. **점진적으로 테스트**:
   - 한 번에 위젯 1개씩 추가
   - `/cm reload` 자주 사용
   - 각 상호작용 테스트

---

최종 업데이트: 2026-02-02

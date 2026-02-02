# 이벤트 시스템

CraftMenu는 위젯과의 사용자 상호작용을 처리하기 위해 이벤트 시스템을 사용합니다.

## 이벤트 유형

| 이벤트 | 트리거 | 사용 가능 대상 |
|--------|--------|---------------|
| `on_menu_open` | 메뉴가 열림 | 모든 위젯 |
| `on_cursor_hover` | 커서가 위젯에 진입 | IMAGE, TEXT |
| `on_cursor_hover_exit` | 커서가 위젯을 벗어남 | IMAGE, TEXT |
| `on_cursor_click` | 위젯 클릭 | IMAGE, TEXT |
| `on_click_any` | 아무 클릭 | CURSOR만 |

## 기본 이벤트 구조

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
          command: "[MESSAGE] &a클릭했습니다!"
```

## 액션 유형

### 사운드 액션

사운드 효과를 재생합니다:

```yaml
- action: sound
  file: minecraft:ui.button.click  # 마인크래프트 사운드
  volume: 1.0                       # 0.0 ~ 1.0
  pitch: 1.0                        # 0.5 ~ 2.0
```

커스텀 사운드:
```yaml
- action: sound
  file: template/click.ogg         # 커스텀 사운드 파일
```

### 애니메이션 액션

애니메이션을 트리거합니다:

```yaml
- action: animation
  effect: scale                    # 애니메이션 유형
  duration: 200                    # 지속 시간 (밀리초)
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 목표 스케일
  easing_style: ease_out           # 이징 함수
  priority: false                  # 다른 액션 차단?
```

### 명령어 액션

명령어를 실행합니다:

```yaml
- action: command
  command: "[MESSAGE] 안녕하세요!"  # 특수 명령어
  delay: 0                         # 지연 시간 (밀리초)
```

**특수 명령어:**
- `[MESSAGE] 텍스트` - 플레이어에게 메시지 전송
- `[TELEPORT] 월드 x y z yaw pitch` - 플레이어 텔레포트
- `[CLOSE]` - 메뉴 닫기
- `[PLAY_MUSIC] path/file.ogg` - 배경 음악 재생
- `[STOP_MUSIC]` - 음악 정지
- `[OPEN_URL] https://...` - URL 열기 (클릭 가능)
- `[PLAYER] /명령어` - 플레이어로 명령어 실행
- `[CONSOLE] /명령어` - 콘솔로 명령어 실행

### 상태 액션

위젯 상태를 변경합니다:

```yaml
# 상태 간 토글
- action: toggle_state
  states: [normal, disabled]

# 특정 상태 설정
- action: set_state
  state: disabled
```

### 비주얼 변경 액션

위젯 외관을 변경합니다:

```yaml
- action: visual_change
  to: hover

# 조건부 변경
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### 위젯 숨기기 액션

위젯을 뷰에서 제거합니다:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### 애니메이션 정지 액션

실행 중인 애니메이션을 정지합니다:

```yaml
- action: stop_animation
  animation_type: rotate          # 정지할 애니메이션
```

## 이벤트 실행 순서

액션은 나열된 순서대로 실행됩니다. 최상의 결과를 위해:

1. 사운드 효과 (즉각적인 피드백)
2. 상태 변경
3. 명령어
4. 애니메이션 (지연이 있을 수 있음)

## 우선순위 애니메이션

애니메이션이 완료될 때까지 다른 액션을 차단하려면 `priority: true`를 사용하세요:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # 후속 액션 차단
    - action: command
      command: "[MESSAGE] 완료!"  # 애니메이션 후 실행
```

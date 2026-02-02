# 애니메이션 시스템

CraftMenu는 19가지 애니메이션 유형과 6가지 이징 함수를 갖춘 강력한 애니메이션 시스템을 제공합니다.

## 애니메이션 유형

### 이동 애니메이션

| 유형 | 설명 |
|------|------|
| `translate` | 위젯 위치 이동 |
| `bounce` | 튀는 효과 |
| `float` | 부드러운 위아래 부유 |
| `orbit` | 원형 궤도 운동 |

### 회전 애니메이션

| 유형 | 설명 |
|------|------|
| `rotate` | 연속 회전 |
| `swing` | 진자 흔들림 |
| `flip` | 180도 뒤집기 |
| `wobble` | 흔들리는 회전 |
| `spiral` | 나선형 운동 |

### 스케일 애니메이션

| 유형 | 설명 |
|------|------|
| `scale` | 크기 변경 |
| `pulse` | 리드미컬한 맥동 |
| `squeeze` | 압축/늘이기 |
| `zoom_in` | 줌 효과 |

### 시각 애니메이션

| 유형 | 설명 |
|------|------|
| `fade` | 투명도 페이드 |
| `glow` | 빛나는 효과 |
| `shake` | 흔들림 운동 |
| `jiggle` | 떨림 운동 |
| `wave` | 파도 운동 |

## 기본 애니메이션 사용법

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## 애니메이션 속성

### 공통 속성

```yaml
- action: animation
  effect: pulse           # 애니메이션 유형 (필수)
  duration: 1000          # 지속 시간 (밀리초)
  easing_style: ease_out  # 이징 함수
  intensity: 1.0          # 효과 강도
  priority: false         # 다른 액션 차단?
```

### 효과별 속성

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # 각도
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = 페이드 아웃, false = 페이드 인
```

## 이징 함수

| 이징 | 설명 |
|------|------|
| `linear` | 일정한 속도 |
| `ease_in` | 천천히 시작 |
| `ease_out` | 천천히 끝남 |
| `ease_in_out` | 시작과 끝이 천천히 |
| `bounce` | 튀는 효과 |
| `elastic` | 스프링 효과 |

### 이징 예제

```yaml
# 부드러운 호버 효과
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# 튀는 클릭 피드백
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## 애니메이션 우선순위

`priority: true`를 사용하여 다른 액션이 실행되기 전에 애니메이션이 완료되도록 합니다:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # 다음 액션 차단

    - action: command
      command: "[CLOSE]"      # 애니메이션 대기
```

## 애니메이션 정지

```yaml
- action: stop_animation
  animation_type: rotate      # 특정 유형 정지
  # 또는
  type: all                   # 모든 애니메이션 정지
```

## 연속 애니메이션

위젯 설정에서 계속 실행되는 애니메이션을 정의합니다:

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

## 모범 사례

1. 반응성 있는 피드백을 위해 지속 시간을 500ms 미만으로 유지
2. 호버 효과에는 `ease_out` 사용
3. 클릭 피드백에는 `bounce` 사용
4. 하나의 위젯에서 여러 동시 애니메이션 피하기
5. 다양한 하드웨어에서 애니메이션 테스트

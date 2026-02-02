# 명령어 참조

CraftMenu는 메뉴 관리를 위한 포괄적인 명령어 세트를 제공합니다.

## 기본 명령어

모든 명령어는 `/craftmenu` (별칭: `/cm`)를 사용합니다.

## 일반 명령어

### 도움말
```
/cm dowum [명령어]
```
모든 명령어 또는 특정 명령어에 대한 도움말 정보를 표시합니다.

### 메뉴 목록
```
/cm mogrok
```
로드된 모든 메뉴 템플릿을 나열합니다.

### 플러그인 정보
```
/cm jeongbo
```
플러그인 버전 및 통계를 표시합니다.

## 메뉴 명령어

### 메뉴 열기
```
/cm yeolda <메뉴_이름> [플레이어]
```
자신 또는 다른 플레이어를 위해 메뉴를 엽니다.

**예시:**
- `/cm yeolda template` - 자신을 위해 template 메뉴 열기
- `/cm yeolda lobby Steve` - Steve 플레이어를 위해 lobby 메뉴 열기

### 메뉴 닫기
```
/cm datda [플레이어]
```
자신 또는 다른 플레이어의 활성 메뉴를 닫습니다.

### 메뉴 생성
```
/cm saengsong <메뉴_이름>
```
현재 위치에 새 메뉴 템플릿을 생성합니다.

### 메뉴 삭제
```
/cm sakje <메뉴_이름>
```
메뉴 템플릿을 삭제합니다.

## 리소스팩 명령어

### 리소스팩 생성
```
/cm paekij
```
CraftMenu 폴더의 이미지와 사운드로 리소스팩을 생성합니다.

### 이미지 명령어
```
/cm imiji seukaen
/cm imiji sujeong [--backup]
/cm imiji resize <이미지_경로> <목표_크기>
/cm imiji baekup
/cm imiji bogwon <백업_이름>
/cm imiji mogrok
/cm imiji baekupdeul
```
- `seukaen` - 크기가 큰 이미지 검색
- `sujeong` - 크기가 큰 이미지 자동 최적화
- `resize` - 특정 이미지를 목표 크기로 조정 (16-4096 픽셀)
- `baekup` - 이미지 백업 생성
- `bogwon` - 백업에서 이미지 복원
- `mogrok` - images 폴더의 모든 이미지 나열
- `baekupdeul` - 사용 가능한 모든 백업 나열

## 구성 명령어

### 리로드
```
/cm jaelodeu
```
모든 구성 및 메뉴 템플릿을 다시 로드합니다.

### 언어
```
/cm eoneo <언어>
/cm eoneo mogrok
```
- `/cm eoneo <언어>` - 플러그인 언어를 직접 변경합니다 ("set" 불필요)
- `/cm eoneo mogrok` - 사용 가능한 모든 언어 나열

사용 가능한 언어:
- `en_US` - 영어
- `pt_BR` - 포르투갈어 (브라질)
- `es_ES` - 스페인어
- `fr_FR` - 프랑스어
- `de_DE` - 독일어
- `it_IT` - 이탈리아어
- `nl_NL` - 네덜란드어
- `ru_RU` - 러시아어
- `pl_PL` - 폴란드어
- `tr_TR` - 터키어
- `uk_UA` - 우크라이나어
- `ar_SA` - 아랍어
- `ja_JP` - 일본어
- `ko_KR` - 한국어
- `zh_CN` - 중국어 (간체)
- `hi_IN` - 힌디어
- `id_ID` - 인도네시아어
- `th_TH` - 태국어
- `vi_VN` - 베트남어

## 디버그 명령어

### 파티클 디버그
```
/cm dibeog patikul
/cm dibeog patikul keuki <값>
```
- `/cm dibeog patikul` - 모든 디버그 파티클 토글 (충돌 박스 + 커서 트레일 + 위젯 중심)
- `/cm dibeog patikul keuki <값>` - 파티클 크기 설정 (0.001 ~ 2.0)

### 그리드 디버그
```
/cm dibeog gyeokja
/cm dibeog gyeokja beonho
```
- `/cm dibeog gyeokja` - 그리드 디버그 시각화 토글
- `/cm dibeog gyeokja beonho` - 셀 번호 표시 토글

### 상태 확인
```
/cm geongang
```
컴포넌트 상태를 표시합니다.

### 복구
```
/cm bogwon
```
오류에서 복구를 시도합니다.

## 에디터 명령어

메뉴와 위젯을 위한 인게임 비주얼 에디터를 엽니다.

### 에디터 열기
```
/cm editor
/cm editor <메뉴_이름>
```
- `/cm editor` - 에디터 허브 열기
- `/cm editor <메뉴_이름>` - 특정 메뉴의 에디터 열기

**필요 권한:** `craftmenu.admin`

## 권한

| 권한 | 설명 |
|------|------|
| `craftmenu.use` | 기본 사용 (메뉴 열기) |
| `craftmenu.admin` | 관리자 명령어 |
| `craftmenu.open` | 메뉴 열기 |
| `craftmenu.create` | 메뉴 생성 |
| `craftmenu.reload` | 플러그인 리로드 |
| `craftmenu.debug` | 디버그 명령어 |

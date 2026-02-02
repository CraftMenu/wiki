# 설치 가이드

이 가이드는 마인크래프트 서버에 CraftMenu를 설치하고 구성하는 방법을 다룹니다.

## 사전 요구 사항

CraftMenu를 설치하기 전에 다음을 확인하세요:

- Paper, Spigot 또는 Purpur 1.20.4+ 버전의 마인크래프트 서버
- Java 17 이상 설치됨
- PacketEvents 플러그인 설치됨

## 설치 단계

### 1. CraftMenu 다운로드

릴리스 페이지에서 최신 CraftMenu JAR을 다운로드하세요.

### 2. 의존성 설치

CraftMenu 전에 PacketEvents가 `plugins/` 폴더에 설치되어 있는지 확인하세요.

### 3. CraftMenu 설치

`CraftMenu.jar`을 서버의 `plugins/` 폴더에 넣으세요.

### 4. 서버 시작

서버를 시작하세요. CraftMenu가 구성 파일들을 생성합니다:

```
plugins/CraftMenu/
├── config.yml           # 전역 구성
├── menus/              # 메뉴 템플릿
│   └── template.yml    # 기본 예제 메뉴
├── images/             # 사용자 정의 이미지
│   └── template/       # template 메뉴용 이미지
├── sounds/             # 사용자 정의 사운드
│   └── template/       # template 메뉴용 사운드
└── language/           # 언어 파일
```

### 5. 리소스팩 생성

`/cm paekij`를 실행하여 리소스팩을 생성하세요. 다음 경로에 생성됩니다:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. 리소스팩 배포 구성

여러 옵션이 있습니다:

**옵션 A: 서버 리소스팩**
```properties
# server.properties에서
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**옵션 B: 수동 배포**
ZIP 파일을 플레이어들과 공유하고 수동으로 설치하게 하세요.

**옵션 C: 리소스팩 플러그인 사용**
ItemsAdder 또는 Oraxen 같은 플러그인을 사용하여 자동 배포하세요.

## 구성

### 기본 설정

`plugins/CraftMenu/config.yml` 편집:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "ko_KR"          # en_US, pt_BR, ko_KR 등
    debug: false               # 문제 해결시 활성화

  resourcepack:
    auto-generate: true        # 시작 시 자동 생성
    compression: true          # ZIP 파일 압축
```

### 성능 설정

```yaml
craftmenu:
  performance:
    async-loading: true        # 메뉴를 비동기로 로드
    cache-enabled: true        # 메뉴 템플릿 캐시
    update-interval: 1         # 업데이트 간 틱 수
```

## 설치 확인

1. `/cm dowum`을 실행하여 사용 가능한 명령어 확인
2. `/cm mogrok`을 실행하여 로드된 메뉴 확인
3. `/cm yeolda template`을 실행하여 기본 메뉴 테스트

## 다음 단계

- [첫 번째 메뉴 생성](menu-creation.md)
- [위젯에 대해 알아보기](widgets.md)
- [이벤트 구성](events.md)

# Guia de Instalação

Este guia cobre a instalação e configuração do CraftMenu em seu servidor Minecraft.

## Pré-requisitos

Antes de instalar o CraftMenu, certifique-se de ter:

- Servidor Minecraft rodando Paper, Spigot ou Purpur 1.20.4+
- Java 17 ou superior instalado
- Plugin PacketEvents instalado

## Passos de Instalação

### 1. Baixar CraftMenu

Baixe o JAR mais recente do CraftMenu na página de releases.

### 2. Instalar Dependências

Certifique-se de que o PacketEvents está instalado na pasta `plugins/` antes do CraftMenu.

### 3. Instalar CraftMenu

Coloque `CraftMenu.jar` na pasta `plugins/` do seu servidor.

### 4. Iniciar o Servidor

Inicie seu servidor. CraftMenu criará seus arquivos de configuração:

```
plugins/CraftMenu/
├── config.yml           # Configuração global
├── menus/              # Templates de menu
│   └── template.yml    # Menu de exemplo padrão
├── images/             # Imagens customizadas
│   └── template/       # Imagens para o menu template
├── sounds/             # Sons customizados
│   └── template/       # Sons para o menu template
└── language/           # Arquivos de idioma
```

### 5. Gerar Resource Pack

Execute `/cm pacote` para gerar o resource pack. Isso cria:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Configurar Distribuição do Resource Pack

Você tem várias opções:

**Opção A: Resource Pack do Servidor**
```properties
# Em server.properties
resource-pack=https://seu-host.com/craftmenu.zip
resource-pack-sha1=<hash-sha1>
require-resource-pack=true
```

**Opção B: Distribuição Manual**
Compartilhe o arquivo ZIP com os jogadores e peça para instalarem manualmente.

**Opção C: Usar um Plugin de Resource Pack**
Use plugins como ItemsAdder ou Oraxen para distribuição automática.

## Configuração

### Configurações Básicas

Edite `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "pt_BR"          # en_US, pt_BR ou fr_FR
    debug: false               # Ative para solução de problemas

  resourcepack:
    auto-generate: true        # Gerar automaticamente na inicialização
    compression: true          # Comprimir arquivo ZIP
```

### Configurações de Performance

```yaml
craftmenu:
  performance:
    async-loading: true        # Carregar menus assincronamente
    cache-enabled: true        # Cachear templates de menu
    update-interval: 1         # Ticks entre atualizações
```

## Verificando a Instalação

1. Execute `/cm ajuda` para ver comandos disponíveis
2. Execute `/cm listar` para ver menus carregados
3. Execute `/cm abrir template` para testar o menu padrão

## Próximos Passos

- [Crie seu primeiro menu](menu-creation.md)
- [Aprenda sobre widgets](widgets.md)
- [Configure eventos](events.md)

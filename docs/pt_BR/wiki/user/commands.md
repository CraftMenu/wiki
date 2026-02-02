# Referência de Comandos

CraftMenu fornece um conjunto abrangente de comandos para gerenciar menus.

## Comando Base

Todos os comandos usam `/craftmenu` (alias: `/cm`).

## Comandos Gerais

### Ajuda
```
/cm ajuda [comando]
```
Mostra informações de ajuda para todos os comandos ou um comando específico.

### Listar Menus
```
/cm listar
```
Lista todos os templates de menu carregados.

### Informações do Plugin
```
/cm info
```
Mostra a versão do plugin e estatísticas.

## Comandos de Menu

### Abrir Menu
```
/cm abrir <nome_menu> [jogador]
```
Abre um menu para você ou outro jogador.

**Exemplos:**
- `/cm abrir template` - Abre o menu template para você
- `/cm abrir lobby Steve` - Abre o menu lobby para o jogador Steve

### Fechar Menu
```
/cm fechar [jogador]
```
Fecha o menu ativo para você ou outro jogador.

### Criar Menu
```
/cm criar <nome_menu>
```
Cria um novo template de menu na sua localização atual.

### Deletar Menu
```
/cm deletar <nome_menu>
```
Deleta um template de menu existente.

## Comandos de Resource Pack

### Gerar Resource Pack
```
/cm pacote
```
Gera o resource pack a partir de imagens e sons na pasta CraftMenu.

### Comandos de Imagens
```
/cm imagens escanear
/cm imagens corrigir [--backup]
/cm imagens redimensionar <caminho_imagem> <tamanho_alvo>
/cm imagens backup
/cm imagens restaurar <nome_backup>
/cm imagens listar
/cm imagens backups
```
- `escanear` - Procura por imagens muito grandes
- `corrigir` - Otimiza imagens grandes automaticamente
- `redimensionar` - Redimensiona uma imagem específica para o tamanho alvo (16-4096 pixels)
- `backup` - Cria um backup das imagens
- `restaurar` - Restaura imagens de um backup
- `listar` - Lista todas as imagens na pasta de imagens
- `backups` - Lista todos os backups disponíveis

## Comandos de Configuração

### Recarregar
```
/cm recarregar
```
Recarrega todas as configurações e templates de menu.

### Idioma
```
/cm idioma <idioma>
/cm idioma listar
```
- `/cm idioma <idioma>` - Altera o idioma do plugin diretamente (não é necessário "definir")
- `/cm idioma listar` - Lista todos os idiomas disponíveis

Idiomas disponíveis:
- `en_US` - Inglês
- `pt_BR` - Português (Brasil)
- `es_ES` - Espanhol
- `fr_FR` - Francês
- `de_DE` - Alemão
- `it_IT` - Italiano
- `nl_NL` - Holandês
- `ru_RU` - Russo
- `pl_PL` - Polonês
- `tr_TR` - Turco
- `uk_UA` - Ucraniano
- `ar_SA` - Árabe
- `ja_JP` - Japonês
- `ko_KR` - Coreano
- `zh_CN` - Chinês (Simplificado)
- `hi_IN` - Hindi
- `id_ID` - Indonésio
- `th_TH` - Tailandês
- `vi_VN` - Vietnamita

## Comandos de Debug

### Partículas de Debug
```
/cm depurar particulas
/cm depurar particulas tamanho <valor>
```
- `/cm depurar particulas` - Alterna TODAS as partículas de debug (caixas de colisão + rastro do cursor + centros dos widgets)
- `/cm depurar particulas tamanho <valor>` - Define o tamanho das partículas (0.001 a 2.0)

### Debug de Grade
```
/cm depurar grade
/cm depurar grade numeros
```
- `/cm depurar grade` - Alterna a visualização de debug da grade
- `/cm depurar grade numeros` - Alterna a exibição dos números das células

### Verificação de Saúde
```
/cm saude
```
Mostra o status de saúde dos componentes.

### Recuperar
```
/cm recuperar
```
Tenta recuperar de erros.

## Comando do Editor

Abre o editor visual in-game para menus e widgets.

### Abrir Editor
```
/cm editor
/cm editor <nome_menu>
```
- `/cm editor` - Abre o hub do editor
- `/cm editor <nome_menu>` - Abre o editor para um menu específico

**Permissão Necessária:** `craftmenu.admin`

## Permissões

| Permissão | Descrição |
|-----------|-----------|
| `craftmenu.use` | Uso básico (abrir menus) |
| `craftmenu.admin` | Comandos de admin |
| `craftmenu.open` | Abrir menus |
| `craftmenu.create` | Criar menus |
| `craftmenu.reload` | Recarregar plugin |
| `craftmenu.debug` | Comandos de debug |

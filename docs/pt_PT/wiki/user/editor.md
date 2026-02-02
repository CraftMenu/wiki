# Editor In-Game

O CraftMenu inclui um poderoso editor visual que permite configurar menus diretamente através de uma GUI de inventário, sem editar ficheiros YAML manualmente.

## Primeiros Passos

### Abrir o Editor

```
/cm editor              # Abre o hub principal do editor
/cm editor <menu>       # Edita um menu específico diretamente
```

**Permissão Necessária:** `craftmenu.admin` ou `craftmenu.edit`

### Navegação do Editor

O editor usa um sistema de **navegação baseada em pilha**:
- **Clique esquerdo** em itens para entrar em submenus ou editar valores
- **Clique direito** para ações secundárias (pré-visualização, teste)
- **Shift + Clique esquerdo** para eliminar itens (com confirmação)
- **Item de seta** (botão voltar) para regressar ao menu anterior
- **Fechar inventário** ou clicar fora para sair

---

## Menu Principal do Editor

Quando executa `/cm editor`, verá o hub principal do editor com estas opções:

| Item | Descrição |
|------|-----------|
| **Lista de Menus** | Navegar e editar todos os menus carregados |
| **Navegador de Imagens** | Ver todas as imagens disponíveis |
| **Navegador de Sons** | Ver todos os sons disponíveis |
| **Definições** | Configuração global do plugin |

---

## Edição de Menu

### Lista de Menus

Mostra todos os menus na sua pasta `menus/`. Clique num menu para abrir o seu editor.

- **Clique esquerdo**: Editar menu
- **Shift + Clique esquerdo**: Eliminar menu (com confirmação)
- **Criar Novo**: Adicionar um novo menu na sua localização atual

### Hub de Ações do Menu

Após selecionar um menu, verá o editor principal do menu com estas secções:

| Secção | Descrição |
|--------|-----------|
| **Propriedades** | Definições básicas (nome, título, menu principal, auto-abrir) |
| **Localização** | Posição e rotação no mundo |
| **Layout** | Configuração de layout em grelha |
| **Atalhos** | Atalhos de teclado |
| **Visibilidade** | Definições de ocultar jogadores/mobs/itens |
| **Avançado** | Sensibilidade do cursor, bloqueio de câmara, limites |
| **Widgets** | Editar widgets neste menu |

---

## Propriedades do Menu

Edite informações básicas do menu:

| Propriedade | Descrição |
|-------------|-----------|
| **Nome** | Identificador do menu (usado em comandos) |
| **Título** | Título de exibição (suporta códigos de cor &) |
| **Descrição** | Descrição opcional |
| **Menu Principal** | Marcar como menu primário |
| **Abrir ao Entrar** | Auto-abrir quando jogador entra no servidor |
| **Abrir ao Teleportar** | Auto-abrir quando jogador teleporta para este mundo |
| **Mundo** | Mundo onde o menu existe |

### Editar Valores de Texto

Quando clica numa propriedade de texto:
1. O inventário fecha
2. Um prompt aparece no chat
3. Escreva o seu novo valor no chat
4. Prima Enter para confirmar (ou escreva `cancel` para cancelar)

---

## Localização do Menu

Configure onde o menu aparece no mundo:

| Propriedade | Descrição |
|-------------|-----------|
| **Mundo** | Selecione entre os mundos disponíveis |
| **X / Y / Z** | Coordenadas (clique para editar via chat) |
| **Yaw** | Rotação horizontal (-180 a 180) |
| **Pitch** | Rotação vertical (-90 a 90) |
| **Definir como Atual** | Usar a sua posição/rotação atual |

---

## Layout do Menu (Grelha)

Configure o posicionamento de widgets baseado em grelha:

| Propriedade | Descrição |
|-------------|-----------|
| **Ativado** | Alternar layout de grelha ligado/desligado |
| **Colunas** | Número de colunas da grelha |
| **Linhas** | Número de linhas da grelha |
| **Espaço X / Y / Z** | Espaçamento entre células |
| **Alinhamento** | Alinhamento da grelha (CENTER, TOP_LEFT, etc.) |

Quando o layout de grelha está ativado, widgets usam `grid-position: {row: X, col: Y}` em vez de coordenadas manuais.

---

## Atalhos de Teclado do Menu

Configure atalhos de teclado:

| Ação | Descrição |
|------|-----------|
| **Adicionar Atalho** | Criar um novo atalho de teclado |
| **Editar Atalho** | Modificar atalho existente |
| **Eliminar Atalho** | Remover um atalho |

### Propriedades do Atalho

- **Tecla**: A tecla ou combinação (ex: `SHIFT`, `CTRL+E`, `F`)
- **Ação**: `activate`, `toggle`, ou `close`
- **Widget**: Nome do widget alvo (para activate/toggle)

---

## Visibilidade do Menu

Controle o que é visível enquanto o menu está aberto:

| Propriedade | Descrição |
|-------------|-----------|
| **Ocultar Jogadores** | Ocultar outros jogadores da visão |
| **Ocultar Mobs** | Ocultar todos os mobs |
| **Ocultar Itens** | Ocultar itens no chão |
| **Lista Branca** | Jogadores que permanecem visíveis (editar lista) |

---

## Definições Avançadas

Ajuste fino do comportamento do menu:

| Propriedade | Descrição |
|-------------|-----------|
| **Sensibilidade do Cursor** | Velocidade de movimento do rato (0.1 - 5.0) |
| **Offset Máximo de Yaw** | Limite horizontal do cursor (graus) |
| **Offset Máximo de Pitch** | Limite vertical do cursor (graus) |
| **Bloqueio de Câmara Ativado** | Bloquear câmara do jogador enquanto menu está aberto |
| **Força do Bloqueio de Câmara** | Quão fortemente a câmara é bloqueada (0.0 - 1.0) |
| **Som de Limite** | Som quando cursor atinge o limite |
| **Volume/Pitch do Limite** | Propriedades do som |
| **Mensagem de Limite** | Mensagem mostrada no limite |

---

## Edição de Widget

### Lista de Widgets

Mostra todos os widgets no menu atual:

- **Clique esquerdo**: Editar widget
- **Shift + Clique esquerdo**: Eliminar widget
- **Criar Novo**: Adicionar um novo widget

### Hub do Editor de Widget

Cada widget tem estas secções editáveis:

| Secção | Descrição |
|--------|-----------|
| **Tipo** | IMAGE, TEXT, ou CURSOR |
| **Transformação** | Posição, tamanho, rotação |
| **Estados Visuais** | Aparências normal, hover, pressed, disabled |
| **Colisão** | Configuração da caixa de colisão |
| **Eventos** | Eventos de interação e ações |
| **[Específico do Tipo]** | Opções adicionais baseadas no tipo do widget |

---

## Editor de Transformação

Configure posicionamento e dimensionamento do widget:

### Posição
- **X**: Posição horizontal
- **Y**: Posição vertical
- **Z**: Posição de profundidade

### Tamanho
- **X**: Escala de largura
- **Y**: Escala de altura
- **Z**: Escala de profundidade

### Rotação
- **Pitch**: Rotação cima/baixo
- **Yaw**: Rotação esquerda/direita
- **Roll**: Rotação de inclinação

**Dica**: Clique em qualquer valor para editá-lo via entrada de chat.

---

## Estados Visuais

Widgets podem ter aparências diferentes para estados diferentes:

| Estado | Quando Aplicado |
|--------|-----------------|
| **normal** | Estado predefinido |
| **hover** | Cursor está sobre o widget |
| **pressed** | Widget está a ser clicado |
| **disabled** | Widget está inativo |
| **Personalizado** | Qualquer nome de estado personalizado |

### Editor de Estado Visual

Cada estado tem:

| Propriedade | Descrição |
|-------------|-----------|
| **Tipo** | `image`, `text`, ou `unicode` |
| **Valor** | Caminho da imagem, conteúdo de texto, ou caractere unicode |
| **Sobreposições** | Sobreposições opcionais de transform/collision/text-size |

---

## Editor de Colisão

Configure a área clicável do widget:

| Propriedade | Descrição |
|-------------|-----------|
| **Ativado** | Alternar deteção de colisão |
| **Posição X/Y/Z** | Offset do centro da caixa de colisão |
| **Tamanho X/Y/Z** | Dimensões da caixa de colisão |
| **Offset X/Y/Z** | Offset adicional |

**Dica**: Use `/cm depurar particulas` para visualizar caixas de colisão no jogo.

---

## Editor de Eventos

### Tipos de Evento

| Evento | Gatilho |
|--------|---------|
| **on_menu_open** | Quando o menu abre |
| **on_cursor_hover** | Quando cursor entra no widget |
| **on_cursor_hover_exit** | Quando cursor sai do widget |
| **on_cursor_click** | Quando o widget é clicado |

### Lista de Ações

Cada evento contém uma lista de ações que executam por ordem:

- **Clique esquerdo**: Editar ação
- **Shift + Clique esquerdo**: Eliminar ação
- **Adicionar Ação**: Criar nova ação
- **Reordenar**: Arrastar para mudar ordem de execução

---

## Editores de Ação

Cada tipo de ação tem um editor especializado:

### Ação de Animação

| Propriedade | Descrição |
|-------------|-----------|
| **Efeito** | Tipo de animação (rotate, scale, bounce, etc.) |
| **Duração** | Duração da animação em milissegundos |
| **Escala X/Y/Z** | Multiplicadores de escala (para animações de escala) |
| **Intensidade** | Força do efeito (0.1 - 5.0) |
| **Easing** | Função de temporização (linear, ease_in, ease_out, etc.) |
| **Prioridade** | Bloquear interações durante animação |

### Ação de Som

| Propriedade | Descrição |
|-------------|-----------|
| **Ficheiro** | Caminho do som (minecraft:... ou caminho personalizado) |
| **Volume** | Volume do som (0.0 - 1.0) |
| **Pitch** | Pitch do som (0.5 - 2.0) |

**Navegar**: Clique para abrir o navegador de sons e selecionar um som.

### Ação de Comando

| Propriedade | Descrição |
|-------------|-----------|
| **Comando** | Comando a executar (com comandos especiais) |
| **Delay** | Delay em milissegundos antes da execução |

**Comandos Especiais:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aSua mensagem aqui`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /comando`
- `[CONSOLE] /comando`

### Ação de Estado

| Propriedade | Descrição |
|-------------|-----------|
| **Tipo de Ação** | `toggle_state` ou `set_state` |
| **Estados** | Lista de estados para alternar entre (toggle_state) |
| **Estado** | Nome do estado alvo (set_state) |

### Ação de Mudança Visual

| Propriedade | Descrição |
|-------------|-----------|
| **Para** | Nome do estado visual alvo |

### Ação de Widget

| Propriedade | Descrição |
|-------------|-----------|
| **Ação** | `hide_widget`, `show_widget`, etc. |
| **Widget** | Nome do widget alvo |

### Ação de Efeito

| Propriedade | Descrição |
|-------------|-----------|
| **Efeito** | Tipo de efeito a aplicar |
| **Parâmetros** | Parâmetros específicos do efeito |

### Ação Parar Animação

| Propriedade | Descrição |
|-------------|-----------|
| **Tipo de Animação** | Qual animação parar |

### Ação Parar Efeito

| Propriedade | Descrição |
|-------------|-----------|
| **Tipo de Efeito** | Qual efeito parar |

### Ação Definir Estado Base

| Propriedade | Descrição |
|-------------|-----------|
| **Estado** | Novo estado base para o widget |

---

## Navegadores de Assets

### Navegador de Imagens

Navegue por todas as imagens na sua pasta `images/`:

- **Paginação**: Navegar através das páginas de imagens
- **Pré-visualização**: Ver caminho e detalhes da imagem
- **Selecionar**: Clicar para usar no contexto atual

Imagens são organizadas por pasta (ex: `template/button.png`).

### Navegador de Sons

Navegue por todos os sons na sua pasta `sounds/` mais sons nativos do Minecraft:

- **Sons Personalizados**: Os seus ficheiros .ogg de `sounds/`
- **Sons do Minecraft**: Sons nativos (minecraft:ui.button.click, etc.)
- **Selecionar**: Clicar para usar no contexto atual

---

## Dicas e Boas Práticas

### Dicas de Workflow

1. **Comece com Propriedades**: Configure nome, título e localização primeiro
2. **Adicione Widgets**: Crie os seus widgets com transformações básicas
3. **Configure Visuais**: Configure estados normal e hover
4. **Adicione Colisão**: Ative e dimensione caixas de colisão
5. **Adicione Eventos**: Configure sons de hover e ações de clique
6. **Teste Frequentemente**: Use `/cm abrir <menu>` para testar alterações

### Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| **Escape** | Fechar editor |
| **Teclas numéricas (1-9)** | Seleção rápida de slot |

### Problemas Comuns

**Alterações não aparecem:**
- Execute `/cm recarregar` após fazer alterações
- Certifique-se de que clicou "Guardar" no editor

**Colisão não a detetar:**
- Verifique se a colisão está ativada
- Verifique se o tamanho da colisão é suficientemente grande
- Use `/cm depurar particulas` para visualizar

**Imagens não aparecem:**
- Execute `/cm pacote` para regenerar o resource pack
- Certifique-se de que a imagem está numa subpasta (ex: `images/meumenu/`)
- Aplique o resource pack no cliente

---

## Ver Também

- [Referência de Comandos](commands.md)
- [Criar Menus](menu-creation.md)
- [Tipos de Widget](widgets.md)
- [Sistema de Eventos](events.md)
- [Animações](animations.md)

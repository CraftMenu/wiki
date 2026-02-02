# Solução de Problemas

Problemas comuns e soluções para CraftMenu.

## Imagens Não Aparecem

**Sintoma:** Imagens aparecem como "?" ou caracteres faltando.

**Soluções:**

1. **Regenerar resource pack:**
   ```
   /cm pacote
   ```

2. **Verificar localização da imagem:**
   - Imagens devem estar em subpastas: `plugins/CraftMenu/images/pasta/imagem.png`
   - NÃO na raiz: `plugins/CraftMenu/images/imagem.png`

3. **Verificar formato da imagem:**
   - Apenas arquivos PNG são suportados
   - Certifique-se da extensão correta (`.png`, não `.PNG`)

4. **Verificar se resource pack está carregado:**
   - Resource pack do servidor deve estar configurado
   - Jogador deve aceitar o resource pack

5. **Recarregar o plugin:**
   ```
   /cm recarregar
   ```

## Menu Não Abre

**Sintoma:** Comando `/cm abrir` não faz nada.

**Soluções:**

1. **Verificar se menu existe:**
   ```
   /cm listar
   ```

2. **Verificar console por erros** após executar o comando

3. **Verificar sintaxe YAML:**
   - Use um validador de YAML
   - Verifique indentação incorreta

4. **Garantir que localização de spawn é válida:**
   - Mundo deve estar carregado
   - Localização deve ser acessível

## Colisão Não Funciona

**Sintoma:** Cursor não detecta widgets.

**Soluções:**

1. **Ativar partículas de debug:**
   ```
   /debugcollision toggle
   ```

2. **Verificar configuração de colisão:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Aumentar tamanho da caixa de colisão** se estiver muito pequena

4. **Verificar posição do widget** - colisão pode estar deslocada

## Sons Não Tocam

**Sintoma:** Ações de som não têm efeito.

**Soluções:**

1. **Para sons customizados:**
   - Coloque arquivos `.ogg` em `plugins/CraftMenu/sounds/pasta/`
   - Regenere o resource pack: `/cm pacote`

2. **Para sons do Minecraft:**
   - Use formato correto: `minecraft:ui.button.click`

3. **Verifique configurações de volume** na configuração da ação

## Problemas de Performance

**Sintoma:** Lag ao usar menus.

**Soluções:**

1. **Otimizar imagens:**
   ```
   /cm imagens escanear
   /cm imagens corrigir --backup
   ```

2. **Reduzir frequência de animações** em menus complexos

3. **Desabilitar modo debug:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Aumentar intervalo de atualização:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin Não Carrega

**Sintoma:** Plugin mostra erros na inicialização.

**Soluções:**

1. **Verificar versão do Java:**
   - Requer Java 17 ou superior

2. **Verificar dependências:**
   - PacketEvents deve estar instalado

3. **Verificar versão do servidor:**
   - Requer Minecraft 1.20.4+

4. **Revisar logs de inicialização** para erros específicos

5. **Tentar recuperação:**
   ```
   /cm recuperar
   ```

## Erros de YAML

**Sintoma:** Erros mencionam parsing de YAML.

**Problemas Comuns:**

1. **Indentação incorreta:**
   ```yaml
   # Errado
   widgets:
   meu_widget:
     type: IMAGE

   # Correto
   widgets:
     meu_widget:
       type: IMAGE
   ```

2. **Aspas faltando em valores especiais:**
   ```yaml
   # Errado - & tem significado especial
   title: &bOlá

   # Correto
   title: "&bOlá"
   ```

3. **Formato de lista incorreto:**
   ```yaml
   # Errado
   events:
     on_cursor_click:
       action: sound

   # Correto
   events:
     on_cursor_click:
       - action: sound
   ```

## Obtendo Ajuda

Se você ainda está tendo problemas:

1. Ative o modo debug e verifique a saída do console
2. Verifique as issues do GitHub para problemas conhecidos
3. Crie uma nova issue com:
   - Versão do servidor
   - Versão do plugin
   - Logs do console
   - Arquivos de configuração (remova dados sensíveis)

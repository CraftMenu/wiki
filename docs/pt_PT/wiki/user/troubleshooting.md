# Resolução de Problemas

Problemas comuns e soluções para o CraftMenu.

## Problemas de Instalação

### Plugin não carrega

**Sintomas:** CraftMenu não aparece em `/plugins`

**Soluções:**
1. Verifique se está a usar Java 17 ou superior
2. Verifique se PacketEvents está instalado
3. Verifique a consola do servidor para erros
4. Certifique-se de que está a usar Paper/Spigot/Purpur 1.20.4+

### Erros de dependência

**Sintomas:** Erro sobre PacketEvents em falta

**Solução:** Instale PacketEvents antes de CraftMenu:
1. Transfira PacketEvents de https://hangar.papermc.io/retrooper/packetevents
2. Coloque na pasta `plugins/`
3. Reinicie o servidor

## Problemas de Resource Pack

### Imagens mostram "?"

**Sintomas:** Imagens aparecem como símbolos de interrogação

**Soluções:**
1. Execute `/cm pacote` para regenerar o resource pack
2. Execute `/cm recarregar` para recarregar mapeamentos
3. Verifique se as imagens estão em subpastas: `/images/pasta/imagem.png`
4. Verifique se o resource pack está carregado no cliente

### Resource pack não transfere

**Sintomas:** Jogadores não recebem o resource pack automaticamente

**Soluções:**
1. Configure `server.properties`:
   ```properties
   resource-pack=https://seu-host.com/craftmenu.zip
   resource-pack-sha1=<hash>
   ```
2. Ou use distribuição manual: copie o ficheiro ZIP para os jogadores
3. Ou use um plugin de resource pack (ItemsAdder, Oraxen)

### Hash do resource pack inválido

**Sintomas:** Erro de hash SHA1 ao carregar pack

**Solução:** Regenere o hash:
```bash
sha1sum craftmenu.zip
```
Atualize `server.properties` com o novo hash.

## Problemas de Menu

### Menu não abre

**Sintomas:** `/cm abrir nome_menu` não funciona

**Soluções:**
1. Verifique se o menu existe: `/cm listar`
2. Verifique se o ficheiro YAML é válido
3. Execute `/cm recarregar` após alterações
4. Verifique a consola para erros de parsing

### Menu abre mas está vazio

**Sintomas:** Menu abre mas nenhum widget é visível

**Soluções:**
1. Verifique as posições dos widgets (podem estar fora de vista)
2. Verifique os caminhos das imagens
3. Execute `/cm pacote` se estiver a usar imagens personalizadas
4. Use widgets TEXT com fallback para testar

### Cursor não aparece

**Sintomas:** Menu abre mas não há cursor

**Soluções:**
1. Verifique se há um widget `type: CURSOR` no menu
2. Verifique o valor z do cursor (deve ser alto, ex: 1.0)
3. Verifique o caminho da imagem ou fallback de texto

## Problemas de Interação

### Cliques não funcionam

**Sintomas:** Clicar em widgets não faz nada

**Soluções:**
1. Verifique se a colisão está ativada no widget
2. Verifique se o tamanho da colisão é suficiente
3. Use `/cm depurar alternar` para visualizar caixas de colisão
4. Verifique se os eventos estão configurados

### Hover não funciona

**Sintomas:** Estado de hover não ativa

**Soluções:**
1. Verifique se há eventos `on_cursor_hover` configurados
2. Verifique se os estados visuais `hover` existem
3. Verifique a área de colisão

### Sons não reproduzem

**Sintomas:** Ações de som não produzem áudio

**Soluções:**
1. Use sons do Minecraft primeiro para testar: `minecraft:ui.button.click`
2. Para sons personalizados, verifique se estão em `/sounds/pasta/`
3. Execute `/cm pacote` após adicionar sons
4. Verifique o volume do cliente Minecraft

## Problemas de Performance

### Lag ao abrir menus

**Sintomas:** Atraso perceptível ao abrir menus

**Soluções:**
1. Reduza o número de widgets
2. Otimize tamanhos de imagem (máximo 128x128)
3. Ative caching em `config.yml`:
   ```yaml
   performance:
     cache-enabled: true
     async-loading: true
   ```

### Uso elevado de memória

**Sintomas:** Servidor consome memória excessiva

**Soluções:**
1. Reduza tamanhos de imagem
2. Reduza número total de menus
3. Ajuste configurações de cache

## Comandos de Debug

### Visualizar colisões
```
/cm depurar alternar
```

### Verificar saúde do plugin
```
/cm saude
```

### Verificar imagens
```
/cm imagens escanear
```

### Recarregar tudo
```
/cm recarregar
```

## Obter Ajuda

Se o problema persistir:

1. Verifique a consola do servidor para mensagens de erro
2. Ative modo debug em `config.yml`:
   ```yaml
   general:
     debug: true
   ```
3. Recolha logs e reporte na página de Issues do GitHub

## Lista de Verificação Rápida

- [ ] Java 17+ instalado
- [ ] PacketEvents instalado
- [ ] Paper/Spigot/Purpur 1.20.4+
- [ ] Imagens em subpastas corretas
- [ ] `/cm pacote` executado após alterações de imagens
- [ ] `/cm recarregar` executado após alterações YAML
- [ ] Resource pack carregado no cliente
- [ ] Colisões configuradas para widgets interativos

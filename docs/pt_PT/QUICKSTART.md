# CraftMenu - Início Rápido

## Guia de 5 Minutos

Este guia leva-o de zero até um menu a funcionar em 5 minutos.

---

## 1. Instalação (1 min)

1. **Transferência**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (dependência)

2. **Instalar**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Iniciar servidor**

4. **Verificar**:
   ```
   /cm info
   ```

---

## 2. Criar Primeiro Menu (2 min)

1. **No jogo**, vá para o local desejado
2. Execute:
   ```
   /cm criar mymenu
   ```

3. **Menu criado!** Ficheiro gerado em:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. Adicionar Imagens (1 min)

1. **Criar pasta**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **Adicionar imagens PNG** (64x64 ou 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Gerar resource pack**:
   ```
   /cm pacote
   ```

---

## 4. Configurar Menu (1 min)

Editar `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lMy First Menu'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Onde criou
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Botão simples (usando IMAGE com eventos de hover/click)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← SUA IMAGEM
        hover:
          type: image
          value: mymenu/button-hover.png # ← IMAGEM HOVER
        fallback:
          type: text
          value: "CLICK ME"               # Se imagem falhar
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
          command: '[MESSAGE] &aYou clicked the button!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Cursor
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← SUA IMAGEM
        fallback:
          type: text
          value: "§f→"
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
```

---

## 5. Testar

1. **Recarregar**:
   ```
   /cm recarregar
   ```

2. **Abrir menu**:
   ```
   /cm abrir mymenu
   ```

3. **Mover rato** para controlar cursor
4. **Clicar** no botão

---

## Checklist

- [ ] Plugin instalado e a funcionar
- [ ] Menu criado com `/cm criar`
- [ ] Imagens adicionadas em `/images/mymenu/`
- [ ] Resource pack gerado com `/cm pacote`
- [ ] Menu configurado no YAML
- [ ] Menu funciona com `/cm abrir mymenu`
- [ ] Resource pack aplicado no cliente

---

## Problemas Comuns

### "Menu not loaded"

```bash
/cm recarregar
/cm listar  # Verificar se menu aparece
```

### Cursor não aparece

**Solução**: Verificar se cursor está no YAML e tem visual configurado

### Imagens mostram "?"

```bash
/cm imagens escanear    # Ver se imagens foram encontradas
/cm pacote            # Regenerar resource pack
/cm recarregar         # Recarregar
```

### Resource pack não transfere

O jogador precisa:
1. Instalar manualmente: copiar `/plugins/CraftMenu/craftmenu.zip` para `.minecraft/resourcepacks/`
2. OU configurar em `server.properties` (requer alojamento web)

---

## Próximos Passos

1. [Documentação Completa de Menus](MENU_CREATION.md)
2. [Recursos Avançados](FEATURES.md)

---

## Recursos Úteis

- **Imagens de exemplo**: Procurar "minecraft UI icons" ou criar as suas próprias
- **Tamanhos recomendados**: 64x64, 128x128
- **Formato**: PNG com transparência
- **Sons Minecraft**: [Lista completa](https://minecraft.fandom.com/wiki/Sounds.json)

---

Última atualização: 2026-02-02

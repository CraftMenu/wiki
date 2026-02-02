# Troubleshooting

Common issues and solutions for CraftMenu.

## Images Not Appearing

**Symptom:** Images show as "?" or missing characters.

**Solutions:**

1. **Regenerate resource pack:**
   ```
   /cm zip
   ```

2. **Check image location:**
   - Images must be in subfolders: `plugins/CraftMenu/images/folder/image.png`
   - NOT in the root: `plugins/CraftMenu/images/image.png`

3. **Verify image format:**
   - Only PNG files are supported
   - Ensure correct file extension (`.png`, not `.PNG`)

4. **Check resource pack is loaded:**
   - Server resource pack must be configured
   - Player must accept the resource pack

5. **Reload the plugin:**
   ```
   /cm reload
   ```

## Menu Not Opening

**Symptom:** `/cm open` command does nothing.

**Solutions:**

1. **Check menu exists:**
   ```
   /cm list
   ```

2. **Check console for errors** after running the command

3. **Verify YAML syntax:**
   - Use a YAML validator
   - Check for incorrect indentation

4. **Ensure spawn location is valid:**
   - World must be loaded
   - Location must be accessible

## Collision Not Working

**Symptom:** Cursor doesn't detect widgets.

**Solutions:**

1. **Enable debug particles:**
   ```
   /debugcollision toggle
   ```

2. **Check collision config:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Increase collision box size** if it's too small

4. **Check widget position** - collision might be offset

## Sounds Not Playing

**Symptom:** Sound actions have no effect.

**Solutions:**

1. **For custom sounds:**
   - Place `.ogg` files in `plugins/CraftMenu/sounds/folder/`
   - Regenerate resource pack: `/cm zip`

2. **For Minecraft sounds:**
   - Use correct format: `minecraft:ui.button.click`

3. **Check volume settings** in action config

## Performance Issues

**Symptom:** Lag when using menus.

**Solutions:**

1. **Optimize images:**
   ```
   /cm images scan
   /cm images fix --backup
   ```

2. **Reduce animation frequency** in complex menus

3. **Disable debug mode:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Increase update interval:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin Not Loading

**Symptom:** Plugin shows errors on startup.

**Solutions:**

1. **Check Java version:**
   - Requires Java 17 or higher

2. **Verify dependencies:**
   - PacketEvents must be installed

3. **Check server version:**
   - Requires Minecraft 1.20.4+

4. **Review startup logs** for specific errors

5. **Try recovery:**
   ```
   /cm recover
   ```

## YAML Errors

**Symptom:** Errors mention YAML parsing.

**Common Issues:**

1. **Incorrect indentation:**
   ```yaml
   # Wrong
   widgets:
   my_widget:
     type: IMAGE
   
   # Correct
   widgets:
     my_widget:
       type: IMAGE
   ```

2. **Missing quotes around special values:**
   ```yaml
   # Wrong - & has special meaning
   title: &bHello
   
   # Correct
   title: "&bHello"
   ```

3. **Incorrect list format:**
   ```yaml
   # Wrong
   events:
     on_cursor_click:
       action: sound
   
   # Correct
   events:
     on_cursor_click:
       - action: sound
   ```

## Getting Help

If you're still having issues:

1. Enable debug mode and check console output
2. Check the GitHub issues for known problems
3. Create a new issue with:
   - Server version
   - Plugin version
   - Console logs
   - Configuration files (remove sensitive data)

<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/typography/blockquote/global.css?inline'

  export let Hst: Hst

  let text = `Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
  In hac habitasse platea dictumst quisque.
  Nam libero justo laoreet sit amet cursus sit amet.`
</script>

<Hst.Story title="Blockquote">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <blockquote>
      {text}
    </blockquote>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Textarea bind:value={text} title="Paragraph Text" />
  </svelte:fragment>
</Hst.Story>

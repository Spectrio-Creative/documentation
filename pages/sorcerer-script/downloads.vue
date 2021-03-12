<template>
  <div>
	<h2>Downloads</h2>
    <p>Current Version: <a :href="`${route}script/sorcerers_2_6_2.zip`" download>Version 2.6.2</a> | <a :href="`${route}script/sorcerers_panel.zip`" download>Panel UI</a> | <a :href="`${route}script/dwebp.zip`" download>Dependencies </a></p>
    <p>Previous Versions: </p>
    <div class="downloads">
      <DownloadPageLink version="2.6.2" linkType="local" details="Updated to relink all color control expressions." />
      <DownloadPageLink version="2.6.1" linkType="local" details="Fixed some bugs introduced in 2.6.0" />
      <DownloadPageLink version="2.6.0" linkType="local" details="Added 'video' (!V) tag, 'link' subtag, and support for Font styling with 'font' (!F) tag" />
      <DownloadPageLink version="2.4.0" linkType="local" details="Increased support for Precomp nesting and Linking. Added a visibility toggle for precomps." />
      <DownloadPageLink version="2.3.0" linkType="local" details="Added additional support to attempt to fix problematic image files. If a problematic image is found, first it attempts to load as a .bmp before trying to convert it from a .webp to a .png." note="This uses a CLI app developed by Google (the developer of the .webp format). To install for use by the Sorcerer Script, simply download the app from the ‘Dependencies’ link from the ‘Current Versions’ above or download the <a href='https://developers.google.com/speed/webp/download'>whole toolkit from Google</a>" />
      <DownloadPageLink version="2.2.1" linkType="local" details="Fixed issue introduced in v2.2.0 which broke the hex colors. Also fixed an issue with linking to precomps within precomps." />
      <DownloadPageLink version="2.2.0" linkType="local" details="Fixed issue where images imported with the same name as another image in the project are improperly linked." />
      <DownloadPageLink version="2.1.1" linkType="local" details="Fixed problem with single line text getting trimmed" />
      <DownloadPageLink version="2.1.0" linkType="local" details="Added Scale Down (s) and No Scale (n) image subtags" />
      <DownloadPageLink version="2.0.0" linkType="local" details="Reorganised handing of images / added background (b), fill (f), and no scale (s) [now (n)] subtags, fixed issues with precomp linking" />
      <DownloadPageLink version="1.9.0" linkType="local" details="Fixed major Windows issues, added precomp nesting functionality" />
      <DownloadPageLink version="1.8.0" linkType="local" details="Added visible (v) subtag for layers | ! Major issues on Windows OS" />
      <DownloadPageLink version="1.6.0" linkType="local" details="Added multiline (m) text subtag, fixed color picker default, added alerts, main comp from precomp expression re-link" />
      <DownloadPageLink version="1.5.0" linkType="local" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "~/mixins/page";

export default Vue.extend({
  mixins: [Page]
});
</script>
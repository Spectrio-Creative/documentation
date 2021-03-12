<template>
  <div>
    <doc-section
      title="Linking"
      :photos="[
        {
          caption: 'Precomps to be relinked.',
          src: '/images/sorcerer/pc_intro_project.jpg'
        },
        {
          caption: 'Location to relink.',
          src: '/images/sorcerer/pc_intro_comp.jpg'
        }
      ]"
    >
      <p>
        Precomps can be helpful for organization but they can also be helpful
        for consolidating assets which get used multiple times in a project; a
        logo, for example.
      </p>
      <p>
        As mentioned in the
        <a href="../introduction/#Project-Setup">Introduction tab</a> , the
        script will automatically copy the template precomps to the new project
        folder if they are contained within a ‘Procomps’ subfolder they will
        not, however automatically relink in the new composition<sup>*</sup>. In
        order to tell the script that you want to use a precomp, you can title
        the layer the name of the precomp with double inward brackets. For
        instance, if my precomp was named ‘Logo’ I would title my layer
        <span class="source">&gt;&gt; Intro &lt;&lt;</span>.
      </p>
      <p>
        In the example below, the three highlighted precomps will be relinked in
        the project comp on layers 3, 4, and 5
      </p>
      <p class="note">
        *this is to avoid problems related to precomps that you might want to
        use across multiple templates.
      </p>
    </doc-section>
    <doc-section
      title="Nesting"
      menu-title="Background Sizing"
      :photos="[
        {
          caption: 'Precomp to be linked',
          src: '/images/sorcerer/pc_nest_project.jpg'
        },
        {
          caption: 'Linked precomp nested in another linked precomp.',
          src: '/images/sorcerer/pc_nest_comp.jpg'
        }
      ]"
    >
      <p>
        Nesting precomps works exactly the same way as linking precomps in the
        main comp. Continuing with the <a href="#Linking">Linking</a> example,
        the ‘Logo’ precomp could be used in both the ‘Start’ and ‘End’ precomps.
      </p>
    </doc-section>
    <doc-section title="Precomp Visibility Tag" menu-title="Visibility Tag">
      <p>Group Subtag &lsquo;v&rsquo; [<span class="source">!Gv</span>]</p>
      <p>
        Version 2.4 of the script includes a precomp visibility option. This
        could be useful if you want to have the option of swapping whole
        segments of your template. To implement, the 'v' subtag is used in
        conjuction with a
        <a href="../introduction/#Group-Tag">Group Layer</a> of the same name as
        the precomp you want to toggle.
      </p>
      <p>
        For instance, if I wanted to toggle my precomp titled ‘Intro’ (layer
        name <span class="source">&gt;&gt; Intro &lt;&lt;</span>) I would
        include a Group Layer called
        <span class="source">!Gv [Intro Tab] Intro</span> in my composition.
        This would add a ‘Visible’ toggle at the top of the ‘Intro Tab’ section
        of the UI which would allow me to turn on or off the visibility of the
        ‘Intro’ precomp.
      </p>
      <p class="note">
        This only works for precomps in the main composition and does not
        currently work with the visibility of nested comps.
      </p>
    </doc-section>
    <doc-section
      title="Dynamic Text Linking"
      menu-title="No Scale Sizing"
      :photos="[
        {
          caption: 'Project showing renamed precomp.',
          src: '/images/sorcerer/pc_text_project.jpg'
        },
        {
          caption:
            'Original precomps and precomps with relinked / resized text.',
          src: '/images/sorcerer/pc_text_example.gif'
        }
      ]"
    >
      <h2>Dynamic Text Linking</h2>
      <p>
        If you want to consolidate reused text across multiple precomps (an
        address or company slogan, for example) you can do so with an expression
        on the Source Text property of child text layer with a reference to the
        parent. The default Source Text expression is something like
        <span class="source"
          >thisComp.layer("example layer").text.sourceText</span
        >
        and, in order to link layers across comps, you simply need to change
        <span class="source">thisComp</span> to reference the name of the comp
        you want to use—i.e. <span class="source">comp("address")</span>.
      </p>
      <p>
        If the comp you are referencing is the main comp of the template, when
        the script is run, the expression will be updated to reference the main
        comp of the new project folder. If, however, the comp you are
        referencing is one of the template's precomps, then that precomp (and
        any others linked from expressions) will be renamed in the new project
        as <span class="source">[Main Comp Name] Precomp Name</span>. After
        effects expressions do not support the use of Comp IDs, so this renaming
        is done to keep from the new project refferencing the template's precomp
        or vice versa.
      </p>
      <p class="note">
        As of version 2.4, you must tell the script that you have expressions
        that need relinking. This is done in a similar way to how
        <a href="#Linking">precomps are linked</a>, only with outward arrow
        brackets rather in inward ones (<span class="source"
          >&lt;&lt; !T Text Layer Name &gt;&gt;</span
        >).
      </p>
      <p>
        In the example below, the precomps ‘Start’ and ‘End’ both have text
        layers that reference the source text of a layer in the precomp
        ‘Catchphrase’. The Source Text expression on both the layer in ‘Start’
        and the layer in ‘End’ read
        <span class="source"
          >comp("Catchphrase").layer("!Tm [Company Setup] Intro
          Text").text.sourceText</span
        >
        and are named, respectively
        <span class="source">&lt;&lt; !T Start Text &gt;&gt;</span> and
        <span class="source">&lt;&lt; !T End Text &gt;&gt;</span>.
      </p>
    </doc-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>

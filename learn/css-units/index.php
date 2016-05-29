<?php include '../header-learn-start.php'; ?>
<link rel="stylesheet" href="/learn/css-units/css/style.css">
<?php include '../header-learn-end.php'; ?>

<div class="main__container">
    <h1>CSS Units</h1>
    <p>an <code>em</code> is equal to the size of the font that applies to the <b>parent</b> of the element </p>
    <p>However, <code>em</code> values compound. Nested elements will have their <code>em</code> values multiplied by their parent's <code>em</code> value.</p>

    <p><code>rem</code> values were invented in order to sidestep the compounding problem. <span class="cu-color--html"><code class="cu-color--html">rem</code> values are relative to the root <code class="cu-color--html">html</code> element</span>, not the parent element. In other words, it lets you specify a font size in a relative
      fashion without being affected by the size of the parent, thereby eliminating compounding.</p>


  <div class="container cu-controls__container">
    <div class="cu-controls__section">
      <label for="cu-size-asterisk">*</label>
      <select class="" name="cu-size-asterisk">
        <option value="default">default</option>
        <option value="initial">initial</option>
        <option value="inherit">inherit</option>
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="1em">1em</option>
        <option value="2em">2em</option>
        <option value="1rem">1rem</option>
        <option value="2rem">2rem</option>
      </select>
    </div>

    <div class="cu-controls__button-container">
      <button id="cu-button" class="btn">Let's go!</button>
    </div>

      <div class="cu-controls__section">

      <label for="" class="cu-controls__label"><span>*: </span></label>

      <input type="radio" name="font-asterisk" id="r-fa-1" value="default" checked>
      <label for="r-fa-1">default</label>

      <input type="radio" name="font-asterisk" id="r-fa-2" value="initial">
      <label for="r-fa-2">initial</label>

      <input type="radio" name="font-asterisk" id="r-fa-3" value="inherit">
      <label for="r-fa-3">inherit</label>

      <input type="radio" name="font-asterisk" id="r-fa-4" value="unset">
      <label for="r-fa-4">unset</label>

      <input type="radio" name="font-asterisk" id="r-fa-5" value="12px">
      <label for="r-fa-5">12px</label>

      <input type="radio" name="font-asterisk" id="r-fa-6" value="14px">
      <label for="r-fa-6">14px</label>

      <input type="radio" name="font-asterisk" id="r-fa-7" value="1em">
      <label for="r-fa-7">1em</label>

      <input type="radio" name="font-asterisk" id="r-fa-8" value="2em">
      <label for="r-fa-8">2em</label>

      <input type="radio" name="font-asterisk" id="r-fa-9" value="1rem">
      <label for="r-fa-9">1rem</label>

      <input type="radio" name="font-asterisk" id="r-fa-10" value="2rem">
      <label for="r-fa-10">2rem</label>
    </div>

    <div class="cu-controls__section cu-color--html">

      <label for="" class="cu-controls__label"><span>html: </span></label>

      <input type="radio" name="font-html" id="r-fh-1" value="default" checked>
      <label for="r-fh-1">default</label>

      <input type="radio" name="font-html" id="r-fh-2" value="initial">
      <label for="r-fh-2">initial</label>

      <input type="radio" name="font-html" id="r-fh-3" value="inherit">
      <label for="r-fh-3">inherit</label>

      <input type="radio" name="font-html" id="r-fh-4" value="unset">
      <label for="r-fh-4">unset</label>

      <input type="radio" name="font-html" id="r-fh-5" value="12px">
      <label for="r-fh-5">12px</label>

      <input type="radio" name="font-html" id="r-fh-6" value="14px">
      <label for="r-fh-6">14px</label>

      <input type="radio" name="font-html" id="r-fh-7" value="1em">
      <label for="r-fh-7">1em</label>

      <input type="radio" name="font-html" id="r-fh-8" value="2em">
      <label for="r-fh-8">2em</label>

      <input type="radio" name="font-html" id="r-fh-9" value="1rem">
      <label for="r-fh-9">1rem</label>

      <input type="radio" name="font-html" id="r-fh-10" value="2rem">
      <label for="r-fh-10">2rem</label>
    </div>

    <div class="cu-controls__section">
      <label for="" class="cu-controls__label"><span>body: </span></label>

      <input type="radio" name="font-body" id="r-fb-1" value="default" checked>
      <label for="r-fb-1">default</label>

      <input type="radio" name="font-body" id="r-fb-2" value="initial">
      <label for="r-fb-2">initial</label>

      <input type="radio" name="font-body" id="r-fb-3" value="inherit">
      <label for="r-fb-3">inherit</label>

      <input type="radio" name="font-body" id="r-fb-4" value="unset">
      <label for="r-fb-4">unset</label>

      <input type="radio" name="font-body" id="r-fb-5" value="12px">
      <label for="r-fb-5">12px</label>

      <input type="radio" name="font-body" id="r-fb-6" value="14px">
      <label for="r-fb-6">14px</label>

      <input type="radio" name="font-body" id="r-fb-7" value="1em">
      <label for="r-fb-7">1em</label>

      <input type="radio" name="font-body" id="r-fb-8" value="2em">
      <label for="r-fb-8">2em</label>

      <input type="radio" name="font-body" id="r-fb-9" value="1rem">
      <label for="r-fb-9">1rem</label>

      <input type="radio" name="font-body" id="r-fb-10" value="2rem">
      <label for="r-fb-10">2rem</label>
    </div>

    <div class="cu-controls__section">
      <label for="" class="cu-controls__label"><span>div: </span></label>

      <input type="radio" name="font-div" id="r-fd-1" value="default" checked>
      <label for="r-fd-1">default</label>

      <input type="radio" name="font-div" id="r-fd-2" value="initial">
      <label for="r-fd-2">initial</label>

      <input type="radio" name="font-div" id="r-fd-3" value="inherit">
      <label for="r-fd-3">inherit</label>

      <input type="radio" name="font-div" id="r-fd-4" value="unset">
      <label for="r-fd-4">unset</label>

      <input type="radio" name="font-div" id="r-fd-5" value="12px">
      <label for="r-fd-5">12px</label>

      <input type="radio" name="font-div" id="r-fd-6" value="14px">
      <label for="r-fd-6">14px</label>

      <input type="radio" name="font-div" id="r-fd-7" value="1em">
      <label for="r-fd-7">1em</label>

      <input type="radio" name="font-div" id="r-fd-8" value="2em">
      <label for="r-fd-8">2em</label>

      <input type="radio" name="font-div" id="r-fd-9" value="1rem">
      <label for="r-fd-9">1rem</label>

      <input type="radio" name="font-div" id="r-fd-10" value="2rem">
      <label for="r-fd-10">2rem</label>
    </div>

    <div class="cu-controls__section">
      <label for="" class="cu-controls__label"><span>Grandparent: </span></label>

      <input type="radio" name="font-grandparent" id="r-fg-1" value="default" checked>
      <label for="r-fg-1">default</label>

      <input type="radio" name="font-grandparent" id="r-fg-2" value="initial">
      <label for="r-fg-2">initial</label>

      <input type="radio" name="font-grandparent" id="r-fg-3" value="inherit">
      <label for="r-fg-3">inherit</label>

      <input type="radio" name="font-grandparent" id="r-fg-4" value="unset">
      <label for="r-fg-4">unset</label>

      <input type="radio" name="font-grandparent" id="r-fg-5" value="12px">
      <label for="r-fg-5">12px</label>

      <input type="radio" name="font-grandparent" id="r-fg-6" value="14px">
      <label for="r-fg-6">14px</label>

      <input type="radio" name="font-grandparent" id="r-fg-7" value="1em">
      <label for="r-fg-7">1em</label>

      <input type="radio" name="font-grandparent" id="r-fg-8" value="2em">
      <label for="r-fg-8">2em</label>

      <input type="radio" name="font-grandparent" id="r-fg-9" value="1rem">
      <label for="r-fg-9">1rem</label>

      <input type="radio" name="font-grandparent" id="r-fg-10" value="2rem">
      <label for="r-fg-10">2rem</label>
    </div>

    <div class="cu-controls__section">
      <label for="" class="cu-controls__label"><span>Parent: </span></label>

      <input type="radio" name="font-parent" id="r-fp-1" value="default" checked>
      <label for="r-fp-1">default</label>

      <input type="radio" name="font-parent" id="r-fp-2" value="initial">
      <label for="r-fp-2">initial</label>

      <input type="radio" name="font-parent" id="r-fp-3" value="inherit">
      <label for="r-fp-3">inherit</label>

      <input type="radio" name="font-parent" id="r-fp-4" value="unset">
      <label for="r-fp-4">unset</label>

      <input type="radio" name="font-parent" id="r-fp-5" value="12px">
      <label for="r-fp-5">12px</label>

      <input type="radio" name="font-parent" id="r-fp-6" value="14px">
      <label for="r-fp-6">14px</label>

      <input type="radio" name="font-parent" id="r-fp-7" value="1em">
      <label for="r-fp-7">1em</label>

      <input type="radio" name="font-parent" id="r-fp-8" value="2em">
      <label for="r-fp-8">2em</label>

      <input type="radio" name="font-parent" id="r-fp-9" value="1rem">
      <label for="r-fp-9">1rem</label>

      <input type="radio" name="font-parent" id="r-fp-10" value="2rem">
      <label for="r-fp-10">2rem</label>
    </div>

    <div class="cu-controls__section">
      <label for="" class="cu-controls__label"><span>Child: </span></label>

      <input type="radio" name="font-child" id="r-fc-1" value="default" checked>
      <label for="r-fc-1">default</label>

      <input type="radio" name="font-child" id="r-fc-2" value="initial">
      <label for="r-fc-2">initial</label>

      <input type="radio" name="font-child" id="r-fc-3" value="inherit">
      <label for="r-fc-3">inherit</label>

      <input type="radio" name="font-child" id="r-fc-4" value="unset">
      <label for="r-fc-4">unset</label>

      <input type="radio" name="font-child" id="r-fc-5" value="12px">
      <label for="r-fc-5">12px</label>

      <input type="radio" name="font-child" id="r-fc-6" value="14px">
      <label for="r-fc-6">14px</label>

      <input type="radio" name="font-child" id="r-fc-7" value="1em">
      <label for="r-fc-7">1em</label>

      <input type="radio" name="font-child" id="r-fc-8" value="2em">
      <label for="r-fc-8">2em</label>

      <input type="radio" name="font-child" id="r-fc-9" value="1rem">
      <label for="r-fc-9">1rem</label>

      <input type="radio" name="font-child" id="r-fc-10" value="2rem">
      <label for="r-fc-10">2rem</label>
    </div>






  </div>

  <div class="container">
    <div class="cu-section cu-asterisk"></div>
    <div class="cu-section cu-html cu-color--html"></div>
    <div class="cu-section cu-body"></div>
    <div class="cu-section cu-div"></div>
    <div class="cu-section cu-grandparent">

      <div class="cu-section cu-parent">

        <div class="cu-section cu-child">

        </div>
      </div>
    </div>
  </div>

</div>

<script src="/learn/css-units/js/css-units.js"></script>

<?php include '../footer.php'; ?>

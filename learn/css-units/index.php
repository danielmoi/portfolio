<?php include '../header-learn-start.php'; ?>
<?php include '../header-learn-end.php'; ?>

<div class="main__container">
    <h1>CSS Units</h1>
    <p>an <code>em</code> is equal to the size of the font that applies to the <b>parent</b> of the element </p>
    <p>However, <code>em</code> values compound. Nested elements will have their <code>em</code> values multiplied by their parent's <code>em</code> value.</p>

    <p><code>rem</code> values were invented in order to sidestep the compounding problem. <span class="cu-color--html"><code class="cu-color--html">rem</code></span> values are <span class="cu-color--html">relative to</span> the root <code class="cu-color--html">html</code> element</span>, not the parent element. In other words, it lets you specify a font size in a relative
      fashion without being affected by the size of the parent, thereby eliminating compounding.</p>

    <p>
      Try experimenting with various css-units for these elements!
    </p>


  <div>
    <div class="cu-controls__container">
      <div class="cu-controls__section">
        <label for="cu-size-asterisk">* :</label>
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

      <div class="cu-controls__section">
        <label for="cu-size-html">html:</label>
        <select class="" name="cu-size-html">
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

      <div class="cu-controls__section">
        <label for="cu-size-body">body:</label>
        <select class="" name="cu-size-body">
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

      <div class="cu-controls__section">
        <label for="cu-size-div">div:</label>
        <select class="" name="cu-size-div">
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
  </div>

    <div>
      <div class="cu-controls__section">
        <label for="cu-size-grandparent">grandparent:</label>
        <select class="" name="cu-size-grandparent">
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

      <div class="cu-controls__section">
        <label for="cu-size-parent">parent:</label>
        <select class="" name="cu-size-parent">
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

      <div class="cu-controls__section">
        <label for="cu-size-child">child:</label>
        <select class="" name="cu-size-child">
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
    </div>

    <div class="btn-container">
      <button id="cu-button" class="btn">Let's go!</button>
    </div>


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


<script src="/learn/css-units/js/css-units.js"></script>

<?php include '../footer.php'; ?>

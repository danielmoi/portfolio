<?php include '../header-learn-start.php'; ?>
<?php include '../header-learn-end.php'; ?>

<div class="main__container">
  <h1>Radio Tutorial</h1>

<div class="rs__container">
  <h2>Step 1</h2>
  <p>The most basic radio.</p>
  <p>We use the <code>&lt;input&gt;</code> element, and specify its <code>type</code> <em>attribute</em> to be <code>radio</code>.</p>
  <p>There is no <code>&lt;radio&gt;</code> element.</p>
  <pre><code>&lt;input type=&quot;radio&quot;&gt;</code></pre>

  <h3 class="rs__output">Output</h3>
  
  <div>
    <input type="radio" class="rs__radio">
  </div>

</div>

  <div class="rs__container">
    <h2>Step 2</h2>
    <p>Now let's attach a <strong>value</strong> to our radio.</p>
    <p>We do this with the <code>value</code> <em>attribute</em>.</p>
    <pre><code>&lt;input type=&quot;radio&quot; value=&quot;hotdogs&quot;&gt;</code></pre>

    <h3 class="rs__output">Output</h3>

<div>
  <input type="radio" value="hotdogs" class="rs__radio">
</div>

  </div>

  <div class="rs__container">
    <h2>Step 3</h2>
    <p>Now let's make that value visible.</p>
    <p>We do this with the <code>&lt;label&gt;</code> element.</p>
    <pre><code>&lt;label&gt;Hotdogs&lt;/label&gt;</code>
<code>&lt;input type=&quot;radio&quot; value=&quot;hotdogs&quot;&gt;</code></pre>

<h3 class="rs__output">Output</h3>

<div>
  <input type="radio" value="hotdogs" class="rs__radio">
  <label>Hotdogs</label>
</div>

  </div>

  <div class="rs__container">
    <h2>Step 4</h2>
    <p>Now let's associate our label with our radio.</p>
    <p>This way, clicking the label will check our radio.</p>
    <p>We do this by adding a <code>for</code> attribute to our label...</p>
    <p>That corresponds to the <code>id</code> attribute of our radio.</p>
    <pre><code>&lt;input type=&quot;radio&quot; value=&quot;hotdogs&quot; id=&quot;radio1-hotdogs&quot;&gt;</code>
<code>&lt;label for=&quot;radio1-hotdogs&quot;&gt;Hotdogs&lt;/label&gt;</code></pre>

<h3 class="rs__output">Output</h3>

<div>
  <input type="radio" value="hotdogs" class="rs__radio" id="radio1-hotdogs">
  <label for="radio1-hotdogs">Hotdogs</label>
</div>

  </div>

  <div class="rs__container">
    <h2>Step 5</h2>
    <p>Let's add another radio!</p>
    <p>As you can see, both radios can be selected with this markup...</p>
    <p>This is not what we want!</p>
    <pre><code>&lt;input type=&quot;radio&quot; value=&quot;hotdogs&quot; id=&quot;radio2-hotdogs&quot;&gt;</code>
<code>&lt;label for=&quot;radio2-hotdogs&quot;&gt;Hotdogs&lt;/label&gt;</code>
<code>&lt;input type=&quot;radio&quot; value=&quot;butterfly&quot; id=&quot;radio2-butterfly&quot;&gt;</code>
<code>&lt;label for=&quot;radio2-butterfly&quot;&gt;Butterfly&lt;/label&gt;</code></pre>

<h3 class="rs__output">Output</h3>

<div>
  <input type="radio" value="hotdogs" class="rs__radio" id="radio2-hotdogs">
  <label for="radio2-hotdogs">Hotdogs</label>
  <input type="radio" value="hotdogs" class="rs__radio" id="radio2-butterfly">
  <label for="radio2-butterfly">Butterfly</label>
</div>

  </div>

  <div class="rs__container">
    <h2>Step 6</h2>
    <p>We can fix that by <em>grouping</em> our radios together.</p>
      <p>We do this by using the <code>name</code> attribute.</p>
      <p>Each radio, within a group, must have the same <code>name</code> attribute.</p>
      <p>This way, only one radio, within the group, can be checked.</p>
      <pre><code>&lt;input type=&quot;radio&quot; value=&quot;hotdogs&quot; id=&quot;radio3-hotdogs&quot; name=&quot;radio3&quot;&gt;</code>
<code>&lt;label for=&quot;radio3-hotdogs&quot;&gt;Hotdogs&lt;/label&gt;</code>
<code>&lt;input type=&quot;radio&quot; value=&quot;butterfly&quot; id=&quot;radio3-butterfly&quot; name=&quot;radio3&quot;&gt;</code>
<code>&lt;label for=&quot;radio3-butterfly&quot;&gt;Butterfly</label></code></pre>

<h3 class="rs__output">Output</h3>

<div>
  <input type="radio" value="hotdogs" class="rs__radio" id="radio3-hotdogs" name="radio3">
  <label for="radio3-hotdogs">Hotdogs</label>
  <input type="radio" value="hotdogs" class="rs__radio" id="radio3-butterfly" name="radio3">
  <label for="radio3-butterfly">Butterfly</label>
</div>

  </div>

  <div class="rs__container">
    <h2>Step 7</h2>
    <p>Let's add a third radio!</p>
    <p>We can choose which radio is 'pre-checked' with the <code>checked</code> attribute.</p>

    <pre>
<code>&lt;input type=&quot;radio&quot; value=&quot;hotdogs&quot; id=&quot;radio4-hotdogs&quot; name=&quot;radio4&quot;&gt;</code>
<code>&lt;label for=&quot;radio4-hotdogs&quot;&gt;Hotdogs&lt;/label&gt;</code>
<code>&lt;input type=&quot;radio&quot; value=&quot;butterfly&quot; id=&quot;radio4-butterfly&quot; name=&quot;radio4&quot; checked&gt;</code>
<code>&lt;label for=&quot;radio4-butterfly&quot;&gt;Butterfly&lt;/label&gt;</code>
<code>&lt;input type=&quot;radio&quot; value=&quot;monster&quot; id=&quot;radio4-monster&quot; name=&quot;radio4&quot;&gt;</code>
<code>&lt;label for=&quot;radio4-monster&quot;&gt;Monster&lt;/label&gt;</code>
    </pre>

    <h3 class="rs__output">Output</h3>


<div>
  <input type="radio" value="hotdogs" class="rs__radio" id="radio4-hotdogs" name="radio4">
  <label for="radio4-hotdogs">Hotdogs</label>

  <input type="radio" value="butterfly" class="rs__radio" id="radio4-butterfly" name="radio4" checked>
  <label for="radio4-butterfly">Butterfly</label>

  <input type="radio" value="monster" class="rs__radio" id="radio4-monster" name="radio4">
  <label for="radio4-monster">Monster</label>
</div>
  </div>


  <div class="rs__container">
    <h2>Step 8</h2>
    <p>Now let's retrieve the value of the checked radio!</p>
    <p>We do this by targeting the <code>name</code> attribute, and applying the <code>:checked</code> jQuery selector</p>
    <p>This will select the (one) checked value from our group of radios.</p>

    <pre><code>$('.btn--rs1').on('click', function() {
  $('.radio5-value').text($('input[name="radio5"]:checked').val());
});</code></pre>

    <h3 class="rs__output">Output</h3>

<div>
  <input type="radio" value="hotdogs" class="rs__radio" id="radio5-hotdogs" name="radio5">
  <label for="radio5-hotdogs">Hotdogs</label>

  <input type="radio" value="butterfly" class="rs__radio" id="radio5-butterfly" name="radio5" checked>
  <label for="radio5-butterfly">Butterfly</label>

  <input type="radio" value="monster" class="rs__radio" id="radio5-monster" name="radio5">
  <label for="radio5-monster">Monster</label>
</div>

    <p>Value of radio5 group: <span class="radio5-value"></span></p>

    <div class="btn-container">
      <button class="btn btn--rs1">Retrieve!</button>
    </div>
  </div>

  <div class="rs__container">
    <p>And we're done!</p>
    <p>I hope that you found this helpful.</p>
    <p>Do let me know if there's anything you'd like added / changed!</p>
  </div>

  <script src="/learn/radio/js/radio.js"></script>

<?php include '../footer.php'; ?>

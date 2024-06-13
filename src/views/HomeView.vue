<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="card">
      <img src="/corax.png" class="card-img-top" />
      <div class="card-body">
	<h2>Akustische Schnitzeljagd live on Air und interaktiv auf der Straße</h2>
	<h3>16.06.2024, ab 14:30 Uhr</h3>
	<p>Wir erforschen gemeinsam mit euch den Klang des öffentlichen Raums.
	Wie hören sich die Straßen und Plätze dieser Stadt an? Welche
	musikalischen Referenzen führen euch zu einem bestimmten Ort? Findet
	mit Hilfe von Hinweisen einer Radiosendung die einzelnen Stationen
	einer akustischen Schnitzeljagd.</p>
	<dl>
	  <dt>Interaktiv</dt>
	  <dd>ab 14:30 Uhr am <a href="https://www.herrfleischer.de/">hr.fleischer – Kiosk am Reileck</a> in Halle (Saale)</dd>
	  <dt>Live on air</dt>
	  <dd>15:00 Uhr - 17:00 Uhr auf <a href="https://www.radiocorax.de">Radio Corax</a>; 95,9 MHz in Halle (Saale) oder Stream im Netz</dd>
	</dl>
	<h4>Mitmachen</h4>
	<ul>
	  <li>Komm am 16.06.2024 um 14:30 Uhr zum hr.fleischer / Reileck</li>
	  <li>Hab dabei (kann in einem Gerät vereint sein)</li>
	  <ol>
	    <li>Ein mobiles Gerät zum Empfang von RadioCorax (UKW Radio, streamingfähiges Empfangsgerät)</li>
	    <li>Ein mobiles Gerät zum scannen von QR-Codes</li>
	    <li>Ein mobiles Gerät zur Kommunikation mit <a href="https://signal.org/de/">Signal</a> oder E-Mail</li>
	  </ol>
	</ul>
      </div>
    </div>
  </main>
  <footer class="mt-2">
    <p class="text-end"><RouterLink to="/impressum">Impressum</RouterLink></p>
  </footer>
</template>

import React, { Component } from 'react'
const Tabs = () => {
  return (
    <nav id="nav-tabs">
     <span id="home-tab" class="tab activeTab leftTab">Home</span>
     <span id="close-tab" class="tab">Race</span>
     <span id="class-tab" class="tab">Class</span>
     <span id="background-tab" class="tab">Background</span>
     <span id="abilities-tab" class="tab">Abilities</span>
     <span id="feats-tab" class="tab">Feats</span>
     <span id="proficiencies-tab" class="tab">Proficiencies</span>
     <span id="style-tab" class="tab">Style</span>
     <span id="hp-tab" class="tab">HP</span>
     <span id="spells-tab" class="tab">Spells</span>
     <span id="equip-tab" class="tab">Equipment</span>
     <span id="char-tab" class="tab rightTab">Info</span>
    </nav>
  )
}

export {Tabs}

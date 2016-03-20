---
layout: page
title: Ideas
permalink: /ideas/
order: 6
---
You can submit your own ideas and suggestions here. 
You can also vote on ideas other people have suggested. 
Based on your feedback, we’ll prioritize what we’ll implement next.

<div id="ideascale-campaign-widget"></div>

<script>
  function loadCampaignWidget() {
    document.getElementById('ideascale-campaign-widget').innerHTML = '<iframe allowTransparency="true" src="//livesplit.ideascale.com/a/widget/super/campaign/5325?defaultTab=top" frameborder="0" scrolling="auto" style="width: 100%; height: 1000px;"></iframe>'
  }

  window.onload = loadCampaignWidget;//you may change this line
</script>
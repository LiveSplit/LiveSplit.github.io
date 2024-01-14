---
layout: page
title: Components
permalink: /components/
order: 5
---
### Downloadable Components

<table class="table">
	<col style="width:30%">
    <col style="width:70%">
	<thead>
		<tr>
			<th>Download</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="https://github.com/fatalis/sourcesplit/releases">SourceSplit</a><br>by <a href="http://twitter.com/fatalis_">Fatalis</a></td>
			<td>SourceSplit is a component that helps out Source engine speedrunning. It can automatically split for you when a map changes, and it keeps track of in-game time so you don't have to record demos. It works by reading the game's memory, and it should work on every Source engine game.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/LiveSplit/LiveSplit.Server/releases">LiveSplit Server</a></td>
			<td>Allows a remote connection and control of LiveSplit by starting a small server within LiveSplit.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/LiveSplit/LiveSplit.Counter/releases">Counter</a><br>by <a href="https://twitter.com/JayceAndTheNews">Chris</a></td>
			<td>Displays a custom counter that can be controlled with hotkeys.</td>
		</tr>
		<tr>
			<td><a href="https://www.nightgamedev.com/sgl">Speed Guides Live</a><br>by <a href="https://twitter.com/inightfaller">iNightfaller</a></td>
			<td>Allows you to create a guide for your speedrun with notes that are displayed for each individual segment.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/Dalet/LiveSplit.AlternateTimingMethod/releases">Alternate Timing Method</a><br>by <a href="https://twitter.com/Dalleth_">Dalet</a></td>
			<td>Displays Real Time if the comparison is set to Game Time and vice versa.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/Dalet/LiveSplit.FocusedHotkeys/releases">Focused Hotkeys</a><br>by <a href="https://twitter.com/Dalleth_">Dalet</a></td>
			<td>Enables Global Hotkeys only when specified programs have focus.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/Minibeast/LiveSplit.Discord/releases">LiveSplit.Discord</a><br>by <a href="https://twitter.com/mini54_">Mini</a></td>
			<td>Shows the current run title and run category in Discord using Rich Presence.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/TheSoundDefense/LiveSplit.ResetChance/releases">Reset Chance</a><br>by <a href="https://github.com/TheSoundDefense">The Sound Defense</a></td>
			<td>Shows the likelihood that the run will be reset during the current split.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/therungg/LiveSplit.TheRun/releases">LiveSplit.TheRun</a><br>by <a href="https://therun.gg">therun.gg</a></td>
			<td>Uploads runs automatically to therun.gg and keeps track of live runs for The Run Live.</td>
		</tr>
		<tr>
			<td><a href="https://github.com/andrewhuntsmith/LiveSplit.PacePlacement/releases">Pace Placement</a><br>by <a href="https://twitter.com/XandoToaster">XandoToaster</a></td>
			<td>Tells you your current place in a theoretical race against every previous pace in the current history.</td>
		</tr>
	</tbody>
</table>

### Standard Components

<table class="table">
	<col style="width:30%">
    <col style="width:70%">
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Title</td>
			<td>Displays the game name, category, attempt count, and game icon.</td>
		</tr>
		<tr>
			<td>Timer</td>
			<td>Displays the current run time.</td>
		</tr>
		<tr>
			<td>Detailed Timer</td>
			<td>Displays the current run time, current segment time, PB segment, and Best Segment.</td>
		</tr>
		<tr>
			<td>Splits</td>
			<td>Displays the split times and how far ahead or behind the current run is compared to the personal best.</td>
		</tr>
		<tr>
			<td>Graph</td>
			<td>Displays a graph of the current run in comparison to the personal best. Graph colors can be configured along with whether or not the graph is updated live.</td>
		</tr>
		<tr>
			<td>Previous Segment</td>
			<td>Displays the difference between the personal best and the current run over the last segment. Becomes "Live Segment" if the current segment is longer than the best segment.</td>
		</tr>
		<tr>
			<td>Possible Time Save</td>
			<td>Shows the difference between the best segment time and the segment time of the personal best run. Effectively shows how much time can be saved if the segment is played perfectly.</td>
		</tr>
		<tr>
			<td>Sum of Best</td>
			<td>Displays the sum of best segment times. Shows the "perfect run" time based on the best segments.</td>
		</tr>
		<tr>
			<td>Text</td>
			<td>Displays customizable text. This is useful when you're streaming your run and want to show additional information such as goal times or world records.</td>
		</tr>
		<tr>
			<td>Run Prediction</td>
			<td>Shows a predicted time for your current run based on a comparison that you choose.</td>
		</tr>
		<tr>
			<td>Hotkey Indicator</td>
			<td>Displays a separator that changes color depending on whether or not global hotkeys are enabled. It will show green when global hotkeys are enabled and red when they are disabled.</td>
		</tr>
		<tr>
			<td>Current Comparison</td>
			<td>This component displays which comparison you are currently comparing against.</td>
		</tr>
		<tr>
			<td>Delta</td>
			<td>Displays the current delta to a comparison.</td>
		</tr>
		<tr>
			<td>Video</td>
			<td>Shows a PB or WR video that is synced up to the current run time.</td>
		</tr>
		<tr>
			<td>Sound Effects</td>
			<td>Plays sound effects for different situations, like splitting, resetting, etc.</td>
		</tr>
		<tr>
			<td>Manual Game Time</td>
			<td>Allows manually entering segment times as game time.</td>
		</tr>
		<tr>
			<td>Subsplits by <a href="https://twitter.com/Test_Runner">TestRunner</a></td>
			<td>Allows certain splits to be defined as subsplits so that they are only displayed when they are relevant.</td>
		</tr>
		<tr>
			<td>World Record</td>
			<td>Displays the World Record for the current game and category, queried from <a href="http://speedrun.com">Speedrun.com</a>.</td>
		</tr>
		<tr>
			<td>Total Playtime</td>
			<td>Shows the total amount of time played with the current splits.</td>
		</tr>
	</tbody>
</table>

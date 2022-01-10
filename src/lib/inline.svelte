<script type="ts">
	import store from './store';
	import type { ToolTip } from './interface';
	export let tooltip: ToolTip;
	export let expanded = false;
	let title = tooltip.title.replaceAll('[', '<b>').replaceAll(']', '</b>');
	let text: string;

	if (tooltip.abbr && expanded) {
		text = `${title} (${tooltip.abbr})`;
	} else if (tooltip.abbr) {
		text = tooltip.abbr;
	} else {
		text = title;
	}

	function mouseOver() {
		store.display(tooltip);
	}
</script>

<span
	on:mouseover={mouseOver}
	on:focus
	class="underline text-slate-600 decoration-slate-300 hover:text-slate-800 hover:decoration-slate-800"
>
	{@html text}
</span>

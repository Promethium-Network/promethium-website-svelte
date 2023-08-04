<script>
	import Logo from '$lib/images/logo.png';
	import {
		Button,
		DarkMode,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Tooltip,
		GradientButton
	} from 'flowbite-svelte';

	const handleClick = () => {
		navigator.clipboard.writeText('play.promethium-network.net');
		console.log('TEST CLICK');
	};
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src={Logo} alt="Promethium Network Logo" class="mr-3 h-6 sm:h-9" />
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
		>
			Promethium Network
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<GradientButton
			class="mr-3"
			size="sm"
			on:click={handleClick}
			color="purpleToPink"
			id="copyclip"
		>
			play.promethium-network.net
		</GradientButton>
		<Tooltip
			placement="bottom"
			arrow={false}
			triggeredBy="#copyclip"
			trigger="click"
		>
			IP copied to clipboard :)
		</Tooltip>
		<DarkMode />
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {hidden} class="order-1">
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about" active={true}>About</NavLi>
	</NavUl>
</Navbar>

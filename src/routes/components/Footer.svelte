<script>
	import Logo from '$lib/images/logo.png';
	import {
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterIcon,
		FooterLink,
		FooterLinkGroup,
	} from 'flowbite-svelte';
</script>

<Footer footerType="socialmedia">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<FooterBrand
				href="/"
				src={Logo}
				alt="Promethium Network Logo"
				name="Promethium Network"
			/>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2
					class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
				>
					Resources
				</h2>
				<FooterLinkGroup>
					<FooterLink
						href="https://docs.google.com/document/d/1EJjC39nwT1pH23ak8VBFCVTYjKpkNm1HA-sMkPsS1FE/edit"
						target="#blank"
						liClass="mb-4">Rules</FooterLink
					>
					<FooterLink href="/about" liClass="mb-4">About</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2
					class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
				>
					Follow us
				</h2>
				<FooterLinkGroup>
					<FooterLink
						liClass="mb-4"
						href="https://discord.gg/pzdFY2xXZP"
						target="#blank">Discord</FooterLink
					>
					<FooterLink
						liClass="mb-4"
						href="/"
						target="#blank">Patreon</FooterLink
					>
					<FooterLink
						liClass="mb-4"
						href="https://www.tiktok.com/@promethiumnetwork"
						target="#blank">TikTok</FooterLink
					>
					<FooterLink
						liClass="mb-4"
						href="https://www.youtube.com/@PromethiumNetwork"
						target="#blank">YouTube</FooterLink
					>
					<FooterLink
						liClass="mb-4"
						href="https://github.com/Promethium-Network"
						target="#blank">GitHub</FooterLink
					>
				</FooterLinkGroup>
			</div>
			<div>
				<h2
					class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
				>
					Legal
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/privacy">Privacy Policy</FooterLink>
					<FooterLink liClass="mb-4" href="/tos">Terms & Conditions</FooterLink>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="Promethium Network™" />
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 items-center">
			<FooterIcon
				class="text-gray-400 hover:text-gray-900"
				target="#blank"
				href="https://discord.gg/pzdFY2xXZP"
			>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 21 16"
				>
					<path
						d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
					/>
				</svg>
			</FooterIcon>
			<FooterIcon
				class="text-gray-400 hover:text-gray-900"
				target="#blank"
				href="/"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 512 512"
				>
					<path
						d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"
					/></svg
				>
			</FooterIcon>
			<FooterIcon
				href="https://www.tiktok.com/@promethiumnetwork"
				class="text-gray-400 hover:text-gray-900"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 448 512"
					fill="currentColor"
					><path
						d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
					/></svg
				>
			</FooterIcon>
			<FooterIcon
				href="https://www.youtube.com/@PromethiumNetwork"
				class="text-gray-400 hover:text-gray-900"
				target="#blank"
			>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 14"
				>
					<path
						fill-rule="evenodd"
						d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
						clip-rule="evenodd"
					/>
				</svg>
			</FooterIcon>
			<FooterIcon
				href="https://github.com/Promethium-Network"
				class="text-gray-400 hover:text-gray-900"
				target="#blank"
			>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
						clip-rule="evenodd"
					/>
				</svg>
			</FooterIcon>
		</div>
	</div>
</Footer>

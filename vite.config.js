import { sentrySvelteKit } from "@sentry/sveltekit";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        sourcemap: true,
    },
	plugins: [
        sentryVitePlugin({
            authToken: process.env.SENTRY_AUTH_TOKEN,
            org: "augustus-bunce",
            project: "promethium-network-website",
        }),
        sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "augustus-bunce",
            project: "promethium-network-website"
        },
    }), sveltekit()]
});
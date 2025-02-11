build-assets:
	(cd ui && pnpm i)
	(cd ui && pnpm svelte-kit sync)
	(cd ui && BUILD_PATH=../assets pnpm build:server)

update-submodules:
	git submodule update --recursive --remote
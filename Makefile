build-assets:
	(cd ui && pnpm i)
	(cd ui && pnpm svelte-kit sync)
	(cd ui && BUILD_PATH=../dist/local VITE_API_ADDRESS= VITE_BUILD_TARGET=local pnpm build)
	(cd ui && BUILD_PATH=../dist/cloud VITE_API_ADDRESS= VITE_BUILD_TARGET=cloud pnpm build)

update-submodules:
	@git submodule foreach --recursive '\
		echo "==> Updating $$name" && \
		git fetch --tags --force && \
		TAG=$$(git tag --sort=-v:refname | head -n 1) && \
		if [ -z "$$TAG" ]; then \
			echo "    No tags found, skipping"; \
		else \
			echo "    Checking out $$TAG"; \
			git checkout $$TAG; \
		fi \
	'
	@echo "Submodules updated. Remember to commit the new SHAs."
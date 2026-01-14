build-assets:
	(cd ui && pnpm i)
	(cd ui && pnpm svelte-kit sync)
	(cd ui && BUILD_PATH=../assets pnpm build:server)

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
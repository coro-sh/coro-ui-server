# Coro UI Server

Go embedded Coro UI assets to serve on a HTTP server.

All assets are built from the [coro-ui](https://github.com/coro-sh/coro-ui) submodule.

## Build Steps

1. Update the `ui/` submodule to the latest tag:

    ```shell
    make update-submodules
    ```

2. Build UI assets:

    ```shell
    make build-assets
    ```
3. Commit, push, and create a new release.

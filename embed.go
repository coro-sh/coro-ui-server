package uiserver

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"

	"github.com/labstack/echo/v4"
)

const indexPage = "200.html"

//go:embed all:dist
var dist embed.FS

// Build represents a UI build variant.
type Build string

const (
	BuildLocal Build = "local"
	BuildCloud Build = "cloud"
)

// Dist returns a read-only file system for the specified UI build.
func Dist(build Build) (fs.FS, error) {
	basePath := "dist/" + string(build)

	f, err := dist.Open(basePath + "/" + indexPage)
	if err != nil {
		return nil, fmt.Errorf("ui build %q not found (missing %s): %w", build, indexPage, err)
	}
	if err = f.Close(); err != nil {
		return nil, fmt.Errorf("close %s: %w", indexPage, err)
	}

	subFS, err := fs.Sub(dist, basePath)
	if err != nil {
		return nil, fmt.Errorf("create sub filesystem for %q: %w", build, err)
	}
	return subFS, nil
}

// DistHandler returns an Echo handler for serving static UI files for the specified build.
func DistHandler(build Build) (echo.HandlerFunc, error) {
	distFS, err := Dist(build)
	if err != nil {
		return nil, err
	}

	handler := echo.StaticDirectoryHandler(distFS, false)

	return func(c echo.Context) error {
		if err := handler(c); err != nil {
			// SPA fallback: serve index page for client-side routing
			index, err := distFS.Open(indexPage)
			if err != nil {
				return echo.ErrNotFound
			}
			defer index.Close()
			return c.Stream(http.StatusOK, echo.MIMETextHTMLCharsetUTF8, index)
		}
		return nil
	}, nil
}

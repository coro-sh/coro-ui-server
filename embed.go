package uiserver

import (
	"embed"
	"fmt"
	"io/fs"
)

//go:embed all:assets
var assets embed.FS

// Assets returns a read-only file system of Annex UI static files.
func Assets() (fs.FS, error) {
	f, err := assets.Open("assets/" + indexPage)
	if err != nil {
		return nil, fmt.Errorf("verify build: %w", err)
	}
	if err = f.Close(); err != nil {
		return nil, fmt.Errorf("close index.html: %w", err)
	}

	return assets, nil
}

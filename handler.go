package uiserver

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

const indexPage = "200.html"

func AssetsHandler() (echo.HandlerFunc, error) {
	fs, err := Assets()
	if err != nil {
		return nil, err
	}
	uiAssets := echo.MustSubFS(fs, "assets")
	handler := echo.StaticDirectoryHandler(uiAssets, false)

	return func(c echo.Context) error {
		if err := handler(c); err != nil {
			index, err := uiAssets.Open(indexPage)
			if err != nil {
				return echo.ErrNotFound
			}
			defer index.Close()
			return c.Stream(http.StatusOK, "text/html", index)
		}
		return nil
	}, nil
}

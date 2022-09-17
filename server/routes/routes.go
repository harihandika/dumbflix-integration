package routes

import (
	"github.com/gorilla/mux"
)

func RouteInit(r *mux.Router) {
	UserRoutes(r)
	FilmRoutes(r)
	categoryRoutes(r)
	TransactionRoutes(r)
	EpisodeRoutes(r)
	AuthRoutes(r)
}

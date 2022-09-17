package routes

import (
	"dumbflix/handlers"
	"dumbflix/pkg/middleware"
	"dumbflix/pkg/mysql"
	"dumbflix/repositories"

	"github.com/gorilla/mux"
)

func EpisodeRoutes(r *mux.Router) {
	episodeRepository := repositories.RepositoryEpisode(mysql.DB)
	h := handlers.HandlerEpisode(episodeRepository)

	r.HandleFunc("/episodes", h.FindEpisodes).Methods("GET")
	r.HandleFunc("/episode/{id}", h.GetEpisode).Methods("GET")
	r.HandleFunc("/episode", middleware.Auth(middleware.ChekAdmin(middleware.UploadFile(h.CreateEpisode)))).Methods("POST")
	r.HandleFunc("/episode/{id}", h.UpdateEpisode).Methods("PATCH")
	r.HandleFunc("/episode/{id}", h.DeleteEpisode).Methods("DELETE")

}

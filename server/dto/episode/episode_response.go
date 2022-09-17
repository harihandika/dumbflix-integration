package episodesdto

import "dumbflix/models"

type EpisodeResponse struct {
	ID            int                 `json:"id" gorm:"primary_key:auto_increment"`
	Title         string              `json:"name" gorm:"type: varchar(255)"`
	ThumbnailFilm string              `json:"image" gorm:"type: varchar(255)"`
	LinkFilm      string              `json:"linkfilm" gorm:"type: varchar(255)"`
	Film          int                 `json:"film_id"`
	FilmID        models.FilmResponse `json:"film"`
}

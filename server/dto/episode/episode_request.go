package episodesdto

type CreateEpisodeRequest struct {
	Title         string `json:"title" form:"title" gorm:"type: varchar(255)"`
	ThumbnailFilm string `json:"image" form:"image" gorm:"type: varchar(255)"`
	LinkFilm      string `json:"linkfilm" form:"link" gorm:"type: varchar(255)"`
	FilmID        int    `json:"film_id" form:"film_id" gorm:"type: int"`
}

type UpdateEpisodeRequest struct {
	Title         string `json:"title" form:"title" gorm:"type: varchar(255)"`
	ThumbnailFilm string `json:"image" form:"image" gorm:"type: varchar(255)"`
	LinkFilm      string `json:"linkfilm" form:"link" gorm:"type: varchar(255)"`
}

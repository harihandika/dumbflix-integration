package models

type Episode struct {
	ID            int    `json:"id" gorm:"primary_key:auto_increment"`
	Title         string `json:"name" form:"name" gorm:"type: varchar(255)"`
	ThumbnailFilm string `json:"image" form:"image" gorm:"type: varchar(255)"`
	LinkFilm      string `json:"linkfilm" form:"name" gorm:"type: varchar(255)"`
	Film          Film   `json:"film" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	FilmID        int    `json:"-"`
}

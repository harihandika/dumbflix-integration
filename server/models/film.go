package models

type Film struct {
	ID            int              `json:"id" gorm:"primary_key:auto_increment" `
	Title         string           `json:"title" gorm:"type: varchar(255)"`
	ThumbnailFilm string           `json:"image" gorm:"type: varchar(255)"`
	Year          string           `json:"year" gorm:"type: varchar(255)"`
	Category      CategoryResponse `json:"category" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	CategoryID    int              `json:"-"`
	Desc          string           `json:"desc" gorm:"type:varchar(255)"`
}

type FilmResponse struct {
	ID            int              `json:"id" `
	Title         string           `json:"title"`
	ThumbnailFilm string           `json:"image"`
	Year          string           `json:"year"`
	Category      CategoryResponse `json:"category" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	CategoryID    int              `json:"-"`
	Desc          string           `json:"desc"`
}

type FilmCategory struct {
	ID            int              `json:"id" `
	Title         string           `json:"title"`
	ThumbnailFilm string           `json:"image"`
	Year          string           `json:"year"`
	Category      CategoryResponse `json:"-"`
	CategoryID    int              `json:"-"`
	Desc          string           `json:"desc"`
}

func (FilmResponse) TableName() string {
	return "films"
}

// cek
func (FilmCategory) TableName() string {
	return "films"
}

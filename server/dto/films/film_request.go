package filmsdto

type CreateFilmRequest struct {
	Title      string `json:"title" form:"title" validate:"required"`
	Thumbnail  string `json:"image" form:"image" validate:"required"`
	Year       string `json:"year" form:"year" validate:"required"`
	CategoryID int    `json:"category_id" form:"category_id" gorm:"type: int"`
	Desc       string `json:"desc" form:"desc" validate:"required"`
}

type UpdateFilmRequest struct {
	Title     string `json:"title" form:"title"`
	Thumbnail string `json:"thumbnail" form:"thumbnail"`
	Year      string `json:"year" form:"year"`
	Desc      string `json:"desc" form:"desc"`
}

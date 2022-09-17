package models

type Category struct {
	ID   int            `json:"id" gorm:"primary_key:auto_increment"`
	Name string         `json:"name"`
	Film []FilmCategory `json:"film" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}

type CategoryResponse struct {
	ID   int    `json:"id" `
	Name string `json:"name"`
}

func (CategoryResponse) TableName() string {
	return "categories"
}

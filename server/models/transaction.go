package models

import "time"

type Transaction struct {
	ID        int          `json:"id" gorm:"primary_key:auto_increment"`
	StartDate time.Time    `json:"startdate"`
	DueDate   time.Time    `json:"duedate"`
	User      UserResponse `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	UserID    int          `json:"user_id"`
	Attache   string       `json:"attache"  form:"image"`
	Status    string       `json:"status"`
}

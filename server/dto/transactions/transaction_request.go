package transactionsdto

import (
	"time"
)

type CreateTransactionRequest struct {
	// StartDate time.Time `json:"startdate" form:"startdate" validate:"required"`
	// DueDate   time.Time `json:"duedate" form:"duedate" validate:"required"`
	UserID  int    `json:"user_id"`
	Attache string `json:"attache"  form:"image" validate:"required"`
	Status  string `json:"status" form:"status" validate:"required"`
}

type UpdateTransactionRequest struct {
	StartDate time.Time `json:"startdate" form:"startdate"`
	DueDate   time.Time `json:"duedate" form:"duedate"`
	Attache   string    `json:"image"  form:"image"`
	Status    string    `json:"status" form:"status"`
}

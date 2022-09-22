package transactionsdto

import "time"

type CreateTransactionRequest struct {
	StartDate time.Time `json:"startdate" form:"startdate" `
	DueDate   time.Time `json:"duedate" form:"duedate" `
	UserID    int       `json:"user_id"`
	// Attache   string    `json:"attache"  form:"image"`
	Status string `json:"status" form:"status"`
}

type UpdateTransactionRequest struct {
	// StartDate time.Time `json:"startdate" form:"startdate"`
	// DueDate   time.Time `json:"duedate" form:"duedate"`
	Attache string `json:"image"  form:"image"`
	Status  string `json:"status" form:"status"`
}

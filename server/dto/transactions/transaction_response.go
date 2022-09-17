package transactionsdto

import "time"

type TransactionResponse struct {
	ID        int       `json:"id"`
	StartDate time.Time `json:"startdate"`
	DueDate   time.Time `json:"duedate"`
	UserID    int       `json:"user"`
	Attache   string    `json:"attache"`
	Status    string    `json:"status"`
}

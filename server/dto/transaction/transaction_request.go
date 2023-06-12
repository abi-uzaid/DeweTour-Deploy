package transactiondto

import "dewetour/models"

type CreateTransactionRequest struct {
	ID         int         `json:"id"`
	CounterQty int         `json:"counter_qty"`
	Total      int         `json:"total"`
	Status     string      `json:"status"`
	TripID     int         `json:"trip_id"`
	Trip       models.Trip `json:"trip"`
	UserID     int         `json:"user_id"`
	User       models.User `json:"user"`
}

type UpdateTransactionRequest struct {
	ID         int         `json:"id"`
	CounterQty int         `json:"counter_qty" `
	Total      int         `json:"total" `
	Status     string      `json:"status" `
	TripID     int         `json:"trip_id" `
	Trip       models.Trip `json:"trip"`
	UserID     int         `json:"user_id"`
	User       models.User `json:"user"`
}

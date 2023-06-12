package transactiondto

import "dewetour/models"

type CreateTransactionRequest struct {
	CounterQty int         `json:"counter_qty"`
	Total      int         `json:"total"`
	Status     string      `json:"status"`
	TripID     int         `json:"trip_id"`
	Trip       models.Trip `json:"trip"`
	UserID     int         `json:"user_id"`
	User       models.User `json:"user"`
}

type UpdateTransactionRequest struct {
	CounterQty int         `json:"counter_qty" `
	Total      int         `json:"total" `
	Status     string      `json:"status" `
	TripID     int         `json:"trip_id" `
	Trip       models.Trip `json:"trip"`
	UserID     int         `json:"user_id"`
	User       models.User `json:"user"`
}

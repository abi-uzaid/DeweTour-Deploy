package transactiondto

import "dewetour/models"

type createTransactionRequest struct {
	ID         int         `json:"id"`
	CounterQty int         `json:"counter_qty" validate:"required" `
	Total      int         `json:"total" validate:"required" `
	Status     string      `json:"status" validate:"required" `
	TripID     int         `json:"trip_id" validate:"required" `
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

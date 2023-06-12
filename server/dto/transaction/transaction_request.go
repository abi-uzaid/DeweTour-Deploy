package transactiondto

import "dewetour/models"

type createTransactionRequest struct {
	ID         int         `json:"id"`
	CounterQty int         `json:"counter_qty" validate:"required" form:"counter_qty"`
	Total      int         `json:"total" validate:"required" form:"total"`
	Status     string      `json:"status" validate:"required" form:"status"`
	TripID     int         `json:"trip_id" validate:"required" form:"trip_id"`
	Trip       models.Trip `json:"trip"`
	UserID     int         `json:"user_id"`
	User       models.User `json:"user"`
}

type UpdateTransactionRequest struct {
	ID         int         `json:"id"`
	CounterQty int         `json:"counter_qty" form:"counter_qty"`
	Total      int         `json:"total" form:"total"`
	Status     string      `json:"status" form:"status"`
	TripID     int         `json:"trip_id" form:"trip_id"`
	Trip       models.Trip `json:"trip"`
	UserID     int         `json:"user_id"`
	User       models.User `json:"user"`
}

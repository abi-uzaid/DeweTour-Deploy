package transactiondto

import "dewetour/models"

type TransactionResponse struct {
	ID         int                         `json:"id"`
	CounterQty int                         `json:"counter_qty"`
	Total      int                         `json:"total"`
	Status     string                      `json:"status"`
	TripID     int                         `json:"trip_id"`
	Trip       models.TripResponse         `json:"trip"`
	UserID     int                         `json:"user_id"`
	User       models.UsersProfileResponse `json:"user"`
}

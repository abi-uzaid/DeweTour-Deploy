package models

import "time"

type Transaction struct {
	ID         int                  `json:"id"`
	CounterQty int                  `json:"counter_qty" gorm:"type int"`
	Total      int                  `json:"total" gorm:"type int"`
	Status     string               `json:"status" gorm:"type varchar(255)"`
	TripId     int                  `json:"trip_id"`
	Trip       TripResponse         `json:"trip"`
	UserID     int                  `json:"user_id"`
	User       UsersProfileResponse `json:"user"`
	CreatedAt  time.Time            `json:"-"`
	UpdatedAt  time.Time            `json:"-"`
}

type TransactionResponse struct {
	ID         int    `json:"id"`
	CounterQty int    `json:"counter_qty"`
	Total      int    `json:"total"`
	Status     string `json:"status"`
	UserID     int    `json:"user_id"`
}

func (TransactionResponse) TableName() string {
	return "transactions"
}

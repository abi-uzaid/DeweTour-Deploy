package models

type Trip struct {
	ID             int             `json:"id"`
	Title          string          `json:"title" binding:"required" gorm:"varchar(255)"`
	CountryId      int             `json:"country_id" binding:"required"`
	Country        CountryResponse `json:"country"`
	Accomodation   string          `json:"accomodation" binding:"required" gorm:"varchar(255)"`
	Transportation string          `json:"transportation" binding:"required" gorm:"varchar(255)"`
	Eat            string          `json:"eat" gorm:"varchar(255)"`
	Day            int             `json:"day" binding:"required" gorm:"varchar(255)"`
	Night          int             `json:"night" binding:"required"`
	DateTrip       string          `json:"date_trip" binding:"required"`
	Price          int             `json:"price" binding:"required"`
	Quota          int             `json:"quota" binding:"required"`
	Description    string          `json:"description" binding:"required"`
	Image          string          `json:"image" binding:"required" gorm:"varchar(255)"`
}

type TripResponse struct {
	ID             int             `json:"id"`
	Title          string          `json:"title"`
	CountryID      int             `json:"country_id"`
	Country        CountryResponse `json:"country"`
	Accomodation   string          `json:"accomodation"`
	Transportation string          `json:"transportation"`
	Eat            string          `json:"eat"`
	Day            int             `json:"day"`
	Night          int             `json:"night"`
	DateTrip       string          `json:"datetrip"`
	Price          int             `json:"price"`
	Quota          int             `json:"quota"`
	Description    string          `json:"description"`
	Image          string          `json:"image"`
}

func (TripResponse) TableName() string {
	return "trips"
}

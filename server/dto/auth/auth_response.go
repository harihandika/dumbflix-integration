package authdto

type LoginResponse struct {
	ID     int    `json:"id"`
	Name   string `gorm:"type: varchar(255)" json:"name"`
	Email  string `gorm:"type: varchar(255)" json:"email"`
	Token  string `gorm:"type: varchar(255)" json:"token"`
	Role   string `json:"role"`
	Gender string `json:"gender" gorm:"type: varchar(255)"`
	Phone  string `json:"phone" gorm:"type: varchar(255)"`
	Addres string `json:"addres" gorm:"type: varchar(255)"`
}

type CheckAuthResponse struct {
	Id       int    `gorm:"type: int" json:"id"`
	Fullname string `gorm:"type: varchar(255)" json:"fullname"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Role     string `json:"role"`
	Gender   string `json:"gender" gorm:"type: varchar(255)"`
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Addres   string `json:"addres" gorm:"type: varchar(255)"`
}

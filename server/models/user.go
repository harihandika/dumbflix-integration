package models

// gorm berfungsi untuk mengatur tipe data atau custom tipe data

type User struct {
	ID        int    `json:"id" gorm:"primary_key:auto_increment"`
	FullName  string `json:"name"`
	Email     string `json:"email" gorm:"type: varchar(255)"`
	Password  string `json:"password" gorm:"type: varchar(255)"`
	Gender    string `json:"gender" gorm:"type: varchar(255)"`
	Phone     string `json:"phone" gorm:"type: varchar(255)"`
	Addres    string `json:"addres" gorm:"type: varchar(255)"`
	Subscribe bool   `json:"subscribe"`
	Role      string `json:"role"`
}

// berfungsi untuk relasi

type UserResponse struct {
	ID        int    `json:"id" `
	FullName  string `json:"name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	Gender    string `json:"gender"`
	Phone     string `json:"phone"`
	Addres    string `json:"addres"`
	Subscribe bool   `json:"subscribe"`
}

func (UserResponse) TableName() string {
	return "users"
}

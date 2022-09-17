package usersdto

type UserResponse struct {
	ID        int    `json:"id"`
	Name      string `json:"name" form:"name" validate:"required"`
	Email     string `json:"email" form:"email" validate:"required"`
	Password  string `json:"password" form:"password" validate:"required"`
	Gender    string `json:"gender"`
	Phone     string `json:"phone"`
	Addres    string `json:"addres"`
	Subscribe bool   `json:"subscribe"`
}

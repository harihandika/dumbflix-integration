package bcrypt

// Import "golang.org/x/crypto/bcrypt" here ...
import "golang.org/x/crypto/bcrypt"

// Create HashingPassword function here ...
func HashingPassword(password string) (string, error) {
	hashedByte, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	if err != nil {
		return "", err
	}
	return string(hashedByte), nil
}

// Create CheckPasswordHash function here ...
func CheckPasswordHash(password, hashedPassword string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	return err == nil
}

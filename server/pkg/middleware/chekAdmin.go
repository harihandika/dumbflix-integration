package middleware

import (
	"context"
	dto "dumbflix/dto/result"
	"encoding/json"
	"net/http"

	"github.com/golang-jwt/jwt/v4"
)

func ChekAdmin(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
		userRole := userInfo["role"].(string)
		if userRole != "Admin" {
			w.WriteHeader(http.StatusUnauthorized)
			response := dto.ErrorResult{Code: http.StatusBadRequest, Message: "kamu bukan admin"}
			json.NewEncoder(w).Encode(response)
			return
		}

		ctx := context.WithValue(r.Context(), "userInfo", r.Context().Value("userInfo"))
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

package store

// Product represents an e-comm item
type Product struct {
	ID     int    `bson:"_id"`
	Title  string `json:"title"`
	Image  string `json:"image"`
	Price  uint64 `json:"price"`
	Rating uint8  `json:"rating"`
}

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type Products []Product

type Exception struct {
	Message string `json:"message"`
}

type JwtToken struct {
	Token string `json:"token"`
}

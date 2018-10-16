package store

type Repository struct{}

// connect with aws dynamodb

func (r Repository) GetProducts() Products {
	results := Products{}
	return results
}

func (r Repository) GetProductById(query string) Product {
	var result Product
	return result
}

func (r Repository) GetProductsByString(query string) Products {
	result := Products{}
	return result
}

func (r Repository) AddProduct(product Product) bool {
	return true
}

func (r Repository) UpdateProduct(product Product) bool {
	return true
}

func (r Repository) DeleteProduct(id int) string {
	return "OK"
}

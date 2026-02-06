package main

import (
	"net/http"
	"os"
  "github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Create a Gin router with default middleware (logger and recovery)
	r := gin.Default()
  r.Use(cors.Default()) //Warning: Allowing all origins disables cookies for clients. For credentialed requests, do not allow all origins.

	// Define a simple GET endpoint
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
			"data": gin.H{
				"message": "Muna is learning Go here",
			},
		})
	})

	// Get the port from Render environment variable
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // fallback for local testing
	}

	// Start server on the Render-assigned port
	r.Run(":" + port)
}
using Microsoft.EntityFrameworkCore;
using BookstoreApi.Models;

namespace BookstoreApi.Controllers
{
  public static class DiscountEndpoints
  {
    public static void MapDiscountEndpoints(this WebApplication app)
    {
      // Get discounts for Customer 1, the assumed logged-in user
      app.MapGet("/discounts", async (BookstoreDb db) =>
        await db.Discounts.Where(d => d.CustomerId == 1).ToListAsync());
      
      app.MapGet("/customers/{id}/discounts", async (int id, BookstoreDb db) =>
        await db.Discounts.Where(d => d.CustomerId == id).ToListAsync());
      
      app.MapPost("/discounts", async (Discount discount, BookstoreDb db) =>
      {
        db.Discounts.Add(discount);
        await db.SaveChangesAsync();
        return Results.Created($"/discounts/{discount.DiscountId}", discount);
      });
    }
  }
}
using Microsoft.EntityFrameworkCore;
using BookstoreApi.Models;

namespace BookstoreApi.Controllers
{
  public static class WishEndpoints
  {
    public static void MapWishEndpoints(this WebApplication app)
    {
      // Get wishes for Customer 1, the assumed logged-in user
      app.MapGet("/wishlist", async (BookstoreDb db) =>
        await db.Wishes.Where(w => w.CustomerId == 1).ToListAsync());
      
      app.MapGet("/customers/{id}/wishlist", async (int id, BookstoreDb db) =>
        await db.Wishes.Where(w => w.CustomerId == id).ToListAsync());
      
      app.MapPost("/wishlist", async (Wish wish, BookstoreDb db) =>
      {
        db.Wishes.Add(wish);
        await db.SaveChangesAsync();
        return Results.Created($"/wishlist/{wish.WishId}", wish);
      });
    }
  }
}
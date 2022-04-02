using Microsoft.EntityFrameworkCore;
using BookstoreApi.Models;

namespace BookstoreApi.Controllers
{
  public static class CustomerEndpoints
  {
    public static void MapCustomerEndpoints(this WebApplication app)
    {
      app.MapGet("/customers", async (BookstoreDb db) =>
        await db.Customers.ToListAsync());

      app.MapGet("/customers/{id}", async (int id, BookstoreDb db) =>
        await db.Customers.FindAsync(id)
          is Customer customer
            ? Results.Ok(customer)
            : Results.NotFound());

      app.MapPost("/customers", async (Customer customer, BookstoreDb db) =>
      {
        db.Customers.Add(customer);
        await db.SaveChangesAsync();
        return Results.Created($"/customers/{customer.CustomerId}", customer);
      });

      app.MapPut("/customers/{id}", async (int id, Customer inputCustomer, BookstoreDb db) =>
      {
        var customer = await db.Customers.FindAsync(id);
        if (customer is null) return Results.NotFound();
        customer.Name = inputCustomer.Name;
        customer.Password = inputCustomer.Password;
        customer.Role = inputCustomer.Role;
        await db.SaveChangesAsync();
        return Results.NoContent();
      });

      app.MapDelete("/customers/{id}", async (int id, BookstoreDb db) =>
      {
        if (await db.Customers.FindAsync(id) is Customer customer)
        {
          db.Customers.Remove(customer);
          await db.SaveChangesAsync();
          return Results.Ok(customer);
        }
        return Results.NotFound();
      });
    }
  }
}
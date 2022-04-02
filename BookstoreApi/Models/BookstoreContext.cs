using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace BookstoreApi.Models
{
  public class BookstoreDb : DbContext
  {
    public BookstoreDb(DbContextOptions<BookstoreDb> options)
      : base(options) { }

    public DbSet<Book> Books => Set<Book>();
    public DbSet<Customer> Customers => Set<Customer>();
  }
}
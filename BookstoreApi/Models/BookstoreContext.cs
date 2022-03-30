using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace BookstoreApi.Models
{
  class BookstoreDb : DbContext
  {
    public BookstoreDb(DbContextOptions<BookstoreDb> options)
      : base(options) { }

    public DbSet<Book> Books => Set<Book>();
  }
}
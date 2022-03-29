using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BookstoreDb>(opt => opt.UseInMemoryDatabase("BookstoreApi"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();

app.MapGet("/", () => "Welcome to The Bookish Calgarian.");

app.MapGet("/books", async (BookstoreDb db) =>
    await db.Books.ToListAsync());

app.MapGet("/books/{id}", async (int id, BookstoreDb db) =>
    await db.Books.FindAsync(id)
        is Book book
            ? Results.Ok(book)
            : Results.NotFound());

app.MapPost("/books", async (Book book, BookstoreDb db) =>
{
    db.Books.Add(book);
    await db.SaveChangesAsync();

    return Results.Created($"/books/{book.BookId}", book);
});

app.MapPut("/books/{id}", async (int id, Book inputBook, BookstoreDb db) =>
{
    var book = await db.Books.FindAsync(id);
    if (book is null) return Results.NotFound();
    book.Title = inputBook.Title;
    book.Price = inputBook.Price;
    book.Isbn = inputBook.Isbn;
    book.Author = inputBook.Author;
    book.Quality = inputBook.Quality;
    book.Publication_date = inputBook.Publication_date;
    book.Language = inputBook.Language;
    book.Genre = inputBook.Genre;
    book.Bookstore = inputBook.Bookstore;
    book.Shelf = inputBook.Shelf;
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapDelete("/books/{id}", async (int id, BookstoreDb db) =>
{
    if (await db.Books.FindAsync(id) is Book book)
    {
        db.Books.Remove(book);
        await db.SaveChangesAsync();
        return Results.Ok(book);
    }

    return Results.NotFound();
});

app.Run();

class Book
{
    public int BookId { get; set; }
    public string? Title { get; set; }
    public float Price { get; set; }
    public long Isbn  { get; set; }
    public string? Author { get; set; }
    public string? Quality { get; set; }
    public string? Publication_date { get; set; }
    public string? Language { get; set; }
    public string? Genre { get; set; }
    public string? Bookstore { get; set; }
    public string? Shelf { get; set; }
}

class BookstoreDb : DbContext
{
    public BookstoreDb(DbContextOptions<BookstoreDb> options)
        : base(options) { }

    public DbSet<Book> Books => Set<Book>();
}
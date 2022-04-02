using Microsoft.EntityFrameworkCore;
using BookstoreApi.Controllers;
using BookstoreApi.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BookstoreDb>(opt => opt.UseInMemoryDatabase("BookstoreApi"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();
app.MapGet("/", () => "Welcome to The Bookish Calgarian.");
app.MapBookEndpoints();
app.MapCustomerEndpoints();
app.MapDiscountEndpoints();
app.Run();
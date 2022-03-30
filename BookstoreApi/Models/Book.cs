namespace BookstoreApi.Models
{
  public class Book
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

}
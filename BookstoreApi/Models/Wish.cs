namespace BookstoreApi.Models
{
  public class Wish
  {
    public int WishId { get; set; }
    public int CustomerId { get; set; }
    public string? Title { get; set; }
    public int Isbn { get; set; }
  }
}
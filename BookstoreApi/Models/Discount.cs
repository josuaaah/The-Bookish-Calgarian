namespace BookstoreApi.Models
{
  public class Discount
  {
    public int DiscountId { get; set; }
    public int CustomerId { get; set; }
    public string? DateEarned { get; set; }
    public string? Status { get; set; }
  }
}
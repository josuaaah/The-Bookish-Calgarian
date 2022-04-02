namespace BookstoreApi.Models
{
  public class Customer
  {
    public int CustomerId { get; set; }
    public string? Name { get; set; }
    public string? Password { get; set; }
    public string? Role { get; set; }
  }
}
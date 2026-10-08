namespace InsuranceAPI.DTOs;

public class UpdateClaimRequest
{
    public DateOnly ClaimDate { get; set; }

    public decimal AmountClaimed { get; set; }

    public string? Status { get; set; }
}
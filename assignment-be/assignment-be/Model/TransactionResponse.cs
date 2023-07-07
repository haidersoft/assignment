namespace assignment_be.Model
{
    public class TransactionResponse
    {
        public int ResponseCode { get; set; }
        public string Message { get; set; }
        public long ApprovalCode { get; set; }
        public string DateTime { get; set; }
    }
}

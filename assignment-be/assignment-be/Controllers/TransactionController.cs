using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using assignment_be.Model;

namespace Retail_BE.Controllers
{
    [ApiController]
    [Route("api/Transaction")]
    public class Transaction : ControllerBase
    {
        [Authorize]
        [HttpPost]
        [Route("Create")]
        public TransactionResponse ActivateUser([FromBody] TransactionRequest req)
        {

            DateTime currentDateTime = DateTime.Now;
            return new TransactionResponse()
            {
                ResponseCode = 00,
                Message = "Success",
                ApprovalCode = 123123,
                DateTime = currentDateTime.ToString("yyyyMMddHHmm")
            };
        }
    }
}

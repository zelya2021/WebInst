using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebAPI_Inst.Models;

namespace WebAPI_Inst.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserPageController : ControllerBase
    {
        private UserManager<User> _userManager;
        public UserPageController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        //Get: /api/UserPage
        public async Task<Object> GetUser()
        {
            string userId = User.Claims.First(c => c.Type == "UserId").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new
            {
                user.Email,
                user.UserName
            };
        }
    }
}

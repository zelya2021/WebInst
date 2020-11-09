using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_Inst.Models
{
    public class AuthenticationContex : IdentityDbContext
    {
        public AuthenticationContex(DbContextOptions options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}

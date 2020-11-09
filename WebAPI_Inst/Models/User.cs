using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_Inst.Models
{
    public class User : IdentityUser
    {
        [Column(TypeName ="nvarchar(20)")]
        public string NickName { get; set; }
    }
}

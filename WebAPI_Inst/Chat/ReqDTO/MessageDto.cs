using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_Inst.Chat.ReqDTO
{
    public class MessageDto
    {
        public string user { get; set; }
        public string msgText { get; set; }
    }
}

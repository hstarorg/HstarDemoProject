using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;

namespace WebHost.Models
{
    public class SystemUser : IIdentity
    {
        private string name;
        private int id;
        public SystemUser(int id, string userName)
        {
            this.id = id;
            this.name = userName;
        }
        public string AuthenticationType
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public bool IsAuthenticated
        {
            get
            {
                return true;
            }
        }

        public string Name
        {
            get
            {
                return name;
            }
        }

        public int UserId { get { return this.id; } }
    }
}
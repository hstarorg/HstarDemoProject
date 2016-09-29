using System;
using System.Security.Principal;

namespace WebHost.Models
{
    public class CustomPrincipal : IPrincipal
    {
        
        public CustomPrincipal(int userId, string userName)
        {
            this.UserId = userId;
            this.UserName = userName;
        }
        public IIdentity Identity
        {
            get
            {
                var identity = new SystemUser( this.UserId, this.UserName);
                return identity; 
            }
        }

        public bool IsInRole(string role)
        {
            throw new NotImplementedException();
        }

        public int UserId { get; private set; }

        public string UserName { get; private set; }
    }
}
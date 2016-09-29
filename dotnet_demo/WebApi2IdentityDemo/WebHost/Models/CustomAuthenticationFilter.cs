using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Filters;

namespace WebHost.Models
{
    public class CustomAuthenticationFilter : IAuthenticationFilter, IFilter
    {
        public bool AllowMultiple
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public async Task AuthenticateAsync(HttpAuthenticationContext context, CancellationToken cancellationToken)
        {

            var token = context.Request.Headers.GetValues("x-token").FirstOrDefault();
            if (token == null)
            {
                context.ErrorResult = new AuthenticationFailureResult("Token required", context.Request);
                return;
            }
            IPrincipal principal = this.AuthenticateAsync(token, cancellationToken);
            if (principal == null)
            {
                context.ErrorResult = new AuthenticationFailureResult("Invalid token", context.Request);
                return;
            }
            context.Principal = principal;
        }

        public Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken)
        {
            return Task.FromResult(0);
        }

        private IPrincipal AuthenticateAsync(string token, CancellationToken cancellationToken)
        {
            if(token != "admin")
            {
                return null;
            }
            var cp = new CustomPrincipal(1, "Jay");
            return cp;
        }
    }
}
using Microsoft.AspNetCore.Mvc;

namespace ImageInsight.API;

public static class DependencyInjection
{

    public static IServiceCollection AddDependencies(this IServiceCollection services)
    {

        services.AddHealthChecks();
        services.AddApiVersioning(o => {
            o.ReportApiVersions = true;
            o.AssumeDefaultVersionWhenUnspecified = true;
            o.DefaultApiVersion = new ApiVersion(1, 0);
        });


        return services;
    }

}

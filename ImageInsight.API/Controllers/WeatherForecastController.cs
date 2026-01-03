using Microsoft.AspNetCore.Mvc;

namespace ImageInsight.API.Controllers;

[ApiController]
[ApiVersion("1.0")]
[Route("api/{version:apiVersion}/[controller]")]
public class WeatherForecastController : ControllerBase
{

    [HttpGet(Name = "GetWeatherForecast")]
    public ActionResult Get()
    {
        return Ok("working");
    }
}

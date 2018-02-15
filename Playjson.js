console.log("Json and array ground");

// function getJson()
// {
//     console.log("Json Data Getting Here");
//     getJson('https://jsonblob.com/api/jsonBlob/8003a4c8-1286-11e8-ba08-27488084f9d4', function(data)
//     {
//     console.log(data);
//     });
// }


fetch('https://jsonblob.com/api/jsonBlob/8003a4c8-1286-11e8-ba08-27488084f9d4')

    .then(res => res.json())
    .then((out) => {
        debugger;
        console.log('Output: ', out);
        var Objarry =Object.keys(out).map(function(k)
        {
            return out[k];
        }
    )
    console.log(Objarry);
}).catch(err => console.error(err));
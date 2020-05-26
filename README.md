# Back-end

The API's url is <https://med-cab-vlapetr.herokuapp.com/api/med_cab>

### POST `/api/med_cab/register`

Make a post request to `/api/med_cab/register` with JSON in the following format:

```
{
	"name": "VLad",
	"email": "vlad@uni.com",
	"password": "password"
}
```

If the registration succeeds, you will receive a response formatted in the
following way:

```
{
  "message": "Vlad enjoy the App",
}
```

### POST `/api/med_cab/login`

Make a post request to `/api/med_cab/login` with JSON in the following format:

```
{
	"email": "vlad@uni.com",
	"password": "password"
}
```

If the login succeeds, you will receive a response formatted in the following
way:

```
{
 "message": "Welcome back Vlad"
```
}

### GET `/api/med_cab/` 

GET all canabis list

You can see the response only if you are authorized(logged in)

{
      "Strain": "00-Og",
      "Type": "hybrid",
      "Rating": 4,
      "Effects": "Creative,Energetic,Tingly,Euphoric,Relaxed",
      "Flavor": "Earthy,Sweet,Citrus",
      "Description": "$100 OG is a 50/50 hybrid strain that...
}

### POST `/api/med_cab/` 

You can choose what type of cannabis you want to see and filter it by 
{
	"Type": "indica" or ( "Type": "sativa" or "Type": "hybrid" )
 }



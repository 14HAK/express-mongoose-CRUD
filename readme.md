# FileName: [.env]:
 - PORT = "8080"
 - MONGODB_URI = "mongodb+srv://[userName]:[password]@cluster0.kcr8r.mongodb.net/[collectionName]?retryWrites=true&w=majority&appName=Cluster0"

# Third Party Packages(NPM):
 [express]

# Project Instillation Process:
- demo instructor

# Project Working Instruction:

### step-1:
- Create a new Express project.
- Set up a MongoDB database using Mongoose for storing product and order data.

### step-2:
#### Create the sketch of routes && routers:

- /api/products (POST)
- /api/products (GET)
- /api/products?searchTerm=iphone (GET)
 
 -&&

- /api/orders (POST)
- /api/orders (GET)
- /api/orders?email=level2@programming-hero.com (GET)

### step-3:
### Define data model with mongoose and typescript:
- create products Interface in typescript, mongoose Schema and mongoose model.

### step-4:
### Client Variant Request Handle:
- request: /api/products method:(POST).
- request: /api/products/:productId(GET).
- request: /api/products/?name=iPhone 13&price=800(GET)
- request: /api/products/:productId(PUT)
- request: /api/products/:productId(DELETE)


<!-- **bold text** -->
<!-- ***italic text*** -->




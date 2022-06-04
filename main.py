from fastapi import FastAPI
from associative_model import get_associative_data

#################################################################################

app = FastAPI()


###################################################################################

@app.get("/productassociations")
async def root():
    return get_associative_data('http://localhost:5020/api/v1/predictions')

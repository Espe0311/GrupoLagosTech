import requests
from django.conf import settings


def get_external_data(page=1, params=None):
    if params is None:
        params = {}

    response = requests.get(f"{settings.EXTERNAL_API_URL}&page={page}", params=params)
    response.raise_for_status()
    return response.json()

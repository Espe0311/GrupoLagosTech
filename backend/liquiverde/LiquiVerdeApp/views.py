from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services.external_api import get_external_data

# Create your views here.


class ExternalDataView(APIView):
    def get(self, request):
        data = get_external_data(params=request.query_params)
        return Response(data, status=status.HTTP_200_OK)

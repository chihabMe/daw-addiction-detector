from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Reviews
from .serializer import ReviewsSerlializer
from django.db.models import F

@api_view(['POST', 'GET'])
def reviews_list(request):
    reviews = Reviews.objects.all()
    serializer = ReviewsSerlializer(reviews, many=True)
    data = {
        'reviews': serializer.data
    }
    return Response(data)



@api_view([ 'GET'])
def average_rating(request):
    all_reviews = Reviews.objects.all()
    total_reviews = len(all_reviews)

    avg_rating = sum([F('rating') for review in all_reviews]) / total_reviews
    
    serializer = ReviewsSerlializer(all_reviews, many=True)  # Pass all reviews to the serializer
    data = {
        'average_rating': avg_rating,
        'reviews': serializer.data
    }
    return Respqzaonse(data)
